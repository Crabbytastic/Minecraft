import { useState } from "react";

interface ImageItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function PreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const allImages: ImageItem[] = [
    {
      src: "/preview/Screenshot_20240325_224106_Minecraft.jpg",
      alt: "Display of all ores",
      title: "All Ores Display",
      description: "See all ores with their unique colored outlines"
    },
    {
      src: "/preview/Screenshot_20240325_224239_Minecraft.jpg",
      alt: "Nether ores",
      title: "Nether Mining",
      description: "Ancient debris and nether gold are clearly visible"
    },
    {
      src: "/preview/Screenshot_20240325_224335_Minecraft.jpg",
      alt: "Diamond ore outline",
      title: "Diamond Mining",
      description: "Diamond ores stand out with bright outlines"
    }
  ];

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
                  index === activeIndex ? 'ring-2 ring-red-500' : ''
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