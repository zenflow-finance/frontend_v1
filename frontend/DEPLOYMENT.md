# ZenFlow Deployment Guide

## Recommended: AWS Amplify (Quickest & Cheapest)

### Cost Comparison

| Service | Setup Time | Monthly Cost | Best For |
|---------|-----------|--------------|----------|
| **AWS Amplify** ⭐ | 5 min | $0-5 (Free tier) | Quick deployment, auto-scaling |
| AWS EC2 (t2.micro) | 30 min | $5-8 | Custom control, persistent server |
| Vercel | 2 min | $0-20 | Easiest, but not AWS |
| AWS ECS Fargate | 45 min | $15-30 | Container-based, production |

### Option 1: AWS Amplify Console (Recommended - No CLI needed)

**Step 1:** Push code to Git
```bash
cd /Users/sohini.majumdar/workspaces/ZenFlow/frontend
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

**Step 2:** Deploy via Console
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click **"New app"** → **"Host web app"**
3. Select your Git provider (GitHub/GitLab/Bitbucket)
4. Authorize AWS Amplify to access your repository
5. Select the `ZenFlow/frontend` repository
6. Select branch: `main`
7. Amplify auto-detects Next.js - click **"Next"**
8. Review settings - click **"Save and deploy"**
9. Wait 3-5 minutes ☕
10. Done! You'll get a URL: `https://main.xxxxx.amplifyapp.com`

### Option 2: AWS Amplify CLI

**Prerequisites:**
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure AWS credentials
amplify configure
```

**Deploy:**
```bash
cd /Users/sohini.majumdar/workspaces/ZenFlow/frontend

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### Option 3: AWS EC2 (More Control)

**Cost:** ~$5-8/month (t2.micro free tier eligible)

**Quick Setup:**
```bash
# 1. Launch EC2 instance (t2.micro, Ubuntu 22.04)
# 2. SSH into instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# 3. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 4. Install PM2
sudo npm install -g pm2

# 5. Clone your repository
git clone YOUR_REPO_URL
cd ZenFlow/frontend

# 6. Install dependencies and build
npm install
npm run build

# 7. Start with PM2
pm2 start npm --name "zenflow" -- start
pm2 startup
pm2 save

# 8. Setup Nginx (optional, for custom domain)
sudo apt install nginx
# Configure nginx as reverse proxy to port 3000
```

### Option 4: Vercel (Easiest but not AWS)

**Cost:** Free tier, $0/month

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd /Users/sohini.majumdar/workspaces/ZenFlow/frontend
vercel
```

## Post-Deployment Checklist

- [ ] Test all pages and product links
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Test navigation and CTAs
- [ ] Setup custom domain (optional)
- [ ] Enable HTTPS (automatic on Amplify/Vercel)
- [ ] Setup environment variables (if needed)

## Custom Domain Setup (AWS Amplify)

1. Go to Amplify Console → Your App → Domain management
2. Click "Add domain"
3. Enter your domain (e.g., zenflow.com)
4. Follow DNS configuration instructions
5. AWS provides SSL certificate automatically

## Monitoring & Logs

**AWS Amplify:**
- Console → Your App → Monitoring (shows traffic, errors, performance)
- Build logs: Console → Your App → Recent deployments

**EC2:**
```bash
# View logs
pm2 logs zenflow

# Monitor status
pm2 status
```

## Costs Breakdown (Amplify)

**Free Tier:**
- 1000 build minutes/month
- 15 GB served/month
- 5 GB storage

**After Free Tier:**
- $0.01 per build minute
- $0.15 per GB served
- $0.023 per GB stored

**Example:**
- Small site with 1000 visitors/month → ~$2-5/month
- 10 deployments/month → ~$1-2/month
- **Total: ~$3-7/month**

## Rollback

**Amplify:**
- Console → Your App → Deployments → Click on previous deployment → Redeploy

**EC2:**
```bash
git checkout previous-commit
npm run build
pm2 restart zenflow
```

## Support

- AWS Amplify Docs: https://docs.amplify.aws/
- Next.js Deployment: https://nextjs.org/docs/deployment
