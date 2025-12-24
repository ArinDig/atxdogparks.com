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
    alternates: {
      canonical: `https://atxdogparks.com/parks/${park.slug}`,
    },
    openGraph: {
      title: `${park.name} - Austin Dog Park`,
      description: park.description,
      type: 'website',
      url: `https://atxdogparks.com/parks/${park.slug}`,
      images: [
        {
          url: park.mainImage,
          width: 800,
          height: 600,
          alt: park.name,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
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

            {/* What to Expect */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect at {park.name}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  When you arrive at {park.name}, you will find a welcoming environment designed specifically for dogs and their owners. 
                  {park.leashPolicy === 'Off-Leash' || park.leashPolicy.includes('Off-Leash') 
                    ? ' This off-leash area allows your dog to run freely and socialize with other dogs in a safe, controlled environment. The open spaces provide plenty of room for exercise and play, making it an ideal spot for energetic dogs who need to burn off some steam.'
                    : ' While this park requires dogs to remain on-leash, it offers beautiful walking paths and scenic areas perfect for a relaxing stroll with your canine companion. The well-maintained trails provide excellent opportunities for exercise while maintaining control and safety.'}
                </p>
                <p>
                  The park is well-maintained by the City of Austin Parks and Recreation Department, ensuring that facilities remain clean and safe for all visitors. 
                  You will find waste disposal stations throughout the park, making it easy to clean up after your dog and help keep the park pristine for everyone to enjoy. 
                  Water stations are typically available during operating hours, but it is always a good idea to bring your own water and a portable bowl, especially during hot Texas summer days.
                </p>
                <p>
                  Regular visitors appreciate the friendly community atmosphere at {park.name}. Dog owners here tend to be responsible and attentive, 
                  creating a positive environment where dogs can socialize safely. Whether your dog is meeting new friends or playing with familiar faces, 
                  the park provides an excellent setting for healthy canine socialization. Many owners find that regular visits help their dogs develop better 
                  social skills and enjoy a happier, more balanced lifestyle.
                </p>
              </div>
            </section>

            {/* Best Times to Visit */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Times to Visit</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The park is open {park.hours}, giving you plenty of flexibility to plan your visit. However, certain times tend to be more popular 
                  and crowded than others. Early mornings, typically between 7:00 AM and 9:00 AM on weekdays, attract dog owners who visit before heading 
                  to work. This can be a great time if your dog enjoys socializing with other dogs, as there is usually a regular group of morning visitors.
                </p>
                <p>
                  Late afternoons and early evenings, particularly between 5:00 PM and 7:00 PM, represent the busiest period at most Austin dog parks. 
                  After-work hours bring the largest crowds, which can be wonderful for social dogs but potentially overwhelming for shy or anxious pets. 
                  If your dog is still learning social skills or prefers quieter environments, consider visiting during off-peak hours.
                </p>
                <p>
                  Midday visits on weekdays, roughly between 10:00 AM and 3:00 PM, often provide a more peaceful experience with fewer dogs present. 
                  This can be ideal for senior dogs, puppies still learning proper behavior, or dogs who are more comfortable in smaller groups. 
                  Weekend mornings tend to be busy but manageable, while weekend afternoons typically see the highest traffic of the week.
                </p>
                <p>
                  During the hot Texas summer months (June through September), early morning or evening visits are strongly recommended. 
                  The pavement and ground can become extremely hot during midday hours, potentially burning your dog paws. Always check the ground 
                  temperature with your hand before allowing your dog to walk on paved surfaces. Many experienced Austin dog owners avoid the parks 
                  entirely during the hottest part of summer days, opting for early morning or post-sunset visits instead.
                </p>
              </div>
            </section>

            {/* Visitor Tips */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Your Visit</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Before You Go:</strong> Make sure your dog is up-to-date on all vaccinations, including rabies, distemper, and bordetella (kennel cough). 
                  Most dog parks, including those in Austin, require current vaccinations to protect all dogs in the community. It is also important that your 
                  dog is treated for fleas and ticks. Consider bringing proof of vaccination on your first visit, although it is rarely checked, it demonstrates 
                  responsible pet ownership.
                </p>
                <p>
                  <strong>What to Bring:</strong> Pack a bag with essentials including fresh water, a collapsible water bowl, waste bags (even though the park 
                  provides them, it is good to have extras), and towels if your dog likes to swim. A first aid kit with basic supplies like gauze, antiseptic, 
                  and tweezers can be helpful for minor incidents. Some owners also bring tennis balls or other toys, though be aware that toy sharing can 
                  sometimes lead to disputes between dogs. Always monitor your dog play closely when toys are involved.
                </p>
                <p>
                  <strong>Safety First:</strong> Never leave your dog unsupervised, even for a moment. Watch for signs of overheating, including excessive 
                  panting, drooling, or lethargy. Provide water frequently and take breaks in shaded areas. If your dog shows any signs of aggression or 
                  seems overwhelmed, calmly remove them from the situation. It is better to leave early than to risk an incident that could harm your dog 
                  or others. Pay attention to your dog body language and energy levels throughout your visit.
                </p>
                <p>
                  <strong>Etiquette Matters:</strong> Pick up after your dog immediately - this is the most important rule of any dog park. Keep your dog 
                  under voice control at all times. If your dog does not reliably respond to recall commands, consider additional training before visiting 
                  off-leash areas. Intervene quickly if your dog displays bullying behavior or becomes overly rough with other dogs. Respect other visitors 
                  by managing your dog interactions and being courteous in shared spaces. Finally, close all gates behind you to prevent dogs from escaping.
                </p>
              </div>
            </section>

            {/* Nearby Amenities */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Amenities</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The area surrounding {park.name} offers various amenities that can enhance your visit. Austin is known for being an exceptionally 
                  dog-friendly city, and you will find numerous businesses that welcome pets. Many local coffee shops and restaurants feature dog-friendly 
                  patios where you can grab a bite or beverage before or after your park visit. Some establishments even provide water bowls and treats 
                  for canine visitors.
                </p>
                <p>
                  Pet supply stores and veterinary clinics are conveniently located throughout Austin, should you need supplies or services during your visit. 
                  Several grooming facilities in the area offer self-service dog washing stations, which can be perfect after a muddy or sandy play session 
                  at the park. These facilities typically provide tubs at comfortable heights, professional grooming products, and all the towels you need.
                </p>
                <p>
                  Parking availability varies by location, but most Austin dog parks offer dedicated parking areas. Some parks are accessible via public 
                  transportation or bike trails, making them easy to reach even without a car. The city extensive trail system connects many parks, 
                  allowing for extended walks or jogs with your dog before or after visiting the off-leash areas. Check the specific location details 
                  for parking information and alternative transportation options.
                </p>
              </div>
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
                      loading="lazy"
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Author Byline */}
            <section className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaDog className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Written by</p>
                  <p className="font-bold text-gray-900 mb-2">ATX Dog Parks Team</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our team of Austin dog lovers and pet experts is dedicated to helping you discover the best places for your furry friends to play, 
                    exercise, and socialize. We regularly visit and review dog parks throughout the Austin area to provide accurate, up-to-date information.
                  </p>
                </div>
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
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://atxdogparks.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: park.name,
                item: `https://atxdogparks.com/parks/${park.slug}`
              }
            ]
          }),
        }}
      />
    </article>
  )
}

