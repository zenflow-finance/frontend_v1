#!/bin/bash

# AWS Amplify Deployment Script for ZenFlow
# This script automates the deployment process to AWS Amplify

echo "🚀 Starting AWS Amplify Deployment for ZenFlow..."

# Check if Amplify CLI is installed
if ! command -v amplify &> /dev/null; then
    echo "📦 Installing Amplify CLI..."
    npm install -g @aws-amplify/cli
fi

# Initialize Amplify (run once)
echo "🔧 Initializing Amplify..."
amplify init --yes

# Add hosting
echo "🌐 Adding Amplify Hosting..."
amplify add hosting

# Publish
echo "📤 Publishing to AWS Amplify..."
amplify publish

echo "✅ Deployment complete!"
echo "Your app is now live on AWS Amplify"
