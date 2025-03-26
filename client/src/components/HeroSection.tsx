import { FaDownload, FaImages } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="mb-6 inline-block relative">
              <h1 className="text-5xl md:text-7xl mb-2 red-text font-bold">
                Visible<span className="text-white"> Ores</span>
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl mb-6 font-light text-gray-200">
              <span className="text-red-600">Enhanced</span> Minecraft Bedrock Texture Pack
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              Navigate the depths with enhanced visibility. Our texture pack 
              outlines valuable ores with <span className="text-red-600">bright outlines</span>, making 
              mining expeditions more efficient and visually stunning.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <a 
                href="#download" 
                className="red-button flex items-center justify-center gap-2 px-8 py-3 text-lg animate-pulse-red"
              >
                <FaDownload /> Download Now
              </a>
              <a 
                href="#preview" 
                className="red-border bg-black px-8 py-3 text-lg flex items-center justify-center gap-2"
              >
                <FaImages /> View Gallery
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute -inset-1 bg-red-600 rounded-md blur opacity-40"></div>
              <div className="red-border overflow-hidden">
                <img
                  src="/attached_assets/Screenshot_20250325_224106_File Manager +.jpg"
                  alt="Visible Ores Logo"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
      <div className="absolute top-10 left-10 w-20 h-1 bg-red-600 rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-20 h-1 bg-red-600 -rotate-45"></div>
    </section>
  );
}
