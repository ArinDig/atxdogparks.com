'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import dogParksData from '@/data/dogParks.json'
import { DogPark } from '@/types/dogPark'
import DogParkCard from '@/components/DogParkCard'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'

const dogParks = dogParksData as DogPark[]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter parks based on search term
  const filteredParks = useMemo(() => {
    if (!searchTerm.trim()) {
      return dogParks
    }

    const searchLower = searchTerm.toLowerCase()
    
    return dogParks.filter((park) => {
      // Search in name
      if (park.name.toLowerCase().includes(searchLower)) return true
      
      // Search in address
      if (park.address.toLowerCase().includes(searchLower)) return true
      
      // Search in description
      if (park.description.toLowerCase().includes(searchLower)) return true
      
      // Search in features
      if (park.features.some(feature => feature.toLowerCase().includes(searchLower))) return true
      
      // Search in leash policy
      if (park.leashPolicy.toLowerCase().includes(searchLower)) return true
      
      return false
    })
  }, [searchTerm])

  return (
    <div>
      <Hero />
      
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {searchTerm ? `Search Results (${filteredParks.length})` : 'All Austin Dog Parks'}
          </h2>
          <p className="text-gray-600">
            {searchTerm 
              ? `Found ${filteredParks.length} ${filteredParks.length === 1 ? 'park' : 'parks'} matching "${searchTerm}"`
              : `${dogParks.length} amazing dog parks to explore in Austin, Texas`
            }
          </p>
        </div>

        {filteredParks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParks.map((park) => (
              <DogParkCard key={park.id} park={park} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              No dog parks found matching your search.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Clear search and show all parks
            </button>
          </div>
        )}
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Your Complete Guide to Austin Dog Parks
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Austin, Texas is known as one of the most dog-friendly cities in America, and for good reason. 
              With over {dogParks.length} dedicated dog parks throughout the metro area, there is no shortage 
              of places for your furry friend to run, play, and socialize.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Off-Leash Dog Parks in Austin
            </h3>
            <p>
              Many of Austin dog parks feature designated off-leash areas where dogs can roam freely 
              and safely. Popular off-leash locations include Red Bud Isle, Auditorium Shores, and 
              Zilker Park. These spaces allow dogs to exercise, socialize, and explore in a secure environment.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What to Expect at Austin Dog Parks
            </h3>
            <p>
              Austin dog parks offer a variety of amenities including water stations, waste disposal 
              stations, shaded areas, and often separate sections for small and large dogs. Many parks 
              also feature natural swimming areas where water-loving dogs can cool off during hot Texas summers.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Best Times to Visit
            </h3>
            <p>
              Most Austin dog parks are open from 5 AM to 10 PM daily. Early mornings and late afternoons 
              tend to be the busiest times as dog owners visit before or after work. For a quieter experience, 
              consider visiting during midday on weekdays.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Dog Park Etiquette
            </h3>
            <p>
              To ensure a positive experience for everyone, please clean up after your dog, supervise them 
              at all times, and ensure they are up-to-date on vaccinations. Always respect other dogs and 
              their owners, and follow posted rules and regulations at each park.
            </p>

            <div className="mt-8 p-6 bg-primary-50 border-2 border-primary-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Want More Dog Park Tips?
              </h3>
              <p className="text-gray-700 mb-4">
                Check out our blog for expert advice, safety tips, training guides, and helpful articles about enjoying Austin dog parks.
              </p>
              <Link 
                href="/blog" 
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'ATX Dog Parks',
            url: 'https://atxdogparks.com',
            description: 'Discover the best dog parks in Austin, Texas. Find off-leash areas, dog-friendly parks, amenities, directions, and more.',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://atxdogparks.com/?search={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: dogParks.map((park, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: `https://atxdogparks.com/parks/${park.slug}`,
              name: park.name
            }))
          })
        }}
      />
    </div>
  )
}

