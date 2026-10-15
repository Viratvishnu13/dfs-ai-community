import { PDFDocument } from 'pdf-lib';
import * as pdfjs from 'pdfjs-dist';
import fs from 'fs';
import path from 'path';

const ORIGINALS_DIR = 'public/materials/originals';
const TARGET_DIR = 'public/materials';

async function getPageTextBottom(page) {
  const text = await page.getTextContent();
  // Filter out the footer text at the bottom (y < 60)
  const textItems = text.items.filter(it => it.str && it.str.trim() && it.transform[5] > 60);
  
  if (!textItems.length) return 300;

  const ys = textItems.map(it => it.transform[5]);
  const minTextY = Math.min(...ys);

  // Leave a clean 35pt bottom margin below the lowest line of text / callout box
  return Math.max(50, Math.floor(minTextY - 35));
}

async function processAllPdfs() {
  const files = fs.readdirSync(ORIGINALS_DIR).filter(f => f.startsWith('Start_') && f.endsWith('.pdf'));

  console.log(`Processing ${files.length} PDFs to eliminate bottom whitespace...`);

  for (const file of files) {
    const inputPath = path.join(ORIGINALS_DIR, file);
    const outputPath = path.join(TARGET_DIR, file);

    const pdfBytes = fs.readFileSync(inputPath);

    // 1. Get exact bottom boundary from pdfjs text extraction
    const pdfjsDoc = await pdfjs.getDocument({ data: new Uint8Array(pdfBytes) }).promise;
    const cropBottoms = [];

    for (let i = 1; i <= pdfjsDoc.numPages; i++) {
      const page = await pdfjsDoc.getPage(i);
      const cropBottom = await getPageTextBottom(page);
      cropBottoms.push(cropBottom);
    }

    // 2. Apply precise CropBox and MediaBox using pdf-lib
    const pdfLibDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfLibDoc.getPages();

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const mediaBox = page.getMediaBox();
      const pageWidth = mediaBox.width || 595.28;
      const pageHeight = mediaBox.height || 841.89;

      const cropBottom = cropBottoms[i];
      const croppedHeight = Math.floor(pageHeight - cropBottom);

      page.setCropBox(0, cropBottom, pageWidth, croppedHeight);
      page.setMediaBox(0, cropBottom, pageWidth, croppedHeight);
    }

    const modifiedBytes = await pdfLibDoc.save();
    fs.writeFileSync(outputPath, modifiedBytes);
    console.log(`✓ Cropped ${file} (${pages.length} pages) - Bottom whitespace removed.`);
  }

  console.log('\nAll 8 PDFs updated successfully!');
}

processAllPdfs().catch(err => {
  console.error('Error cropping PDFs:', err);
  process.exit(1);
});
