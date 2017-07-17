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

namespace PrintSCP
{
    public class PrintStatusEventArgs : EventArgs
    {
        public ushort EventTypeId { get; private set; }
        public string ExecutionStatusInfo { get; private set; }
        public string FilmSessionLabel { get; private set; }
        public string PrinterName { get; private set; }

        public PrintStatusEventArgs(
            ushort eventTypeId,
            string executionStatusInfo,
            string filmSessionLabel,
            string printerName)
        {
            EventTypeId = eventTypeId;
            ExecutionStatusInfo = executionStatusInfo;
            FilmSessionLabel = filmSessionLabel;
            PrinterName = printerName;
        }
    }

    internal enum PrintStatus : ushort
    {
        Pending = 1,
        Printing = 2,
        Done = 3,
        Failure = 4
    }

    internal class PrintJob : DicomDataset
    {
        #region Properties and Attributes
        
        public readonly DicomUID SOPClassUID = DicomUID.PrintJobSOPClass;

        private string _jobFolder;
        private readonly object _synchRoot = new object();

        public bool SendNEventReport { get; set; }

        private IList<string> FilmBoxFolderList { get; set; }

        public Printer Printer { get; private set; }

        private PrintStatus Status { get; set; }

        private string PrintJobFolder
        {
            get
            {
                // DICOM文件路径存储规则，如:D:\DICOMPIC\yyyy\MM\dd\IP\AE\打印任务UID.
                // 例子：D:\DICOMPIC\2017\07\15\192.168.0.88\PR_AW\UID\
                if (string.IsNullOrEmpty(_jobFolder))
                {
                    DateTime dt = DateTime.Now;
                    string strDate = string.Format(@"{0}\{1}\{2}", dt.Year, dt.Month, dt.Day);
                    _jobFolder = Path.Combine(PrintSCPService.DicomPath, strDate, CallingIPAddress.ToString(), CallingAETitle, SOPInstanceUID.UID);

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

        public Exception Error { get; private set; }

        public string FilmSessionLabel { get; private set; }

        /// <summary>
        /// Print job SOP instance UID
        /// </summary>
        public DicomUID SOPInstanceUID { get; private set; }

        /// <summary>
        /// Execution status of print job.
        /// </summary>
        /// <remarks>
        /// Enumerated Values:
        /// <list type="bullet">
        /// <item><description>PENDING</description></item>
        /// <item><description>PRINTING</description></item>
        /// <item><description>DONE</description></item>
        /// <item><description>FAILURE</description></item>
        /// </list>
        /// </remarks> 
        public string ExecutionStatus
        {
            get
            {
                return Get(DicomTag.ExecutionStatus, string.Empty);
            }
            set
            {
                Add(DicomTag.ExecutionStatus, value);
            }
        }

        /// <summary>
        /// Additional information about Execution Status (2100,0020).
        /// </summary>
        public string ExecutionStatusInfo
        {
            get
            {
                return Get(DicomTag.ExecutionStatusInfo, string.Empty);
            }
            set
            {
                Add(DicomTag.ExecutionStatusInfo, value);
            }
        }

        /// <summary>
        /// Specifies the priority of the print job.
        /// </summary>
        /// <remarks>
        /// Enumerated values:
        /// <list type="bullet">
        ///     <item><description>HIGH</description></item>
        ///     <item><description>MED</description></item>
        ///     <item><description>LOW</description></item>
        /// </list>
        /// </remarks>
        public string PrintPriority
        {
            get
            {
                return Get(DicomTag.PrintPriority, "MED");
            }
            set
            {
                Add(DicomTag.PrintPriority, value);
            }
        }

        /// <summary>
        /// Date/Time of print job creation.
        /// </summary>
        public DateTime CreationDateTime
        {
            get
            {
                return this.GetDateTime(DicomTag.CreationDate, DicomTag.CreationTime);
            }
            set
            {
                Add(DicomTag.CreationDate, value);
                Add(DicomTag.CreationTime, value);
            }
        }

        /// <summary>
        /// User defined name identifying the printer.
        /// </summary>
        public string PrinterName
        {
            get
            {
                return Get(DicomTag.PrinterName, string.Empty);
            }
            set
            {
                Add(DicomTag.PrinterName, value);
            }
        }

        /// <summary>
        /// DICOM Application Entity Title that issued the print operation.
        /// </summary>
        public string CallingAETitle
        {
            get
            {
                return Get(DicomTag.Originator, string.Empty);
            }
            set
            {
                Add(DicomTag.Originator, value);
            }
        }

        public string CalledAETitle { get;set;}

        public IPAddress CallingIPAddress { get; set; }

        private Dicom.Log.Logger Log { get; set; }

        public event EventHandler<PrintStatusEventArgs> StatusUpdate;

        #endregion

        #region Constructors

        /// <summary>
        /// Construct new print job using specified SOP instance UID. If passed SOP instance UID is missing, new UID will
        /// be generated
        /// </summary>
        /// <param name="sopInstance">New print job SOP instance uID</param>
        public PrintJob(DicomUID sopInstance, Printer printer, IPAddress callingIPAddress, string callingAETitle, string calledAETitle, Dicom.Log.Logger log)
            : base()
        {
            if (printer == null)
            {
                throw new ArgumentNullException("printer");
            }

            Log = log;

            if (sopInstance == null || sopInstance.UID == string.Empty)
            {
                SOPInstanceUID = DicomUID.Generate();
            }
            else
            {
                SOPInstanceUID = sopInstance;
            }

            this.Add(DicomTag.SOPClassUID, SOPClassUID);
            this.Add(DicomTag.SOPInstanceUID, SOPInstanceUID);

            Printer = printer;
            Status = PrintStatus.Pending;
            PrinterName = Printer.PrinterAet;

            CallingAETitle = callingAETitle;
            CalledAETitle = calledAETitle;
            CallingIPAddress = callingIPAddress;

            if (CreationDateTime == DateTime.MinValue)
            {
                CreationDateTime = DateTime.Now;
            }

            FilmBoxFolderList = new List<string>();
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

                DicomFile dcmfile;
                for (int i = 0; i < filmBoxList.Count; i++)
                {
                    var filmBox = filmBoxList[i];
                    var filmBoxDir = printJobDir.CreateSubdirectory(string.Format("F{0:000000}", i + 1));

                    dcmfile = new DicomFile(filmBox.FilmSession);
                    dcmfile.Save(string.Format(@"{0}\FilmSession.dcm", filmBoxDir.FullName));
                    filmBox.Save(filmBoxDir.FullName);

                    //generate jpg image
                    var combineJpgFile = string.Format(@"{0}\View.jpg", filmBoxDir.FullName);

                    CombineImages(filmBox, combineJpgFile);
                }

                FilmSessionLabel = filmBoxList.First().FilmSession.FilmSessionLabel;
            }
            catch (Exception ex)
            {
                Error = ex;
                Status = PrintStatus.Failure;
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
                if (dispalyformatArray.Length > 2)
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
                        Bitmap bitmap = image.RenderImage().AsBitmap();

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
                Log.Error("Exception When Combine JPEG Image: {@error}", ex);
            }
        }

        private void DeleteJobFolder()
        {
            var folderInfo = new System.IO.DirectoryInfo(PrintJobFolder);
            if (folderInfo.Exists)
            {
                try
                {
                    folderInfo.Delete(true);
                }
                catch { }
            }
        }

        #endregion

        #region Notification Methods

        protected virtual void OnStatusUpdate(string info)
        {
            ExecutionStatus = Status.ToString();
            ExecutionStatusInfo = info;

            if (Status != PrintStatus.Failure)
            {
                Log.Info("Print Job {0} Status {1}: {2}", SOPInstanceUID.UID.Split('.').Last(), Status, info);
            }
            else
            {
                Log.Error("Print Job {0} Status {1}: {2}", SOPInstanceUID.UID.Split('.').Last(), Status, info);
            }

            if (StatusUpdate != null)
            {
                var args = new PrintStatusEventArgs((ushort)Status, info, FilmSessionLabel, PrinterName);
                StatusUpdate(this, args);
            }
        }

        #endregion
    }
}
