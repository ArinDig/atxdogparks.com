import Link from 'next/link'
import { FaDog } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <FaDog className="text-6xl text-primary-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Park Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the dog park you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Back to All Parks
        </Link>
      </div>
    </div>
  )
}

