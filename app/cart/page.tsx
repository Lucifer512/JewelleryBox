'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart();

  const totalPrice = getTotalPrice();
  const shipping = totalPrice > 1000 ? 0 : 50;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-20 h-20 text-elegant-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-elegant-600 mb-6">Start shopping to add items to your cart</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-elegant-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-elegant-900 mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 flex gap-6 shadow-sm"
              >
                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-elegant-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <div>
                      <Link
                        href={`/products/${item.id}`}
                        className="font-semibold text-elegant-900 hover:text-gold-600"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-elegant-600">{item.material}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-elegant-400 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-elegant-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-elegant-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <span className="font-semibold text-lg">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="font-semibold text-xl mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-elegant-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-elegant-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-elegant-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-elegant-200 pt-3 mt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {totalPrice < 1000 && (
                <div className="bg-gold-50 border border-gold-200 rounded-lg p-3 mb-6 text-sm text-gold-800">
                  Add ${(1000 - totalPrice).toLocaleString()} more for free shipping!
                </div>
              )}

              <Link
                href="/checkout"
                className="block w-full bg-gold-500 hover:bg-gold-600 text-white text-center py-3 rounded-full font-semibold transition-all mb-3"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="block w-full border-2 border-elegant-300 text-elegant-700 text-center py-3 rounded-full font-semibold hover:border-elegant-400 transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
