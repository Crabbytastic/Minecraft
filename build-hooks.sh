#!/bin/bash

# This script runs during the Vercel build process to ensure assets are properly available

# Create necessary directories
mkdir -p .vercel/output/static/
mkdir -p .vercel/output/static/attached_assets/
mkdir -p .vercel/output/functions/api.func/
mkdir -p dist/public/

# Copy the texture pack to all possible locations
cp "public/Visible Ores.mcpack" ".vercel/output/static/" || echo "Could not copy from public/ to .vercel/output/static/"
cp "attached_assets/Visible Ores.mcpack" ".vercel/output/static/" || echo "Could not copy from attached_assets/ to .vercel/output/static/"
cp "public/Visible Ores.mcpack" "dist/public/" || echo "Could not copy from public/ to dist/public/"
cp "attached_assets/Visible Ores.mcpack" "dist/public/" || echo "Could not copy from attached_assets/ to dist/public/"

# Copy to the API function directory
cp "public/Visible Ores.mcpack" ".vercel/output/functions/api.func/" || echo "Could not copy to API function directory"
cp "attached_assets/Visible Ores.mcpack" ".vercel/output/functions/api.func/" || echo "Could not copy to API function directory"

# Copy all image assets to static output
mkdir -p .vercel/output/static/attached_assets/
cp attached_assets/*.jpg .vercel/output/static/attached_assets/ 2>/dev/null || echo "Could not copy image assets"
cp attached_assets/*.png .vercel/output/static/attached_assets/ 2>/dev/null || echo "Could not copy image assets"

# Also copy entire attached_assets folder to dist/public in case needed
mkdir -p dist/public/attached_assets/
cp -r attached_assets/* dist/public/attached_assets/ 2>/dev/null || echo "Could not copy attached_assets to dist/public/attached_assets/"

# Ensure the client index.html is in the root of dist/public
cp client/index.html dist/public/ 2>/dev/null || echo "Could not copy client/index.html to dist/public/"

# Also copy to static output for direct access
cp client/index.html .vercel/output/static/ 2>/dev/null || echo "Could not copy client/index.html to .vercel/output/static/"

echo "Asset preparation complete"

exit 0