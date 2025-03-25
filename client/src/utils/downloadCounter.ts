import { apiRequest } from '@/lib/queryClient';

/**
 * Tracks a download for a particular texture pack
 * @param id The ID of the texture pack
 * @returns Promise that resolves when the download count is updated
 */
export async function trackDownload(id: number): Promise<void> {
  try {
    // Make API request to increment download count
    await apiRequest('GET', `/api/texture-packs/${id}/download`);
  } catch (error) {
    console.error('Failed to track download:', error);
  }
}

/**
 * Gets the current download count for a texture pack
 * @param id The ID of the texture pack
 * @returns Promise that resolves to the current download count
 */
export async function getDownloadCount(id: number): Promise<number> {
  try {
    const response = await apiRequest('GET', `/api/texture-packs/${id}/downloads`);
    const data = await response.json();
    return data.downloadCount;
  } catch (error) {
    console.error('Failed to get download count:', error);
    return 0;
  }
}
