using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DicomPrint.Common;
using System.IO;
using Dicom.Printing;

namespace PrintSCU
{
    public class PrintSCUService
    {
        public static string SendPrintTask(string callingAE, string calledAE, string calledIP, int calledPort, string taskPath)
        {
            string strErr = string.Empty;

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
                

            }
            catch(Exception e)
            {
                strErr = e.Message;
            }

            return strErr;
        }
    }
}
