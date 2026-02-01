import Link from 'next/link'
import { FaDog } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FaDog className="text-8xl text-primary-600 mx-auto mb-8" />
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Oops! This park does not exist
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for might have been moved or does not exist. 
          Let us help you find your way back to the pack!
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
          >
            Back to All Dog Parks
          </Link>
          <div className="mt-6">
            <p className="text-gray-600 mb-4">Popular Austin Dog Parks:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/parks/zilker-metropolitan-park"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Zilker Park
              </Link>
              <Link
                href="/parks/auditorium-shores-off-leash-area"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Auditorium Shores
              </Link>
              <Link
                href="/parks/red-bud-isle"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Red Bud Isle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

