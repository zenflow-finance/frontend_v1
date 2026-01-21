import { notFound } from 'next/navigation';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

// Mock product data - will be replaced with API call
const products: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Zen Meditation Cushion',
    description: 'Premium meditation cushion for optimal comfort during long sessions',
    price: 49.99,
    fullDescription: `Experience ultimate comfort during your meditation practice with our premium Zen Meditation Cushion.
    Handcrafted with high-quality materials, this cushion provides the perfect support for extended meditation sessions.
    The ergonomic design promotes proper posture and spinal alignment, helping you maintain focus and comfort.`,
    features: [
      'Premium organic cotton cover',
      'Buckwheat hull filling for optimal support',
      'Removable and washable cover',
      'Ergonomic design for proper posture',
      'Available in multiple colors',
    ],
  },
  // Add more products as needed
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products[params.id];

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
          <span className="text-gray-400 text-xl">Product Image</span>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>

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

          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors">
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
