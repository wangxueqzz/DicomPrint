using Dicom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintSCU
{
    public static class Extensions
    {
        public static DicomDataset AddOrUpdate(this DicomDataset dataSet, DicomTag tag, string value)
        {
            dataSet.Add<string>(tag, value);

            return dataSet;
        }
    }
}
