const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function renderPage(url, fileName) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const htmlContent = await page.content();
  await browser.close();

   // Save the rendered HTML file inside the dist directory
   const distPath = path.resolve(__dirname, 'dist', fileName);
   fs.writeFileSync(distPath, htmlContent);
}

// Render and save HTML for each page
const pages = [
  { url: 'http://diadrive.ro/contact', fileName: 'contact.html' },
  { url: 'http://diadrive.ro/galerie', fileName: 'galerie.html' },
  { url: 'http://diadrive.ro/categorii', fileName: 'categorii.html' },
  { url: 'http://diadrive.ro/despre', fileName: 'despre.html' },
];

async function renderPages() {
  for (const { url, fileName } of pages) {
    await renderPage(url, fileName);
    console.log(`Rendered ${url} and saved as ${fileName}`);
  }
}

renderPages();