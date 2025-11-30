'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, X } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();
  const { addItem: addToCart } = useCart();

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({ ...item, quantity: 1 });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-20 h-20 text-elegant-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h2>
          <p className="text-elegant-600 mb-6">Save your favorite items for later</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-elegant-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-elegant-900">
            My Wishlist
          </h1>
          <span className="text-elegant-600">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm group">
              <Link href={`/products/${item.id}`} className="block">
                <div className="relative aspect-square bg-elegant-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.isNew && (
                    <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {item.originalPrice && (
                    <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                </div>
              </Link>

              <div className="p-4">
                <Link href={`/products/${item.id}`}>
                  <p className="text-xs text-elegant-500 uppercase tracking-wider mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-semibold text-elegant-900 mb-1 hover:text-gold-600">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    {item.originalPrice ? (
                      <>
                        <span className="font-semibold text-rose-600">
                          ${item.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-elegant-400 line-through">
                          ${item.originalPrice.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="font-semibold text-elegant-900">
                        ${item.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                </Link>

                <div className="flex gap-2">
                  {item.inStock ? (
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white py-2 rounded-full text-sm font-semibold transition-all"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      disabled
                      className="flex-1 bg-elegant-200 text-elegant-400 py-2 rounded-full text-sm font-semibold cursor-not-allowed"
                    >
                      Out of Stock
                    </button>
                  )}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 border-2 border-elegant-300 rounded-full text-elegant-600 hover:border-red-500 hover:text-red-500 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
