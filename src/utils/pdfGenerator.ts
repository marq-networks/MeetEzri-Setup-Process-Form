import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateSetupPDF = (formData: Record<string, any>) => {
  const doc = new jsPDF();

  // Add Header
  doc.setFontSize(22);
  doc.setTextColor(40, 40, 40);
  doc.text('MeetEzri Setup Process', 20, 20);
  
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`Submission Date: ${new Date().toLocaleString()}`, 20, 30);

  // Prepare table data
  const tableData = [
    ['Product Name', formData.productName || 'N/A'],
    ['Logo URL', formData.logo_url || 'N/A'], // Assuming logo_url is passed back or processed separately
    ['Brand Colors', JSON.stringify(formData.brandColors || 'N/A')],
    ['Brand Inspiration', formData.brandInspiration || 'N/A'],
    ['Things to Avoid', formData.thingsToAvoid || 'N/A'],
    ['Domain Name', formData.domainName || 'N/A'],
    ['Domain Notes', formData.domainNotes || 'N/A'],
    ['Cloud Provider', formData.cloudProvider || 'N/A'],
    ['Cloud Account', formData.cloudAccountStatus || 'N/A'],
    ['Preferred Region', formData.preferredRegion || 'N/A'],
    ['Whisper API', formData.whisperAPI || 'N/A'],
    ['LLM Access', formData.llmAccess || 'N/A'],
    ['GPU Server', formData.gpuServer || 'N/A'],
    ['Payment Gateway', formData.paymentGateway || 'N/A'],
    ['Payment Account', formData.paymentAccount || 'N/A'],
    ['Free Trial', JSON.stringify(formData.freeTrial || 'N/A')],
    ['Paid Plans', formData.paidPlans || 'N/A'],
    ['Mood Check-Ins', formData.moodCheckIns || 'N/A'],
    ['Wellness Tools', JSON.stringify(formData.wellnessTools || 'N/A')],
    ['User History', formData.userHistory || 'N/A'],
  ];

  // Generate table
  autoTable(doc, {
    startY: 40,
    head: [['Field', 'Value']],
    body: tableData,
    theme: 'striped',
    headStyles: { fillColor: [57, 255, 20], textColor: [0, 0, 0] }, // Neon Green header
    styles: { overflow: 'linebreak', cellWidth: 'wrap' },
    columnStyles: {
      0: { cellWidth: 50, fontStyle: 'bold' },
      1: { cellWidth: 'auto' },
    },
  });

  return doc.output('blob');
};
