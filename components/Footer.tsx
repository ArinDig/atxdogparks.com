import Link from 'next/link'
import { FaDog, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaDog className="text-2xl text-primary-400" />
              <h3 className="text-xl font-bold text-white">ATX Dog Parks</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your comprehensive guide to the best dog parks in Austin, Texas. 
              Find the perfect spot for your furry friend to run, play, and socialize.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.austintexas.gov/department/parks-and-recreation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Austin Parks & Recreation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Always supervise your dog</li>
              <li>• Clean up after your pet</li>
              <li>• Keep vaccinations current</li>
              <li>• Respect other dogs and owners</li>
              <li>• Follow posted park rules</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> for Austin dogs © {currentYear} ATX Dog Parks
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Information provided for reference only. Please verify hours and policies with individual parks.
          </p>
        </div>
      </div>
    </footer>
  )
}

