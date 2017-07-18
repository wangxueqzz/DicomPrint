using Dicom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public static class Extensions
    {
        public static DicomDataset AddOrUpdate(this DicomDataset dataSet, DicomTag tag, string value)
        {
            if (dataSet.Contains(tag))
            {
                dataSet.Remove(tag);
            }

            dataSet.Add(tag, value);

            return dataSet;
        }
    }
}
