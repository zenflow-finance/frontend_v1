# ZenFlow - Investment Platform

A modern financial services platform built with Next.js 14, offering comprehensive investment products including stocks, IPOs, mutual funds, derivatives, and commodities.

## Project Structure

```
ZenFlow/
├── frontend/           # Next.js 14 application
│   ├── app/           # App router pages
│   ├── components/    # React components
│   ├── lib/           # Utility functions
│   ├── public/        # Static assets
│   └── styles/        # Global styles
└── amplify.yml        # AWS Amplify build configuration
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: AWS Amplify

## Design Features

- Professional financial services UI
- Multi-color pastel theme with orange accent
- Fully responsive design
- Product catalog with detailed pages
- FinDoc-inspired clean aesthetic

## Local Development

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment

See [frontend/DEPLOYMENT.md](frontend/DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to AWS Amplify

1. Push code to your Git repository
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Click "New app" → "Host web app"
4. Connect your repository
5. Amplify will auto-detect the configuration from `amplify.yml`
6. Deploy!

**Important**: The git repository is at the root `ZenFlow/` level, with the Next.js app in the `frontend/` subdirectory. The `amplify.yml` file handles this structure automatically.

## Features

### Investment Products
- Equity Trading
- IPO Investment
- Mutual Funds
- Derivatives Trading
- Commodity Trading
- Sovereign Gold Bonds

### Pages
- Landing page with hero section
- Products listing page
- Individual product detail pages
- Responsive header and footer

## Configuration Files

- `amplify.yml` - AWS Amplify build configuration (monorepo setup)
- `frontend/package.json` - Node.js dependencies
- `frontend/tailwind.config.js` - Tailwind CSS configuration
- `frontend/next.config.js` - Next.js configuration

## Support

For deployment issues, see the detailed guide in `frontend/DEPLOYMENT.md`.
