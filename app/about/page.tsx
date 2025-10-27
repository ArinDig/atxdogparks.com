import type { Metadata } from 'next'
import { FaDog, FaHeart, FaMapMarkedAlt, FaUsers } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about ATX Dog Parks, your comprehensive guide to dog parks in Austin, Texas. Discover our mission to help dogs and their owners find the perfect places to play.',
  alternates: {
    canonical: 'https://atxdogparks.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FaDog className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ATX Dog Parks</h1>
          <p className="text-xl text-primary-100">
            Your trusted guide to the best dog parks in Austin, Texas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            ATX Dog Parks was created to help dog owners in Austin, Texas discover the perfect 
            places for their furry friends to exercise, socialize, and enjoy the outdoors. We 
            believe that every dog deserves access to safe, fun, and well-maintained spaces to run 
            and play.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Austin is known as one of the most dog-friendly cities in America, and we are proud to 
            showcase the incredible variety of dog parks available throughout the metro area. From 
            scenic lakeside parks to neighborhood favorites, we have compiled comprehensive information 
            to help you make the best choice for your pup.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <FaMapMarkedAlt className="text-4xl text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Coverage</h3>
            <p className="text-gray-700">
              We provide detailed information about dog parks across Austin, including locations, 
              hours, amenities, and what makes each park special.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <FaDog className="text-4xl text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Up-to-Date Information</h3>
            <p className="text-gray-700">
              Our listings include current details about leash policies, fees, features, and 
              accessibility to help you plan your visit.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <FaHeart className="text-4xl text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Made with Love</h3>
            <p className="text-gray-700">
              Created by dog lovers for dog lovers, we understand the joy of watching your pup 
              make new friends and explore new places.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <FaUsers className="text-4xl text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community Focused</h3>
            <p className="text-gray-700">
              We are building a resource that brings together the Austin dog-loving community and 
              promotes responsible pet ownership.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Provide</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Detailed park descriptions and features</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Information about leash policies (off-leash vs. on-leash areas)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Hours of operation and entry fees</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Addresses and direct links to directions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Contact information and official website links</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Photos showcasing each park and its unique features</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Information about amenities like water stations, shade, and parking</span>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-8 rounded">
          <p className="text-gray-700 text-sm">
            <strong>Please Note:</strong> While we strive to keep all information accurate and 
            up-to-date, park hours, policies, and fees may change. We recommend verifying details 
            with the individual parks before your visit. Always supervise your dog, clean up after 
            them, and ensure they are up-to-date on vaccinations before visiting any dog park.
          </p>
        </div>
      </section>
    </div>
  )
}

