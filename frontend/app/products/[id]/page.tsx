import { notFound } from 'next/navigation';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

// Generate static paths for all products at build time
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

// Mock product data - will be replaced with API call
const products: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Equity Trading',
    description: 'Trade stocks with zero brokerage on delivery trades and competitive rates on intraday',
    price: 0,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80',
    fullDescription: `Start your investment journey with our equity trading platform. Trade stocks from NSE and BSE with zero brokerage on delivery trades and competitive rates on intraday trading. Access real-time market data, advanced charting tools, and research reports to make informed investment decisions.`,
    features: [
      'Zero brokerage on equity delivery trades',
      'Flat ₹20 per trade on intraday',
      'Real-time streaming quotes',
      'Advanced charting and technical indicators',
      'Mobile and web trading platforms',
      'Instant fund transfer',
      'Margin trading facility available',
    ],
  },
  '2': {
    id: '2',
    name: 'IPO Investment',
    description: 'Apply for IPOs directly through our platform with instant application and allotment tracking',
    price: 0,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    fullDescription: `Access upcoming IPOs and apply directly through our platform. Get detailed IPO information, subscription status, and allotment updates in real-time. Our seamless UPI-based payment system makes IPO applications quick and hassle-free.`,
    features: [
      'Apply to mainboard and SME IPOs',
      'UPI-based payment for instant blocking',
      'Real-time subscription status',
      'Allotment status notifications',
      'IPO research and recommendations',
      'Historical IPO performance data',
      'No application fees',
    ],
  },
  '3': {
    id: '3',
    name: 'Mutual Funds',
    description: 'Invest in 5000+ mutual funds with zero commission and SIP starting from ₹100',
    price: 100,
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop&q=80',
    fullDescription: `Build wealth systematically with our mutual fund platform. Choose from 5000+ mutual funds across equity, debt, and hybrid categories. Start SIP with as low as ₹100 per month and benefit from zero commission on all mutual fund investments.`,
    features: [
      '5000+ mutual funds to choose from',
      'Zero commission on all investments',
      'SIP starting from ₹100',
      'Goal-based investment planning',
      'Expert fund recommendations',
      'Portfolio analytics and tracking',
      'Tax-saving ELSS funds available',
    ],
  },
  '4': {
    id: '4',
    name: 'Derivatives Trading',
    description: 'Trade Futures & Options with advanced tools and real-time market data',
    price: 20,
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop&q=80',
    fullDescription: `Trade equity and index derivatives with our advanced trading platform. Access futures and options with competitive margins and powerful analytical tools. Perfect for hedging strategies or speculative trading with risk management features.`,
    features: [
      'Flat ₹20 per executed order',
      'Equity and index F&O trading',
      'Advanced option chain analysis',
      'Real-time Greeks and analytics',
      'Intraday margin benefits',
      'Risk management tools',
      'Strategy builder for options',
    ],
  },
  '5': {
    id: '5',
    name: 'Commodity Trading',
    description: 'Trade gold, silver, crude oil and other commodities on MCX with low margins',
    price: 20,
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=600&fit=crop&q=80',
    fullDescription: `Diversify your portfolio with commodity trading. Trade gold, silver, crude oil, natural gas, and agricultural commodities on MCX. Benefit from leverage and hedge against inflation with precious metals and energy commodities.`,
    features: [
      'Trade on MCX exchange',
      'Gold, silver, crude oil, natural gas',
      'Agricultural commodities available',
      'Low margin requirements',
      'Flat ₹20 per executed order',
      'Real-time commodity prices',
      'Market analysis and reports',
    ],
  },
  '6': {
    id: '6',
    name: 'Sovereign Gold Bonds',
    description: 'Invest in government-backed gold bonds with assured returns and tax benefits',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=600&fit=crop&q=80',
    fullDescription: `Invest in gold without the hassle of physical storage. Sovereign Gold Bonds are government securities denominated in grams of gold. They offer capital appreciation linked to gold prices plus assured 2.5% annual interest. Enjoy tax benefits and liquidity through stock exchange trading.`,
    features: [
      'Government of India backed security',
      '2.5% annual interest on investment',
      'Capital appreciation linked to gold price',
      'Tax benefits on redemption',
      'Tradable on stock exchanges',
      '8-year maturity with exit from 5th year',
      'No making charges or storage issues',
    ],
  },
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products[params.id];

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {product.image ? (
            <>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </>
          ) : (
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-96 md:h-[500px] flex items-center justify-center">
              <span className="text-gray-400 text-xl">Product Image</span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="mb-6">
            {product.price === 0 ? (
              <span className="text-3xl font-bold text-green-600">Free to Start</span>
            ) : (
              <div>
                <span className="text-sm text-gray-500 block">Starting from</span>
                <span className="text-3xl font-bold text-orange-600">₹{product.price}</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
          </div>

          {product.features && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <button className="flex-1 bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl">
              {product.price === 0 ? 'Get Started' : 'Invest Now'}
            </button>
            <button className="px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors">
              Learn More
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="text-2xl mb-1">🔒</div>
                <p className="text-sm font-medium text-gray-700">Secure</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="text-2xl mb-1">⚡</div>
                <p className="text-sm font-medium text-gray-700">Fast</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="text-2xl mb-1">💰</div>
                <p className="text-sm font-medium text-gray-700">Low Cost</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Product Information */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Product?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Trusted by thousands of investors</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Real-time market data and analytics</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">24/7 customer support</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Easy account opening process</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            Our expert team is here to guide you through your investment journey. Get personalized advice and support.
          </p>
          <button className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
