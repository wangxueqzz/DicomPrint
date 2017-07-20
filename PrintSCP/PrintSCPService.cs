using Dicom;
using Dicom.Network;
using Dicom.Printing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintSCP
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

    public enum PrintSCPType
    {
        GrayScale = 1,
        Colours,
        GrayScaleColours
    }

    public class ReplaceTag
    {
        public ReplaceTag(ushort group, ushort element, string value)
        {
            Group = group;
            Element = element;
            Value = value;
        }

        public ushort Group
        {
            get;
            set;
        }

        public ushort Element
        {
            get;
            set;
        }

        public string Value
        {
            get;
            set;
        }
    }

    public class PrintSCPService : DicomService, IDicomServiceProvider, IDicomNServiceProvider, IDicomCEchoProvider
    {
        #region static Fields/Properties

        private static PrintSCPType _scpType = PrintSCPType.GrayScale;
        private static int _port = 8111;
        private static string _aeTitle = "PrintSCPService";
        private static string _printFileFolder = @"D:\PrintImages";

        private static List<ReplaceTag> _replaceTags;
        private static DicomServer<PrintSCPService> _server;

        //the event used to inform client when there is a new print task.
        public static event PrintTaskEventHandler PrintTaskEvent;

        public static event EchoEventHandler EchoEvent;

        public static int Port
        {
            get { return _port; }
            set { _port = value; }
        }

        public static string AETitle
        {
            get { return _aeTitle; }
            set { _aeTitle = value; }
        }

        /// <summary>
        /// Get/Set the supported image to print (only GeryScale, only color, or both)
        /// </summary>
        public static PrintSCPType SCPType
        {
            get { return _scpType; }
            set { _scpType = value; }
        }

        public static string LogPath
        {
            get { return LogManager.Instance.LogPath; }
            set { LogManager.Instance.LogPath = value; }
        }

        public static string DicomPath
        {
            get { return _printFileFolder; }
            set { _printFileFolder = value; }
        }

        public static List<ReplaceTag> ReplaceTags
        {
            get
            {
                return _replaceTags;
            }
            set
            {
                _replaceTags = value;
            }
        }

        internal static readonly DicomTransferSyntax[] AcceptedTransferSyntaxes = new DicomTransferSyntax[]
                                                                            {
                                                                                DicomTransferSyntax.ExplicitVRLittleEndian,
                                                                                DicomTransferSyntax.ExplicitVRBigEndian,
                                                                                DicomTransferSyntax.ImplicitVRLittleEndian
                                                                            };

        internal static readonly DicomTransferSyntax[] AcceptedImageTransferSyntaxes = new DicomTransferSyntax[]
                                                                                         {
                                                                                             //Uncmpressed
                                                                                             DicomTransferSyntax.ExplicitVRLittleEndian,
                                                                                             DicomTransferSyntax.ExplicitVRBigEndian,
                                                                                             DicomTransferSyntax.ImplicitVRLittleEndian
                                                                                         };


        #endregion

        #region instance fields

        private FilmSession _filmSession;
        private Dictionary<string, PrintJob> _printJobList = new Dictionary<string, PrintJob>();
        private bool _sendEventReports = false;
        private readonly object _synchRoot = new object();

        public string CallingAE
        {
            get;
            protected set;
        }

        public string CalledAE
        {
            get;
            protected set;
        }

        public string CallingIP
        {
            get;
            private set;
        }

        #endregion

        #region static methods

        public static void Start()
        {
            if(_server == null)
            {
                _server = new DicomServer<PrintSCPService>(Port);
            }
        }

        public static void Stop()
        {
            _server.Dispose();
            _server = null;
        }

        #endregion

        #region instance methods

        public PrintSCPService(System.IO.Stream stream, Dicom.Log.Logger log): base(stream, log)
        {
            var pi = stream.GetType().GetProperty("Socket", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            if (pi != null)
            {
                var endPoint = ((System.Net.Sockets.Socket)pi.GetValue(stream, null)).RemoteEndPoint as System.Net.IPEndPoint;
                CallingIP = endPoint.Address.ToString();
            }
            else
            {
                CallingIP = "127, 0, 0, 1";
            }
        }

        private void ReplaceTag(DicomDataset dataset)
        {
            List<ReplaceTag> tags = PrintSCPService.ReplaceTags;

            if(tags != null && tags.Count > 0)
            {
                foreach(ReplaceTag tag in tags)
                {
                    DicomTag dt = new DicomTag(tag.Group, tag.Element);
                    if(dataset.Contains(dt))
                    {
                        dataset.AddOrUpdate(dt, tag.Value);
                    }
                }
            }
        }

        private void Clean()
        {
            lock (_synchRoot)
            {
                if (_filmSession != null)
                {
                    _filmSession.Clear();
                    _filmSession = null;
                }
                _printJobList.Clear();
            }
        }

        #endregion

        #region IDicomServiceProvider Members

        public void OnReceiveAssociationRequest(DicomAssociation association)
        {
            LogManager.Instance.Info("Received association request from AE: {0} with IP: {1} ", association.CallingAE, CallingIP);

            if (AETitle != association.CalledAE)
            {
                LogManager.Instance.Error(
                    "Association with {0} rejected since requested printer {1} not found",
                    association.CallingAE,
                    association.CalledAE);
                SendAssociationReject(
                    DicomRejectResult.Permanent,
                    DicomRejectSource.ServiceUser,
                    DicomRejectReason.CalledAENotRecognized);
                return;
            }

            CallingAE = association.CallingAE;
            CalledAE = association.CalledAE;

            foreach (var pc in association.PresentationContexts)
            {
                bool bAccept = false;

                if (pc.AbstractSyntax == DicomUID.Verification
                    || pc.AbstractSyntax == DicomUID.PrinterSOPClass
                    || pc.AbstractSyntax == DicomUID.BasicFilmSessionSOPClass
                    || pc.AbstractSyntax == DicomUID.BasicFilmBoxSOPClass)
                {
                    bAccept = true;
                }
                else if (pc.AbstractSyntax == DicomUID.BasicGrayscalePrintManagementMetaSOPClass
                    || pc.AbstractSyntax == DicomUID.BasicGrayscaleImageBoxSOPClass)
                {
                    bAccept = (PrintSCPService.SCPType == PrintSCPType.GrayScale || PrintSCPService.SCPType == PrintSCPType.GrayScaleColours);
                }
                else if(pc.AbstractSyntax == DicomUID.BasicColorPrintManagementMetaSOPClass
                    || pc.AbstractSyntax == DicomUID.BasicColorImageBoxSOPClass)
                {
                    bAccept = (PrintSCPService.SCPType == PrintSCPType.Colours || PrintSCPService.SCPType == PrintSCPType.GrayScaleColours);
                }
                else if (pc.AbstractSyntax == DicomUID.PrintJobSOPClass)
                {
                    bAccept = true;
                    _sendEventReports = true;
                }

                if (bAccept)
                {
                    pc.AcceptTransferSyntaxes(AcceptedTransferSyntaxes);
                }
                else
                {
                    LogManager.Instance.Warn("Requested abstract syntax {0} from {1} not supported", pc.AbstractSyntax, association.CallingAE);
                    pc.SetResult(DicomPresentationContextResult.RejectAbstractSyntaxNotSupported);
                }
            }

            LogManager.Instance.Info("Accepted association request from {0}", association.CallingAE);
            SendAssociationAccept(association);
        }

        public void OnReceiveAssociationReleaseRequest()
        {
            Clean();
            SendAssociationReleaseResponse();
        }

        public void OnReceiveAbort(DicomAbortSource source, DicomAbortReason reason)
        {
            LogManager.Instance.Error("Received abort from {0}, reason is {1}", source, reason);
        }

        public void OnConnectionClosed(Exception exception)
        {
            Clean();
        }

        #endregion

        #region IDicomCEchoProvider Members

        public DicomCEchoResponse OnCEchoRequest(DicomCEchoRequest request)
        {
            LogManager.Instance.Info("Received verification request from AE {0} with IP: {1}", CallingAE, CallingIP);

            if (EchoEvent != null)
            {
                EchoInfo echoInfo = new EchoInfo() { CallingAETitle = CalledAE, CallingIP = CallingIP };
                EchoEvent(echoInfo);
            }

            return new DicomCEchoResponse(request, DicomStatus.Success);
        }

        #endregion

        #region N-CREATE requests handlers

        public DicomNCreateResponse OnNCreateRequest(DicomNCreateRequest request)
        {
            lock (_synchRoot)
            {
                if (request.SOPClassUID == DicomUID.BasicFilmSessionSOPClass)
                {
                    return CreateFilmSession(request);
                }
                else if (request.SOPClassUID == DicomUID.BasicFilmBoxSOPClass)
                {
                    return CreateFilmBox(request);
                }
                else
                {
                    return new DicomNCreateResponse(request, DicomStatus.SOPClassNotSupported);
                }
            }
        }

        private DicomNCreateResponse CreateFilmSession(DicomNCreateRequest request)
        {
            if (_filmSession != null)
            {
                LogManager.Instance.Error("Attemted to create new basic film session on association with {0}", CallingAE);
                SendAbort(DicomAbortSource.ServiceProvider, DicomAbortReason.NotSpecified);
                return new DicomNCreateResponse(request, DicomStatus.NoSuchObjectInstance);
            }

            var pc = request.PresentationContext;

            bool isColor = pc != null && pc.AbstractSyntax == DicomUID.BasicColorPrintManagementMetaSOPClass;

            _filmSession = new FilmSession(request.SOPClassUID, request.SOPInstanceUID, request.Dataset, isColor);

            LogManager.Instance.Info("Create new film session {0}", _filmSession.SOPInstanceUID.UID);

            var response = new DicomNCreateResponse(request, DicomStatus.Success);
            response.Command.Add(DicomTag.AffectedSOPInstanceUID, _filmSession.SOPInstanceUID);
            return response;
        }

        private DicomNCreateResponse CreateFilmBox(DicomNCreateRequest request)
        {
            if (_filmSession == null)
            {
                LogManager.Instance.Error("A basic film session does not exist for this association {0}", CallingAE);
                SendAbort(DicomAbortSource.ServiceProvider, DicomAbortReason.NotSpecified);
                return new DicomNCreateResponse(request, DicomStatus.NoSuchObjectInstance);

            }

            FilmBox filmBox = _filmSession.CreateFilmBox(request.SOPInstanceUID, request.Dataset);

            if (!filmBox.Initialize())
            {
                LogManager.Instance.Error("Failed to initialize requested film box {0}", filmBox.SOPInstanceUID.UID);
                SendAbort(DicomAbortSource.ServiceProvider, DicomAbortReason.NotSpecified);
                return new DicomNCreateResponse(request, DicomStatus.ProcessingFailure);
            }

            LogManager.Instance.Info("Created new film box {0}", filmBox.SOPInstanceUID.UID);

            var response = new DicomNCreateResponse(request, DicomStatus.Success);
            response.Command.Add(DicomTag.AffectedSOPInstanceUID, filmBox.SOPInstanceUID);
            response.Dataset = filmBox;
            return response;
        }


        #endregion

        #region N-DELETE request handler

        public DicomNDeleteResponse OnNDeleteRequest(DicomNDeleteRequest request)
        {
            lock (_synchRoot)
            {
                if (request.SOPClassUID == DicomUID.BasicFilmSessionSOPClass)
                {
                    return DeleteFilmSession(request);
                }
                else if (request.SOPClassUID == DicomUID.BasicFilmBoxSOPClass)
                {
                    return DeleteFilmBox(request);
                }
                else
                {
                    return new DicomNDeleteResponse(request, DicomStatus.NoSuchSOPClass);
                }
            }
        }

        private DicomNDeleteResponse DeleteFilmBox(DicomNDeleteRequest request)
        {
            if (_filmSession == null)
            {
                LogManager.Instance.Error("Can't delete a basic film session doesnot exist for this association {0}", CallingAE);
                return new DicomNDeleteResponse(request, DicomStatus.NoSuchObjectInstance);
            }

            DicomStatus status;
            if (_filmSession.DeleteFilmBox(request.SOPInstanceUID))
            {
                status = DicomStatus.Success;
            }
            else
            {
                status = DicomStatus.NoSuchObjectInstance;
            }
            var response = new DicomNDeleteResponse(request, status);

            response.Command.Add(DicomTag.AffectedSOPInstanceUID, request.SOPInstanceUID);
            return response;
        }

        private DicomNDeleteResponse DeleteFilmSession(DicomNDeleteRequest request)
        {
            if (_filmSession == null)
            {
                LogManager.Instance.Error("Can't delete a basic film session doesnot exist for this association {0}", CallingAE);
                return new DicomNDeleteResponse(request, DicomStatus.NoSuchObjectInstance);
            }

            if (!request.SOPInstanceUID.Equals(_filmSession.SOPInstanceUID))
            {
                LogManager.Instance.Error(
                    "Can't delete a basic film session with instace UID {0} doesnot exist for this association {1}",
                    request.SOPInstanceUID.UID,
                    CallingAE);
                return new DicomNDeleteResponse(request, DicomStatus.NoSuchObjectInstance);
            }
            _filmSession = null;

            return new DicomNDeleteResponse(request, DicomStatus.Success);
        }

        #endregion

        #region N-SET request handler

        public DicomNSetResponse OnNSetRequest(DicomNSetRequest request)
        {
            lock (_synchRoot)
            {
                if (request.SOPClassUID == DicomUID.BasicFilmSessionSOPClass)
                {
                    return SetFilmSession(request);
                }
                else if (request.SOPClassUID == DicomUID.BasicFilmBoxSOPClass)
                {
                    return SetFilmBox(request);
                }
                else if (request.SOPClassUID == DicomUID.BasicColorImageBoxSOPClass
                         || request.SOPClassUID == DicomUID.BasicGrayscaleImageBoxSOPClass)
                {
                    return SetImageBox(request);
                }
                else
                {
                    return new DicomNSetResponse(request, DicomStatus.SOPClassNotSupported);
                }
            }
        }

        private DicomNSetResponse SetImageBox(DicomNSetRequest request)
        {
            if (_filmSession == null)
            {
                LogManager.Instance.Error("A basic film session does not exist for this association {0}", CallingAE);
                return new DicomNSetResponse(request, DicomStatus.NoSuchObjectInstance);
            }

            LogManager.Instance.Info("Set image box {0}", request.SOPInstanceUID.UID);

            ImageBox imageBox = _filmSession.FindImageBox(request.SOPInstanceUID);
            if (imageBox == null)
            {
                LogManager.Instance.Error(
                    "Received N-SET request for invalid image box instance {0} for this association {1}",
                    request.SOPInstanceUID.UID,
                    CallingAE);
                return new DicomNSetResponse(request, DicomStatus.NoSuchObjectInstance);
            }

            request.Dataset.CopyTo(imageBox);

            ReplaceTag(imageBox);
            ReplaceTag(imageBox.FilmBox);
            ReplaceTag(imageBox.FilmBox.FilmSession);

            return new DicomNSetResponse(request, DicomStatus.Success);
        }

        private DicomNSetResponse SetFilmBox(DicomNSetRequest request)
        {
            if (_filmSession == null)
            {
                LogManager.Instance.Error("A basic film session does not exist for this association {0}", CallingAE);
                return new DicomNSetResponse(request, DicomStatus.NoSuchObjectInstance);
            }

            LogManager.Instance.Info("Set film box {0}", request.SOPInstanceUID.UID);
            FilmBox filmBox = _filmSession.FindFilmBox(request.SOPInstanceUID);

            if (filmBox == null)
            {
                LogManager.Instance.Error(
                    "Received N-SET request for invalid film box {0} from {1}",
                    request.SOPInstanceUID.UID,
                    CallingAE);
                return new DicomNSetResponse(request, DicomStatus.NoSuchObjectInstance);
            }

            request.Dataset.CopyTo(filmBox);

            filmBox.Initialize();
            ReplaceTag(filmBox);

            var response = new DicomNSetResponse(request, DicomStatus.Success);
            response.Command.Add(DicomTag.AffectedSOPInstanceUID, filmBox.SOPInstanceUID);
            response.Command.Add(DicomTag.CommandDataSetType, (ushort)0x0202);
            response.Dataset = filmBox;
            return response;
        }

        private DicomNSetResponse SetFilmSession(DicomNSetRequest request)
        {
            if (_filmSession == null || _filmSession.SOPInstanceUID.UID != request.SOPInstanceUID.UID)
            {
                LogManager.Instance.Error("A basic film session does not exist for this association {0}", CallingAE);
                return new DicomNSetResponse(request, DicomStatus.NoSuchObjectInstance);
            }

            LogManager.Instance.Info("Set film session {0}", request.SOPInstanceUID.UID);
            request.Dataset.CopyTo(_filmSession);

            ReplaceTag(_filmSession);

            return new DicomNSetResponse(request, DicomStatus.Success);
        }

        #endregion

        #region N-GET request handler

        public DicomNGetResponse OnNGetRequest(DicomNGetRequest request)
        {
            lock (_synchRoot)
            {
                LogManager.Instance.Info(request.ToString(true));

                if (request.SOPClassUID == DicomUID.PrinterSOPClass
                    && request.SOPInstanceUID == DicomUID.PrinterSOPInstance)
                {
                    return GetPrinter(request);
                }
                else if (request.SOPClassUID == DicomUID.PrintJobSOPClass)
                {
                    return GetPrintJob(request);
                }
                else if (request.SOPClassUID == DicomUID.PrinterConfigurationRetrievalSOPClass
                         && request.SOPInstanceUID == DicomUID.PrinterConfigurationRetrievalSOPInstance)
                {
                    return GetPrinterConfiguration(request);
                }
                else
                {
                    return new DicomNGetResponse(request, DicomStatus.NoSuchSOPClass);
                }
            }
        }

        private DicomNGetResponse GetPrinter(DicomNGetRequest request)
        {
            var ds = new DicomDataset();

            var sb = new System.Text.StringBuilder();
            if (request.Attributes != null && request.Attributes.Length > 0)
            {
                foreach (var item in request.Attributes)
                {
                    sb.AppendFormat("GetPrinter attribute {0} requested", item);
                    sb.AppendLine();
                    var value = "undefine";
                    ds.Add(item, value);
                }

                Logger.Info(sb.ToString());
            }
            if (ds.Count() == 0)
            {

                ds.Add(DicomTag.PrinterStatus, "");
                ds.Add(DicomTag.PrinterStatusInfo, "");
                ds.Add(DicomTag.PrinterName, "");
                ds.Add(DicomTag.Manufacturer, "");
                ds.Add(DicomTag.DateOfLastCalibration, "");
                ds.Add(DicomTag.TimeOfLastCalibration, "");
                ds.Add(DicomTag.ManufacturerModelName, "");
                ds.Add(DicomTag.DeviceSerialNumber, "");
                ds.Add(DicomTag.SoftwareVersions, "");
            }

            var response = new DicomNGetResponse(request, DicomStatus.Success);
            response.Dataset = ds;

            LogManager.Instance.Info(response.ToString(true));
            return response;
        }

        private DicomNGetResponse GetPrinterConfiguration(DicomNGetRequest request)
        {
            var dataset = new DicomDataset();
            var config = new DicomDataset();

            var sequence = new DicomSequence(DicomTag.PrinterConfigurationSequence, config);

            dataset.Add(sequence);

            var response = new DicomNGetResponse(request, DicomStatus.Success);
            response.Command.Add(DicomTag.AffectedSOPInstanceUID, request.SOPInstanceUID);
            response.Dataset = dataset;
            return response;

        }

        private DicomNGetResponse GetPrintJob(DicomNGetRequest request)
        {
            if (_printJobList.ContainsKey(request.SOPInstanceUID.UID))
            {
                var printJob = _printJobList[request.SOPInstanceUID.UID];

                var sb = new System.Text.StringBuilder();

                var dataset = new DicomDataset();

                if (request.Attributes != null && request.Attributes.Length > 0)
                {
                    foreach (var item in request.Attributes)
                    {
                        sb.AppendFormat("GetPrintJob attribute {0} requested", item);
                        sb.AppendLine();
                        var value = "";
                        dataset.Add(item, value);
                    }

                    Logger.Info(sb.ToString());
                }

                var response = new DicomNGetResponse(request, DicomStatus.Success);
                response.Dataset = dataset;
                return response;
            }
            else
            {
                var response = new DicomNGetResponse(request, DicomStatus.NoSuchObjectInstance);
                return response;
            }
        }

        #endregion

        #region N-ACTION request handler

        public DicomNActionResponse OnNActionRequest(DicomNActionRequest request)
        {
            if (_filmSession == null)
            {
                LogManager.Instance.Error("A basic film session does not exist for this association {0}", CallingAE);
                return new DicomNActionResponse(request, DicomStatus.InvalidObjectInstance);
            }

            lock (_synchRoot)
            {
                try
                {
                    var filmBoxList = new List<FilmBox>();
                    if (request.SOPClassUID == DicomUID.BasicFilmSessionSOPClass && request.ActionTypeID == 0x0001)
                    {
                        LogManager.Instance.Info("Creating new print job for film session {0}", _filmSession.SOPInstanceUID.UID);
                        filmBoxList.AddRange(_filmSession.BasicFilmBoxes);
                    }
                    else if (request.SOPClassUID == DicomUID.BasicFilmBoxSOPClass && request.ActionTypeID == 0x0001)
                    {
                        LogManager.Instance.Info("Creating new print job for film box {0}", request.SOPInstanceUID.UID);

                        var filmBox = _filmSession.FindFilmBox(request.SOPInstanceUID);
                        if (filmBox != null)
                        {
                            filmBoxList.Add(filmBox);
                        }
                        else
                        {
                            LogManager.Instance.Error(
                                "Received N-ACTION request for invalid film box {0} from {1}",
                                request.SOPInstanceUID.UID,
                                CallingAE);
                            return new DicomNActionResponse(request, DicomStatus.NoSuchObjectInstance);
                        }
                    }
                    else
                    {
                        if (request.ActionTypeID != 0x0001)
                        {
                            LogManager.Instance.Error(
                                "Received N-ACTION request for invalid action type {0} from {1}",
                                request.ActionTypeID,
                                CallingAE);
                            return new DicomNActionResponse(request, DicomStatus.NoSuchActionType);
                        }
                        else
                        {
                            LogManager.Instance.Error(
                                "Received N-ACTION request for invalid SOP class {0} from {1}",
                                request.SOPClassUID,
                                CallingAE);
                            return new DicomNActionResponse(request, DicomStatus.NoSuchSOPClass);
                        }
                    }

                    var printJob = new PrintJob(null, CallingIP, CallingAE, CalledAE);
                    printJob.StatusUpdate += OnPrintJobStatusUpdate;

                    printJob.Print(filmBoxList);

                    PrintTaskInfo arg = new PrintTaskInfo();
                    arg.CallingAETitle = CallingAE;
                    arg.CallingIP = CallingIP;
                    arg.FilmSize = filmBoxList[0].FilmSizeID;//"TODO";
                    arg.TaskPath = printJob.PrintJobFolder;
                    arg.HasError = printJob.IsFailed;
                    arg.ErrorMessage = printJob.ErrorMessage;

                    if (PrintSCPService.PrintTaskEvent != null)
                    {
                        PrintSCPService.PrintTaskEvent(arg);
                    }

                    if (!printJob.IsFailed)
                    {
                        var result = new DicomDataset();
                        result.Add(
                            new DicomSequence(
                                new DicomTag(0x2100, 0x0500),
                                new DicomDataset(
                                    new DicomUniqueIdentifier(DicomTag.ReferencedSOPClassUID, DicomUID.PrintJobSOPClass)),
                                new DicomDataset(
                                    new DicomUniqueIdentifier(
                                        DicomTag.ReferencedSOPInstanceUID,
                                        printJob.SOPInstanceUID))));

                        var response = new DicomNActionResponse(request, DicomStatus.Success);
                        response.Command.Add(DicomTag.AffectedSOPInstanceUID, printJob.SOPInstanceUID);
                        response.Dataset = result;

                        return response;
                    }
                    else
                    {
                        throw new Exception(printJob.ErrorMessage);
                    }
                }
                catch (Exception ex)
                {
                    LogManager.Instance.Error(
                        "Error occured during N-ACTION {0} for SOP class {1} and instance {2}",
                        request.ActionTypeID,
                        request.SOPClassUID.UID,
                        request.SOPInstanceUID.UID);
                    LogManager.Instance.Error(ex.Message);
                    return new DicomNActionResponse(request, DicomStatus.ProcessingFailure);
                }
            }
        }

        private void OnPrintJobStatusUpdate(object sender, PrintStatusEventArgs e)
        {
            var printJob = sender as PrintJob;
            if (_sendEventReports)
            {
                var reportRequest = new DicomNEventReportRequest(
                    printJob.SOPClassUID,
                    printJob.SOPInstanceUID,
                    e.EventTypeId);

                var ds = new DicomDataset();
                ds.Add(DicomTag.ExecutionStatusInfo, e.ExecutionStatusInfo);
                ds.Add(DicomTag.FilmSessionLabel, e.FilmSessionLabel);
                ds.Add(DicomTag.PrinterName, AETitle);

                reportRequest.Dataset = ds;
                this.SendRequest(reportRequest);
            }
        }

        #endregion

        #region IDicomNServiceProvider Members

        public DicomNEventReportResponse OnNEventReportRequest(DicomNEventReportRequest request)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
