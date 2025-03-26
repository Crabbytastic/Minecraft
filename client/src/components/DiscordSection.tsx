import { FaDiscord, FaQuestion, FaComments, FaLightbulb, FaBell } from 'react-icons/fa';

export default function DiscordSection() {
  return (
    <section id="discord" className="py-20 section relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 red-text">
            Join Our Community
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fellow miners, share discoveries, and get instant support from our community
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <div className="panel p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center bg-black border-2 border-red-600 mr-4">
                    <FaDiscord className="text-red-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold red-text">Visible Ores Discord</h3>
                </div>
                
                <p className="mb-8 text-gray-300">
                  Our Discord server is the central hub for all things Visible Ores. Get help with installation, 
                  share your mining discoveries, and be the first to hear about new updates.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black border border-red-600 mr-3">
                      <FaBell className="text-red-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Update Alerts</h4>
                      <p className="text-gray-400">Get notified when new versions release</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black border border-red-600 mr-3">
                      <FaQuestion className="text-red-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Tech Support</h4>
                      <p className="text-gray-400">Get help with installation & issues</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black border border-red-600 mr-3">
                      <FaComments className="text-red-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Active Community</h4>
                      <p className="text-gray-400">Share screenshots & strategies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black border border-red-600 mr-3">
                      <FaLightbulb className="text-red-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Feature Requests</h4>
                      <p className="text-gray-400">Suggest improvements & ideas</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://discord.gg/q8W2bgRAXV" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="red-button inline-flex items-center justify-center gap-2 py-3 px-8"
                >
                  <FaDiscord className="text-xl" /> Join Our Discord Server
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="panel red-border overflow-hidden">
                <div className="bg-black p-4 flex items-center border-b-2 border-red-600">
                  <FaDiscord className="text-red-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-white">Visible Ores Community</h3>
                </div>
                
                <div className="bg-black p-6 space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-black border-2 border-red-600 flex items-center justify-center text-white font-bold text-sm">DM</div>
                    <div>
                      <p className="text-white font-medium">DiamondMiner<span className="text-gray-400 text-xs ml-2">Today at 2:45 PM</span></p>
                      <div className="mt-1 p-3 rounded-md bg-black border border-red-600/30">
                        <p className="text-gray-300">Just found a huge diamond vein thanks to Visible Ores! The outlines make mining so much more efficient 💎</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-black border-2 border-red-600 flex items-center justify-center text-white font-bold text-sm">CM</div>
                    <div>
                      <p className="text-white font-medium">CraftMaster<span className="text-gray-400 text-xs ml-2">Today at 3:12 PM</span></p>
                      <div className="mt-1 p-3 rounded-md bg-black border border-red-600/30">
                        <p className="text-gray-300">This texture pack is a game changer! Especially for deep mining. Works perfectly on all my devices.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-black border-2 border-red-600 flex items-center justify-center text-white font-bold text-sm">RW</div>
                    <div>
                      <p className="text-white font-medium">RedstoneWizard<span className="text-gray-400 text-xs ml-2">Today at 4:01 PM</span></p>
                      <div className="mt-1 p-3 rounded-md bg-black border border-red-600/30">
                        <p className="text-gray-300">Anyone else loving how the ancient debris stands out in the Nether? So much easier to find now!</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-black border-t-2 border-red-600">
                  <div className="flex items-center">
                    <div className="flex-1 bg-black/70 rounded-md px-4 py-3 text-gray-400 border border-red-600/30">
                      Join the conversation...
                    </div>
                    <button className="ml-3 w-10 h-10 flex items-center justify-center rounded-md bg-black border border-red-600 text-red-600 hover:bg-red-900/20 transition-colors duration-200">
                      <FaDiscord className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
