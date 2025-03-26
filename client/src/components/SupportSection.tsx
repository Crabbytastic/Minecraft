
import { FaEnvelope, FaDiscord } from 'react-icons/fa';

export default function SupportSection() {
  return (
    <section className="py-16 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-3 red-text text-center">Support</h2>
        <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-8"></div>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center gap-4 justify-center">
            <FaEnvelope className="text-2xl text-red-600" />
            <a href="mailto:Crabbytastic@gmail.com" className="text-white hover:text-red-400 transition-colors">
              Crabbytastic@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-4 justify-center">
            <FaDiscord className="text-2xl text-red-600" />
            <a href="https://discord.gg/q8W2bgRAXV" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors">
              Join our Discord Server
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
