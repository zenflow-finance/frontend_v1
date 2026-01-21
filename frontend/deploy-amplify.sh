#!/bin/bash

# AWS Amplify Deployment Script for ZenFlow
# This script automates the deployment process to AWS Amplify
# Run this from the ZenFlow root directory (parent of frontend)

echo "🚀 Starting AWS Amplify Deployment for ZenFlow..."

# Check we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: Please run this script from the ZenFlow root directory"
    echo "   Current directory: $(pwd)"
    echo "   Expected structure: ZenFlow/frontend/"
    exit 1
fi

# Check if Amplify CLI is installed
if ! command -v amplify &> /dev/null; then
    echo "📦 Installing Amplify CLI..."
    npm install -g @aws-amplify/cli
fi

# Navigate to root
cd "$(dirname "$0")/.."

# Initialize Amplify (run once)
echo "🔧 Initializing Amplify..."
echo "Note: When prompted, set the 'Source Directory Path' to: frontend"
amplify init

# Add hosting
echo "🌐 Adding Amplify Hosting..."
amplify add hosting

# Publish
echo "📤 Publishing to AWS Amplify..."
amplify publish

echo "✅ Deployment complete!"
echo "Your app is now live on AWS Amplify"
