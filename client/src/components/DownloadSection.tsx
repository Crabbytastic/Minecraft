import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import MinecraftButton from './MinecraftButton';

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
  
  // Download mutation
  const downloadMutation = useMutation({
    mutationFn: async (id: number) => {
      window.location.href = `/api/texture-packs/${id}/download`;
      return id;
    }
  });

  // Handle download
  const handleDownload = (id: number) => {
    downloadMutation.mutate(id);
  };

  return (
    <section id="download" className="py-16 bg-[#2a2a2a]">
      <div className="container mx-auto px-4">
        <h2 className="font-['Minecraft'] text-3xl md:text-4xl text-center mb-12">
          Download Visible Ores
        </h2>
        
        {isLoading && (
          <div className="text-center p-8">
            <i className="fas fa-spinner fa-spin text-4xl text-[#44bd32]"></i>
            <p className="mt-4">Loading texture packs...</p>
          </div>
        )}
        
        {isError && (
          <div className="text-center p-8 text-red-500">
            <i className="fas fa-exclamation-triangle text-4xl"></i>
            <p className="mt-4">Failed to load texture packs. Please try again later.</p>
          </div>
        )}
        
        {latestPack && (
          <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-6 md:p-8 rounded-lg relative border-4 border-black shadow-[inset_-2px_-4px_#0006,_inset_2px_2px_#FFF7]">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1590656381047-cc544ebb996b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluZWNyYWZ0fHx8fHx8MTY5MjM3MTM2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=150"
                alt="Visible Ores Texture Pack" 
                className="w-32 h-32 object-cover mr-6 border-2 border-black"
              />
              <div>
                <h3 className="font-['Minecraft'] text-xl mb-2">
                  {latestPack.name} {latestPack.version}
                </h3>
                <p className="text-gray-300 mb-4">
                  Latest version with support for {latestPack.compatibility}
                </p>
                <ul className="text-sm text-gray-300 space-y-1 mb-4">
                  <li>
                    <i className="fas fa-check text-[#44bd32] mr-2"></i>
                    Compatible with all Bedrock platforms
                  </li>
                  <li>
                    <i className="fas fa-check text-[#44bd32] mr-2"></i>
                    Updated for the latest game version
                  </li>
                  <li>
                    <i className="fas fa-check text-[#44bd32] mr-2"></i>
                    Easy one-click installation
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <MinecraftButton 
                variant="green" 
                size="large" 
                className="mb-4"
                onClick={() => handleDownload(latestPack.id)}
              >
                <i className="fas fa-download mr-2"></i> Download Visible Ores Pack
              </MinecraftButton>
              <p className="text-sm text-gray-400">
                File size: {latestPack.fileSize} • Format: .mcpack • 
                Downloads: {latestPack.downloadCount}
              </p>
            </div>
            
            {/* Installation Instructions */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="font-['Minecraft'] text-lg mb-4">Installation Instructions:</h4>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="font-['Minecraft'] text-[#44bd32] mr-2">1.</span>
                  <span>Download the texture pack file (.mcpack)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-['Minecraft'] text-[#44bd32] mr-2">2.</span>
                  <span>Open the file with Minecraft (it should launch automatically)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-['Minecraft'] text-[#44bd32] mr-2">3.</span>
                  <span>Minecraft will import the texture pack to your game</span>
                </li>
                <li className="flex items-start">
                  <span className="font-['Minecraft'] text-[#44bd32] mr-2">4.</span>
                  <span>Go to Settings {'>'} Global Resources and activate "Visible Ores"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-['Minecraft'] text-[#44bd32] mr-2">5.</span>
                  <span>Start a new game or load an existing world to see the changes</span>
                </li>
              </ol>
            </div>
          </div>
        )}
        
        {/* Previous Versions */}
        {olderPacks.length > 0 && (
          <div className="max-w-3xl mx-auto mt-8">
            <h4 className="font-['Minecraft'] text-lg mb-4 text-center">Previous Versions</h4>
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-black bg-opacity-50">
                    <th className="py-2 px-4 text-left">Version</th>
                    <th className="py-2 px-4 text-left">Compatibility</th>
                    <th className="py-2 px-4 text-left">Release Date</th>
                    <th className="py-2 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {olderPacks.map((pack) => (
                    <tr key={pack.id} className="border-b border-gray-700">
                      <td className="py-2 px-4">{pack.version}</td>
                      <td className="py-2 px-4">{pack.compatibility}</td>
                      <td className="py-2 px-4">{pack.releaseDate}</td>
                      <td className="py-2 px-4">
                        <button 
                          onClick={() => handleDownload(pack.id)}
                          className="text-[#5e9ce6] hover:underline"
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
