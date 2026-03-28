import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaBook, FaShieldAlt, FaDog, FaSun, FaHandsHelping, FaHiking } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Dog Park Guides | Expert Tips for Austin Dog Parks',
  description: 'Comprehensive guides for making the most of Austin dog parks. Learn about safety, training, etiquette, seasonal tips, and more from experienced dog park enthusiasts.',
  alternates: {
    canonical: 'https://atxdogparks.com/guides',
  },
}

const guides = [
  {
    slug: 'dog-park-safety',
    title: 'Dog Park Safety Guide',
    description: 'Essential safety tips, emergency preparedness, and how to recognize warning signs to keep your dog safe at Austin dog parks.',
    icon: FaShieldAlt,
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80',
  },
  {
    slug: 'first-timer-guide',
    title: 'First-Timer\'s Guide to Dog Parks',
    description: 'Everything you need to know for your first visit: preparation, what to bring, how to introduce your dog, and what to expect.',
    icon: FaDog,
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&q=80',
  },
  {
    slug: 'dog-park-etiquette',
    title: 'Dog Park Etiquette',
    description: 'Learn the unwritten rules and community standards that make Austin dog parks enjoyable for everyone.',
    icon: FaHandsHelping,
    image: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?w=800&q=80',
  },
  {
    slug: 'training-and-behavior',
    title: 'Training & Behavior Guide',
    description: 'Master off-leash recall, socialization, and positive behaviors. Handle aggression and train for dog park success.',
    icon: FaDog,
    image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?w=800&q=80',
  },
  {
    slug: 'seasonal-tips',
    title: 'Seasonal Tips & Weather Guide',
    description: 'Navigate Austin\'s weather year-round with tips for summer heat, spring allergies, winter precautions, and rainy day alternatives.',
    icon: FaSun,
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80',
  },
  {
    slug: 'best-parks-by-feature',
    title: 'Best Parks by Feature',
    description: 'Find the perfect park for your dog: swimming access, agility equipment, small dog areas, shade, and scenic views.',
    icon: FaHiking,
    image: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800&q=80',
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <FaBook className="text-6xl text-primary-100" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dog Park Guides</h1>
          <p className="text-xl text-primary-100">
            Comprehensive resources to help you and your dog thrive at Austin dog parks
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link 
              key={guide.slug} 
              href={`/guides/${guide.slug}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <guide.icon className="text-2xl text-primary-600" />
                  <h2 className="text-xl font-bold text-gray-900">
                    {guide.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {guide.description}
                </p>
                <div className="mt-4 text-primary-600 font-semibold flex items-center gap-2">
                  Read Guide
                  <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-white mt-8 rounded-lg shadow-sm">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Dog Park Resources</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our comprehensive guides are designed to help you navigate every aspect of visiting dog parks in Austin, Texas. 
            Whether you&apos;re planning your first trip or you&apos;re a regular looking to enhance your experience, these 
            guides provide in-depth knowledge covering safety protocols, training techniques, proper etiquette, and seasonal considerations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each guide is written by Arin Brown, an experienced dog owner and Austin dog park enthusiast who has spent years 
            exploring and documenting the local dog park scene. These resources reflect real-world experience and community 
            input from Austin&apos;s vibrant dog-loving community.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Use these guides to prepare for successful park visits, understand dog behavior and body language, master training 
            techniques, and become a responsible member of the Austin dog park community. Combined with our comprehensive 
            dog park directory, you&apos;ll have everything you need to give your dog the best possible experience.
          </p>
        </div>
      </section>
    </div>
  )
}
