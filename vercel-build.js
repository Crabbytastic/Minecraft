// This file is used to run custom build steps for Vercel deployment
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the public directory exists in the build output
const targetDir = path.join(__dirname, 'dist');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Create the public directory inside dist if it doesn't exist
const publicDir = path.join(targetDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy the texture pack file to the build output (both dist/ and dist/public/)
const sourceFiles = [
  path.join(__dirname, 'public', 'Visible Ores.mcpack'),
  path.join(__dirname, 'attached_assets', 'Visible Ores.mcpack')
];

const targetFiles = [
  path.join(targetDir, 'Visible Ores.mcpack'),
  path.join(publicDir, 'Visible Ores.mcpack')
];

// Try to copy from each possible source to each possible target
let copySuccess = false;
for (const sourceFile of sourceFiles) {
  if (fs.existsSync(sourceFile)) {
    for (const targetFile of targetFiles) {
      try {
        fs.copyFileSync(sourceFile, targetFile);
        console.log(`Successfully copied texture pack file from ${sourceFile} to ${targetFile}`);
        copySuccess = true;
      } catch (error) {
        console.error(`Error copying from ${sourceFile} to ${targetFile}:`, error);
      }
    }
  }
}

if (!copySuccess) {
  console.error('Failed to copy texture pack file from any source to any target location');
}

// Ensure the index.html is in the right place - try multiple sources
try {
  // Try standalone index.html first (preferred)
  const standaloneHtml = path.join(__dirname, 'index.html');
  const targetDirHtml = path.join(targetDir, 'index.html');
  const targetPublicHtml = path.join(publicDir, 'index.html');
  
  // Copy standalone HTML if it exists
  if (fs.existsSync(standaloneHtml)) {
    fs.copyFileSync(standaloneHtml, targetDirHtml);
    fs.copyFileSync(standaloneHtml, targetPublicHtml);
    console.log('Successfully copied standalone index.html to build output');
  } else {
    // Fall back to client/index.html
    const sourceHtml = path.join(__dirname, 'client', 'index.html');
    if (fs.existsSync(sourceHtml)) {
      fs.copyFileSync(sourceHtml, targetDirHtml);
      fs.copyFileSync(sourceHtml, targetPublicHtml);
      console.log('Successfully copied client index.html to build output');
    } else {
      console.error('No index.html file found');
    }
  }
} catch (error) {
  console.error('Error copying index.html:', error);
}