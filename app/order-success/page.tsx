import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-elegant-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="font-serif text-3xl font-bold text-elegant-900 mb-4">
            Order Successful!
          </h1>
          
          <p className="text-elegant-600 mb-8">
            Thank you for your purchase. We&apos;ve sent a confirmation email with your order details.
            Your jewelry will be carefully packaged and shipped within 2-3 business days.
          </p>

          <div className="space-y-3">
            <Link
              href="/shop"
              className="block w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-full font-semibold transition-all"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="block w-full border-2 border-elegant-300 text-elegant-700 py-3 rounded-full font-semibold hover:border-elegant-400 transition-all"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
