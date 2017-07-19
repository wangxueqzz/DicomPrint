namespace Demo
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.statusStrip1 = new System.Windows.Forms.StatusStrip();
            this.statusLabel = new System.Windows.Forms.ToolStripStatusLabel();
            this.btnStartSCP = new System.Windows.Forms.Button();
            this.gridViewTasks = new System.Windows.Forms.DataGridView();
            this.bindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.callingAETitleDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.callingIPDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.filmSizeDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.taskPathDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.HasError = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.statusStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridViewTasks)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).BeginInit();
            this.SuspendLayout();
            // 
            // statusStrip1
            // 
            this.statusStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.statusLabel});
            this.statusStrip1.Location = new System.Drawing.Point(0, 438);
            this.statusStrip1.Name = "statusStrip1";
            this.statusStrip1.Size = new System.Drawing.Size(635, 22);
            this.statusStrip1.TabIndex = 0;
            this.statusStrip1.Text = "statusStrip1";
            // 
            // statusLabel
            // 
            this.statusLabel.Name = "statusLabel";
            this.statusLabel.Size = new System.Drawing.Size(42, 17);
            this.statusLabel.Text = "Ready.";
            // 
            // btnStartSCP
            // 
            this.btnStartSCP.Location = new System.Drawing.Point(24, 27);
            this.btnStartSCP.Name = "btnStartSCP";
            this.btnStartSCP.Size = new System.Drawing.Size(144, 40);
            this.btnStartSCP.TabIndex = 1;
            this.btnStartSCP.Text = "Start PrintSCP Service";
            this.btnStartSCP.UseVisualStyleBackColor = true;
            this.btnStartSCP.Click += new System.EventHandler(this.btnStartSCP_Click);
            // 
            // gridViewTasks
            // 
            this.gridViewTasks.AllowUserToAddRows = false;
            this.gridViewTasks.AllowUserToDeleteRows = false;
            this.gridViewTasks.AllowUserToOrderColumns = true;
            this.gridViewTasks.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.gridViewTasks.AutoGenerateColumns = false;
            this.gridViewTasks.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridViewTasks.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.callingAETitleDataGridViewTextBoxColumn,
            this.callingIPDataGridViewTextBoxColumn,
            this.filmSizeDataGridViewTextBoxColumn,
            this.taskPathDataGridViewTextBoxColumn,
            this.HasError});
            this.gridViewTasks.DataSource = this.bindingSource1;
            this.gridViewTasks.Location = new System.Drawing.Point(12, 86);
            this.gridViewTasks.Name = "gridViewTasks";
            this.gridViewTasks.ReadOnly = true;
            this.gridViewTasks.Size = new System.Drawing.Size(611, 336);
            this.gridViewTasks.TabIndex = 2;
            // 
            // bindingSource1
            // 
            this.bindingSource1.DataSource = typeof(PrintSCP.PrintTaskInfo);
            // 
            // callingAETitleDataGridViewTextBoxColumn
            // 
            this.callingAETitleDataGridViewTextBoxColumn.DataPropertyName = "CallingAETitle";
            this.callingAETitleDataGridViewTextBoxColumn.HeaderText = "CallingAETitle";
            this.callingAETitleDataGridViewTextBoxColumn.Name = "callingAETitleDataGridViewTextBoxColumn";
            this.callingAETitleDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // callingIPDataGridViewTextBoxColumn
            // 
            this.callingIPDataGridViewTextBoxColumn.DataPropertyName = "CallingIP";
            this.callingIPDataGridViewTextBoxColumn.HeaderText = "CallingIP";
            this.callingIPDataGridViewTextBoxColumn.Name = "callingIPDataGridViewTextBoxColumn";
            this.callingIPDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // filmSizeDataGridViewTextBoxColumn
            // 
            this.filmSizeDataGridViewTextBoxColumn.DataPropertyName = "FilmSize";
            this.filmSizeDataGridViewTextBoxColumn.HeaderText = "FilmSize";
            this.filmSizeDataGridViewTextBoxColumn.Name = "filmSizeDataGridViewTextBoxColumn";
            this.filmSizeDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // taskPathDataGridViewTextBoxColumn
            // 
            this.taskPathDataGridViewTextBoxColumn.DataPropertyName = "TaskPath";
            this.taskPathDataGridViewTextBoxColumn.HeaderText = "TaskPath";
            this.taskPathDataGridViewTextBoxColumn.Name = "taskPathDataGridViewTextBoxColumn";
            this.taskPathDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // HasError
            // 
            this.HasError.DataPropertyName = "HasError";
            this.HasError.HeaderText = "HasError";
            this.HasError.Name = "HasError";
            this.HasError.ReadOnly = true;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(635, 460);
            this.Controls.Add(this.gridViewTasks);
            this.Controls.Add(this.btnStartSCP);
            this.Controls.Add(this.statusStrip1);
            this.Name = "Form1";
            this.Text = "Demo";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.statusStrip1.ResumeLayout(false);
            this.statusStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridViewTasks)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.StatusStrip statusStrip1;
        private System.Windows.Forms.Button btnStartSCP;
        private System.Windows.Forms.ToolStripStatusLabel statusLabel;
        private System.Windows.Forms.DataGridView gridViewTasks;
        private System.Windows.Forms.BindingSource bindingSource1;
        private System.Windows.Forms.DataGridViewTextBoxColumn isFailedDataGridViewCheckBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn callingAETitleDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn callingIPDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn filmSizeDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn taskPathDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn HasError;
    }
}

