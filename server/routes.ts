import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  // Get all texture packs
  app.get("/api/texture-packs", async (req, res) => {
    try {
      const packs = await storage.getAllTexturePacks();
      res.json(packs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch texture packs" });
    }
  });

  // Get a specific texture pack by ID
  app.get("/api/texture-packs/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const pack = await storage.getTexturePack(id);
      if (!pack) {
        return res.status(404).json({ message: "Texture pack not found" });
      }

      res.json(pack);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch texture pack" });
    }
  });

  // Get download count for a texture pack
  app.get("/api/texture-packs/:id/downloads", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const count = await storage.getDownloadCount(id);
      res.json({ downloadCount: count });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch download count" });
    }
  });

  // Increment download count and serve texture pack file
  app.get("/api/texture-packs/:id/download", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const pack = await storage.getTexturePack(id);
      if (!pack) {
        return res.status(404).json({ message: "Texture pack not found" });
      }

      // Increment download count
      await storage.incrementDownloadCount(id);

      // Use the actual texture pack file - use the user-provided file exactly as uploaded
      const texturePath = path.join(__dirname, '..', 'attached_assets', 'Visible Ores.mcpack');
      
      // Check if the file exists
      if (!fs.existsSync(texturePath)) {
        return res.status(404).json({ message: "Texture pack file not found" });
      }

      // Set appropriate headers for download
      res.setHeader('Content-Disposition', `attachment; filename="Visible Ores.mcpack"`);
      res.setHeader('Content-Type', 'application/octet-stream');
      
      // Stream the file to the client
      const fileStream = fs.createReadStream(texturePath);
      fileStream.pipe(res);
    } catch (error) {
      res.status(500).json({ message: "Failed to download texture pack" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
