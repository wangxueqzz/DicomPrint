using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Dicom.Printing;
using Dicom.Network;
using Dicom;

namespace DicomPrint.PrintSCU
{
    public class PrintSCUService
    {
        public static string LogPath
        {
            get { return LogManager.Instance.LogPath; }
            set { LogManager.Instance.LogPath = value; }
        }

        public static event PrintTaskEventHandler PrintTaskEvent;

        public static string SendPrintTask(string callingAE, string calledAE, string calledIP, int calledPort, string taskPath)
        {
            PrintTaskInfo task = new PrintTaskInfo() { CallingAETitle = callingAE, TaskPath = taskPath };

            string strErr = string.Empty;
            LogManager.Instance.Log("Start to send print task: " + taskPath);
            try
            {
                DirectoryInfo dirTask = new DirectoryInfo(taskPath);
                if (!dirTask.Exists)
                {
                    throw new Exception("invalid task path");
                }

                string filmSessionFile = Path.Combine(taskPath, "FilmSession.dcm");
                if(!File.Exists(filmSessionFile))
                {
                    throw new Exception("can't find film session file");
                }

                //load filmSession from dcmFile
                FilmSession filmSession = FilmSession.Load(filmSessionFile);

                //load filmBox from dcmFiles
                var subDirs = dirTask.EnumerateDirectories();
                foreach (DirectoryInfo dirFilmBox in subDirs)
                {
                    FilmBox filmBox = FilmBox.Load(filmSession, dirFilmBox.FullName);
                    filmSession.BasicFilmBoxes.Add(filmBox);
                }

                var dicomClient = new DicomClient();

                var filmSessionRequest = new DicomNCreateRequest(filmSession.SOPClassUID, filmSession.SOPInstanceUID);
                filmSessionRequest.Dataset = filmSession;

                dicomClient.AddRequest(filmSessionRequest);

                foreach (var filmbox in filmSession.BasicFilmBoxes)
                {
                    var imageBoxRequests = new List<DicomNSetRequest>();

                    var filmBoxRequest = new DicomNCreateRequest(FilmBox.SOPClassUID, filmbox.SOPInstanceUID);
                    filmBoxRequest.Dataset = filmbox;

                    filmBoxRequest.OnResponseReceived = (request, response) =>
                    {
                        if (response.HasDataset)
                        {
                            var seq = response.Dataset.Get<DicomSequence>(DicomTag.ReferencedImageBoxSequence);
                            for (int i = 0; i < seq.Items.Count; i++)
                            {
                                var req = imageBoxRequests[i];
                                var imageBox = req.Dataset;
                                var sopInstanceUid = seq.Items[i].Get<string>(DicomTag.ReferencedSOPInstanceUID);
                                imageBox.AddOrUpdate(DicomTag.SOPInstanceUID, sopInstanceUid);
                                req.Command.AddOrUpdate(DicomTag.RequestedSOPInstanceUID, sopInstanceUid);
                            }
                        }
                    };
                    dicomClient.AddRequest(filmBoxRequest);

                    foreach (var image in filmbox.BasicImageBoxes)
                    {
                        var req = new DicomNSetRequest(image.SOPClassUID, image.SOPInstanceUID) { Dataset = image };

                        imageBoxRequests.Add(req);
                        dicomClient.AddRequest(req);
                    }
                }

                dicomClient.AddRequest(new DicomNActionRequest(filmSession.SOPClassUID, filmSession.SOPInstanceUID, 0x0001));

                dicomClient.Send(calledIP, calledPort, false, callingAE, calledAE);

                task.HasError = false;
                if (PrintTaskEvent != null)
                {
                    PrintTaskEvent(task);
                }
            }
            catch(Exception e)
            {
                strErr = e.Message;
                LogManager.Instance.Log("Send task failed due to " + e.Message);

                task.HasError = true;
                task.ErrorMessage = e.Message;
                if (PrintTaskEvent != null)
                {
                    PrintTaskEvent(task);
                }
            }

            return strErr;
        }
    }
}
