import Link from 'next/link';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-blue-50 via-accent-purple-50 to-accent-pink-50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Gateway to <span className="text-orange-600">Smart Investments</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                All Your Investment Needs in One Place: Stocks, IPOs, Mutual Funds, Derivatives, Commodities, Futures, Options, and Bonds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-block bg-orange-600 text-white text-center font-semibold px-8 py-4 rounded-md hover:bg-orange-700 transition-colors duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="#learn"
                  className="inline-block bg-white border-2 border-gray-300 text-gray-700 text-center font-semibold px-8 py-4 rounded-md hover:border-orange-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                By continuing, you accept our Terms of Service and Privacy Policy
              </p>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80"
                  alt="Professional investor analyzing financial data"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icon-Based Features */}
      <section className="py-16 bg-gradient-to-r from-accent-green-50 to-accent-teal-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: '📈', label: 'Stocks', color: 'bg-accent-blue-100' },
              { icon: '🎯', label: 'IPOs', color: 'bg-accent-purple-100' },
              { icon: '💼', label: 'Mutual Funds', color: 'bg-accent-pink-100' },
              { icon: '📊', label: 'Derivatives', color: 'bg-accent-orange-100' },
              { icon: '🪙', label: 'Commodities', color: 'bg-accent-teal-100' },
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Innovative Solutions For Your Financial Journey
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            Discover our comprehensive suite of financial products designed to help you achieve your investment goals
          </p>

          {/* Product Highlights */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-accent-blue-50 to-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all border border-accent-blue-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-blue-100 to-accent-purple-100 p-4 rounded-lg">
                  <span className="text-3xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Algo Trading</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Advanced algorithmic trading solutions powered by cutting-edge technology for optimal execution and returns.
                  </p>
                  <a href="#" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center">
                    Know More →
                  </a>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-accent-purple-50 to-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all border border-accent-purple-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent-purple-100 to-accent-pink-100 p-4 rounded-lg">
                  <span className="text-3xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Foreign Portfolio Investment</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Access global markets and diversify your portfolio with international investment opportunities.
                  </p>
                  <a href="#" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center">
                    Know More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="py-20 bg-gradient-to-br from-accent-orange-50 to-accent-pink-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn with ZenFlow
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Access our extensive knowledge center with investment guides, market analysis, and expert financial advice
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-all border-2 border-accent-blue-100 hover:border-accent-blue-200">
              <div className="bg-accent-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Investment Guides</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides covering stocks, mutual funds, and more to help you make informed decisions
              </p>
              <a href="#" className="text-orange-600 font-medium hover:text-orange-700">
                Explore →
              </a>
            </div>
            <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-all border-2 border-accent-purple-100 hover:border-accent-purple-200">
              <div className="bg-accent-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
              <p className="text-gray-600 mb-4">
                Daily market insights, technical analysis, and expert commentary to stay ahead
              </p>
              <a href="#" className="text-orange-600 font-medium hover:text-orange-700">
                Read More →
              </a>
            </div>
            <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-all border-2 border-accent-green-100 hover:border-accent-green-200">
              <div className="bg-accent-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Investor Community</h3>
              <p className="text-gray-600 mb-4">
                Connect with fellow investors, share strategies, and learn from experienced traders
              </p>
              <a href="#" className="text-orange-600 font-medium hover:text-orange-700">
                Join Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Open your Demat Account in minutes!"
        description="Join thousands of investors who trust ZenFlow for their investment journey. Start trading stocks, IPOs, and more today."
        buttonText="Open Account Now"
        buttonLink="/products"
      />
    </div>
  );
}
