import { useState } from "react";
import { FaDiscord, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-black border-b border-red-600/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl tracking-wider red-text font-bold">
              Visible Ores
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a 
              href="https://discord.gg/q8W2bgRAXV" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-red-600 transition-colors flex items-center gap-2"
            >
              <FaDiscord /> Discord
            </a>
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-black border-t border-red-600/30`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-2 text-center">
            <a 
              href="https://discord.gg/q8W2bgRAXV" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-2 text-white hover:text-red-600 transition-colors flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaDiscord /> Discord
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
