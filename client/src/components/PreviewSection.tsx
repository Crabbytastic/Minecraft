import { useState } from 'react';
import { FaCube, FaGem, FaFire, FaMountain } from 'react-icons/fa';

interface ImageItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function PreviewSection() {
  const [activeTab, setActiveTab] = useState('gameplay');
  
  const gameplayImages: ImageItem[] = [
    {
      src: "/attached_assets/Screenshot_20250325_225251_Minecraft.jpg",
      alt: "Visible Ores in a cave",
      title: "Cave Exploration",
      description: "Ores are clearly visible with bright outlines in dark caves"
    },
    {
      src: "/attached_assets/Screenshot_20250325_225433_Minecraft.jpg",
      alt: "Diamond ore with visible outline",
      title: "Diamond Mining",
      description: "Diamond ores stand out with bright outlines"
    },
    {
      src: "/attached_assets/Screenshot_20250325_225539_Minecraft.jpg",
      alt: "Various ores in cave",
      title: "Multiple Ores",
      description: "All ore types have unique, clear outlines for easy identification"
    }
  ];
  
  const netherImages: ImageItem[] = [
    {
      src: "/attached_assets/Screenshot_20250325_225714_Minecraft.jpg",
      alt: "Ancient debris and nether gold",
      title: "Nether Mining",
      description: "Ancient debris and other nether ores are enhanced with outlines"
    },
    {
      src: "/attached_assets/Screenshot_20250325_225251_Minecraft.jpg",
      alt: "Deep cave mining",
      title: "Deep Mining",
      description: "Spot rare ores even in the darkest environments"
    },
    {
      src: "/attached_assets/Screenshot_20250325_225539_Minecraft.jpg",
      alt: "Various ore textures",
      title: "Texture Details",
      description: "Each ore type has a unique outline pattern"
    }
  ];
  
  // Get active images based on selected tab
  const getActiveImages = () => {
    switch (activeTab) {
      case 'gameplay':
        return gameplayImages;
      case 'nether':
        return netherImages;
      default:
        return gameplayImages;
    }
  };
  
  return (
    <section id="preview" className="py-24 futuristic-section relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.4), transparent 20%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.4), transparent 20%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 relative inline-block neon-text">
            <span className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 blur opacity-30 rounded-lg"></span>
            <span className="relative">Preview Gallery</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4 mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how Visible Ores makes mining more efficient and enjoyable with enhanced ore visibility
          </p>
        </div>
        
        {/* Gallery Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex cosmic-card overflow-hidden">
            <button 
              className={`px-6 py-3 font-semibold text-white flex items-center gap-2 transition-colors ${
                activeTab === 'gameplay' 
                  ? 'bg-gradient-to-r from-pink-600/40 to-purple-600/40 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setActiveTab('gameplay')}
            >
              <FaCube className="text-pink-400" /> Gameplay
            </button>
            <button 
              className={`px-6 py-3 font-semibold text-white flex items-center gap-2 transition-colors ${
                activeTab === 'nether' 
                  ? 'bg-gradient-to-r from-pink-600/40 to-purple-600/40 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setActiveTab('nether')}
            >
              <FaFire className="text-pink-400" /> Nether
            </button>
          </div>
        </div>
        
        {/* Gallery Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {getActiveImages().map((image, index) => (
            <div key={index} className="group relative overflow-hidden cosmic-card transform transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20">
              {/* Decorative elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm rounded-lg -z-10"></div>
              
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 bg-black/50 backdrop-blur-sm border-t border-pink-500/20">
                <h4 className="text-lg font-bold text-white mb-1 neon-text">{image.title}</h4>
                <p className="text-gray-300">{image.description}</p>
              </div>
              
              <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaGem />
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-16">
          <a 
            href="#download" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
          >
            <FaCube className="text-xl" /> Download and Try It Now
          </a>
        </div>
      </div>
    </section>
  );
}
