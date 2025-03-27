import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      src: "/attached_assets/Screenshot_20250325_225433_Minecraft.jpg",
      alt: "Minecraft ore with visible outline",
      title: "Enhanced Ore Visibility",
      description: "Clearly see ore blocks with distinct outlines"
    },
    {
      src: "/attached_assets/Screenshot_20250325_225251_Minecraft.jpg",
      alt: "Diamond ore in cave",
      title: "Diamond Ore Detection",
      description: "Never miss diamonds in dark caves again"
    },
    {
      src: "/attached_assets/Screenshot_20250325_225539_Minecraft.jpg",
      alt: "Nether ore detection",
      title: "Nether Mining",
      description: "Find ancient debris and other nether ores easily"
    },
    {
      src: "/attached_assets/Screenshot_20250325_225714_Minecraft.jpg",
      alt: "Multiple ore types",
      title: "All Ore Types Supported",
      description: "All vanilla ore types have clear outlines for easy detection"
    }
  ];

  return (
    <section id="preview" className="py-24 futuristic-section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 relative inline-block neon-text">
            <span className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 blur opacity-30 rounded-lg"></span>
            <span className="relative">Preview Gallery</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4 mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how Visible Ores enhances your Minecraft experience
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="cosmic-card p-6 lg:p-8 backdrop-blur-md relative">
            {/* Carousel */}
            <Carousel className="w-full max-w-4xl mx-auto" 
              opts={{
                loop: true,
                align: "center",
              }}
              setApi={(api) => {
                api?.on("select", () => {
                  setActiveIndex(api.selectedScrollSnap());
                });
              }}
            >
              <CarouselContent>
                {allImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="border-none bg-transparent">
                        <CardContent className="flex items-center justify-center p-0">
                          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                              <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                                <p className="text-gray-200 text-sm">{image.description}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/70 text-white border-none" />
              <CarouselNext className="right-2 bg-black/50 hover:bg-black/70 text-white border-none" />
            </Carousel>
            
            {/* Thumbnails */}
            <div className="mt-6 flex justify-center gap-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const carouselApi = document.querySelector('[data-embla-api]');
                    // @ts-ignore
                    if (carouselApi?.__emblaApi) {
                      // @ts-ignore
                      carouselApi.__emblaApi.scrollTo(index);
                    }
                  }}
                  className={`
                    w-16 h-16 rounded-md overflow-hidden transition-all
                    ${activeIndex === index 
                      ? 'ring-2 ring-pink-500 scale-105' 
                      : 'opacity-70 hover:opacity-100'
                    }
                  `}
                >
                  <img 
                    src={image.src} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}