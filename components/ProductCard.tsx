'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ ...product, quantity: 1 });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({ ...product, addedAt: new Date() });
    }
  };

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-elegant-100 aspect-square">
        {/* Product Image */}
        <div className="relative w-full h-full">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-elegant-200 animate-pulse" />
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              NEW
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              SALE
            </span>
          )}
          {!product.inStock && (
            <span className="bg-elegant-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
              SOLD OUT
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full backdrop-blur-md transition-colors ${
              inWishlist
                ? 'bg-rose-500 text-white'
                : 'bg-white/90 text-elegant-900 hover:bg-rose-500 hover:text-white'
            }`}
            aria-label="Add to Wishlist"
          >
            <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
          </button>
          {product.inStock && (
            <button
              onClick={handleAddToCart}
              className="p-2 bg-white/90 backdrop-blur-md rounded-full text-elegant-900 hover:bg-gold-500 hover:text-white transition-colors"
              aria-label="Add to Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <p className="text-xs text-elegant-500 uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-medium text-elegant-900 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-elegant-600">{product.material}</p>
        <div className="flex items-center gap-2">
          {product.originalPrice ? (
            <>
              <span className="font-semibold text-rose-600">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-sm text-elegant-400 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="font-semibold text-elegant-900">
              ${product.price.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
