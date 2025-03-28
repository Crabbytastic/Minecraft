#!/bin/bash

# This script runs during the Vercel build process to ensure assets are properly available

# Create necessary directories
mkdir -p .vercel/output/static/
mkdir -p .vercel/output/static/attached_assets/
mkdir -p .vercel/output/functions/_api.func/

# Copy the texture pack to all possible locations
cp "public/Visible Ores.mcpack" ".vercel/output/static/" || echo "Could not copy from public/"
cp "attached_assets/Visible Ores.mcpack" ".vercel/output/static/" || echo "Could not copy from attached_assets/"

# Copy to the API function directory
cp "public/Visible Ores.mcpack" ".vercel/output/functions/_api.func/" || echo "Could not copy to API function directory"

# Copy all image assets to static output
cp attached_assets/*.jpg .vercel/output/static/attached_assets/ || echo "Could not copy image assets"
cp attached_assets/*.png .vercel/output/static/attached_assets/ || echo "Could not copy image assets"

# Also copy entire attached_assets folder to public in case needed
mkdir -p .vercel/output/static/public/
cp -r attached_assets .vercel/output/static/public/ || echo "Could not copy attached_assets to public"

echo "Asset preparation complete"

exit 0