import Link from 'next/link'
import Image from 'next/image'
import { FaExternalLinkAlt, FaShoppingBag } from 'react-icons/fa'

const AMAZON_TAG = 'adiaustin-20'

// Clean canonical product links. Deliberately NOT the long copied search-result
// URLs — those carry session tokens and sponsored-placement params that rot and
// can resolve to the wrong product.
const amazonUrl = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`

export type ParkGearVariant = 'water' | 'rocky' | 'general'

interface GearItem {
  asin: string
  name: string
  reason: string
  price: string
  imageUrl: string
}

const recommendations: Record<ParkGearVariant, GearItem[]> = {
  water: [
    {
      asin: 'B0081XIK4Q',
      name: 'Outward Hound Granby Splash Life Jacket',
      reason: 'Lake Austin and Lady Bird Lake have current and steep drop-offs. Even strong swimmers tire.',
      price: '~$24',
      imageUrl: 'https://m.media-amazon.com/images/I/71s2fr1Wx+L._AC_SL1200_.jpg',
    },
    {
      asin: 'B00T7W30IG',
      name: 'Bone Dry Microfiber Dog Towel',
      reason: 'Wrings out fast and keeps a soaked dog off your back seat on the drive home.',
      price: '~$14',
      imageUrl: 'https://m.media-amazon.com/images/I/61rz83VBW0L._AC_SL1200_.jpg',
    },
    {
      asin: 'B07SK3Q6MK',
      name: 'ChuckIt! Amphibious Fetch Balls (3-pack)',
      reason: 'They float and stay visible on the surface — a sinking tennis ball is a lost tennis ball.',
      price: '~$10',
      imageUrl: 'https://m.media-amazon.com/images/I/513NKuPM+dL._AC_SL1200_.jpg',
    },
  ],
  rocky: [
    {
      asin: 'B0002IJQDC',
      name: "Musher's Secret Paw Balm",
      reason: 'Limestone and hot Austin rock are rough on pads. Wax on before the hike, not after.',
      price: '~$13',
      imageUrl: 'https://m.media-amazon.com/images/I/716VEpvp99L._AC_SL1200_.jpg',
    },
    {
      asin: 'B01M8JT6FT',
      name: 'rabbitgoo No-Pull Dog Harness',
      reason: 'Better control than a collar on uneven footing, and the top handle helps over ledges.',
      price: '~$16',
      imageUrl: 'https://m.media-amazon.com/images/I/71eROBTwkVL._AC_SL1200_.jpg',
    },
    {
      asin: 'B0B1W5R11Y',
      name: 'Dog First Aid Kit',
      reason: 'Cut pads and scrapes are the most common trail injury, and you are a long walk from the car.',
      price: '~$35',
      imageUrl: 'https://m.media-amazon.com/images/I/71oprEdeigL._AC_SL1200_.jpg',
    },
  ],
  general: [
    {
      asin: 'B005QZ4YZQ',
      name: 'Kurgo Collaps-A-Bowl',
      reason: 'Clips to a leash and holds 24oz. Not every Austin park has a working fountain.',
      price: '~$14',
      imageUrl: 'https://m.media-amazon.com/images/I/61iNMZKrxyL._AC_SL1200_.jpg',
    },
    {
      asin: 'B08VN2W5NC',
      name: 'Earth Rated Bag Holder & Leash Dispenser',
      reason: 'Clips on and stays there, which means you stop arriving without bags.',
      price: '~$6',
      imageUrl: 'https://m.media-amazon.com/images/I/71LU1a0g37L._AC_SL1200_.jpg',
    },
    {
      asin: 'B08573BRLS',
      name: 'Joytale Reflective Dog Leash',
      reason: 'Most Austin parks open at sunrise and close after dark. Reflective stitching earns its keep.',
      price: '~$8',
      imageUrl: 'https://m.media-amazon.com/images/I/81IQtEPqk6L._AC_SL1200_.jpg',
    },
  ],
}

const headings: Record<ParkGearVariant, string> = {
  water: 'Worth Packing for a Swimming Park',
  rocky: 'Worth Packing for Rocky Terrain',
  general: 'Worth Packing for This Park',
}

interface GearRecommendationsProps {
  parkType?: ParkGearVariant
  compact?: boolean
}

export default function GearRecommendations({
  parkType = 'general',
  compact = false,
}: GearRecommendationsProps) {
  const items = recommendations[parkType]
  const heading = headings[parkType]

  if (compact) {
    return (
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <FaShoppingBag className="text-yellow-600 text-xl" />
          <h3 className="text-lg font-bold text-gray-900">{heading}</h3>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.asin} className="flex items-start justify-between gap-4">
              <div className="flex-grow">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.reason}</p>
              </div>
              <a
                href={amazonUrl(item.asin)}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-shrink-0 text-yellow-700 hover:text-yellow-800 font-semibold text-sm flex items-center gap-1"
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
          As an Amazon Associate, ATX Dog Parks earns from qualifying purchases.
        </p>
      </div>
    )
  }

  return (
    <section className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <FaShoppingBag className="text-primary-600 text-2xl" />
        <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {items.map((item) => (
          <div
            key={item.asin}
            className="flex flex-col bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4"
          >
            <div className="relative h-32 mb-3 bg-white rounded">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                loading="lazy"
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.price}</p>
            <p className="text-sm text-gray-600 mb-4 flex-grow">{item.reason}</p>
            <a
              href={amazonUrl(item.asin)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
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
        As an Amazon Associate, ATX Dog Parks earns from qualifying purchases. Prices shown are
        approximate and change often.
      </p>
    </section>
  )
}
