import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Eternal Diamond Ring',
    category: 'rings',
    price: 2499,
    originalPrice: 2999,
    description: 'A stunning 18K white gold ring featuring a brilliant 1.5 carat diamond center stone surrounded by a halo of smaller diamonds. Perfect for engagements or special occasions.',
    material: '18K White Gold, Diamond',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
    ],
    inStock: true,
    featured: true,
    isNew: true,
  },
  {
    id: '2',
    name: 'Celestial Pearl Necklace',
    category: 'necklaces',
    price: 1899,
    description: 'Exquisite freshwater pearl necklace with 18K yellow gold clasp. Each pearl is hand-selected for its lustrous quality and perfect shape.',
    material: '18K Yellow Gold, Freshwater Pearls',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Royal Sapphire Earrings',
    category: 'earrings',
    price: 3299,
    description: 'Magnificent oval sapphire earrings set in platinum with diamond accents. The deep blue sapphires are ethically sourced and certified.',
    material: 'Platinum, Sapphire, Diamond',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    ],
    inStock: true,
    featured: true,
    isNew: true,
  },
  {
    id: '4',
    name: 'Infinity Rose Gold Bracelet',
    category: 'bracelets',
    price: 1599,
    originalPrice: 1899,
    description: 'Elegant infinity symbol bracelet crafted in 14K rose gold. Adjustable chain ensures perfect fit.',
    material: '14K Rose Gold',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80'
    ],
    inStock: true,
  },
  {
    id: '5',
    name: 'Heritage Gold Watch',
    category: 'watches',
    price: 4999,
    description: 'Swiss-made automatic watch with 18K yellow gold case and leather strap. Limited edition timepiece with exhibition caseback.',
    material: '18K Yellow Gold, Swiss Movement, Leather',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80'
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: '6',
    name: 'Emerald Teardrop Necklace',
    category: 'necklaces',
    price: 2799,
    description: 'Breathtaking Colombian emerald teardrop pendant with diamond accents on 18K white gold chain.',
    material: '18K White Gold, Emerald, Diamond',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    ],
    inStock: true,
  },
  {
    id: '7',
    name: 'Classic Diamond Studs',
    category: 'earrings',
    price: 1999,
    description: 'Timeless 1 carat total weight diamond stud earrings in 14K white gold with secure screw backs.',
    material: '14K White Gold, Diamond',
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80'
    ],
    inStock: true,
    featured: true,
  },
  {
    id: '8',
    name: 'Vintage Ruby Ring',
    category: 'rings',
    price: 3499,
    description: 'Art deco inspired ruby ring with intricate filigree details in platinum. Center stone is a vivid red Burmese ruby.',
    material: 'Platinum, Ruby, Diamond',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80'
    ],
    inStock: false,
  },
  {
    id: '9',
    name: 'Tennis Bracelet',
    category: 'bracelets',
    price: 4299,
    description: 'Iconic tennis bracelet featuring 5 carats of brilliant diamonds set in 18K white gold.',
    material: '18K White Gold, Diamond',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80'
    ],
    inStock: true,
  },
  {
    id: '10',
    name: 'Modern Geometric Ring',
    category: 'rings',
    price: 1299,
    description: 'Contemporary geometric design ring in 14K yellow gold with minimalist aesthetic.',
    material: '14K Yellow Gold',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: '11',
    name: 'Elegant Rose Gold Hoops',
    category: 'earrings',
    price: 899,
    description: 'Sleek rose gold hoop earrings with a polished finish. Perfect for everyday elegance.',
    material: '14K Rose Gold',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    ],
    inStock: true,
  },
  {
    id: '12',
    name: 'Luxury Diamond Watch',
    category: 'watches',
    price: 8999,
    description: 'Exquisite ladies watch with diamond-encrusted bezel and mother-of-pearl dial.',
    material: '18K White Gold, Diamond, Swiss Movement',
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'
    ],
    inStock: true,
    featured: true,
  },
];
