import { texturePacks, type TexturePack, type InsertTexturePack, users, type User, type InsertUser } from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Texture Pack operations
  getAllTexturePacks(): Promise<TexturePack[]>;
  getTexturePack(id: number): Promise<TexturePack | undefined>;
  getTexturePackByVersion(version: string): Promise<TexturePack | undefined>;
  createTexturePack(pack: InsertTexturePack): Promise<TexturePack>;
  incrementDownloadCount(id: number): Promise<TexturePack | undefined>;
  getDownloadCount(id: number): Promise<number>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private packs: Map<number, TexturePack>;
  private userCurrentId: number;
  private packCurrentId: number;

  constructor() {
    this.users = new Map();
    this.packs = new Map();
    this.userCurrentId = 1;
    this.packCurrentId = 1;
    
    // Initialize with sample texture packs
    this.initializeTexturePacks();
  }

  private initializeTexturePacks() {
    const initialPacks: InsertTexturePack[] = [
      {
        name: "Visible Ores Texture Pack",
        version: "v1.2",
        compatibility: "Bedrock 1.20.x",
        releaseDate: "March 25, 2025",
        fileSize: "4.3 MB",
        filePath: "/api/texture-packs/1/download"
      },
      {
        name: "Visible Ores Texture Pack",
        version: "v1.1",
        compatibility: "Bedrock 1.19.x",
        releaseDate: "January 15, 2025",
        fileSize: "4.1 MB",
        filePath: "/api/texture-packs/2/download"
      },
      {
        name: "Visible Ores Texture Pack",
        version: "v1.0",
        compatibility: "Bedrock 1.18.x",
        releaseDate: "November 3, 2024",
        fileSize: "3.9 MB",
        filePath: "/api/texture-packs/3/download"
      }
    ];

    initialPacks.forEach(pack => {
      this.createTexturePack(pack);
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Texture Pack operations
  async getAllTexturePacks(): Promise<TexturePack[]> {
    return Array.from(this.packs.values()).sort((a, b) => {
      // Sort by version number (assuming vX.Y format)
      const versionA = parseFloat(a.version.substring(1));
      const versionB = parseFloat(b.version.substring(1));
      return versionB - versionA; // Descending order
    });
  }

  async getTexturePack(id: number): Promise<TexturePack | undefined> {
    return this.packs.get(id);
  }

  async getTexturePackByVersion(version: string): Promise<TexturePack | undefined> {
    return Array.from(this.packs.values()).find(
      (pack) => pack.version === version
    );
  }

  async createTexturePack(insertPack: InsertTexturePack): Promise<TexturePack> {
    const id = this.packCurrentId++;
    // Set initial download count to 300 for all texture packs
    const pack: TexturePack = { ...insertPack, id, downloadCount: 300 };
    this.packs.set(id, pack);
    return pack;
  }

  async incrementDownloadCount(id: number): Promise<TexturePack | undefined> {
    const pack = this.packs.get(id);
    if (pack) {
      // Since downloadCount has a default of 0 in the schema, we can safely add 1
      const downloadCount = typeof pack.downloadCount === 'number' ? pack.downloadCount + 1 : 1;
      const updatedPack = { ...pack, downloadCount };
      this.packs.set(id, updatedPack);
      return updatedPack;
    }
    return undefined;
  }

  async getDownloadCount(id: number): Promise<number> {
    const pack = this.packs.get(id);
    return pack?.downloadCount || 0;
  }
}

export const storage = new MemStorage();
