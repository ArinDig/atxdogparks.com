import type { Metadata } from 'next'
import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Essential Dog Park Gear & Supplies',
  description: 'Discover the best gear and supplies for visiting Austin dog parks. From water bottles to safety equipment, find everything you need for a great dog park experience.',
  alternates: {
    canonical: 'https://atxdogparks.com/gear',
  },
  openGraph: {
    title: 'Essential Dog Park Gear & Supplies',
    description: 'The best gear for visiting Austin dog parks',
    type: 'website',
    url: 'https://atxdogparks.com/gear',
  },
}

interface Product {
  id: string
  name: string
  description: string
  category: string
  amazonLink: string
  imageAlt: string
  whyRecommended: string
}

const products: Product[] = [
  {
    id: 'collapsible-bowl',
    name: 'Collapsible Dog Water Bowl',
    description: 'Portable, lightweight bowl perfect for dog park visits',
    category: 'Hydration',
    amazonLink: 'YOUR_AMAZON_ASSOCIATE_LINK_HERE',
    imageAlt: 'Collapsible dog water bowl',
    whyRecommended: 'Essential for keeping your dog hydrated at any Austin dog park, especially during hot Texas summers.'
  },
  {
    id: 'portable-water-bottle',
    name: 'Dog Water Bottle with Built-in Bowl',
    description: 'All-in-one hydration solution for active dogs',
    category: 'Hydration',
    amazonLink: 'YOUR_AMAZON_ASSOCIATE_LINK_HERE',
    imageAlt: 'Portable dog water bottle',
    whyRecommended: 'Convenient one-handed operation makes it easy to give your dog water during play sessions.'
  },
  {
    id: 'waste-bag-dispenser',
    name: 'Dog Waste Bag Dispenser with Leash Clip',
    description: 'Never forget waste bags again with this handy clip-on dispenser',
    category: 'Cleanup',
    amazonLink: 'YOUR_AMAZON_ASSOCIATE_LINK_HERE',
    imageAlt: 'Dog waste bag dispenser',
    whyRecommended: 'Attaches to any leash for easy access. Essential dog park etiquette!'
  },
  {
    id: 'first-aid-kit',
    name: 'Pet First Aid Kit',
    description: 'Comprehensive first aid supplies for minor injuries',
    category: 'Safety',
    amazonLink: 'YOUR_AMAZON_ASSOCIATE_LINK_HERE',
    imageAlt: 'Pet first aid kit',
    whyRecommended: 'Be prepared for minor scrapes, cuts, or bee stings at the dog park.'
  },
  {
    id: 'high-vis-leash',
    name: 'Reflective High-Visibility Leash',
    description: 'Strong, durable leash with reflective stitching for early morning or evening visits',
    category: 'Safety',
    amazonLink: 'YOUR_AMAZON_ASSOCIATE_LINK_HERE',
    imageAlt: 'Reflective dog leash',
    whyRecommended: 'Perfect for early morning or evening dog park visits when visibility is low.'
  },
  {
    id: 'cooling-vest',
    name: 'Dog Cooling Vest',
    description: 'Evaporative cooling vest for hot Texas summers',
    category: 'Summer Gear',
    amazonLink: 'YOUR_AMAZON_ASSOCIATE_LINK_HERE',
    imageAlt: 'Dog cooling vest',
    whyRecommended: 'Essential for Austin summers. Keeps your dog cool during outdoor play in 95°+ heat.'
  },
  {
    id: 'paw-protector',
    name: 'Paw Protection Wax',
    description: 'Protects paws from hot pavement and rough terrain',
    category: 'Paw Care',
    amazonLink: 'YOUR_AMAZON_ASSOCIATE_LINK_HERE',
    imageAlt: 'Dog paw protection wax',
    whyRecommended: 'Prevents burns from hot Austin pavement and protects against rough, rocky park surfaces.'
  },
  {
    id: 'dog-towel',
    name: 'Quick-Dry Microfiber Dog Towel',
    description: 'Super absorbent towel for water-loving dogs',
    category: 'Cleanup',
    amazonLink: 'YOUR_AMAZON_ASSOCIATE_LINK_HERE',
    imageAlt: 'Microfiber dog towel',
    whyRecommended: 'Perfect for parks with water access like Red Bud Isle or Zilker. Dries quickly and fits in any car.'
  },
  {
    id: 'training-treats',
    name: 'High-Value Training Treats',
    description: 'Small, low-calorie treats perfect for recall training',
    category: 'Training',
    amazonLink: 'YOUR_AMAZON_ASSOCIATE_LINK_HERE',
    imageAlt: 'Dog training treats',
    whyRecommended: 'Essential for practicing recall commands at off-leash areas. Keep your dog focused and responsive.'
  },
]

const categories = ['All', 'Hydration', 'Safety', 'Summer Gear', 'Paw Care', 'Cleanup', 'Training']

export default function GearPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Essential Dog Park Gear
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Everything you need for safe, fun, and comfortable visits to Austin dog parks. 
            Recommended by experienced Austin dog owners.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why the Right Gear Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Visiting Austin dog parks with the right gear makes the experience safer, more enjoyable, 
            and more convenient for both you and your dog. Whether you are heading to Red Bud Isle for a 
            swim or Zilker Park for an off-leash run, being prepared ensures you can handle any situation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We have curated this list of essential gear based on recommendations from experienced Austin 
            dog owners and our own testing at local dog parks. All products are available on Amazon with 
            fast shipping to Austin.
          </p>
        </div>

        {/* Disclosure */}
        <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-12 rounded">
          <p className="text-sm text-gray-700">
            <strong>Disclosure:</strong> As an Amazon Associate, ATX Dog Parks earns from qualifying purchases. 
            This helps us maintain and improve our free dog park directory. We only recommend products we believe 
            are valuable for Austin dog park visitors.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {categories.filter(cat => cat !== 'All').map(category => {
            const categoryProducts = products.filter(p => p.category === category)
            if (categoryProducts.length === 0) return null

            return (
              <div key={category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {product.description}
                        </p>
                        
                        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mb-4">
                          <div className="flex items-start gap-2">
                            <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                            <p className="text-sm text-gray-700">
                              <strong>Why we recommend it:</strong> {product.whyRecommended}
                            </p>
                          </div>
                        </div>

                        <a
                          href={product.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg transition-colors"
                        >
                          View on Amazon
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Dog Park Packing Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Every Visit:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fresh water and portable bowl</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Waste bags (bring extras!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Leash for transit to/from off-leash area</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Treats for recall training</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Summer Essentials:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Extra water (double the normal amount)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cooling vest or bandana</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Paw protection wax or boots</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Towel for wet dogs at water parks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Back to Parks */}
        <div className="mt-12 text-center bg-primary-50 border-2 border-primary-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Visit an Austin Dog Park?
          </h3>
          <p className="text-gray-700 mb-6">
            Now that you have got your gear sorted, explore our complete directory of Austin dog parks 
            to find the perfect spot for your next adventure!
          </p>
          <a
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Browse All Dog Parks
          </a>
        </div>
      </section>
    </div>
  )
}

