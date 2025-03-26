import { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function PreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const gameplayImages: ImageItem[] = [
    {
      src: "/preview/Screenshot_20250325_225251_Minecraft.jpg",
      alt: "Visible Ores in a cave",
      title: "Cave Exploration",
      description: "Ores are clearly visible with bright outlines in dark caves"
    },
    {
      src: "/preview/Screenshot_20250325_225433_Minecraft.jpg",
      alt: "Diamond ore with visible outline",
      title: "Diamond Mining",
      description: "Diamond ores stand out with bright outlines"
    },
    {
      src: "/preview/Screenshot_20250325_225539_Minecraft.jpg",
      alt: "Various ores in cave",
      title: "Multiple Ores",
      description: "All ore types have unique, clear outlines for easy identification"
    }
  ];

  const netherImages: ImageItem[] = [
    {
      src: "/preview/Screenshot_20250325_225714_Minecraft.jpg",
      alt: "Ancient debris and nether gold",
      title: "Nether Mining",
      description: "Ancient debris and other nether ores are enhanced with outlines"
    }
  ];

  const allImages = [...gameplayImages, ...netherImages];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Preview</h2>

        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={allImages[activeIndex].src}
              alt={allImages[activeIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${
                  index === activeIndex ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}