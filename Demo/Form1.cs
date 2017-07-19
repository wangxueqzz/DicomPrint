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
        private List<PrintTaskInfo> _printTasks = new List<PrintTaskInfo>();

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

            //test printSCU
            string taskPath = @"D:\PrintFolder\2017\07\19\127.0.0.1\local\1.3.6.1.4.1.30071.8.159090363644277.5537559105052076";
            string strErr = PrintSCU.PrintSCUService.SendPrintTask("PRINTSCU", "PRINTSCP", "10.112.12.62", 8430, taskPath);
            if(!string.IsNullOrEmpty(strErr))
            {
                //error happened.
                MessageBox.Show("error happened, " + strErr);
            }
            else
            {
                MessageBox.Show("Success send task " + taskPath);
            }
        }

        private void PrintSCPService_PrintTaskEvent(PrintTaskInfo task)
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
