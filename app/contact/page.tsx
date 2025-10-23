import type { Metadata } from 'next';
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Us | ATX Dog Parks',
  description: 'Contact ATX Dog Parks - Get in touch with us for questions, suggestions, or to report issues.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-gray-700 mb-8">
            We would love to hear from you! Whether you have questions, suggestions, or want to report 
            outdated information, please reach out.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <FaEnvelope className="text-blue-600 text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">General Inquiries</h2>
                  <p className="text-gray-700 mb-2">
                    For general questions about our directory:
                  </p>
                  <a 
                    href="mailto:info@atxdogparks.com" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    info@atxdogparks.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Park Updates</h2>
                  <p className="text-gray-700 mb-2">
                    To report incorrect or outdated park information:
                  </p>
                  <a 
                    href="mailto:updates@atxdogparks.com" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    updates@atxdogparks.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You Can Contact Us About</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Report incorrect park hours, fees, or contact information</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Suggest new dog parks to add to our directory</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Report temporarily closed parks or facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Share feedback about our website</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Ask questions about dog park etiquette and safety</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Partnership and advertising inquiries</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Response Time</h2>
            <p className="mb-4">
              We typically respond to all inquiries within 24-48 hours during business days. 
              For urgent park safety concerns, please contact the park directly or local authorities.
            </p>
            <p className="text-sm text-blue-100">
              Note: ATX Dog Parks is an independent directory website. For specific questions about 
              park rules, reservations, or facilities, please contact the individual parks directly.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Inquiries</h2>
            <p className="text-gray-700 mb-4">
              For partnership opportunities, advertising, or business-related inquiries:
            </p>
            <a 
              href="mailto:business@atxdogparks.com" 
              className="text-blue-600 hover:text-blue-800 font-medium text-lg"
            >
              business@atxdogparks.com
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Location</h2>
            <p className="text-gray-700">
              <FaMapMarkerAlt className="inline mr-2 text-blue-600" />
              Austin, Texas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

