import Link from 'next/link'
import { FaDog } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-primary-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <FaDog className="text-3xl" />
            <div>
              <h1 className="text-2xl font-bold">ATX Dog Parks</h1>
              <p className="text-xs text-primary-100">Austin Dog Park Directory</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="hover:text-primary-100 transition-colors font-medium"
            >
              Home
            </Link>
              <Link 
                href="/blog" 
                className="hover:text-primary-100 transition-colors font-medium"
              >
                Blog
              </Link>
              <Link 
                href="/gear" 
                className="hover:text-primary-100 transition-colors font-medium"
              >
                Gear
              </Link>
              <Link 
                href="/faq" 
                className="hover:text-primary-100 transition-colors font-medium"
              >
                FAQ
              </Link>
              <Link 
                href="/about" 
                className="hover:text-primary-100 transition-colors font-medium"
              >
                About
              </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

