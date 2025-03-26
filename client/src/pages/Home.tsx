import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaDownload } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { trackDownload } from "@/utils/downloadCounter";

// Define TypeScript interface for texture pack data
interface TexturePack {
  id: number;
  name: string;
  version: string;
  compatibility: string;
  releaseDate: string;
  fileSize: string;
  downloadCount: number;
  filePath: string;
}

export default function Home() {
  useEffect(() => {
    // Set black background
    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundImage = "none";
    
    return () => {
      // Clean up
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
    };
  }, []);

  // Fetch texture pack data
  const { data: texturePacks } = useQuery<TexturePack[]>({
    queryKey: ['/api/texture-packs'],
  });

  const texturePack = texturePacks?.[0];

  const handleDownload = () => {
    if (texturePack) {
      // Track the download and directly navigate to the download URL
      trackDownload(texturePack.id);
      
      // Directly navigate to the download URL to trigger the download
      window.location.href = texturePack.filePath;
    }
  };

  return (
    <div className="font-sans text-gray-100 min-h-screen bg-black">
      <Navbar />
      
      {/* Centered download button */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl mb-6 red-text font-bold">Visible Ores</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Minecraft Bedrock Texture Pack
          </p>
        </div>
        
        <button 
          onClick={handleDownload}
          className="red-button text-3xl px-12 py-6 flex items-center gap-3 animate-pulse-red"
        >
          <FaDownload size={30} /> Download Now
        </button>
        
        <div className="mt-4 text-gray-400">
          300+ downloads
        </div>
        <div className="mt-2 text-gray-500 text-sm">
          Please press only once - download will start automatically
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
