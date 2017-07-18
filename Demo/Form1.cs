using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using PrintSCP;

namespace Demo
{
    public partial class Form1 : Form
    {
        private List<PrintTask> _printTasks = new List<PrintTask>();

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnStartSCP_Click(object sender, EventArgs e)
        {
            PrintSCPService.AETitle = "PRINTSCP";
            PrintSCPService.DicomPath = "D:\\PrintFolder";
            PrintSCPService.LogPath = "C:\\PrintSCPLog";
            PrintSCPService.Port = 8431;
            PrintSCPService.SCPType = PrintSCPType.GrayScaleColours;

            PrintSCPService.PrintTaskEvent += PrintSCPService_PrintTaskEvent;
            
            PrintSCPService.Start();

            statusLabel.Text = "Print SCP Service started!";
        }

        private void PrintSCPService_PrintTaskEvent(PrintTask task)
        {
            Invoke((MethodInvoker)(() =>
            {
                _printTasks.Add(task);

                bindingSource1.DataSource = null;
                bindingSource1.DataSource = _printTasks;
            }));
        }
    }
}
