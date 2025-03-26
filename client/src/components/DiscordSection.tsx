import MinecraftButton from './MinecraftButton';
import { FaDiscord, FaQuestion, FaComments, FaLightbulb, FaBell } from 'react-icons/fa';

export default function DiscordSection() {
  return (
    <section id="discord" className="py-20 futuristic-section relative">
      {/* Background particle effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 opacity-30" 
          style={{
            background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
          }}
        />
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 relative inline-block neon-text">
            <span className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 blur opacity-30 rounded-lg"></span>
            <span className="relative">Join Our Community</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4 mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fellow miners, share discoveries, and get instant support from our community
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <div className="cosmic-card p-8 backdrop-blur-md">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 mr-4">
                    <FaDiscord className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold neon-text">Visible Ores Discord</h3>
                </div>
                
                <p className="mb-8 text-gray-300">
                  Our Discord server is the central hub for all things Visible Ores. Get help with installation, 
                  share your mining discoveries, and be the first to hear about new updates.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-pink-500/20 mr-3">
                      <FaBell className="text-pink-400 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Update Alerts</h4>
                      <p className="text-gray-400">Get notified when new versions release</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-purple-500/20 mr-3">
                      <FaQuestion className="text-purple-400 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Tech Support</h4>
                      <p className="text-gray-400">Get help with installation & issues</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-pink-500/20 mr-3">
                      <FaComments className="text-pink-400 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Active Community</h4>
                      <p className="text-gray-400">Share screenshots & strategies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-purple-500/20 mr-3">
                      <FaLightbulb className="text-purple-400 text-lg" />
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
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <FaDiscord className="text-xl" /> Join Our Discord Server
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-pink-500/10 blur-xl"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"></div>
              
              <div className="cosmic-card neon-border overflow-hidden">
                <div className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 p-4 flex items-center border-b border-pink-500/30">
                  <FaDiscord className="text-white text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-white">Visible Ores Community</h3>
                </div>
                
                <div className="bg-black/50 backdrop-blur-sm p-6 space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">DM</div>
                    <div>
                      <p className="text-white font-medium">DiamondMiner<span className="text-gray-400 text-xs ml-2">Today at 2:45 PM</span></p>
                      <div className="mt-1 p-3 rounded-lg bg-gray-800/50 border border-pink-500/10">
                        <p className="text-gray-300">Just found a huge diamond vein thanks to Visible Ores! The outlines make mining so much more efficient 💎</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">CM</div>
                    <div>
                      <p className="text-white font-medium">CraftMaster<span className="text-gray-400 text-xs ml-2">Today at 3:12 PM</span></p>
                      <div className="mt-1 p-3 rounded-lg bg-gray-800/50 border border-purple-500/10">
                        <p className="text-gray-300">This texture pack is a game changer! Especially for deep mining. Works perfectly on all my devices.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm">RW</div>
                    <div>
                      <p className="text-white font-medium">RedstoneWizard<span className="text-gray-400 text-xs ml-2">Today at 4:01 PM</span></p>
                      <div className="mt-1 p-3 rounded-lg bg-gray-800/50 border border-red-500/10">
                        <p className="text-gray-300">Anyone else loving how the ancient debris stands out in the Nether? So much easier to find now!</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-black/60 backdrop-blur-sm border-t border-pink-500/20">
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-800/70 rounded-md px-4 py-3 text-gray-400 border border-gray-700/50">
                      Join the conversation...
                    </div>
                    <button className="ml-3 w-10 h-10 flex items-center justify-center rounded-md bg-pink-500/20 text-pink-400 hover:bg-pink-500/30 transition-colors duration-200">
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
