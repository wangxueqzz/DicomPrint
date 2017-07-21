using Dicom;
using Dicom.IO.Buffer;
using Dicom.StructuredReport;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DicomPrint
{
    public static class Extensions
    {
        public static DicomDataset AddOrUpdate(this DicomDataset dataSet, DicomTag tag, string value)
        {
            AddTagValue<string>(dataSet, tag, value);

            return dataSet;
        }

        private static DicomDataset AddTagValue<T>(DicomDataset dataset, DicomTag tag, params T[] values)
        {
            var entry = DicomDictionary.Default[tag];
            if (entry == null)
                throw new DicomDataException(
                    "Tag {0} not found in DICOM dictionary. Only dictionary tags may be added implicitly to the dataset.",
                    tag);

            DicomVR vr = null;
            if (values != null) vr = entry.ValueRepresentations.FirstOrDefault(x => x.ValueType == typeof(T));
            if (vr == null) vr = entry.ValueRepresentations.First();

            if (vr == DicomVR.AE)
            {
                if (values == null) return dataset.Add(new DicomApplicationEntity(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomApplicationEntity(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.AS)
            {
                if (values == null) return dataset.Add(new DicomAgeString(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomAgeString(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.AT)
            {
                if (values == null) return dataset.Add(new DicomAttributeTag(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(DicomTag)) return dataset.Add(new DicomAttributeTag(tag, values.Cast<DicomTag>().ToArray()));
            }

            if (vr == DicomVR.CS)
            {
                if (values == null) return dataset.Add(new DicomCodeString(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomCodeString(tag, values.Cast<string>().ToArray()));
                //if (typeof(T).GetTypeInfo().IsEnum) return dataset.Add(new DicomCodeString(tag, values.Select(x => x.ToString()).ToArray()));
            }

            if (vr == DicomVR.DA)
            {
                if (values == null) return dataset.Add(new DicomDate(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(DateTime)) return dataset.Add(new DicomDate(tag, values.Cast<DateTime>().ToArray()));
                if (typeof(T) == typeof(DicomDateRange))
                    return dataset.Add(new DicomDate(tag, values.Cast<DicomDateRange>().FirstOrDefault() ?? new DicomDateRange()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomDate(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.DS)
            {
                if (values == null) return dataset.Add(new DicomDecimalString(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(decimal)) return dataset.Add(new DicomDecimalString(tag, values.Cast<decimal>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomDecimalString(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.DT)
            {
                if (values == null) return dataset.Add(new DicomDateTime(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(DateTime)) return dataset.Add(new DicomDateTime(tag, values.Cast<DateTime>().ToArray()));
                if (typeof(T) == typeof(DicomDateRange))
                    return
                        dataset.Add(
                            new DicomDateTime(
                                tag,
                                values.Cast<DicomDateRange>().FirstOrDefault() ?? new DicomDateRange()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomDateTime(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.FD)
            {
                if (values == null) return dataset.Add(new DicomFloatingPointDouble(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(double)) return dataset.Add(new DicomFloatingPointDouble(tag, values.Cast<double>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomFloatingPointDouble(tag, double.Parse(values.First() as string)));
            }

            if (vr == DicomVR.FL)
            {
                if (values == null) return dataset.Add(new DicomFloatingPointSingle(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(float)) return dataset.Add(new DicomFloatingPointSingle(tag, values.Cast<float>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomFloatingPointSingle(tag, float.Parse(values.First() as string)));
            }

            if (vr == DicomVR.IS)
            {
                if (values == null) return dataset.Add(new DicomIntegerString(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(int)) return dataset.Add(new DicomIntegerString(tag, values.Cast<int>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomIntegerString(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.LO)
            {
                if (values == null) return dataset.Add(new DicomLongString(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomLongString(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.LT)
            {
                if (values == null) return dataset.Add(new DicomLongText(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomLongText(tag, values.Cast<string>().First()));
            }

            if (vr == DicomVR.OB)
            {
                if (values == null) return dataset.Add(new DicomOtherByte(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(byte)) return dataset.Add(new DicomOtherByte(tag, values.Cast<byte>().ToArray()));
            }

            if (vr == DicomVR.OD)
            {
                if (values == null) return dataset.Add(new DicomOtherDouble(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(double)) return dataset.Add(new DicomOtherDouble(tag, values.Cast<double>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomOtherDouble(tag, double.Parse(values.First() as string)));
            }

            if (vr == DicomVR.OF)
            {
                if (values == null) return dataset.Add(new DicomOtherFloat(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(float)) return dataset.Add(new DicomOtherFloat(tag, values.Cast<float>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomOtherFloat(tag, float.Parse(values.First() as string)));
            }

            if (vr == DicomVR.OW)
            {
                if (values == null) return dataset.Add(new DicomOtherWord(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(ushort)) return dataset.Add(new DicomOtherWord(tag, values.Cast<ushort>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomOtherWord(tag, ushort.Parse(values.First() as string)));
            }

            if (vr == DicomVR.PN)
            {
                if (values == null) return dataset.Add(new DicomPersonName(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomPersonName(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.SH)
            {
                if (values == null) return dataset.Add(new DicomShortString(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomShortString(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.SL)
            {
                if (values == null) return dataset.Add(new DicomSignedLong(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(int)) return dataset.Add(new DicomSignedLong(tag, values.Cast<int>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomSignedLong(tag, int.Parse(values.First() as string)));
            }

            if (vr == DicomVR.SQ)
            {
                if (values == null) return dataset.Add(new DicomSequence(tag));
                if (typeof(T) == typeof(DicomContentItem)) return dataset.Add(new DicomSequence(tag, values.Cast<DicomContentItem>().Select(x => x.Dataset).ToArray()));
                if (typeof(T) == typeof(DicomDataset) || typeof(T) == typeof(DicomCodeItem)
                    || typeof(T) == typeof(DicomMeasuredValue) || typeof(T) == typeof(DicomReferencedSOP)) return dataset.Add(new DicomSequence(tag, values.Cast<DicomDataset>().ToArray()));
            }

            if (vr == DicomVR.SS)
            {
                if (values == null) return dataset.Add(new DicomSignedShort(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(short)) return dataset.Add(new DicomSignedShort(tag, values.Cast<short>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomSignedShort(tag, short.Parse(values.First() as string)));
            }

            if (vr == DicomVR.ST)
            {
                if (values == null) return dataset.Add(new DicomShortText(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomShortText(tag, values.Cast<string>().First()));
            }

            if (vr == DicomVR.TM)
            {
                if (values == null) return dataset.Add(new DicomTime(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(DateTime)) return dataset.Add(new DicomTime(tag, values.Cast<DateTime>().ToArray()));
                if (typeof(T) == typeof(DicomDateRange))
                    return
                        dataset.Add(new DicomTime(tag, values.Cast<DicomDateRange>().FirstOrDefault() ?? new DicomDateRange()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomTime(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.UC)
            {
                if (values == null) return dataset.Add(new DicomUnlimitedCharacters(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomUnlimitedCharacters(tag, values.Cast<string>().ToArray()));
            }

            if (vr == DicomVR.UI)
            {
                if (values == null) return dataset.Add(new DicomUniqueIdentifier(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomUniqueIdentifier(tag, values.Cast<string>().ToArray()));
                if (typeof(T) == typeof(DicomUID)) return dataset.Add(new DicomUniqueIdentifier(tag, values.Cast<DicomUID>().ToArray()));
                if (typeof(T) == typeof(DicomTransferSyntax)) return dataset.Add(new DicomUniqueIdentifier(tag, values.Cast<DicomTransferSyntax>().ToArray()));
            }

            if (vr == DicomVR.UL)
            {
                if (values == null) return dataset.Add(new DicomUnsignedLong(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(uint)) return dataset.Add(new DicomUnsignedLong(tag, values.Cast<uint>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomUnsignedLong(tag, uint.Parse(values.First() as string)));
            }

            if (vr == DicomVR.UN)
            {
                if (values == null) return dataset.Add(new DicomUnknown(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(byte)) return dataset.Add(new DicomUnknown(tag, values.Cast<byte>().ToArray()));
                if (typeof(T) == typeof(string))
                {
                    string strVal = values.First() as string;
                    byte[] bytes = DicomEncoding.Default.GetBytes(strVal);

                    return dataset.Add(new DicomUnknown(tag, bytes));
                }
            }

            if (vr == DicomVR.UR)
            {
                if (values == null) return dataset.Add(new DicomUniversalResource(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomUniversalResource(tag, values.Cast<string>().First()));
            }

            if (vr == DicomVR.US)
            {
                if (values == null) return dataset.Add(new DicomUnsignedShort(tag, EmptyBuffer.Value));
                if (typeof(T) == typeof(ushort)) return dataset.Add(new DicomUnsignedShort(tag, values.Cast<ushort>().ToArray()));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomUnsignedShort(tag, ushort.Parse(values.First() as string)));
            }

            if (vr == DicomVR.UT)
            {
                if (values == null) return dataset.Add(new DicomUnlimitedText(tag, DicomEncoding.Default, EmptyBuffer.Value));
                if (typeof(T) == typeof(string)) return dataset.Add(new DicomUnlimitedText(tag, values.Cast<string>().First()));
            }

            throw new InvalidOperationException(
                String.Format(
                    "Unable to create DICOM element of type {0} with values of type {1}",
                    vr.Code,
                    typeof(T).ToString()));
        }
    }
}
