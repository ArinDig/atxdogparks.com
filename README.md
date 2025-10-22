# ATX Dog Parks

A comprehensive directory website for dog parks in Austin, Texas. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🐕 Complete directory of 10+ Austin dog parks
- 🗺️ Detailed park information including addresses, hours, and amenities
- 📱 Fully responsive design optimized for mobile and desktop
- 🎨 Beautiful blue-themed UI with modern design
- 🔍 SEO-optimized with structured data, metadata, and sitemap
- 📍 Direct links to Google Maps directions for each park
- 🖼️ Photo galleries for each park location
- ⚡ Fast, static-generated pages for optimal performance

## Park Information Includes

- Main and supporting images
- Address and location
- Hours of operation
- Phone numbers
- Website links
- Leash policy (off-leash vs. on-leash)
- Entry fees
- Available amenities and features
- Detailed descriptions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Image Optimization:** Next.js Image component
- **SEO:** Metadata API, JSON-LD structured data, sitemap, robots.txt

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## SEO Features

This site is built with SEO best practices for 2025:

- ✅ Semantic HTML structure
- ✅ Optimized metadata for every page
- ✅ Open Graph and Twitter Card tags
- ✅ JSON-LD structured data (Schema.org)
- ✅ XML sitemap generation
- ✅ robots.txt configuration
- ✅ Optimized images with lazy loading
- ✅ Fast page load times
- ✅ Mobile-responsive design
- ✅ Descriptive URLs and page titles
- ✅ Internal linking structure
- ✅ Rich content with keywords
- ✅ Accessibility features

## Project Structure

```
Cursor_ADP/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with park grid
│   ├── globals.css         # Global styles
│   ├── about/              # About page
│   ├── parks/[slug]/       # Dynamic park detail pages
│   ├── sitemap.ts          # XML sitemap generator
│   └── robots.ts           # robots.txt generator
├── components/
│   ├── Header.tsx          # Site header/navigation
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Homepage hero section
│   ├── SearchBar.tsx       # Search component
│   └── DogParkCard.tsx     # Park card component
├── data/
│   └── dogParks.json       # Park data
├── types/
│   └── dogPark.ts          # TypeScript types
└── public/                 # Static assets
```

## Dog Parks Included

- Auditorium Shores Off-Leash Area
- Red Bud Isle
- Zilker Metropolitan Park
- Walnut Creek Metropolitan Park
- Norwood Estate Dog Park
- Shoal Creek Greenbelt
- Mary Moore Searight Metropolitan Park
- Bull Creek District Park
- Emma Long Metropolitan Park
- Bartholomew District Park

## License

This project is for educational and community purposes.

## Acknowledgments

- Park information sourced from Austin Parks and Recreation Department
- Images from Unsplash
- Built with ❤️ for Austin's dog-loving community

