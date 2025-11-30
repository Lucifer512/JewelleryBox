'use client';

import Link from 'next/link';
import { ShoppingBag, Heart, Menu, X, Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const shouldUseDarkText = !isHomePage || isScrolled;
  const shouldHaveBackground = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldHaveBackground
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="font-serif text-2xl font-bold gradient-text hidden sm:block">
              LuxeJewels
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold-600 ${
                  shouldUseDarkText ? 'text-elegant-900' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`p-2 hover:bg-elegant-100 rounded-full transition-colors ${
                shouldUseDarkText ? 'text-elegant-900' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/wishlist"
              className={`p-2 hover:bg-elegant-100 rounded-full transition-colors relative ${
                shouldUseDarkText ? 'text-elegant-900' : 'text-white'
              }`}
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>

            <Link
              href="/cart"
              className={`p-2 hover:bg-elegant-100 rounded-full transition-colors relative ${
                shouldUseDarkText ? 'text-elegant-900' : 'text-white'
              }`}
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>

            <button
              className={`p-2 hover:bg-elegant-100 rounded-full transition-colors hidden sm:block ${
                shouldUseDarkText ? 'text-elegant-900' : 'text-white'
              }`}
              aria-label="User Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 hover:bg-elegant-100 rounded-full transition-colors ${
                shouldUseDarkText ? 'text-elegant-900' : 'text-white'
              }`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-elegant-200">
          <nav className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-elegant-900 font-medium hover:text-gold-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
