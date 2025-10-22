# Setup Guide for ATX Dog Parks

This guide will help you get the ATX Dog Parks website up and running on your local machine.

## Prerequisites

Make sure you have the following installed:
- Node.js 18 or higher
- npm (comes with Node.js)

## Step-by-Step Setup

### 1. Install Node.js

If you don't have Node.js installed:

**macOS (using Homebrew):**
```bash
brew install node
```

**Or download from:**
https://nodejs.org/ (choose the LTS version)

Verify installation:
```bash
node --version
npm --version
```

### 2. Navigate to Project Directory

```bash
cd "/Users/arinbrown/Documents/Arin Digital Innovations/Directories/ATXDogParks/Cursor_ADP"
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- TypeScript
- Tailwind CSS
- React Icons

### 4. Run Development Server

```bash
npm run dev
```

The site will be available at: http://localhost:3000

### 5. Build for Production

When ready to deploy:

```bash
npm run build
```

### 6. Start Production Server

```bash
npm start
```

## Project Structure

```
Cursor_ADP/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── parks/[slug]/      # Dynamic park pages
│   ├── sitemap.ts         # Sitemap generator
│   └── robots.ts          # Robots.txt generator
├── components/            # React components
├── data/                  # JSON data files
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── package.json           # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Dog Parks

1. Open `data/dogParks.json`
2. Add a new park object following this structure:

```json
{
  "id": "unique-id",
  "name": "Park Name",
  "slug": "park-name",
  "address": "Full Address",
  "phone": "(512) XXX-XXXX",
  "website": "https://...",
  "hours": "5:00 AM - 10:00 PM Daily",
  "leashPolicy": "Off-Leash",
  "fees": "Free",
  "description": "...",
  "features": ["Feature 1", "Feature 2"],
  "mainImage": "image-url",
  "images": ["url1", "url2", "url3"],
  "latitude": 30.xxxx,
  "longitude": -97.xxxx
}
```

### Changing Colors

The blue theme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Adjust these color values
    500: '#3b82f6',  // Main blue
    600: '#2563eb',  // Darker blue
    // etc...
  },
}
```

### Updating Images

Replace images in the `dogParks.json` file with your own URLs or add images to the `public/` folder and reference them.

## Troubleshooting

### Port 3000 is already in use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clean Next.js cache
rm -rf .next
npm run build
```

## Next Steps

1. ✅ Get the site running locally
2. ✅ Review and customize content
3. ✅ Add your own images
4. ✅ Test on mobile devices
5. ✅ Deploy to hosting (see DEPLOYMENT.md)
6. ✅ Configure domain
7. ✅ Set up Google Search Console
8. ✅ Monitor and optimize

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

## License

This project is for educational and community purposes.

