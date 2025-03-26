
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function PreviewSection() {
  const [activeTab, setActiveTab] = useState('gameplay');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const gameplayImages: ImageItem[] = [
    {
      src: "attached_assets/Screenshot_20250325_225251_Minecraft.jpg",
      alt: "Visible Ores in a cave",
      title: "Cave Exploration",
      description: "Ores are clearly visible with bright outlines in dark caves"
    },
    {
      src: "attached_assets/Screenshot_20250325_225433_Minecraft.jpg",
      alt: "Diamond ore with visible outline",
      title: "Diamond Mining",
      description: "Diamond ores stand out with bright outlines"
    },
    {
      src: "attached_assets/Screenshot_20250325_225539_Minecraft.jpg",
      alt: "Various ores in cave",
      title: "Multiple Ores",
      description: "All ore types have unique, clear outlines for easy identification"
    }
  ];
  
  const netherImages: ImageItem[] = [
    {
      src: "attached_assets/Screenshot_20250325_225714_Minecraft.jpg",
      alt: "Ancient debris and nether gold",
      title: "Nether Mining",
      description: "Ancient debris and other nether ores are enhanced with outlines"
    },
    {
      src: "attached_assets/Screenshot_20250325_225251_Minecraft.jpg",
      alt: "Deep cave mining",
      title: "Deep Mining",
      description: "Spot rare ores even in the darkest environments"
    },
    {
      src: "attached_assets/Screenshot_20250325_225539_Minecraft.jpg",
      alt: "Various ore textures",
      title: "Texture Details",
      description: "Each ore type has a unique outline pattern"
    }
  ];

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

  const nextImage = () => {
    const images = getActiveImages();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = getActiveImages();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  const activeImages = getActiveImages();
  const currentImage = activeImages[currentImageIndex];

  return (
    <section id="preview" className="py-24 futuristic-section relative">
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

        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('gameplay')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'gameplay' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Gameplay
          </button>
          <button 
            onClick={() => setActiveTab('nether')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'nether' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Nether
          </button>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
              <p className="text-gray-300">{currentImage.description}</p>
            </div>
          </div>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          >
            <FaChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          >
            <FaChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {activeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
