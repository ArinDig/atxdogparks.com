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

        {/* Our Team */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                ADP
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ATX Dog Parks Editorial Team</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our editorial team consists of passionate dog owners and Austin residents who have spent years exploring the city 
                  extensive network of dog parks. We understand the importance of finding safe, clean, and enjoyable spaces for our 
                  canine companions because we face the same decisions with our own pets every day.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each member of our team brings unique expertise: from veterinary knowledge and dog training experience to local 
                  Austin history and community engagement. We personally visit each park we feature, taking photos, noting amenities, 
                  and observing how dogs interact in these spaces. Our commitment is to provide honest, detailed, and helpful information 
                  that makes your decision easier when choosing where to take your beloved pet.
                </p>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Research Process</h3>
              <p className="leading-relaxed mb-4">
                We do not just compile information from existing sources. Our team conducts original research by visiting each park 
                multiple times, at different times of day and on different days of the week. This allows us to provide accurate 
                information about crowd levels, parking availability, and the overall atmosphere you can expect during your visit.
              </p>
              <p className="leading-relaxed mb-4">
                We interview regular park visitors, speak with City of Austin Parks and Recreation staff, and stay updated on any 
                changes to rules, hours, or facilities. When parks undergo renovations or improvements, we revisit them to update 
                our listings with the latest information. Our goal is to be your most reliable source for current, accurate dog park 
                information in Austin.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Community Connection</h3>
              <p className="leading-relaxed mb-4">
                ATX Dog Parks is more than just a directory - we are part of the Austin dog-loving community. We attend local pet 
                events, support animal welfare organizations, and promote responsible pet ownership throughout the city. Many of our 
                team members volunteer with local animal rescue groups and participate in community initiatives to improve and maintain 
                Austin dog-friendly spaces.
              </p>
              <p className="leading-relaxed">
                We believe that well-informed pet owners create safer, happier environments for all dogs. By providing comprehensive, 
                accurate information about Austin dog parks, we hope to encourage more people to explore these wonderful community 
                resources while promoting good etiquette and responsible behavior that benefits everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              ATX Dog Parks was founded by a group of Austin dog owners who recognized the need for a centralized, comprehensive 
              resource dedicated specifically to the city dog parks. While general pet directories existed, none focused exclusively 
              on providing the detailed, park-specific information that dog owners really need when deciding where to take their pets.
            </p>
            <p>
              The idea emerged from countless conversations at local dog parks, where owners would exchange recommendations, share 
              warnings about specific issues, and discuss which parks worked best for different types of dogs. We realized this 
              valuable community knowledge was being shared informally but never documented in an accessible, organized format.
            </p>
            <p>
              We launched ATX Dog Parks with a simple mission: create the most comprehensive and useful guide to Austin dog parks 
              that we wished had existed when we were new dog owners searching for the perfect place to take our own pets. Today, 
              we continue that mission by maintaining up-to-date listings, adding new parks as they open, and providing the honest, 
              detailed information that helps Austin dog owners make informed decisions.
            </p>
            <p>
              Austin reputation as one of America most dog-friendly cities is well-deserved, and we are proud to contribute to 
              that reputation by helping residents and visitors discover and enjoy the incredible dog park resources available 
              throughout our city. Whether you are a longtime Austin resident or new to the area, we invite you to explore the 
              parks we have documented and discover new favorite spots for you and your furry friend.
            </p>
          </div>
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

