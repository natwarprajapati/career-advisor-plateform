// High-Quality Client-Side PDF Export Service
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function exportElementToPDF(elementId: string, fileName: string = 'Resume.pdf'): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found for PDF export.`);
  }

  // Create canvas from element
  const canvas = await html2canvas(element, {
    scale: 2, // High resolution (retina crisp)
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });

  const imgData = canvas.toDataURL('image/png');
  
  // Create A4 PDF (210mm x 297mm)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`);
}
