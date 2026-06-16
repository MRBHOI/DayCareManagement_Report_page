import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Papa from 'papaparse';

export const exportToCSV = (data, filename = 'export.csv') => {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) { 
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const exportToPDF = (headers, dataRows, title = 'Report', filename = 'report.pdf') => {
  const doc = new jsPDF();
  
  doc.setFontSize(18);
  doc.text(title, 14, 22);
  
  doc.autoTable({
    startY: 30,
    head: [headers],
    body: dataRows,
    theme: 'striped',
    headStyles: { fillColor: [255, 143, 80] }, // primary orange
  });
  
  doc.save(filename);
};
