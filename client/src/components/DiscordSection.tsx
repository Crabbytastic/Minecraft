import MinecraftButton from './MinecraftButton';

export default function DiscordSection() {
  return (
    <section id="discord" className="py-16 bg-[#5865F2]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="font-['Minecraft'] text-3xl md:text-4xl text-white mb-4">
                Join Our Discord
              </h2>
              <p className="text-white opacity-90 mb-6">
                Connect with other Visible Ores users, get support, share screenshots, and stay updated on the latest pack developments.
              </p>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-center">
                  <i className="fab fa-discord mr-3 text-lg"></i>
                  <span>Get announcements for new updates</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-question-circle mr-3 text-lg"></i>
                  <span>Ask questions and get help with installation</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-camera mr-3 text-lg"></i>
                  <span>Share your mining adventures</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-lightbulb mr-3 text-lg"></i>
                  <span>Suggest new features for future updates</span>
                </li>
              </ul>
              <a 
                href="https://discord.gg/visibleores" 
                target="_blank" 
                rel="noopener noreferrer"
                className="minecraft-btn bg-white text-[#5865F2] hover:bg-gray-100 inline-flex items-center relative inline-block border-2 border-black py-2 px-4 text-uppercase font-['Minecraft'] shadow-[inset_-2px_-4px_#0006,_inset_2px_2px_#FFF7] transition-transform hover:-translate-y-0.5"
              >
                <i className="fab fa-discord mr-2"></i> Join Discord Server
              </a>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg relative border-4 border-black shadow-[inset_-2px_-4px_#0006,_inset_2px_2px_#FFF7]">
                <div className="bg-[#36393f] p-4 flex items-center border-b border-gray-700">
                  <i className="fab fa-discord text-white text-2xl mr-3"></i>
                  <h3 className="font-['Minecraft'] text-white">Visible Ores Community</h3>
                </div>
                <div className="bg-[#36393f] p-4">
                  <div className="flex items-start mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTM4Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=40"
                      alt="Discord User" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-white font-semibold">DiamondMiner</p>
                      <p className="text-gray-300 text-sm">Just found a huge diamond vein thanks to Visible Ores! So much easier to spot now.</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2FtaW5nfHx8fHx8MTY5MjM3MTM4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=40"
                      alt="Discord User" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-white font-semibold">CraftMaster</p>
                      <p className="text-gray-300 text-sm">This texture pack is a game changer! Works perfectly on my Xbox.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2FtZXJ8fHx8fHwxNjkyMzcxMzk3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=40"
                      alt="Discord User" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-white font-semibold">RedstoneWizard</p>
                      <p className="text-gray-300 text-sm">Anyone else loving how the ancient debris stands out in the Nether? So much easier to find now!</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#40444b] p-3 flex items-center">
                  <div className="flex-1 bg-[#202225] rounded-md px-3 py-2 text-gray-400">
                    Join the conversation...
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
