import Link from 'next/link';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Gateway to <span className="text-blue-600">Smart Living</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                All Your Wellness Needs in One Place: Meditation, Fitness, Nutrition, Mental Health, and Sustainable Living Solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-block bg-blue-600 text-white text-center font-semibold px-8 py-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="#learn"
                  className="inline-block bg-white border-2 border-gray-300 text-gray-700 text-center font-semibold px-8 py-4 rounded-md hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                By continuing, you accept our Terms of Service and Privacy Policy
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center shadow-xl">
                <span className="text-gray-400 text-xl">Hero Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icon-Based Features */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: '🧘', label: 'Meditation' },
              { icon: '💪', label: 'Fitness' },
              { icon: '🥗', label: 'Nutrition' },
              { icon: '🧠', label: 'Mental Health' },
              { icon: '🌱', label: 'Sustainability' },
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
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
            Innovative Solutions For Your Wellness Journey
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            Discover our carefully curated selection of products designed to enhance every aspect of your well-being
          </p>

          {/* Product Highlights */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Wellness</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    AI-powered recommendations tailored to your unique wellness goals and lifestyle preferences.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                    Know More →
                  </a>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <span className="text-3xl">📱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Experience</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Access your wellness journey anywhere with our intuitive mobile app available on iOS and Android.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                    Know More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn with ZenFlow
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Access our extensive knowledge center with guides, tutorials, and expert advice
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Wellness Guides</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides to help you on your wellness journey
              </p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                Explore →
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step video content from wellness experts
              </p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                Watch Now →
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600 mb-4">
                Connect with like-minded individuals on their wellness path
              </p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                Join Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Open your Account in minutes!"
        description="Join thousands of satisfied customers who have discovered their wellness journey with ZenFlow"
        buttonText="Get Started Today"
        buttonLink="/products"
      />
    </div>
  );
}
