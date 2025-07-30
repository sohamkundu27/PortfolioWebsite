#!/bin/bash

# Portfolio Website Deployment Script
# This script prepares and deploys the portfolio website to Vercel

echo "🚀 Portfolio Website Deployment Script"
echo "======================================"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "📦 Installing Vercel CLI globally..."
    npm install -g vercel
fi

# Build the project
echo "🔨 Building the project..."
cd frontend
yarn install
yarn build

# Go back to root directory
cd ..

echo "✅ Build completed successfully!"
echo ""
echo "🌐 Ready for deployment!"
echo ""
echo "📋 Deployment options:"
echo "  1. Run 'vercel' for preview deployment"
echo "  2. Run 'vercel --prod' for production deployment"
echo "  3. Connect your GitHub repo to Vercel for automatic deployments"
echo ""
echo "📁 Project structure:"
echo "  - Frontend source: ./frontend/"
echo "  - Build output: ./frontend/build/"
echo "  - Vercel config: ./vercel.json"
echo ""
echo "🔧 Build configuration:"
echo "  - Framework: Create React App"
echo "  - Build command: cd frontend && yarn build"
echo "  - Output directory: frontend/build"
echo "  - Install command: cd frontend && yarn install"
echo ""
echo "🎯 Next steps:"
echo "  1. Update placeholder content with your real information"
echo "  2. Replace project images with your actual projects"  
echo "  3. Add your real social media links"
echo "  4. Update contact information"
echo "  5. Deploy to Vercel"
echo ""
echo "✨ Your portfolio website is ready for deployment!"