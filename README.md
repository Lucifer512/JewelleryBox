# LuxeJewels - Luxury Jewelry E-Commerce Website

A beautiful, modern e-commerce website for selling luxury jewelry, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Stunning Design**: Elegant, luxury-focused UI with smooth animations and transitions
- **Product Catalog**: Browse jewelry by categories (Rings, Necklaces, Earrings, Bracelets, Watches)
- **Product Filtering & Sorting**: Filter by category and sort by price, newest, featured
- **Shopping Cart**: Full-featured cart with quantity management
- **Wishlist**: Save favorite items for later
- **Product Details**: Detailed product pages with image galleries
- **Checkout Process**: Complete checkout flow with order confirmation
- **Responsive Design**: Fully responsive across all devices
- **State Management**: Efficient state management with Zustand
- **Persistent Storage**: Cart and wishlist persist across sessions

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18.17 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## 🚀 Getting Started

### 1. Install Node.js (if not already installed)

Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)

Verify installation:
```bash
node --version
npm --version
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
JewelleryBox/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── cart/                # Shopping cart
│   ├── checkout/            # Checkout page
│   ├── collections/         # Collections page
│   ├── contact/             # Contact page
│   ├── order-success/       # Order confirmation
│   ├── products/[id]/       # Product detail pages
│   ├── shop/                # Product listing
│   ├── wishlist/            # Wishlist page
│   └── page.tsx             # Home page
├── components/              # Reusable components
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── ProductCard.tsx
├── data/                    # Static data
│   └── products.ts          # Product catalog
├── store/                   # State management
│   ├── cartStore.ts
│   └── wishlistStore.ts
└── types/                   # TypeScript types
```

## 🎨 Design Highlights

- **Color Scheme**: Elegant gold (#d4af37) and rose accents
- **Typography**: Playfair Display for headings, Inter for body
- **Animations**: Smooth hover effects and transitions
- **Luxury Feel**: Spacious layouts with premium aesthetics

## 🛍️ Pages

- **Home** (`/`) - Hero section, featured products
- **Shop** (`/shop`) - Product grid with filtering
- **Product Detail** (`/products/[id]`) - Detailed product view
- **Cart** (`/cart`) - Shopping cart management
- **Wishlist** (`/wishlist`) - Saved favorite items
- **Checkout** (`/checkout`) - Complete purchase flow
- **Collections** (`/collections`) - Curated collections
- **About** (`/about`) - Brand story
- **Contact** (`/contact`) - Contact information

## 🔧 Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Zustand** - State management
- **Lucide React** - Icons

## 🎯 Customization

### Adding Products

Edit `data/products.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  category: 'rings',
  price: 1999,
  description: 'Product description',
  material: '18K Gold',
  image: 'https://image-url.jpg',
  images: ['url1.jpg'],
  inStock: true,
  featured: true
}
```

### Modifying Colors

Edit `tailwind.config.js` to change the color scheme.

## 🚀 Deployment

Deploy easily to Vercel:
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Deploy

## 🔮 Future Enhancements

- User authentication
- Product reviews
- Payment gateway integration
- Admin dashboard
- Analytics
- Multi-currency support

---

Built with ❤️ using Next.js and TypeScript
