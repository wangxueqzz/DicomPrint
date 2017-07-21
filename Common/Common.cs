using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DicomPrint
{
    public class EchoInfo : EventArgs
    {
        public string CallingAETitle { get; set; }

        public string CallingIP { get; set; }

    }

    public delegate void EchoEventHandler(EchoInfo arg);

    public class PrintTaskInfo : EventArgs
    {
        public string CallingAETitle { get; set; }

        public string CallingIP { get; set; }

        public string FilmSize { get; set; }

        /// <summary>
        /// The folder contains the print tasks' dicom files/combined jpg, etc.
        /// </summary>
        public string TaskPath { get; set; }

        public bool HasError { get; set; }

        public string ErrorMessage { get; set; }
    }

    public delegate void PrintTaskEventHandler(PrintTaskInfo arg);
}
