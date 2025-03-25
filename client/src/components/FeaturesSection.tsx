export default function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-search",
      title: "Enhanced Visibility",
      description: "Clear outlines around all ore blocks make them instantly visible, even in dark caves and tight spaces."
    },
    {
      icon: "fas fa-bolt",
      title: "Performance Friendly",
      description: "Optimized textures that don't impact game performance while making your mining expeditions more efficient."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Bedrock Compatible",
      description: "Specifically designed for Minecraft Bedrock Edition on all platforms - mobile, console, and Windows 10/11."
    },
    {
      icon: "fas fa-palette",
      title: "Faithful Design",
      description: "Maintains the original Minecraft aesthetic while adding subtle outlines that don't disrupt the game's visual style."
    },
    {
      icon: "fas fa-gem",
      title: "All Ores Supported",
      description: "Covers all ore types including diamond, gold, iron, emerald, lapis lazuli, redstone, copper, and Nether ores."
    },
    {
      icon: "fas fa-sync",
      title: "Regular Updates",
      description: "Continuously updated to support the latest Minecraft Bedrock versions and newly added ore types."
    }
  ];

  return (
    <section id="features" className="py-16 bg-[#2a2a2a]">
      <div className="container mx-auto px-4">
        <h2 className="font-['Minecraft'] text-3xl md:text-4xl text-center mb-12">
          Pack Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-[#2a2a2a] border-2 border-black p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
              style={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)"
              }}
            >
              <div className="flex items-center mb-4">
                <i className={`${feature.icon} text-[#44bd32] text-2xl mr-4`}></i>
                <h3 className="font-['Minecraft'] text-xl">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
