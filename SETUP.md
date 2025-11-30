# Quick Setup Guide

## Prerequisites Installation

### Windows Users

1. **Install Node.js**
   - Visit https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Run the installer
   - Accept all default options
   - Restart your terminal/PowerShell after installation

2. **Verify Installation**
   Open PowerShell and run:
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v20.x.x)

## Running the Project

### First Time Setup

1. **Navigate to Project Directory**
   ```powershell
   cd d:\Work\JewelleryBox
   ```

2. **Install Dependencies** (only needed once)
   ```powershell
   npm install
   ```
   This will take a few minutes...

3. **Start Development Server**
   ```powershell
   npm run dev
   ```

4. **Open in Browser**
   - Visit: http://localhost:3000
   - The site will automatically reload when you make changes

### Subsequent Runs

After the first setup, you only need:
```powershell
cd d:\Work\JewelleryBox
npm run dev
```

## Common Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for code issues
npm run lint
```

## Troubleshooting

### Port 3000 Already in Use
```powershell
# Run on different port
npm run dev -- -p 3001
```

### Module Not Found Error
```powershell
# Reinstall dependencies
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Permission Errors
Run PowerShell as Administrator

## Project Features

✅ Home page with hero section and featured products
✅ Shop page with filtering and sorting
✅ Product detail pages with image galleries
✅ Shopping cart with quantity management
✅ Wishlist for saving favorite items
✅ Complete checkout flow
✅ Responsive design for all devices
✅ Smooth animations and transitions
✅ Persistent cart and wishlist (saved in browser)

## Making Changes

### Adding New Products
Edit: `data/products.ts`

### Changing Colors
Edit: `tailwind.config.js`

### Modifying Pages
Edit files in: `app/` directory

### Updating Components
Edit files in: `components/` directory

## Need Help?

- Check the main README.md for detailed documentation
- Visit Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

Enjoy building with LuxeJewels! 💎
