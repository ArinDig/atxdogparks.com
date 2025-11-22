import Link from 'next/link'
import { FaExternalLinkAlt, FaShoppingBag } from 'react-icons/fa'

interface GearRecommendationsProps {
  parkType?: 'water' | 'rocky' | 'general'
  compact?: boolean
}

export default function GearRecommendations({ parkType = 'general', compact = false }: GearRecommendationsProps) {
  const recommendations = {
    water: [
      {
        name: 'Quick-Dry Dog Towel',
        reason: 'Essential after swimming',
        amazonLink: 'YOUR_AMAZON_LINK_HERE'
      },
      {
        name: 'Dog Life Jacket',
        reason: 'Safety for water-loving dogs',
        amazonLink: 'YOUR_AMAZON_LINK_HERE'
      },
      {
        name: 'Waterproof Leash',
        reason: 'Won\'t absorb water or smell',
        amazonLink: 'YOUR_AMAZON_LINK_HERE'
      }
    ],
    rocky: [
      {
        name: 'Paw Protection Wax',
        reason: 'Protects from rough terrain',
        amazonLink: 'YOUR_AMAZON_LINK_HERE'
      },
      {
        name: 'Dog Hiking Harness',
        reason: 'Better control on trails',
        amazonLink: 'YOUR_AMAZON_LINK_HERE'
      },
      {
        name: 'Tick & Flea Prevention',
        reason: 'Important for wooded areas',
        amazonLink: 'YOUR_AMAZON_LINK_HERE'
      }
    ],
    general: [
      {
        name: 'Collapsible Water Bowl',
        reason: 'Easy to carry, essential for hydration',
        amazonLink: 'YOUR_AMAZON_LINK_HERE'
      },
      {
        name: 'Waste Bag Dispenser',
        reason: 'Never forget cleanup bags',
        amazonLink: 'YOUR_AMAZON_LINK_HERE'
      },
      {
        name: 'High-Visibility Leash',
        reason: 'Perfect for early morning or evening',
        amazonLink: 'YOUR_AMAZON_LINK_HERE'
      }
    ]
  }

  const items = recommendations[parkType]

  if (compact) {
    return (
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <FaShoppingBag className="text-yellow-600 text-xl" />
          <h3 className="text-lg font-bold text-gray-900">
            Recommended Gear for This Park
          </h3>
        </div>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start justify-between gap-4">
              <div className="flex-grow">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.reason}</p>
              </div>
              <a
                href={item.amazonLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-shrink-0 text-yellow-600 hover:text-yellow-700 font-semibold text-sm flex items-center gap-1"
              >
                View <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-yellow-200">
          <Link 
            href="/gear" 
            className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
          >
            View All Recommended Dog Park Gear →
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>
    )
  }

  return (
    <section className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <FaShoppingBag className="text-primary-600 text-2xl" />
        <h2 className="text-2xl font-bold text-gray-900">
          Recommended Gear for This Park
        </h2>
      </div>

      <p className="text-gray-700 mb-6">
        Make the most of your visit with these essential items:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {items.map((item, index) => (
          <div key={index} className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.reason}</p>
            <a
              href={item.amazonLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
            >
              View on Amazon
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        ))}
      </div>

      <div className="bg-primary-50 border-l-4 border-primary-600 p-4">
        <p className="text-sm text-gray-700 mb-2">
          Want more gear recommendations? Check out our complete guide to essential dog park supplies.
        </p>
        <Link 
          href="/gear" 
          className="inline-block text-primary-600 hover:text-primary-700 font-semibold"
        >
          View Complete Gear Guide →
        </Link>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        As an Amazon Associate, we earn from qualifying purchases.
      </p>
    </section>
  )
}

