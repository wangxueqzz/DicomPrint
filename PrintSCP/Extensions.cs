using Dicom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintSCP
{
    public static class Extensions
    {
        public static DicomDataset AddOrUpdate(this DicomDataset dataSet, DicomTag tag, string value)
        {


            var entry = DicomDictionary.Default[tag];
            if (entry == null)
                throw new DicomDataException(
                    "Tag {0} not found in DICOM dictionary. Only dictionary tags may be added implicitly to the dataset.",
                    tag);

            DicomVR vr = entry.ValueRepresentations.First();
            DicomItem newItem;

            if (vr == DicomVR.AE)
            {
                newItem = new DicomApplicationEntity(tag, value);
            }

            if (vr == DicomVR.AS)
            {
                newItem = new DicomAgeString(tag, value);
            }

            if (vr == DicomVR.AT)
            {
                //newItem = new DicomAttributeTag(tag, value);
                //if (values == null) return Add(new DicomAttributeTag(tag, EmptyBuffer.Value));
                //if (typeof(T) == typeof(DicomTag)) return Add(new DicomAttributeTag(tag, values.Cast<DicomTag>().ToArray()));
            }

            if (vr == DicomVR.CS)
            {
                newItem = new DicomCodeString(tag, value);
            }

            if (vr == DicomVR.DA)
            {
                newItem = new DicomDate(tag, value);
            }

            if (vr == DicomVR.DS)
            {
                newItem = new DicomDecimalString(tag, value);
            }

            if (vr == DicomVR.DT)
            {
                newItem = new DicomDateTime(tag, value);
            }

            if (vr == DicomVR.FD)
            {
                newItem = new DicomFloatingPointDouble(tag, double.Parse(value));
            }

            if (vr == DicomVR.FL)
            {
                newItem = new DicomFloatingPointSingle(tag, float.Parse(value));
            }

            if (vr == DicomVR.IS)
            {
                if (values == null) return Add(new DicomIntegerString(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(int)) return Add(new DicomIntegerString(tag, values.Cast<int>().ToArray()));
                if (typeof(T) == typeof(string)) return Add(new DicomIntegerString(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.LO)
            {
                if (values == null) return Add(new DicomLongString(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return Add(new DicomLongString(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.LT)
            {
                if (values == null) return Add(new DicomLongText(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return Add(new DicomLongText(tag, values.Cast<string>().First()));
            }

            if (vr == DicomVR.OB)
            {
                if (values == null) return Add(new DicomOtherByte(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(byte)) return Add(new DicomOtherByte(tag, values.Cast<byte>().ToArray()));
            }

            if (vr == DicomVR.OD)
            {
                if (values == null) return Add(new DicomOtherDouble(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(double)) return Add(new DicomOtherDouble(tag, values.Cast<double>().ToArray()));
            }

            if (vr == DicomVR.OF)
            {
                if (values == null) return Add(new DicomOtherFloat(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(float)) return Add(new DicomOtherFloat(tag, values.Cast<float>().ToArray()));
            }

            if (vr == DicomVR.OW)
            {
                if (values == null) return Add(new DicomOtherWord(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(ushort)) return Add(new DicomOtherWord(tag, values.Cast<ushort>().ToArray()));
            }

            if (vr == DicomVR.PN)
            {
                if (values == null) return Add(new DicomPersonName(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return Add(new DicomPersonName(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.SH)
            {
                if (values == null) return Add(new DicomShortString(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return Add(new DicomShortString(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.SL)
            {
                if (values == null) return Add(new DicomSignedLong(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(int)) return Add(new DicomSignedLong(tag, values.Cast<int>().ToArray()));
            }

            if (vr == DicomVR.SQ)
            {
                if (values == null) return Add(new DicomSequence(tag));
                if (typeof(T) == typeof(DicomContentItem)) return Add(new DicomSequence(tag, values.Cast<DicomContentItem>().Select(x => x.Dataset).ToArray()));
                if (typeof(T) == typeof(DicomDataset) || typeof(T) == typeof(DicomCodeItem)
                    || typeof(T) == typeof(DicomMeasuredValue) || typeof(T) == typeof(DicomReferencedSOP)) return Add(new DicomSequence(tag, values.Cast<DicomDataset>().ToArray()));
            }

            if (vr == DicomVR.SS)
            {
                if (values == null) return Add(new DicomSignedShort(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(short)) return Add(new DicomSignedShort(tag, values.Cast<short>().ToArray()));
            }

            if (vr == DicomVR.ST)
            {
                if (values == null) return Add(new DicomShortText(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return Add(new DicomShortText(tag, values.Cast<string>().First()));
            }

            if (vr == DicomVR.TM)
            {
                if (values == null) return Add(new DicomTime(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(DateTime)) return Add(new DicomTime(tag, values.Cast<DateTime>().ToArray()));
                if (typeof(T) == typeof(DicomDateRange))
                    return
                        Add(new DicomTime(tag, values.Cast<DicomDateRange>().FirstOrDefault() ?? new DicomDateRange()));
                if (typeof(T) == typeof(string)) return Add(new DicomTime(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.UC)
            {
                if (values == null) return Add(new DicomUnlimitedCharacters(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return Add(new DicomUnlimitedCharacters(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.UI)
            {
                if (values == null) return Add(new DicomUniqueIdentifier(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return Add(new DicomUniqueIdentifier(tag, values.Cast<string>().ToArray()));
                if (typeof(T) == typeof(DicomUID)) return Add(new DicomUniqueIdentifier(tag, values.Cast<DicomUID>().ToArray()));
                if (typeof(T) == typeof(DicomTransferSyntax)) return Add(new DicomUniqueIdentifier(tag, values.Cast<DicomTransferSyntax>().ToArray()));
            }

            if (vr == DicomVR.UL)
            {
                if (values == null) return Add(new DicomUnsignedLong(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(uint)) return Add(new DicomUnsignedLong(tag, values.Cast<uint>().ToArray()));
            }

            if (vr == DicomVR.UN)
            {
                if (values == null) return Add(new DicomUnknown(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(byte)) return Add(new DicomUnknown(tag, values.Cast<byte>().ToArray()));
            }

            if (vr == DicomVR.UR)
            {
                if (values == null) return Add(new DicomUniversalResource(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return Add(new DicomUniversalResource(tag, values.Cast<string>().First()));
            }

            if (vr == DicomVR.US)
            {
                if (values == null) return Add(new DicomUnsignedShort(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(ushort)) return Add(new DicomUnsignedShort(tag, values.Cast<ushort>().ToArray()));
            }

            if (vr == DicomVR.UT)
            {
                if (values == null) return Add(new DicomUnlimitedText(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return Add(new DicomUnlimitedText(tag, values.Cast<string>().First()));
            }

            throw new InvalidOperationException(String.Format("Unable to create DICOM element of type {0} with value of type {1}",vr.Code,));

            if (dataSet.Contains(tag))
            {
                dataSet.Remove(tag);
            }
            dataSet.Add(newItem);

            return dataSet;
        }
    }
}
