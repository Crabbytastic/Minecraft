import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { FaDownload, FaSpinner, FaExclamationTriangle, FaCheck, FaGamepad, FaCube, FaHistory, FaMobileAlt, FaTabletAlt, FaDesktop } from 'react-icons/fa';

interface TexturePack {
  id: number;
  name: string;
  version: string;
  compatibility: string;
  releaseDate: string;
  fileSize: string;
  downloadCount: number;
  filePath: string;
}

export default function DownloadSection() {
  // Fetch texture packs
  const { data: texturePacks, isLoading, isError } = useQuery<TexturePack[]>({
    queryKey: ['/api/texture-packs'],
  });

  // Get latest pack
  const latestPack = texturePacks && texturePacks.length > 0 ? texturePacks[0] : null;
  
  // Get older packs
  const olderPacks = texturePacks && texturePacks.length > 1 
    ? texturePacks.slice(1) 
    : [];
  
  // Download mutation for tracking downloads
  const downloadMutation = useMutation({
    mutationFn: async (id: number) => {
      // The API now handles both incrementing the count and serving the file
      // Simply redirect to the download endpoint
      window.location.href = `/api/texture-packs/${id}/download`;
      return id;
    }
  });

  // Handle download
  const handleDownload = (id: number) => {
    // Use the downloadMutation to increment the count and trigger the download
    downloadMutation.mutate(id);
  };

  return (
    <section id="download" className="py-24 futuristic-section relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 relative inline-block neon-text">
            <span className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 blur opacity-30 rounded-lg"></span>
            <span className="relative">Download Visible Ores</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4 mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get the latest version of our texture pack for Minecraft Bedrock Edition
          </p>
        </div>
        
        {isLoading && (
          <div className="cosmic-card p-16 text-center max-w-lg mx-auto">
            <FaSpinner className="text-5xl text-pink-500 animate-spin mx-auto mb-4" />
            <p className="text-xl text-gray-300">Loading texture packs...</p>
          </div>
        )}
        
        {isError && (
          <div className="cosmic-card p-16 text-center max-w-lg mx-auto">
            <FaExclamationTriangle className="text-5xl text-red-500 mx-auto mb-4" />
            <p className="text-xl text-gray-300">Failed to load texture packs. Please try again later.</p>
          </div>
        )}
        
        {latestPack && (
          <div className="max-w-5xl mx-auto">
            <div className="cosmic-card p-8 lg:p-10 overflow-hidden backdrop-blur-md relative">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-pink-500/20 blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-purple-500/20 blur-2xl"></div>
              
              <div className="flex flex-col lg:flex-row items-start gap-10 relative">
                <div className="lg:w-1/3">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <img 
                      src="/attached_assets/Screenshot_20250325_225433_Minecraft.jpg"
                      alt="Visible Ores Texture Pack" 
                      className="relative rounded-md w-full aspect-square object-cover border border-pink-500/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 bg-pink-500/20 backdrop-blur-sm rounded-full p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaCube className="text-2xl" />
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <FaGamepad className="mr-2 text-pink-400" />
                        <span>Platform</span>
                      </div>
                      <span className="text-white">Bedrock Edition</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <FaCube className="mr-2 text-pink-400" />
                        <span>Format</span>
                      </div>
                      <span className="text-white">.mcpack</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <FaHistory className="mr-2 text-pink-400" />
                        <span>Released</span>
                      </div>
                      <span className="text-white">{latestPack.releaseDate}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <FaDownload className="mr-2 text-pink-400" />
                        <span>Downloads</span>
                      </div>
                      <div className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        {latestPack.downloadCount}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold neon-text">
                      {latestPack.name} <span className="text-pink-400">{latestPack.version}</span>
                    </h3>
                    <div className="ml-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      Latest
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Enhance your mining experience with Visible Ores, a texture pack that adds clear outlines to all ore blocks in the game. 
                    This version is fully compatible with {latestPack.compatibility} and works on all Bedrock platforms.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-white">Compatible with:</h4>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center p-3 bg-black/30 rounded-lg border border-purple-500/20">
                        <FaMobileAlt className="text-2xl text-pink-400 mb-2" />
                        <span className="text-sm text-gray-300">Mobile</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-black/30 rounded-lg border border-purple-500/20">
                        <FaTabletAlt className="text-2xl text-pink-400 mb-2" />
                        <span className="text-sm text-gray-300">Tablet</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-black/30 rounded-lg border border-purple-500/20">
                        <FaDesktop className="text-2xl text-pink-400 mb-2" />
                        <span className="text-sm text-gray-300">Console</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-black/30 rounded-lg border border-purple-500/20">
                        <FaGamepad className="text-2xl text-pink-400 mb-2" />
                        <span className="text-sm text-gray-300">Windows</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-white">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center bg-pink-500/20 mr-3 mt-0.5">
                          <FaCheck className="text-pink-400 text-sm" />
                        </div>
                        <span className="text-gray-300">Highly visible ore outlines</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center bg-pink-500/20 mr-3 mt-0.5">
                          <FaCheck className="text-pink-400 text-sm" />
                        </div>
                        <span className="text-gray-300">Works in dark caves & the Nether</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center bg-pink-500/20 mr-3 mt-0.5">
                          <FaCheck className="text-pink-400 text-sm" />
                        </div>
                        <span className="text-gray-300">Supports all ore types</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center bg-pink-500/20 mr-3 mt-0.5">
                          <FaCheck className="text-pink-400 text-sm" />
                        </div>
                        <span className="text-gray-300">Easy one-click installation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div>
                      <button 
                        onClick={() => handleDownload(latestPack.id)}
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                      >
                        <FaDownload /> Download Visible Ores {latestPack.version}
                      </button>
                      <p className="text-sm text-gray-400 mt-2">
                        File size: {latestPack.fileSize}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Installation Instructions */}
              <div className="mt-10 pt-8 border-t border-pink-500/20">
                <h4 className="text-xl font-bold mb-6 neon-text">Installation Instructions</h4>
                <ol className="space-y-4">
                  <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">1</div>
                    <div>
                      <h5 className="font-semibold text-white">Download the pack</h5>
                      <p className="text-gray-400">Click the download button to get the .mcpack file</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">2</div>
                    <div>
                      <h5 className="font-semibold text-white">Open the file</h5>
                      <p className="text-gray-400">Tap the downloaded file - it should automatically open in Minecraft</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">3</div>
                    <div>
                      <h5 className="font-semibold text-white">Import to Minecraft</h5>
                      <p className="text-gray-400">Minecraft will automatically import the texture pack</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">4</div>
                    <div>
                      <h5 className="font-semibold text-white">Activate the pack</h5>
                      <p className="text-gray-400">Go to Settings {'>'} Global Resources and activate "Visible Ores"</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-4 items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">5</div>
                    <div>
                      <h5 className="font-semibold text-white">Start mining!</h5>
                      <p className="text-gray-400">Start a new world or load an existing one and enjoy enhanced ore visibility</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
        
        {/* Previous Versions */}
        {olderPacks.length > 0 && (
          <div className="max-w-5xl mx-auto mt-16">
            <h4 className="text-2xl font-bold mb-6 neon-text text-center">Previous Versions</h4>
            <div className="cosmic-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-pink-500/20">
                      <th className="py-4 px-6 text-left">Version</th>
                      <th className="py-4 px-6 text-left">Compatibility</th>
                      <th className="py-4 px-6 text-left">Release Date</th>
                      <th className="py-4 px-6 text-right">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {olderPacks.map((pack) => (
                      <tr key={pack.id} className="border-b border-pink-500/10 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6 text-white">{pack.version}</td>
                        <td className="py-4 px-6 text-gray-300">{pack.compatibility}</td>
                        <td className="py-4 px-6 text-gray-300">{pack.releaseDate}</td>
                        <td className="py-4 px-6 text-right">
                          <button 
                            onClick={() => handleDownload(pack.id)}
                            className="flex items-center justify-center gap-2 bg-black/30 hover:bg-black/50 text-pink-400 font-medium py-2 px-4 rounded-md transition-colors border border-pink-500/20 ml-auto"
                          >
                            <FaDownload size={14} /> Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
