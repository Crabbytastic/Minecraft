// Serverless API for Vercel
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { storage } from '../server/storage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express app
const app = express();

// Use CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get('/api/texture-packs', async (req, res) => {
  try {
    const packs = await storage.getAllTexturePacks();
    res.json(packs);
  } catch (error) {
    console.error('Error fetching texture packs:', error);
    res.status(500).json({ error: 'Failed to fetch texture packs' });
  }
});

app.get('/api/texture-packs/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const pack = await storage.getTexturePack(id);
    
    if (!pack) {
      return res.status(404).json({ error: 'Texture pack not found' });
    }
    
    res.json(pack);
  } catch (error) {
    console.error('Error fetching texture pack:', error);
    res.status(500).json({ error: 'Failed to fetch texture pack' });
  }
});

// Removed POST endpoint as it's consolidated with the GET /api/texture-packs/:id/download endpoint

app.get('/api/texture-packs/:id/downloads', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const count = await storage.getDownloadCount(id);
    
    res.json({ downloadCount: count });
  } catch (error) {
    console.error('Error fetching download count:', error);
    res.status(500).json({ error: 'Failed to fetch download count' });
  }
});

// Serve the texture pack file
app.get('/api/texture-packs/:id/download', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    
    // Increment download count
    await storage.incrementDownloadCount(id);
    
    // Serve the texture pack file
    const filename = 'Visible Ores.mcpack';
    const filepath = path.join(__dirname, '../public', filename);
    
    if (!fs.existsSync(filepath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    // Set appropriate headers for download
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    
    // Send the file
    res.sendFile(filepath);
  } catch (error) {
    console.error('Error serving texture pack:', error);
    res.status(500).json({ error: 'Failed to serve texture pack' });
  }
});

// Export the Express API as a Vercel serverless function
export default app;