import { useState } from 'react';

interface ImageItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function PreviewSection() {
  const [activeTab, setActiveTab] = useState('diamond');
  
  const diamondImages: ImageItem[] = [
    {
      src: "https://images.unsplash.com/photo-1627646845481-b2d8f1d87c24?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTIwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      alt: "Diamond ore with visible outline",
      title: "Diamond Ore",
      description: "Clear outline makes diamonds stand out in caves"
    },
    {
      src: "https://images.unsplash.com/photo-1533294455009-a77b7557d979?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTIzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      alt: "Diamond ore in dark cave",
      title: "Deep Cave Mining",
      description: "Spot diamonds even in the darkest caves"
    },
    {
      src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTI0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      alt: "Diamond ore vein",
      title: "Diamond Vein",
      description: "Complete diamond vein visibility"
    }
  ];
  
  const goldImages: ImageItem[] = [
    {
      src: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTI1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      alt: "Gold ore with visible outline",
      title: "Gold Ore",
      description: "Enhanced gold ore visibility"
    },
    {
      src: "https://images.unsplash.com/photo-1624118136234-32bd16865ede?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTI4MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      alt: "Nether gold ore",
      title: "Nether Gold",
      description: "Nether gold ore with clear outlines"
    },
    {
      src: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTI4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      alt: "Gold ore comparison",
      title: "Before & After",
      description: "Compare vanilla vs. Visible Ores"
    }
  ];
  
  const otherImages: ImageItem[] = [
    {
      src: "https://images.unsplash.com/photo-1615841222531-eebd6dd9e2a3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTMwNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      alt: "Iron ore with visible outline",
      title: "Iron Ore",
      description: "Outlined iron ore textures"
    },
    {
      src: "https://images.unsplash.com/photo-1691296053115-dc6abf3e758e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTMxMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      alt: "Redstone ore",
      title: "Redstone Ore",
      description: "Redstone with bright outlines"
    },
    {
      src: "https://images.unsplash.com/photo-1635370612821-ea117de17ec9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTMyMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
      alt: "Lapis lazuli ore",
      title: "Lapis Lazuli",
      description: "Enhanced lapis visibility"
    }
  ];
  
  // Get active images based on selected tab
  const getActiveImages = () => {
    switch (activeTab) {
      case 'diamond':
        return diamondImages;
      case 'gold':
        return goldImages;
      case 'other':
        return otherImages;
      default:
        return diamondImages;
    }
  };
  
  return (
    <section id="preview" className="py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <h2 className="font-['Minecraft'] text-3xl md:text-4xl text-center mb-12">
          Preview Gallery
        </h2>
        
        {/* Gallery Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#2a2a2a] border-2 border-black rounded-sm overflow-hidden">
            <button 
              className={`px-4 py-2 font-['Minecraft'] text-white ${activeTab === 'diamond' ? 'bg-[#44bd32]' : ''} border-r-2 border-black`}
              onClick={() => setActiveTab('diamond')}
            >
              Diamond
            </button>
            <button 
              className={`px-4 py-2 font-['Minecraft'] text-white ${activeTab === 'gold' ? 'bg-[#44bd32]' : ''} border-r-2 border-black`}
              onClick={() => setActiveTab('gold')}
            >
              Gold
            </button>
            <button 
              className={`px-4 py-2 font-['Minecraft'] text-white ${activeTab === 'other' ? 'bg-[#44bd32]' : ''}`}
              onClick={() => setActiveTab('other')}
            >
              Other Ores
            </button>
          </div>
        </div>
        
        {/* Gallery Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getActiveImages().map((image, index) => (
            <div key={index} className="relative border-4 border-black shadow-[inset_-2px_-4px_#0006,_inset_2px_2px_#FFF7]">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
              <div className="bg-black bg-opacity-60 p-2">
                <h4 className="font-['Minecraft'] text-sm">{image.title}</h4>
                <p className="text-xs text-gray-300">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
