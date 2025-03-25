import MinecraftButton from './MinecraftButton';

export default function HeroSection() {
  return (
    <section id="home" className="py-16 md:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-15" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-['Minecraft'] text-4xl md:text-6xl mb-6 text-[#44bd32] leading-tight">
            Visible Ores
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-light">
            A texture pack that outlines ores in Minecraft Bedrock Edition
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Discover ore veins easily with highlighted outlines. Never miss diamond, gold, emerald, or any other valuable resource again!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MinecraftButton href="#download" variant="green">
              Download Now
            </MinecraftButton>
            <MinecraftButton href="#preview" variant="blue">
              See Previews
            </MinecraftButton>
          </div>
        </div>
      </div>
    </section>
  );
}
