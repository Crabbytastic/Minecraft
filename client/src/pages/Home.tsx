import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreviewSection from "@/components/PreviewSection";
import { FaDownload, FaChevronDown } from "react-icons/fa";
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
  const downloadSectionRef = useRef<HTMLDivElement>(null);

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

  const scrollToDownload = () => {
    if (downloadSectionRef.current) {
      downloadSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fetch texture pack data
  const { data: texturePacks } = useQuery<TexturePack[]>({
    queryKey: ['/api/texture-packs'],
  });

  const texturePack = texturePacks?.[0];

  const handleDownload = async () => {
    if (texturePack) {
      try {
        // Track the download
        await trackDownload(texturePack.id);
        
        // Get the base URL dynamically
        const baseUrl = window.location.origin;
        
        // Construct the full download URL
        const downloadUrl = texturePack.filePath.startsWith('http') 
          ? texturePack.filePath 
          : `${baseUrl}${texturePack.filePath}`;
        
        console.log('Starting download from:', downloadUrl);
        
        // Create a hidden anchor element for better download handling
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'Visible Ores.mcpack');
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error during download:", error);
        
        // Fallback method if the above fails
        window.open(texturePack.filePath, '_blank');
      }
    }
  };

  return (
    <div className="font-sans text-gray-100 min-h-screen bg-black">
      <Navbar />
      
      {/* Preview Gallery Section First */}
      <div>
        <PreviewSection />
      </div>
      
      {/* Download section */}
      <div ref={downloadSectionRef} className="flex flex-col items-center justify-center min-h-screen relative">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-full h-full opacity-10"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 0, 0, 0.5) 0%, transparent 70%)',
            }}
          />
        </div>
        
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-6xl md:text-8xl mb-6 red-text font-bold">Visible Ores</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Minecraft Bedrock Texture Pack
          </p>
        </div>
        
        <button 
          onClick={handleDownload}
          className="red-button text-3xl px-12 py-6 flex items-center gap-3 animate-pulse-red z-10"
        >
          <FaDownload size={30} /> Download Now
        </button>
        
        <div className="mt-4 text-gray-400 z-10">
          300+ downloads
        </div>
        <div className="mt-2 text-gray-500 text-sm z-10">
          Please press only once - download will start automatically
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
