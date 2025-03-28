import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function handler(req, res) {
  try {
    // Try multiple possible file locations
    let filePaths = [
      path.join(process.cwd(), 'public', 'Visible Ores.mcpack'),
      path.join(process.cwd(), 'Visible Ores.mcpack'),
      path.join(process.cwd(), 'attached_assets', 'Visible Ores.mcpack')
    ];
    
    // Find the first path that exists
    let filePath = filePaths.find(path => fs.existsSync(path));
    
    if (!filePath) {
      return res.status(404).json({
        error: 'Texture pack file not found'
      });
    }
    
    // Get file details
    const stat = fs.statSync(filePath);
    
    // Set the appropriate headers
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename="Visible Ores.mcpack"');
    
    // Stream the file
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } catch (error) {
    console.error('Error serving file:', error);
    res.status(500).json({
      error: 'Failed to serve the texture pack file'
    });
  }
}