import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  icon?: string;
  colorClass?: string;
  borderColor?: string;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  icon = '✨',
  colorClass = 'from-blue-50 to-purple-50',
  borderColor = 'border-gray-200',
}: ProductCardProps) {
  return (
    <div className={`bg-white rounded-lg border-2 ${borderColor} overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group`}>
      <Link href={`/products/${id}`}>
        <div className={`h-56 bg-gradient-to-br ${colorClass} flex items-center justify-center relative overflow-hidden`}>
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <div className="text-center">
              <span className="text-6xl mb-2 block group-hover:scale-110 transition-transform">{icon}</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{description}</p>
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div>
              <span className="text-sm text-gray-500 block">Starting at</span>
              <span className="text-2xl font-bold text-orange-600">${price}</span>
            </div>
            <div className="text-orange-600 font-semibold group-hover:gap-2 inline-flex items-center transition-all">
              Know More
              <span className="ml-1 group-hover:ml-2 transition-all">→</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
