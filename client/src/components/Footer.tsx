export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-['Minecraft'] text-xl text-white mb-2">Visible Ores</h2>
            <p className="text-gray-400 text-sm">A texture pack for Minecraft Bedrock Edition</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://discord.gg/visibleores" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#44bd32] transition-colors">
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#44bd32] transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#44bd32] transition-colors">
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#44bd32] transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Visible Ores © {new Date().getFullYear()}. Not affiliated with Mojang Studios. Minecraft is a trademark of Mojang Studios.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#44bd32] transition-colors">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-400 hover:text-[#44bd32] transition-colors">Terms of Use</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-400 hover:text-[#44bd32] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
