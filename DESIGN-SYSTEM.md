# LuxeJewels Design System

## 🎨 Color Palette

### Primary Colors
```css
Gold (Primary Accent)
--gold-50:  #fefce8  /* Lightest */
--gold-100: #fef9c3
--gold-200: #fef08a
--gold-300: #fde047
--gold-400: #facc15
--gold-500: #d4af37  /* Main brand color */
--gold-600: #b8960f
--gold-700: #a67c00
--gold-800: #8a6500
--gold-900: #6b4e00  /* Darkest */
```

### Secondary Colors
```css
Rose (Accents - Sale, Wishlist)
--rose-500: #f43f5e  /* Main rose */
--rose-600: #e11d48
```

### Neutral Colors
```css
Elegant (Backgrounds & Text)
--elegant-50:  #fafaf9  /* Background */
--elegant-100: #f5f5f4
--elegant-200: #e7e5e4
--elegant-300: #d6d3d1
--elegant-600: #57534e  /* Secondary text */
--elegant-700: #44403c
--elegant-900: #1c1917  /* Primary text */
```

## 📝 Typography

### Font Families
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

### Font Sizes
```css
text-xs:   0.75rem   (12px)
text-sm:   0.875rem  (14px)
text-base: 1rem      (16px)
text-lg:   1.125rem  (18px)
text-xl:   1.25rem   (20px)
text-2xl:  1.5rem    (24px)
text-3xl:  1.875rem  (30px)
text-4xl:  2.25rem   (36px)
text-5xl:  3rem      (48px)
text-6xl:  3.75rem   (60px)
text-7xl:  4.5rem    (72px)
```

### Font Weights
```css
font-light:     300
font-normal:    400
font-medium:    500
font-semibold:  600
font-bold:      700
```

## 🎭 Design Principles

### 1. Luxury & Elegance
- Generous white space
- High-quality imagery
- Sophisticated color palette
- Subtle animations

### 2. User Experience
- Clear visual hierarchy
- Intuitive navigation
- Responsive across devices
- Fast loading times

### 3. Consistency
- Unified component design
- Consistent spacing
- Predictable interactions
- Cohesive color usage

## 📦 Component Patterns

### Buttons

**Primary Button (Gold)**
```tsx
<button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
  Button Text
</button>
```

**Secondary Button (Outline)**
```tsx
<button className="border-2 border-elegant-300 text-elegant-700 px-6 py-3 rounded-full font-semibold hover:border-elegant-400 transition-all">
  Button Text
</button>
```

### Cards

**Product Card**
```tsx
<div className="bg-white rounded-2xl overflow-hidden shadow-sm">
  {/* Content */}
</div>
```

**Content Card**
```tsx
<div className="bg-white rounded-xl p-6 shadow-sm">
  {/* Content */}
</div>
```

### Badges

**New Badge**
```tsx
<span className="bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
  NEW
</span>
```

**Sale Badge**
```tsx
<span className="bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
  SALE
</span>
```

## 📐 Spacing System

```css
space-1:  0.25rem  (4px)
space-2:  0.5rem   (8px)
space-3:  0.75rem  (12px)
space-4:  1rem     (16px)
space-6:  1.5rem   (24px)
space-8:  2rem     (32px)
space-12: 3rem     (48px)
space-16: 4rem     (64px)
space-20: 5rem     (80px)
```

## 🎬 Animations

### Hover Effects
```css
/* Scale on hover */
hover:scale-105
hover:scale-110

/* Translate on hover */
hover:translate-x-2
hover:-translate-y-1

/* Color transitions */
transition-colors
transition-all
```

### Loading States
```css
/* Pulse animation for loading */
animate-pulse

/* Spin for loading spinners */
animate-spin
```

### Entry Animations
```css
/* Fade in */
animate-fade-in

/* Slide up */
animate-slide-up

/* Bounce */
animate-bounce
```

## 🖼️ Image Guidelines

### Product Images
- **Aspect Ratio**: 1:1 (Square)
- **Minimum Size**: 800x800px
- **Format**: JPEG or WebP
- **Quality**: High (80-90%)
- **Background**: Neutral or contextual

### Hero Images
- **Aspect Ratio**: 16:9 or wider
- **Minimum Size**: 1920x1080px
- **Format**: JPEG or WebP
- **Quality**: High (85-95%)

### Thumbnails
- **Size**: 80x80px to 120x120px
- **Format**: JPEG or WebP
- **Quality**: Medium (70-80%)

## 🎯 Iconography

### Icon Library
Using **Lucide React** icons

### Common Icons
- Shopping: `ShoppingBag`, `ShoppingCart`
- User: `User`, `Heart`
- Navigation: `Menu`, `X`, `ArrowRight`, `ArrowLeft`
- Actions: `Plus`, `Minus`, `Check`
- Communication: `Mail`, `Phone`, `MapPin`
- Features: `Sparkles`, `Award`, `Shield`

### Icon Sizes
```tsx
<Icon className="w-4 h-4" />  // Small
<Icon className="w-5 h-5" />  // Medium
<Icon className="w-6 h-6" />  // Large
<Icon className="w-8 h-8" />  // XL
```

## 📱 Responsive Breakpoints

```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet portrait */
lg:  1024px  /* Tablet landscape / Small desktop */
xl:  1280px  /* Desktop */
2xl: 1536px  /* Large desktop */
```

### Usage Pattern
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {/* Responsive grid */}
</div>
```

## 🎨 Utility Classes

### Custom Utilities

**Gradient Text**
```tsx
<span className="gradient-text">
  Luxury Text
</span>
```

**Glass Effect**
```tsx
<div className="glass-effect">
  {/* Content with glassmorphism */}
</div>
```

## 🔄 State Indicators

### Loading
```tsx
<div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
```

### Success
```tsx
<CheckCircle className="w-12 h-12 text-green-600" />
```

### Error
```tsx
<XCircle className="w-12 h-12 text-red-600" />
```

## 📋 Form Elements

### Input Fields
```tsx
<input 
  type="text"
  className="w-full px-4 py-2 border border-elegant-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
/>
```

### Select Dropdowns
```tsx
<select className="px-4 py-2 border border-elegant-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500">
  <option>Option 1</option>
</select>
```

## 🎪 Special Effects

### Image Hover Effect
```tsx
<Image 
  className="transition-all duration-500 group-hover:scale-110"
  {...props}
/>
```

### Backdrop Blur
```tsx
<div className="bg-white/10 backdrop-blur-md">
  {/* Content */}
</div>
```

### Shadow Elevation
```tsx
shadow-sm   /* Subtle */
shadow      /* Default */
shadow-lg   /* Prominent */
```

## 📝 Content Guidelines

### Product Titles
- Clear and descriptive
- Include material or key feature
- Example: "Eternal Diamond Ring" not "Ring #1"

### Product Descriptions
- Highlight key features
- Mention materials and craftsmanship
- Include care instructions
- Evoke emotion and luxury

### Pricing
- Always show with thousand separators: $2,499
- Show original price when on sale
- Calculate and show savings

## ✅ Accessibility

### Color Contrast
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: Clear focus states

### Interactive Elements
- Minimum touch target: 44x44px
- Clear hover states
- Keyboard navigable
- Screen reader friendly

### Images
- Always include alt text
- Descriptive and concise
- Include product name and key features

---

This design system ensures consistency and maintains the luxury aesthetic throughout the LuxeJewels e-commerce experience.
