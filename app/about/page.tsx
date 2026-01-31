import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeart, FaPaw, FaMapMarkedAlt, FaUsers } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About ATX Dog Parks - Your Austin Dog Park Guide',
  description: 'Learn about ATX Dog Parks, your comprehensive guide to dog-friendly spaces in Austin, Texas. Discover our mission to help dog owners find the perfect parks for their furry friends.',
  alternates: {
    canonical: 'https://atxdogparks.com/about',
  },
  openGraph: {
    title: 'About ATX Dog Parks | Austin Dog Park Directory',
    description: 'Your local guide to the best dog parks and dog-friendly spaces in Austin, TX.',
    type: 'website',
    url: 'https://atxdogparks.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About ATX Dog Parks
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted local guide to discovering the best dog parks and dog-friendly spaces in Austin, Texas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* Mission Statement */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            ATX Dog Parks was created to help Austin dog owners discover the perfect outdoor spaces for their furry companions. 
            Whether you&apos;re new to Austin or a long-time resident, finding the right dog park can make all the difference in 
            your dog&apos;s happiness and socialization.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We believe that every dog deserves access to safe, clean, and engaging outdoor spaces where they can run, play, 
            and socialize. Our goal is to provide comprehensive, up-to-date information about Austin&apos;s dog parks, from 
            sprawling off-leash areas to hidden neighborhood gems.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                <FaMapMarkedAlt className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Park Directory</h3>
                <p className="text-gray-600">
                  Detailed information about every dog park in Austin, including amenities, hours, parking, and what makes each one unique.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                <FaPaw className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guides & Tips</h3>
                <p className="text-gray-600">
                  In-depth blog articles covering dog park etiquette, safety tips, seasonal advice, and local insights from Austin dog owners.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                <FaHeart className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gear Recommendations</h3>
                <p className="text-gray-600">
                  Curated selection of essential gear for Austin dog park visits, from hydration solutions to cooling vests for hot Texas summers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                <FaUsers className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Community Focus</h3>
                <p className="text-gray-600">
                  Real experiences and insights from Austin dog owners who know these parks inside and out.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About the Founder */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Founder</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hi, I&apos;m Arin! I&apos;m an Austin-based dog enthusiast and the founder of ATX Dog Parks. After moving to Austin 
            several years ago, I quickly discovered that finding the right dog park for my pup wasn&apos;t always easy. Some parks 
            were too crowded, others lacked basic amenities, and it was hard to find detailed, reliable information all in one place.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            That&apos;s why I created ATX Dog Parks—to save fellow Austin dog owners the time and frustration of trial and error. 
            I&apos;ve personally visited every park listed on this site, taking note of the features that matter most: shade coverage 
            for our scorching summers, water availability, park maintenance, crowd levels at different times, and the overall vibe of each location.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Over the years, I&apos;ve connected with countless Austin dog owners and heard their stories, tips, and recommendations. 
            This site is a reflection of that collective knowledge—a resource built by dog lovers, for dog lovers.
          </p>
        </div>

        {/* Why Austin Dog Parks */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Trust ATX Dog Parks?</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-700">
                We&apos;re based in Austin and visit these parks regularly. We understand the unique challenges of Austin&apos;s 
                climate, from summer heat to occasional ice storms, and how they affect your dog park experience.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regularly Updated</h3>
              <p className="text-gray-700">
                Park conditions, hours, and amenities change. We continuously update our listings to ensure you have the most 
                current information before you head out.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-700">
                From the popular Zilker Park to hidden neighborhood spots in Hyde Park and East Austin, we cover dog parks 
                across all Austin areas.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Honest Reviews</h3>
              <p className="text-gray-700">
                We tell it like it is. If a park has issues with drainage after rain, limited parking, or gets too crowded 
                on weekends, we&apos;ll let you know so you can make informed decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Looking Ahead */}
        <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking Ahead</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We&apos;re constantly working to improve ATX Dog Parks and add new features. Here&apos;s what we&apos;re planning:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>User reviews and ratings for each park</li>
            <li>Austin dog events calendar and meetup information</li>
            <li>Dog-friendly restaurant and cafe directory</li>
            <li>Trail guides for hiking with your dog</li>
            <li>Local veterinarian and dog trainer recommendations</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have suggestions or feedback? We&apos;d love to hear from you! Reach out through our{' '}
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold underline">
              contact page
            </Link>.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Explore Austin&apos;s Best Dog Parks?
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our complete directory and find the perfect park for your furry friend today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Browse Dog Parks
            </Link>
            <Link
              href="/blog"
              className="inline-block bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
            >
              Read Our Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
