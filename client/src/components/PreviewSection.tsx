import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
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
  
  const scrollToDownload = () => {
    // Find the download section by scrolling to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

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
    <section id="preview" className="pt-4 pb-16 md:pb-24 futuristic-section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-red-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-red-900/20 to-transparent"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 0, 0, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block neon-text">
            <span className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 blur opacity-30 rounded-lg"></span>
            <span className="relative">Preview Gallery</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4 mb-4"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            See how Visible Ores enhances your Minecraft experience with easy-to-spot mineral outlines
          </p>
          
          {/* Scroll down to download text with animation */}
          <button 
            onClick={scrollToDownload}
            className="text-red-500 text-lg md:text-xl glow-text-red font-medium flex items-center justify-center mx-auto mt-2 mb-6 hover:scale-105 transition-all group animate-float"
          >
            <span className="animate-letter-float">S</span>
            <span className="animate-letter-float" style={{ animationDelay: "50ms" }}>c</span>
            <span className="animate-letter-float" style={{ animationDelay: "100ms" }}>r</span>
            <span className="animate-letter-float" style={{ animationDelay: "150ms" }}>o</span>
            <span className="animate-letter-float" style={{ animationDelay: "200ms" }}>l</span>
            <span className="animate-letter-float" style={{ animationDelay: "250ms" }}>l</span>
            <span className="animate-letter-float" style={{ animationDelay: "300ms" }}> </span>
            <span className="animate-letter-float" style={{ animationDelay: "350ms" }}>D</span>
            <span className="animate-letter-float" style={{ animationDelay: "400ms" }}>o</span>
            <span className="animate-letter-float" style={{ animationDelay: "450ms" }}>w</span>
            <span className="animate-letter-float" style={{ animationDelay: "500ms" }}>n</span>
            <span className="animate-letter-float" style={{ animationDelay: "550ms" }}> </span>
            <span className="animate-letter-float" style={{ animationDelay: "600ms" }}>t</span>
            <span className="animate-letter-float" style={{ animationDelay: "650ms" }}>o</span>
            <span className="animate-letter-float" style={{ animationDelay: "700ms" }}> </span>
            <span className="animate-letter-float" style={{ animationDelay: "750ms" }}>D</span>
            <span className="animate-letter-float" style={{ animationDelay: "800ms" }}>o</span>
            <span className="animate-letter-float" style={{ animationDelay: "850ms" }}>w</span>
            <span className="animate-letter-float" style={{ animationDelay: "900ms" }}>n</span>
            <span className="animate-letter-float" style={{ animationDelay: "950ms" }}>l</span>
            <span className="animate-letter-float" style={{ animationDelay: "1000ms" }}>o</span>
            <span className="animate-letter-float" style={{ animationDelay: "1050ms" }}>a</span>
            <span className="animate-letter-float" style={{ animationDelay: "1100ms" }}>d</span>
            <FaChevronDown className="ml-2 animate-bounce text-red-500 group-hover:text-red-400" />
          </button>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="cosmic-card p-4 lg:p-6 backdrop-blur-md relative">
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
                          <div className="relative aspect-video w-full overflow-hidden rounded-xl red-border">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                              <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                                <h3 className="text-xl font-semibold text-red-500">{image.title}</h3>
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
              
              <CarouselPrevious className="left-2 bg-black/50 hover:bg-red-900/30 text-white border border-red-500/30" />
              <CarouselNext className="right-2 bg-black/50 hover:bg-red-900/30 text-white border border-red-500/30" />
            </Carousel>
            
            {/* Thumbnails */}
            <div className="mt-6 flex justify-center gap-2 flex-wrap">
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
                      ? 'ring-2 ring-red-500 scale-105' 
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