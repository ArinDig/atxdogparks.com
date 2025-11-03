'use client'

import { FaSearch, FaTimes } from 'react-icons/fa'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search dog parks by name, location, or features..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-gray-700 shadow-lg"
        />
        {searchTerm ? (
          <button 
            onClick={() => onSearchChange('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400 text-white p-3 rounded-full hover:bg-gray-500 transition-colors"
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        ) : (
          <div 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 text-white p-3 rounded-full"
            aria-label="Search"
          >
            <FaSearch />
          </div>
        )}
      </div>
    </div>
  )
}

