import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function generateCatalogPdf(
  onProgress?: (status: string) => void
): Promise<void> {
  const sheetIds = [
    'sheet-cover',
    'sheet-cycle',
    'sheet-machinery',
    'sheet-cleanroom',
    'sheet-quality',
  ];

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  const pageWidth = 210;
  const pageHeight = 297;
  let hasRenderedAny = false;

  for (let i = 0; i < sheetIds.length; i++) {
    const id = sheetIds[i];
    const el = document.getElementById(id);

    if (el) {
      if (onProgress) {
        onProgress(`Processing Sheet ${i + 1} of ${sheetIds.length}...`);
      }

      try {
        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: 1200,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.92);

        if (hasRenderedAny) {
          doc.addPage('a4', 'portrait');
        }

        doc.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');
        hasRenderedAny = true;
      } catch (err) {
        console.warn(`Failed to canvas-render ${id}, continuing...`, err);
      }
    }
  }

  // Fallback if elements were not found in DOM
  if (!hasRenderedAny) {
    if (onProgress) onProgress('Compiling document...');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('GLOBAL INDUSTRIAL TECHNOLOGIES', 20, 30);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Technical Machinery Catalogue & Engineering Dossier', 20, 42);
    doc.setFontSize(10);
    doc.text('Document Ref: GIT-SPEC-2026-REV3.2 | cGMP & CE Validated', 20, 52);
    doc.line(20, 56, 190, 56);
    doc.text('Complete turnkey industrial machinery, cleanroom engineering and service cycle.', 20, 68);
  }

  const lang = localStorage.getItem('git-language') || 'en';
  let fileName = 'GIT_Technical_Machinery_Catalogue_2026.pdf';
  if (lang === 'pt') {
    fileName = 'GIT_Catalogo_Maquinas_Industriais_2026.pdf';
  } else if (lang === 'fr') {
    fileName = 'GIT_Catalogue_Machines_Industrielles_2026.pdf';
  }

  if (onProgress) onProgress('Saving PDF...');
  doc.save(fileName);
}
