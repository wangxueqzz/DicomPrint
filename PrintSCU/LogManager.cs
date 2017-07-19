using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace PrintSCU
{
    internal delegate void LogEventHanlder(string msg);

    public class LogManager
    {
        internal event LogEventHanlder LogEvent;

        public static readonly LogManager Instance = new LogManager();

        private string _strLogFilePath = string.Empty;
        private object _objMutext = new object();

        public string LogPath
        {
            get
            {
                return _strLogFilePath;
            }
            set
            {
                try
                {
                    if (!Directory.Exists(value))
                    {
                        Directory.CreateDirectory(value);
                    }

                    _strLogFilePath = value;
                }
                catch
                {
                }
            }
        }

        private LogManager()
        {
            if (string.IsNullOrEmpty(_strLogFilePath))
            {
                _strLogFilePath = "c:\\PrintSCULog";
            }

            if (!Directory.Exists(_strLogFilePath))
            {
                Directory.CreateDirectory(_strLogFilePath);
            }
        }

        public void SetLogFolder(string folder)
        {
            try
            {
                if(!string.IsNullOrEmpty(folder))
                {
                    if (!Directory.Exists(folder))
                    {
                        Directory.CreateDirectory(folder);
                    }

                    _strLogFilePath = folder;
                }
            }
            catch
            {
            }
        }

        /// <summary>
        /// Write msg to log different log file of different users
        /// </summary>
        /// <param name="strMsg"></param>
        public void Log(string strMsg, params object[] values)
        {
            if (values.Length > 0)
            {
                strMsg = string.Format(strMsg, values);
            }

            //log into one log file
            LogIntoOneLogFile(strMsg);
        }

        public void Info(string strMsg, params object[] values)
        {
            Log(strMsg, values);
        }

        public void Warn(string strMsg, params object[] values)
        {
            Log(strMsg, values);
        }

        public void Error(string strMsg, params object[] values)
        {
            Log(strMsg, values);
        }

        private void LogIntoOneLogFile(string strMsg)
        {
            lock (_objMutext)
            {
                try
                {
                    //we will keep a log file each day, and named the log file by date, e.g. 2009_7_14.txt
                    DateTime dateNow = DateTime.Now;
                    string strFileName = string.Format("{0:D4}_{1:D2}_{2:D2}.txt", dateNow.Year, dateNow.Month, dateNow.Day);
                    string strLogFile = _strLogFilePath + "\\" + strFileName;

                    strMsg = DateTime.Now.ToLongTimeString() + ": " + strMsg;

                    StreamWriter sw = new StreamWriter(strLogFile, true);
                    sw.WriteLine(strMsg);
                    sw.Close();

                    if (LogEvent != null)
                    {
                        LogEvent(strMsg);
                    }

                    //temply output the message to console
                    Console.WriteLine(strMsg);
                }
                catch { }
            }
        }
    }
}
