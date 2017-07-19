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
            PrintSCPService.AETitle = "PRINTSCP";
            PrintSCPService.DicomPath = "D:\\PrintFolder";
            PrintSCPService.LogPath = "C:\\PrintSCPLog";
            PrintSCPService.Port = 8431;
            PrintSCPService.SCPType = PrintSCPType.GrayScaleColours;

            PrintSCPService.PrintTaskEvent += PrintSCPService_PrintTaskEvent;

            //set replace tags
            List<ReplaceTag> replaceTags = new List<ReplaceTag>()
            {
                new ReplaceTag(0x2000, 0x0020, "HIGH"), //Print Priority
                new ReplaceTag(0x2010, 0x0050, "17INX17IN "), //Film Size ID
                new ReplaceTag(0x2020, 0x0010, "2") //Image position
            };
            PrintSCPService.ReplaceTags = replaceTags;

            PrintSCPService.Start();

            statusLabel.Text = "Print SCP Service started!";
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

        private void gridViewTasks_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0)
            {
                DataGridViewColumn column = gridViewTasks.Columns[e.ColumnIndex];
                if (column is DataGridViewButtonColumn)
                {
                    string taskPath = gridViewTasks.Rows[e.RowIndex].Cells[3].Value as string;

                    //Send to dicom print by using PrintSCUService
                    string callingAE = "PRINTSCU";
                    string calledIP = "localhost";
                    string calledAE = "PRINTSCP";
                    int calledPort = 8430;

                    string strErr = PrintSCU.PrintSCUService.SendPrintTask(callingAE, calledAE, calledIP, calledPort, taskPath);
                    if (!string.IsNullOrEmpty(strErr))
                    {
                        //error happened.
                        MessageBox.Show("error happened due to " + strErr);
                    }
                    else
                    {
                        MessageBox.Show("Success send task " + taskPath);
                    }
                }
            }
        }
    }
}
