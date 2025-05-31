#!/bin/bash

echo "🚀 RunBoyRun.dev Deployment Script"
echo "⸻"

# Check if we're on the main branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "main" ]; then
  echo "❌ Not on main branch. Please switch to main branch first."
  exit 1
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ You have uncommitted changes. Please commit or stash them first."
  exit 1
fi

echo "🧹 Cleaning up..."
rm -rf .next
rm -rf node_modules
rm -f package-lock.json

echo "📦 Installing dependencies..."
npm install

echo "🔍 Running type check..."
npm run typecheck

echo "🛠 Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix the errors and try again."
  exit 1
fi

echo "🧪 Running tests..."
npm run test

echo "🔄 Pulling latest changes..."
git pull origin main

echo "⬆️ Pushing to GitHub..."
git push origin main

echo "✨ Deployment complete!"
echo "⸻"
echo "🌐 Site will be live at: https://runboyrun.dev"
echo "📊 Vercel dashboard: https://vercel.com/dashboard" 