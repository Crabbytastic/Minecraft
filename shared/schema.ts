import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Texture pack schema
export const texturePacks = pgTable("texture_packs", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  version: text("version").notNull(),
  compatibility: text("compatibility").notNull(),
  releaseDate: text("release_date").notNull(),
  fileSize: text("file_size").notNull(),
  downloadCount: integer("download_count").default(0),
  filePath: text("file_path").notNull(),
});

export const insertTexturePackSchema = createInsertSchema(texturePacks).omit({
  id: true,
  downloadCount: true,
});

export type InsertTexturePack = z.infer<typeof insertTexturePackSchema>;
export type TexturePack = typeof texturePacks.$inferSelect;
