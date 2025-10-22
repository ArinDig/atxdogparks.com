# Deployment Guide for ATX Dog Parks

## Prerequisites

Before deploying, ensure you have:
- Node.js 18+ installed
- A hosting account (Vercel recommended for Next.js)
- Domain configured (atxdogparks.com)

## Environment Setup

### Install Node.js

If Node.js is not installed, install it using one of these methods:

**Option 1: Using Homebrew (recommended for macOS)**
```bash
brew install node
```

**Option 2: Using nvm (Node Version Manager)**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then:
nvm install 20
nvm use 20
```

**Option 3: Download from nodejs.org**
Download and install from https://nodejs.org/

### Install Dependencies

```bash
cd /Users/arinbrown/Documents/Arin\ Digital\ Innovations/Directories/ATXDogParks/Cursor_ADP
npm install
```

## Local Development

```bash
npm run dev
```

Visit http://localhost:3000 to view the site.

## Build for Production

```bash
npm run build
```

This will create an optimized production build in the `.next` folder.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and offers excellent performance.

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

4. Configure your custom domain (atxdogparks.com) in the Vercel dashboard

**Benefits:**
- Automatic deployments on git push
- Global CDN
- Automatic HTTPS
- Zero configuration
- Great for Next.js

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

4. Configure custom domain in Netlify dashboard

### Option 3: Traditional Hosting (cPanel, etc.)

For traditional hosting:

1. Build the project:
```bash
npm run build
```

2. Export static files (if needed):
```bash
npm run build
```

3. The build output will be in `.next/` folder

Note: Next.js works best with hosting platforms that support Node.js. For static hosting, you may need to configure Next.js for static export.

## Domain Configuration

### DNS Settings for atxdogparks.com

Configure these DNS records with your domain registrar:

**For Vercel:**
- A record: `76.76.21.21`
- CNAME record: `www` → `cname.vercel-dns.com`

**For Netlify:**
- A record: `75.2.60.5`
- CNAME record: `www` → `[your-site].netlify.app`

### SSL Certificate

Both Vercel and Netlify provide free automatic SSL certificates.

## SEO Setup Post-Deployment

After deployment, complete these SEO steps:

### 1. Google Search Console

1. Go to https://search.google.com/search-console
2. Add property for atxdogparks.com
3. Verify ownership
4. Submit sitemap: https://atxdogparks.com/sitemap.xml

### 2. Google Business Profile

If applicable, create a Google Business Profile for local SEO.

### 3. Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add site
3. Submit sitemap

### 4. Update Google Verification Code

In `app/layout.tsx`, update this line with your actual verification code:
```typescript
verification: {
  google: 'your-google-verification-code',
},
```

### 5. Analytics (Optional but Recommended)

Add Google Analytics or other analytics tools to track visitors.

## Performance Optimization

The site is already optimized with:
- ✅ Image optimization via Next.js Image component
- ✅ Static page generation
- ✅ Minified CSS and JavaScript
- ✅ Optimized fonts
- ✅ Lazy loading images

## Monitoring

After deployment, monitor:
- Site performance (Google PageSpeed Insights)
- Search rankings
- User analytics
- Error logs

## Updating Content

To add new dog parks:

1. Edit `data/dogParks.json`
2. Add park data following the existing format
3. Add images to the public folder or use URLs
4. Commit and push (deployment will be automatic with Vercel/Netlify)

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Check Vercel documentation: https://vercel.com/docs
- Review error logs in your hosting dashboard

## Cost Estimate

- **Vercel/Netlify Free Tier:** $0/month (sufficient for most use cases)
- **Domain:** ~$10-15/year
- **Premium Hosting (if needed):** $20-50/month

The free tier of Vercel or Netlify should be more than sufficient for this directory site.

