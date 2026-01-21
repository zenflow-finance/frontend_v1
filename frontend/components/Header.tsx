export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-blue-900">
            ZenFlow
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Markets
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Knowledge Center
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Community
            </a>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Login
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
