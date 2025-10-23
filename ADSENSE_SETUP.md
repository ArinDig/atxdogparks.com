# Google AdSense Setup Guide

This guide will help you set up Google AdSense on your ATX Dog Parks website.

## Prerequisites Completed ✅

Your website now has all the required components for AdSense:

- ✅ **Privacy Policy** - `/privacy`
- ✅ **Terms of Service** - `/terms`
- ✅ **Contact Page** - `/contact`
- ✅ **Cookie Consent Banner** - Automatically displays to new visitors
- ✅ **ads.txt file** - `/public/ads.txt` (needs your Publisher ID after approval)

## Step 1: Apply for Google AdSense

1. Go to [https://www.google.com/adsense](https://www.google.com/adsense)
2. Click **"Get Started"**
3. Sign in with your Google account
4. Enter your website URL: `https://atxdogparks.com`
5. Select your country/region
6. Review and accept the AdSense Terms and Conditions

## Step 2: Connect Your Site to AdSense

After applying, Google will provide you with an AdSense code. You'll need to add this to your website.

### Add AdSense Code to Your Site

1. In your AdSense account, copy the AdSense code (it looks like this):

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

2. Open `app/layout.tsx` in your code editor

3. Add the script to the `<head>` section by modifying the layout:

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
```

4. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual Publisher ID

## Step 3: Update ads.txt File

Once you receive your Publisher ID from Google:

1. Open `/public/ads.txt`
2. Find the line: `# google.com, pub-PUBLISHER_ID, DIRECT, f08c47fec0942fa0`
3. Uncomment it (remove the `#`) and replace `PUBLISHER_ID` with your actual ID

Example:
```
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
```

4. Commit and push the changes to GitHub
5. The file will be accessible at `https://atxdogparks.com/ads.txt`

## Step 4: Wait for Approval

- Google will review your site (typically 1-2 weeks, but can take longer)
- During this time, ensure your site has:
  - ✅ Quality content (you have 16 dog park listings!)
  - ✅ Easy navigation (completed)
  - ✅ Privacy policy (completed)
  - ✅ Contact information (completed)
  - Regular traffic (keep promoting your site!)

## Step 5: Create Ad Units (After Approval)

Once approved, you can create ad units:

1. In AdSense, go to **Ads** → **By ad unit**
2. Choose ad type:
   - **Display ads** - Traditional banner ads
   - **In-feed ads** - Ads that match your content style
   - **In-article ads** - Ads within content
   - **Multiplex ads** - Grid of ads

### Recommended Ad Placements for Your Site:

#### Homepage (`app/page.tsx`)
- **Top Banner** - Below hero section
- **In-feed ads** - Between dog park cards (every 6 cards)
- **Sidebar ad** - If you add a sidebar

#### Individual Park Pages (`app/parks/[slug]/page.tsx`)
- **Top of page** - After park name/image
- **Mid-content** - After features section
- **Bottom** - Before related parks

### Example: Adding an Ad Unit

After creating an ad unit in AdSense, you'll get code like this:

```typescript
// Create a new component: components/AdUnit.tsx
'use client';

import { useEffect } from 'react';

export default function AdUnit({ 
  slot, 
  format = 'auto',
  responsive = true 
}: { 
  slot: string;
  format?: string;
  responsive?: boolean;
}) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}
```

Then use it in your pages:

```typescript
import AdUnit from '@/components/AdUnit';

// In your page component:
<AdUnit slot="1234567890" />
```

## Step 6: AdSense Best Practices

### Do's ✅
- Place ads where they don't disrupt user experience
- Use responsive ad units for mobile compatibility
- Monitor performance in AdSense dashboard
- Follow Google's ad placement policies
- Keep content quality high
- Update park information regularly

### Don'ts ❌
- Don't click your own ads
- Don't ask others to click ads
- Don't place ads on pages with no content
- Don't use misleading labels
- Don't have more ads than content
- Don't place ads too close to interactive elements

## Step 7: Optimize for Revenue

### Content Strategy
1. **Add more parks** - More pages = more ad impressions
2. **Write blog posts** - "Best Dog Parks in Austin", "Dog Park Safety Tips", etc.
3. **Add park reviews** - User-generated content
4. **Create guides** - "First Time at Dog Park Guide", etc.

### SEO for AdSense
- Continue optimizing for search engines (you're already set up well!)
- Target long-tail keywords: "off leash dog parks south austin"
- Create location-specific content
- Build backlinks to your site

### Traffic Sources
- Social media (Instagram, Facebook dog groups)
- Local Austin directories
- Pet-related forums and communities
- Google My Business (if applicable)
- Local partnerships with vets, pet stores, groomers

## Step 8: Monitor Performance

1. Check AdSense dashboard regularly
2. Key metrics to watch:
   - **Page RPM** - Revenue per 1000 pageviews
   - **CTR** - Click-through rate
   - **CPC** - Cost per click
   - **Impressions** - Number of ad views

3. Use Google Analytics alongside AdSense to:
   - Identify high-performing pages
   - Understand user behavior
   - Optimize content strategy

## Important Policies to Follow

### Google AdSense Program Policies
- [AdSense Program Policies](https://support.google.com/adsense/answer/48182)
- [Webmaster Quality Guidelines](https://support.google.com/webmasters/answer/35769)

### Key Policy Points
- No invalid click activity
- No prohibited content
- Original, quality content
- Transparent user experience
- Proper ad implementation

## Troubleshooting

### Application Rejected?
- Ensure site has sufficient content (you're good with 16 parks!)
- Check all pages are accessible
- Verify privacy policy and contact page are working
- Make sure site has been live for a while
- Fix any technical issues (broken links, errors)

### Ads Not Showing?
- Verify AdSense code is correctly implemented
- Check ads.txt is accessible
- Ensure cookie consent is working
- Wait 24-48 hours after adding code
- Check for ad blockers during testing

### Low Revenue?
- Increase traffic through SEO and marketing
- Optimize ad placements
- Test different ad formats
- Create more content pages
- Improve user engagement

## Additional Monetization Tips

While waiting for AdSense approval or to supplement AdSense:

1. **Affiliate Marketing**
   - Pet products (Amazon Associates)
   - Dog training courses
   - Pet insurance

2. **Sponsored Content**
   - Partner with local pet businesses
   - Dog trainers
   - Pet groomers
   - Veterinarians

3. **Premium Listings**
   - Offer featured park listings
   - Enhanced business profiles for commercial dog parks

## Need Help?

- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Community Forum](https://support.google.com/adsense/community)
- [AdSense YouTube Channel](https://www.youtube.com/adsense)

## Next Steps

1. ✅ Push current changes to GitHub (Privacy, Terms, Contact pages)
2. 📝 Apply for Google AdSense
3. 📝 Add AdSense code to site once approved
4. 📝 Update ads.txt with your Publisher ID
5. 📝 Create ad units and add to pages
6. 📈 Monitor and optimize

---

**Good luck with your AdSense application!** 🎉

Your site is now fully prepared for monetization. The professional structure, quality content, and required legal pages should help with approval.

