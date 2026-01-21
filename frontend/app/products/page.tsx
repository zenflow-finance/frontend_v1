import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/api';

export default async function ProductsPage() {
  // Mock data for now - will be replaced with API call
  const products = [
    {
      id: '1',
      name: 'Zen Meditation Cushion',
      description: 'Premium meditation cushion for optimal comfort during long sessions',
      price: 49.99,
    },
    {
      id: '2',
      name: 'Mindfulness Journal',
      description: 'Beautiful journal to track your mindfulness journey',
      price: 24.99,
    },
    {
      id: '3',
      name: 'Aromatherapy Diffuser',
      description: 'Create a calming atmosphere with essential oils',
      price: 39.99,
    },
    {
      id: '4',
      name: 'Yoga Mat Pro',
      description: 'Non-slip, eco-friendly yoga mat for all levels',
      price: 59.99,
    },
    {
      id: '5',
      name: 'Tibetan Singing Bowl',
      description: 'Handcrafted singing bowl for sound meditation',
      price: 79.99,
    },
    {
      id: '6',
      name: 'Zen Garden Kit',
      description: 'Desktop zen garden for stress relief',
      price: 34.99,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600 text-lg">
          Explore our carefully curated collection of products designed to enhance your well-being
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
