import Link from 'next/link';
import { ArrowRight, Sparkles, Award, ShieldCheck } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium">New Collection 2024</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Timeless Elegance
            <br />
            <span className="gradient-text">Crafted to Perfection</span>
          </h1>
          
          <p className="text-lg md:text-xl text-elegant-100 mb-10 max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted jewelry featuring the finest diamonds, 
            precious metals, and gemstones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Premium Quality</h3>
              <p className="text-elegant-600">
                Each piece is crafted with the finest materials and attention to detail
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <ShieldCheck className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Certified Authentic</h3>
              <p className="text-elegant-600">
                All diamonds and gemstones come with certificates of authenticity
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Lifetime Warranty</h3>
              <p className="text-elegant-600">
                Enjoy peace of mind with our comprehensive lifetime warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-elegant-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-elegant-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-elegant-600 text-lg max-w-2xl mx-auto">
              Handpicked pieces that embody luxury and sophistication
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-elegant-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Make Every Moment Memorable
          </h2>
          <p className="text-elegant-200 text-lg mb-10">
            Celebrate life&apos;s special occasions with our timeless jewelry collection
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            Start Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
