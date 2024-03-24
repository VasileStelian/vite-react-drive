// vercel-build.js

const { execSync } = require('child_process');

// Install Puppeteer
console.log('Installing Puppeteer...');
execSync('npm install puppeteer');

// Additional build tasks if needed

console.log('Build process completed.');
