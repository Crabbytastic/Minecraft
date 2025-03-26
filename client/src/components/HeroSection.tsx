import MinecraftButton from './MinecraftButton';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden star-field">
      {/* Animated stars background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            animationDelay: '2s',
            background: 'radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="mb-6 inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-60 animate-pulse"></div>
              <h1 className="relative text-5xl md:text-7xl mb-2 text-white font-bold">
                Visible<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> Ores</span>
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl mb-6 font-light text-gray-200">
              <span className="text-pink-400">Next-Gen</span> Minecraft Bedrock Texture Pack
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              Navigate the depths with enhanced visibility. Our cutting-edge texture pack 
              outlines valuable ores with <span className="text-pink-400">neon glows</span>, making 
              mining expeditions more efficient and visually stunning.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <MinecraftButton href="#download" variant="default" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3">
                Download Now
              </MinecraftButton>
              <MinecraftButton href="#preview" className="border border-pink-500 text-white hover:bg-pink-500/20 px-8 py-3">
                View Gallery
              </MinecraftButton>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur-lg opacity-50 animate-pulse"></div>
              <img
                src="/attached_assets/Screenshot_20250325_224106_File Manager +.jpg"
                alt="Visible Ores Logo"
                className="w-full h-full object-cover rounded-lg relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-pink-500 rounded-full blur-xl opacity-40"></div>
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-purple-600 rounded-full blur-xl opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>
      <div className="absolute top-10 left-10 w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 -rotate-45"></div>
    </section>
  );
}
