import type { Metadata } from 'next'
import Link from 'next/link'
import { FaHospital, FaUserMd, FaShoppingBag, FaCut, FaHotel, FaDog, FaExternalLinkAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Austin Dog Resources - Vets, Trainers, Groomers & More',
  description: 'Comprehensive directory of Austin dog services including veterinarians, trainers, groomers, pet stores, and boarding facilities. Everything your dog needs in one place.',
  alternates: {
    canonical: 'https://atxdogparks.com/resources',
  },
  openGraph: {
    title: 'Austin Dog Resources | ATX Dog Parks',
    description: 'Find trusted Austin dog services: vets, trainers, groomers, stores, and boarding.',
    type: 'website',
    url: 'https://atxdogparks.com/resources',
  },
}

interface Resource {
  name: string
  description: string
  website: string
  areas?: string
}

interface ResourceCategory {
  icon: React.ReactNode
  title: string
  description: string
  resources: Resource[]
}

export default function ResourcesPage() {
  const categories: ResourceCategory[] = [
    {
      icon: <FaHospital className="text-4xl text-primary-600" />,
      title: 'Veterinary Clinics',
      description: 'Trusted veterinarians for routine care, emergencies, and specialized treatment',
      resources: [
        {
          name: 'Austin Veterinary Emergency & Specialty Center',
          description: '24/7 emergency care and specialty services including surgery, cardiology, and internal medicine. One of Austin\'s most comprehensive emergency veterinary facilities.',
          website: 'https://www.avaec.com',
          areas: 'Northwest Austin'
        },
        {
          name: 'South Austin Animal Hospital',
          description: 'Full-service veterinary hospital serving South Austin for over 30 years. Known for compassionate care and preventive medicine.',
          website: 'https://www.southaustinanimal.com',
          areas: 'South Austin'
        },
        {
          name: 'Austin Vet Care Central',
          description: 'Modern veterinary practice in Central Austin offering wellness exams, vaccinations, dental care, and surgery.',
          website: 'https://www.austinvetcarecentral.com',
          areas: 'Central Austin'
        },
        {
          name: 'North Lamar Animal Hospital',
          description: 'Established practice providing comprehensive veterinary services including diagnostics, dental care, and geriatric care.',
          website: 'https://www.northlamarah.com',
          areas: 'North Central Austin'
        },
        {
          name: 'Circle C Ranch Animal Hospital',
          description: 'Full-service animal hospital in Southwest Austin with emphasis on preventive care and client education.',
          website: 'https://www.circlecvet.com',
          areas: 'Southwest Austin (Circle C)'
        },
      ]
    },
    {
      icon: <FaUserMd className="text-4xl text-primary-600" />,
      title: 'Dog Trainers',
      description: 'Professional trainers for obedience, behavior modification, and specialized training',
      resources: [
        {
          name: 'Zoom Room Dog Training',
          description: 'Indoor dog training facility offering group classes, private lessons, and agility training. Perfect for preparing your dog for positive dog park experiences.',
          website: 'https://www.zoomroomonline.com/austin',
          areas: 'Multiple Austin locations'
        },
        {
          name: 'Noble Beast Dog Training',
          description: 'Positive reinforcement-based training specializing in obedience, behavior modification, and aggression rehabilitation. Highly recommended for dogs with socialization challenges.',
          website: 'https://www.noblebeastdogtraining.com',
          areas: 'Serves all Austin areas'
        },
        {
          name: 'Austin Dog Alliance',
          description: 'Certified professional dog trainers offering group classes, private sessions, and board-and-train programs. Focus on science-based, force-free training methods.',
          website: 'https://www.austindogalliance.com',
          areas: 'Central/South Austin'
        },
        {
          name: 'Pawsitive Transformations',
          description: 'Specializes in reactive dog training, fear-based behavior, and leash manners—essential skills before visiting dog parks.',
          website: 'https://www.pawsitivetx.com',
          areas: 'In-home training across Austin'
        },
      ]
    },
    {
      icon: <FaCut className="text-4xl text-primary-600" />,
      title: 'Groomers',
      description: 'Professional grooming services to keep your pup clean and comfortable',
      resources: [
        {
          name: 'Dirty Dog Self-Serve',
          description: 'Self-service dog wash stations with professional equipment. Great for post-dog-park cleanups! Tubs, dryers, shampoos, and towels all provided.',
          website: 'https://www.dirtydogselfserwash.com',
          areas: 'Multiple Austin locations'
        },
        {
          name: 'Scenthound',
          description: 'Membership-based grooming focusing on wellness. Regular baths, nail trimming, ear cleaning, and teeth brushing to keep your dog healthy between park visits.',
          website: 'https://www.scenthound.com',
          areas: 'Multiple Austin locations'
        },
        {
          name: 'The Paw Spa',
          description: 'Full-service grooming salon offering breed-specific cuts, de-shedding treatments, and spa services. Perfect for keeping your dog comfortable in Austin\'s heat.',
          website: 'https://www.thepawspaaustin.com',
          areas: 'North Austin'
        },
        {
          name: 'Pampered Pets',
          description: 'Experienced groomers handling all breeds with gentle care. Ideal for senior dogs or those nervous about grooming.',
          website: 'https://www.pamperedpetsaustin.com',
          areas: 'South Austin'
        },
      ]
    },
    {
      icon: <FaShoppingBag className="text-4xl text-primary-600" />,
      title: 'Pet Stores',
      description: 'Local pet supply stores for food, toys, treats, and dog park essentials',
      resources: [
        {
          name: 'Tomlinson\'s Feed',
          description: 'Austin\'s premier pet supply store chain. Knowledgeable staff, high-quality foods, and a great selection of toys and gear perfect for dog park visits.',
          website: 'https://www.tomlinsons.com',
          areas: 'Multiple Austin locations'
        },
        {
          name: 'Healthy Pet',
          description: 'Locally-owned pet supply store emphasizing natural and holistic pet products. Great for finding high-quality treats and supplements.',
          website: 'https://www.healthypetaustin.com',
          areas: 'South Austin'
        },
        {
          name: 'Austin Pets Alive! Thrift Store',
          description: 'Thrift store supporting Austin Pets Alive! rescue. Find deals on pet supplies while supporting a great cause.',
          website: 'https://www.austinpetsalive.org',
          areas: 'Multiple Austin locations'
        },
        {
          name: 'Natural Pawz',
          description: 'Holistic pet supply store specializing in raw feeding, natural remedies, and eco-friendly products.',
          website: 'https://www.naturalpawz.com',
          areas: 'South Austin'
        },
      ]
    },
    {
      icon: <FaHotel className="text-4xl text-primary-600" />,
      title: 'Boarding & Daycare',
      description: 'Safe, fun places for your dog to stay while you\'re away',
      resources: [
        {
          name: 'The Dog Alliance',
          description: 'Cage-free boarding and daycare with outdoor play areas. Dogs are evaluated for temperament and grouped with compatible playmates. Great socialization before dog park visits!',
          website: 'https://www.thedogalliance.com',
          areas: 'South Austin'
        },
        {
          name: 'Karma Dog Training + Daycare',
          description: 'Combines professional training with daycare and boarding. Your dog learns and plays while you\'re away.',
          website: 'https://www.karmadogtraining.com',
          areas: 'East Austin'
        },
        {
          name: 'Dogtopia',
          description: 'Franchise daycare with webcams so you can check in on your pup. Open play areas and structured activities.',
          website: 'https://www.dogtopia.com/austin',
          areas: 'Multiple Austin locations'
        },
        {
          name: 'Camp Bow Wow',
          description: 'Spacious indoor/outdoor dog daycare and boarding facility with live web cams. Dogs play in groups based on size and temperament.',
          website: 'https://www.campbowwow.com/austin',
          areas: 'Northwest Austin'
        },
      ]
    },
    {
      icon: <FaDog className="text-4xl text-primary-600" />,
      title: 'Dog Rescues & Adoption',
      description: 'Austin organizations dedicated to rescuing and rehoming dogs',
      resources: [
        {
          name: 'Austin Pets Alive!',
          description: 'Austin\'s largest no-kill animal rescue. Saved thousands of dogs from euthanasia and offers adoption, fostering, and volunteer opportunities.',
          website: 'https://www.austinpetsalive.org',
          areas: 'Austin (multiple locations)'
        },
        {
          name: 'Austin Animal Center',
          description: 'City of Austin\'s municipal shelter. Large adoption facility with hundreds of dogs available. Includes low-cost veterinary services.',
          website: 'https://www.austintexas.gov/department/austin-animal-center',
          areas: 'East Austin'
        },
        {
          name: 'Austin Humane Society',
          description: 'No-kill shelter and adoption center. Also offers low-cost spay/neuter clinics and behavior training resources.',
          website: 'https://www.austinhumanesociety.org',
          areas: 'South Austin'
        },
        {
          name: 'Texas Humane Heroes',
          description: 'No-kill rescue serving Central Texas. Focuses on saving at-risk dogs and finding them forever homes.',
          website: 'https://www.texashumaneheroes.org',
          areas: 'Leander (near Austin)'
        },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Austin Dog Resources
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your comprehensive directory of Austin dog services: veterinarians, trainers, groomers, pet stores, boarding facilities, and rescue organizations.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Beyond finding the perfect dog park, your furry friend needs access to quality veterinary care, professional training, regular grooming, and other essential services. We&apos;ve compiled a directory of trusted Austin businesses and organizations that cater to your dog&apos;s needs.
          </p>
          <p className="text-gray-600">
            <strong>Note:</strong> We are not affiliated with any of these businesses. This directory is provided as a community resource. Please research and choose services that best fit your dog&apos;s needs.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-200">
                <div className="bg-primary-50 p-4 rounded-full">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>

              {/* Resources List */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.resources.map((resource, idx) => (
                  <div key={idx} className="border-l-4 border-primary-600 pl-4 py-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {resource.name}
                    </h3>
                    {resource.areas && (
                      <p className="text-sm text-primary-600 font-semibold mb-2">
                        📍 {resource.areas}
                      </p>
                    )}
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      {resource.description}
                    </p>
                    <a
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      Visit Website
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Content */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            More Austin Dog Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Gear</h3>
              <p className="text-gray-600 mb-4">
                Check out our curated selection of dog park essentials, from hydration gear to safety equipment.
              </p>
              <Link
                href="/gear"
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Browse Gear
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guides</h3>
              <p className="text-gray-600 mb-4">
                Read our comprehensive blog articles on dog park safety, etiquette, training tips, and local insights.
              </p>
              <Link
                href="/blog"
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Read Guides
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">FAQ</h3>
              <p className="text-gray-600 mb-4">
                Get answers to common questions about Austin dog parks, rules, etiquette, and best practices.
              </p>
              <Link
                href="/faq"
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Find the Perfect Dog Park?
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our complete directory of Austin dog parks and find the ideal spot for your furry friend.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Explore Dog Parks
          </Link>
        </div>
      </section>
    </div>
  )
}
