// Copyright (c) 2012-2015 fo-dicom contributors.
// Licensed under the Microsoft Public License (MS-PL).

using System;
using System.Collections.Generic;
using System.Drawing.Printing;
//using System.Drawing.Printing;
using System.Linq;
using System.Net;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading;
using System.Drawing;
using Dicom.Imaging;
using Dicom;
using Dicom.Printing;
using DicomPrint.Common;

namespace PrintSCP
{
    internal class PrintStatusEventArgs : EventArgs
    {
        public ushort EventTypeId { get; private set; }
        public string ExecutionStatusInfo { get; private set; }
        public string FilmSessionLabel { get; private set; }
        public string PrinterName { get; private set; }

        public PrintStatusEventArgs(
            ushort eventTypeId,
            string executionStatusInfo,
            string filmSessionLabel)
        {
            EventTypeId = eventTypeId;
            ExecutionStatusInfo = executionStatusInfo;
            FilmSessionLabel = filmSessionLabel;
        }
    }

    internal enum PrintStatus : ushort
    {
        Pending = 1,
        Printing = 2,
        Done = 3,
        Failure = 4
    }

    internal class PrintJob
    {
        #region Properties and Attributes
        
        public readonly DicomUID SOPClassUID = DicomUID.PrintJobSOPClass;

        private string _jobFolder;
        private readonly object _synchRoot = new object();

        public DicomUID SOPInstanceUID 
        { 
            get; 
            private set; 
        }

        public bool IsFailed
        {
            get
            {
                return Status == PrintStatus.Failure;
            }
        }

        public string ErrorMessage { get; set; }

        public PrintStatus Status { get; set; }

        /// <summary>
        /// Additional information about Execution Status (2100,0020).
        /// </summary>
        public string ExecutionStatusInfo
        {
            get;
            set;
        }

        internal string PrintJobFolder
        {
            get
            {
                // DICOM文件路径存储规则，如:D:\DICOMPIC\yyyy\MM\dd\IP\AE\打印任务UID.
                // 例子：D:\DICOMPIC\2017\07\15\192.168.0.88\PR_AW\UID\
                if (string.IsNullOrEmpty(_jobFolder))
                {
                    DateTime dt = DateTime.Now;
                    string strDate = string.Format(@"{0}\{1:D2}\{2:D2}", dt.Year, dt.Month, dt.Day);
                    _jobFolder = Path.Combine(PrintSCPService.DicomPath, strDate, CallingIP.ToString(), CallingAETitle, SOPInstanceUID.UID);

                    if (Directory.Exists(_jobFolder))
                    {
                        try
                        {
                            Directory.Delete(_jobFolder, true);
                        }
                        catch { }
                    }

                    if (!Directory.Exists(_jobFolder))
                    {
                        Directory.CreateDirectory(_jobFolder);
                    }
                }

                return _jobFolder;
            }
        }

        public string FilmSessionLabel { get; private set; }

        public string CallingAETitle
        {
            get;
            set;
        }

        public string CalledAETitle { get;set;}

        public string CallingIP { get; set; }

        public event EventHandler<PrintStatusEventArgs> StatusUpdate;

        #endregion

        #region Constructors

        /// <summary>
        /// Construct new print job using specified SOP instance UID. If passed SOP instance UID is missing, new UID will
        /// be generated
        /// </summary>
        /// <param name="sopInstance">New print job SOP instance uID</param>
        public PrintJob(DicomUID sopInstance, string callingIP, string callingAETitle, string calledAETitle)
            : base()
        {
            if (sopInstance == null || sopInstance.UID == string.Empty)
            {
                SOPInstanceUID = DicomUID.Generate();
            }
            else
            {
                SOPInstanceUID = sopInstance;
            }

            Status = PrintStatus.Pending;

            CallingAETitle = callingAETitle;
            CalledAETitle = calledAETitle;
            CallingIP = callingIP;
        }

        #endregion

        #region Printing Methods

        public void Print(IList<FilmBox> filmBoxList)
        {
            try
            {
                Status = PrintStatus.Pending;

                OnStatusUpdate("Preparing films for printing");

                var printJobDir = new System.IO.DirectoryInfo(PrintJobFolder);
                if (!printJobDir.Exists)
                {
                    printJobDir.Create();
                }

                if (filmBoxList.Count > 0)
                {
                    FilmSession filmSession = filmBoxList[0].FilmSession;
                    DicomFile dcmFile = new DicomFile(filmSession);

                    dcmFile.Save(string.Format(@"{0}\FilmSession.dcm", printJobDir));
                }

                for (int i = 0; i < filmBoxList.Count; i++)
                {
                    var filmBox = filmBoxList[i];
                    var filmBoxDir = printJobDir.CreateSubdirectory(string.Format("F{0:000000}", i + 1));

                    filmBox.Save(filmBoxDir.FullName);

                    //generate jpg image
                    var combineJpgFile = string.Format(@"{0}\View.jpg", filmBoxDir.FullName);

                    CombineImages(filmBox, combineJpgFile);
                }

                FilmSessionLabel = filmBoxList.First().FilmSession.FilmSessionLabel;
                Status = PrintStatus.Done;
            }
            catch (Exception ex)
            {
                Status = PrintStatus.Failure;
                ErrorMessage = ex.Message;

                OnStatusUpdate("Print failed");
                DeleteJobFolder();
            }
        }

        private void CombineImages(FilmBox filmBox, string combinedJpgFile)
        {
            try
            {
                int row = 0, column = 0;
                string strDisplayformt = filmBox.ImageDisplayFormat;

                string[] dispalyformatArray = Regex.Split(strDisplayformt, @"\\");
                if (dispalyformatArray.Length > 1)
                {
                    string[] displayformatValue = Regex.Split(dispalyformatArray[1], @",");
                    if (displayformatValue[0] != null && displayformatValue[1] != null)
                    {
                        column = Convert.ToInt32(displayformatValue[0]);
                        row = Convert.ToInt32(displayformatValue[1]);
                    }
                }
                else
                {
                    throw new Exception("GetDisplayFormat failed with DiaplayFormat " + strDisplayformt);
                }

                int imageWidth = 0;
                int imageHeight = 0;
                List<Bitmap> images = new List<Bitmap>();
                foreach (var item in filmBox.BasicImageBoxes)
                {
                    if (item != null && item.ImageSequence != null && item.ImageSequence.Contains(DicomTag.PixelData))
                    {
                        var image = new DicomImage(item.ImageSequence);      
                        Bitmap bitmap = image.RenderImage().As<Bitmap>();

                        imageWidth = bitmap.Width;
                        imageHeight = bitmap.Height;

                        images.Add(bitmap);
                    }
                }

                Bitmap combinedImage = new Bitmap(column * imageWidth, row * imageHeight);
                Graphics g = Graphics.FromImage(combinedImage);
                g.Clear(SystemColors.AppWorkspace);

                int imageIndex = 0;
                for (int rowIndex = 0; rowIndex < row; rowIndex++)
                {
                    for (int columnIndex = 0; columnIndex < column; columnIndex++)
                    {
                        if(imageIndex < images.Count)
                        {
                            Bitmap bmp = images[imageIndex];
                            g.DrawImage(bmp, new Point(columnIndex * imageWidth, rowIndex * imageHeight));
                            bmp.Dispose();
                        }
                        else
                        {
                            Bitmap blackBmp = new Bitmap(imageWidth, imageHeight);
                            Graphics blackGraphic = Graphics.FromImage(blackBmp);
                            blackGraphic.FillRectangle(Brushes.Black, new Rectangle(0, 0, imageWidth, imageHeight));
                            g.DrawImage(blackBmp, new Point(columnIndex * imageWidth, rowIndex * imageHeight));
                            blackBmp.Dispose();
                        }

                        imageIndex++;
                    }
                }
                g.Dispose();
                combinedImage.Save(combinedJpgFile, System.Drawing.Imaging.ImageFormat.Jpeg);
                combinedImage.Dispose();
            }
            catch (Exception ex)
            {
                LogManager.Instance.Error("Exception When Combine JPEG Image: {0}", ex.Message);
                throw ex;
            }
        }

        private void DeleteJobFolder()
        {
            if (Directory.Exists(PrintJobFolder))
            {
                try
                {
                    Directory.Delete(PrintJobFolder, true);
                }
                catch { }
            }
        }

        protected virtual void OnStatusUpdate(string info)
        {
            ExecutionStatusInfo = info;

            if (Status != PrintStatus.Failure)
            {
                LogManager.Instance.Info("Print Job {0} Status {1}: {2}", SOPInstanceUID.UID.Split('.').Last(), Status, info);
            }
            else
            {
                LogManager.Instance.Error("Print Job {0} Status {1}: {2}", SOPInstanceUID.UID.Split('.').Last(), Status, info);
            }

            if (StatusUpdate != null)
            {
                var args = new PrintStatusEventArgs((ushort)Status, info, FilmSessionLabel);
                StatusUpdate(this, args);
            }
        }

        #endregion
    }
}
