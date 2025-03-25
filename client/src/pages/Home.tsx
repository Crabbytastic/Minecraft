import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PreviewSection from "@/components/PreviewSection";
import DownloadSection from "@/components/DownloadSection";
import DiscordSection from "@/components/DiscordSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Add background pattern to body
    document.body.style.backgroundColor = "#1a1a1a";
    document.body.style.backgroundImage = "url('https://i.imgur.com/XJeKcOA.png')";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundSize = "64px";
    
    return () => {
      // Clean up
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundSize = "";
    };
  }, []);

  return (
    <div className="font-sans text-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PreviewSection />
      <DownloadSection />
      <DiscordSection />
      <Footer />
    </div>
  );
}
