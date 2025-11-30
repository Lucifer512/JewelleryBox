'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Heart, ShoppingCart, Check, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link href="/shop" className="text-gold-600 hover:text-gold-700">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({ ...product, addedAt: new Date() });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-elegant-600 hover:text-elegant-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-elegant-100">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  NEW
                </span>
              )}
              {product.originalPrice && (
                <span className="absolute top-4 left-20 bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  SALE
                </span>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-gold-500'
                        : 'border-transparent hover:border-elegant-300'
                    }`}
                  >
                    <Image src={image} alt={`${product.name} view ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-elegant-500 uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-elegant-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                {product.originalPrice ? (
                  <>
                    <span className="text-3xl font-bold text-rose-600">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-xl text-elegant-400 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-rose-100 text-rose-700 text-sm font-semibold px-3 py-1 rounded-full">
                      Save ${(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-elegant-900">
                    ${product.price.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <div className="border-t border-elegant-200 pt-6">
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-elegant-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-elegant-200 pt-6">
              <h3 className="font-semibold text-lg mb-2">Material</h3>
              <p className="text-elegant-600">{product.material}</p>
            </div>

            <div className="border-t border-elegant-200 pt-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                product.inStock
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {product.inStock ? (
                  <>
                    <Check className="w-4 h-4" />
                    In Stock
                  </>
                ) : (
                  'Out of Stock'
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-full font-semibold transition-all ${
                  product.inStock
                    ? addedToCart
                      ? 'bg-green-500 text-white'
                      : 'bg-gold-500 hover:bg-gold-600 text-white'
                    : 'bg-elegant-200 text-elegant-400 cursor-not-allowed'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>

              <button
                onClick={handleToggleWishlist}
                className={`p-4 rounded-full border-2 transition-all ${
                  inWishlist
                    ? 'bg-rose-500 border-rose-500 text-white'
                    : 'border-elegant-300 text-elegant-700 hover:border-rose-500 hover:text-rose-500'
                }`}
              >
                <Heart className={`w-6 h-6 ${inWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-elegant-50 rounded-lg p-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-elegant-600">Free Shipping</span>
                <span className="font-medium">On orders over $1,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-elegant-600">Authenticity</span>
                <span className="font-medium">Certified & Guaranteed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-elegant-600">Warranty</span>
                <span className="font-medium">Lifetime Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-3xl font-bold text-elegant-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
