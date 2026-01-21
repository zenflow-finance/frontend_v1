# ZenFlow Frontend

A modern e-commerce frontend built with Next.js 14, React, and TailwindCSS.

## Features

- 🎨 Modern, responsive UI with TailwindCSS
- ⚡ Server-side rendering with Next.js 14 App Router
- 🔄 Event-driven architecture with custom event emitter
- 🐳 Docker support for containerized deployment
- 📱 Mobile-first responsive design
- 🎯 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── products/          # Product pages
│   │   ├── page.tsx       # Product list
│   │   └── [id]/page.tsx  # Product detail
│   └── api/               # API routes (optional)
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── CTA.tsx
├── lib/                   # Utilities and helpers
│   ├── api.ts            # Backend API client
│   └── events.ts         # Event emitter
├── public/               # Static assets
├── styles/               # Global styles
│   └── globals.css
├── Dockerfile            # Docker configuration
├── package.json
└── tailwind.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Docker Deployment

Build the Docker image:
```bash
docker build -t zenflow-frontend .
```

Run the container:
```bash
docker run -p 3000:3000 zenflow-frontend
```

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
