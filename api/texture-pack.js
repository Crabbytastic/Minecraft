// This is a serverless function for Vercel

export default function handler(req, res) {
  const texturePack = {
    name: "Visible Ores Texture Pack",
    version: "1.0.0",
    compatibility: "Minecraft Bedrock 1.20+",
    releaseDate: "March 26, 2025",
    fileSize: "698 KB",
    downloadCount: "300+",
    description: "A texture pack that makes ores in Minecraft Bedrock more visible with outlines."
  };
  
  res.status(200).json(texturePack);
}