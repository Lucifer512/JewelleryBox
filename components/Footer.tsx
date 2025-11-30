import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-elegant-900 text-elegant-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-serif text-2xl font-bold text-gold-500">
                LuxeJewels
              </span>
            </div>
            <p className="text-elegant-300 text-sm">
              Crafting timeless elegance with the finest materials. Every piece tells a story of luxury and sophistication.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-elegant-400 hover:text-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-elegant-400 hover:text-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-elegant-400 hover:text-gold-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-elegant-300 hover:text-gold-500 transition-colors text-sm">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-elegant-300 hover:text-gold-500 transition-colors text-sm">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-elegant-300 hover:text-gold-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-elegant-300 hover:text-gold-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-elegant-300 hover:text-gold-500 transition-colors text-sm">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-elegant-300 hover:text-gold-500 transition-colors text-sm">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-elegant-300 hover:text-gold-500 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-elegant-300 hover:text-gold-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-elegant-300">
                  123 Luxury Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-elegant-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-elegant-300">info@luxejewels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-elegant-800 mt-8 pt-8 text-center">
          <p className="text-elegant-400 text-sm">
            © {currentYear} LuxeJewels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
