import { useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[#1a1a1a] border-b-2 border-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.imgur.com/XJeKcOA.png"
              alt="Visible Ores Logo"
              className="h-10 w-10 border-2 border-black mr-3"
            />
            <h1 className="font-['Minecraft'] text-xl md:text-2xl tracking-wider">
              Visible Ores
            </h1>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-['Minecraft']">
            <a href="#home" className="hover:text-[#44bd32] transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-[#44bd32] transition-colors">
              Features
            </a>
            <a href="#preview" className="hover:text-[#44bd32] transition-colors">
              Preview
            </a>
            <a href="#download" className="hover:text-[#44bd32] transition-colors">
              Download
            </a>
            <a href="#discord" className="hover:text-[#44bd32] transition-colors">
              Discord
            </a>
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-[#2a2a2a] border-t-2 border-black`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-2 font-['Minecraft'] text-center">
            <a 
              href="#home" 
              className="py-2 hover:bg-[#1a1a1a] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="py-2 hover:bg-[#1a1a1a] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#preview" 
              className="py-2 hover:bg-[#1a1a1a] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preview
            </a>
            <a 
              href="#download" 
              className="py-2 hover:bg-[#1a1a1a] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </a>
            <a 
              href="#discord" 
              className="py-2 hover:bg-[#1a1a1a] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
