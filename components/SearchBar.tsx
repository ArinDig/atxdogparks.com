'use client'

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search dog parks by name, location, or features..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-gray-700 shadow-lg"
        />
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  )
}

