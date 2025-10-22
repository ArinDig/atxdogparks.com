import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import dogParksData from '@/data/dogParks.json'
import { DogPark } from '@/types/dogPark'
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaPhone, 
  FaDollarSign, 
  FaDog, 
  FaExternalLinkAlt,
  FaDirections,
  FaCheckCircle
} from 'react-icons/fa'
import type { Metadata } from 'next'

const dogParks = dogParksData as DogPark[]

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return dogParks.map((park) => ({
    slug: park.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const park = dogParks.find((p) => p.slug === params.slug)
  
  if (!park) {
    return {
      title: 'Park Not Found',
    }
  }

  return {
    title: `${park.name} - Austin Dog Park`,
    description: park.description,
    keywords: [
      park.name,
      'Austin dog park',
      park.leashPolicy,
      'dog park Austin TX',
      'ATX dog parks',
    ],
    openGraph: {
      title: `${park.name} - Austin Dog Park`,
      description: park.description,
      type: 'website',
      images: [
        {
          url: park.mainImage,
          width: 800,
          height: 600,
          alt: park.name,
        },
      ],
    },
  }
}

export default function ParkPage({ params }: PageProps) {
  const park = dogParks.find((p) => p.slug === params.slug)

  if (!park) {
    notFound()
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(park.address)}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(park.address)}`

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <div className="relative h-96 w-full">
        <Image
          src={park.mainImage}
          alt={park.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
                {park.leashPolicy}
              </span>
              <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                {park.fees}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{park.name}</h1>
            <p className="text-xl text-gray-200">{park.address}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Park</h2>
              <p className="text-gray-700 leading-relaxed">{park.description}</p>
            </section>

            {/* Features */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {park.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Photo Gallery */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {park.images.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${park.name} - Photo ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Park Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <a 
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm"
                    >
                      {park.address}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaClock className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-700 text-sm">{park.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhone className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a 
                      href={`tel:${park.phone}`}
                      className="text-primary-600 hover:text-primary-700 text-sm"
                    >
                      {park.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaDog className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Leash Policy</p>
                    <p className="text-gray-700 text-sm">{park.leashPolicy}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaDollarSign className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Entry Fee</p>
                    <p className="text-green-600 font-semibold text-sm">{park.fees}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <FaDirections />
                  Get Directions
                </a>

                {park.website && (
                  <a
                    href={park.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-white text-primary-600 border-2 border-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back to All Parks */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            ← Back to All Parks
          </Link>
        </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Park',
            name: park.name,
            description: park.description,
            address: {
              '@type': 'PostalAddress',
              streetAddress: park.address,
              addressLocality: 'Austin',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
            telephone: park.phone,
            url: park.website,
            openingHours: park.hours,
            image: park.mainImage,
            geo: {
              '@type': 'GeoCoordinates',
              latitude: park.latitude,
              longitude: park.longitude,
            },
            amenityFeature: park.features.map(feature => ({
              '@type': 'LocationFeatureSpecification',
              name: feature,
            })),
          }),
        }}
      />
    </article>
  )
}

