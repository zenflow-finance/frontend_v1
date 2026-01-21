import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/api';

export default async function ProductsPage() {
  // Mock data for now - will be replaced with API call
  const products = [
    {
      id: '1',
      name: 'Equity Trading',
      description: 'Trade stocks with zero brokerage on delivery trades and competitive rates on intraday',
      price: 0,
      icon: '📈',
      colorClass: 'from-accent-blue-50 to-accent-blue-100',
      borderColor: 'border-accent-blue-200',
    },
    {
      id: '2',
      name: 'IPO Investment',
      description: 'Apply for IPOs directly through our platform with instant application and allotment tracking',
      price: 0,
      icon: '🎯',
      colorClass: 'from-accent-purple-50 to-accent-purple-100',
      borderColor: 'border-accent-purple-200',
    },
    {
      id: '3',
      name: 'Mutual Funds',
      description: 'Invest in 5000+ mutual funds with zero commission and SIP starting from ₹100',
      price: 100,
      icon: '💼',
      colorClass: 'from-accent-pink-50 to-accent-pink-100',
      borderColor: 'border-accent-pink-200',
    },
    {
      id: '4',
      name: 'Derivatives Trading',
      description: 'Trade Futures & Options with advanced tools and real-time market data',
      price: 20,
      icon: '📊',
      colorClass: 'from-accent-orange-50 to-accent-orange-100',
      borderColor: 'border-accent-orange-200',
    },
    {
      id: '5',
      name: 'Commodity Trading',
      description: 'Trade gold, silver, crude oil and other commodities on MCX with low margins',
      price: 20,
      icon: '🪙',
      colorClass: 'from-accent-teal-50 to-accent-teal-100',
      borderColor: 'border-accent-teal-200',
    },
    {
      id: '6',
      name: 'Sovereign Gold Bonds',
      description: 'Invest in government-backed gold bonds with assured returns and tax benefits',
      price: 5000,
      icon: '🏆',
      colorClass: 'from-accent-green-50 to-accent-green-100',
      borderColor: 'border-accent-green-200',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Investment Products</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore our comprehensive range of investment products designed to help you achieve your financial goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 bg-gradient-to-r from-accent-purple-50 via-accent-pink-50 to-accent-orange-50 rounded-lg p-8 border-2 border-accent-purple-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose ZenFlow for Your Investments?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold mb-1">Secure & Safe</h3>
              <p className="text-sm text-gray-600">Bank-grade security for all transactions</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold mb-1">Low Cost</h3>
              <p className="text-sm text-gray-600">Competitive brokerage and zero hidden charges</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-semibold mb-1">Easy to Use</h3>
              <p className="text-sm text-gray-600">Intuitive platform for seamless trading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
