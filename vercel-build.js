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

// Copy the texture pack file to the build output
const sourceFile = path.join(__dirname, 'public', 'Visible Ores.mcpack');
const targetFile = path.join(targetDir, 'Visible Ores.mcpack');

try {
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, targetFile);
    console.log('Successfully copied texture pack file to build output');
  } else {
    console.error('Source texture pack file not found at:', sourceFile);
    
    // Try alternate location
    const altSourceFile = path.join(__dirname, 'attached_assets', 'Visible Ores.mcpack');
    if (fs.existsSync(altSourceFile)) {
      fs.copyFileSync(altSourceFile, targetFile);
      console.log('Successfully copied texture pack file from alternate location to build output');
    } else {
      console.error('Texture pack file not found in either location');
    }
  }
} catch (error) {
  console.error('Error copying texture pack file:', error);
}