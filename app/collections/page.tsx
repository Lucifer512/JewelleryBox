import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CollectionsPage() {
  const collections = [
    {
      name: 'Engagement Rings',
      description: 'Celebrate your love with our stunning engagement ring collection',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      category: 'rings',
    },
    {
      name: 'Luxury Necklaces',
      description: 'Elegant necklaces that make a statement',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      category: 'necklaces',
    },
    {
      name: 'Designer Earrings',
      description: 'Exquisite earrings for every occasion',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      category: 'earrings',
    },
    {
      name: 'Premium Bracelets',
      description: 'Sophisticated bracelets crafted to perfection',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      category: 'bracelets',
    },
    {
      name: 'Luxury Watches',
      description: 'Swiss-made timepieces for the discerning collector',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      category: 'watches',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative bg-linear-to-br from-elegant-900 via-elegant-800 to-gold-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Our Collections
          </h1>
          <p className="text-elegant-200 text-xl max-w-3xl mx-auto">
            Explore our carefully curated collections, each designed to celebrate life&apos;s most precious moments
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={`/shop?category=${collection.category}`}
              className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-elegant-100"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${collection.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="font-serif text-3xl font-bold mb-2">
                  {collection.name}
                </h2>
                <p className="text-elegant-200 mb-4">{collection.description}</p>
                <div className="inline-flex items-center gap-2 text-gold-400 font-semibold">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
