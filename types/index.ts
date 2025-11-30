export interface Product {
  id: string;
  name: string;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'watches';
  price: number;
  originalPrice?: number;
  description: string;
  material: string;
  image: string;
  images: string[];
  inStock: boolean;
  featured?: boolean;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {
  addedAt: Date;
}
