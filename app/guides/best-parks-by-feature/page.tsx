import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaHiking, FaWater, FaDog, FaTree, FaRunning } from 'react-icons/fa'
import dogParksData from '@/data/dogParks.json'
import { DogPark } from '@/types/dogPark'

const dogParks: DogPark[] = dogParksData

export const metadata: Metadata = {
  title: 'Best Austin Dog Parks by Feature | Find the Perfect Park',
  description: 'Find the perfect Austin dog park for your dog. Browse by features: swimming access, agility equipment, small dog areas, shade, scenic views, and more.',
  alternates: {
    canonical: 'https://atxdogparks.com/guides/best-parks-by-feature',
  },
}

export default function BestParksByFeature() {
  // Categorize parks by features
  const waterAccessParks = dogParks.filter(park => 
    park.features.some(f => f.toLowerCase().includes('water') || f.toLowerCase().includes('lake') || f.toLowerCase().includes('swim'))
  )

  const smallDogParks = dogParks.filter(park => 
    park.features.some(f => f.toLowerCase().includes('small'))
  )

  const agilityParks = dogParks.filter(park => 
    park.features.some(f => f.toLowerCase().includes('agility') || f.toLowerCase().includes('obstacle'))
  )

  const shadyParks = dogParks.filter(park => 
    park.features.some(f => f.toLowerCase().includes('shade') || f.toLowerCase().includes('trees') || f.toLowerCase().includes('tree'))
  )

  const scenicParks = dogParks.filter(park => 
    park.features.some(f => f.toLowerCase().includes('view') || f.toLowerCase().includes('scenic')) || 
    ['red-bud-isle', 'auditorium-shores-off-leash-area', 'zilker-metropolitan-park'].includes(park.slug)
  )

  const largeOpenParks = dogParks.filter(park => 
    park.features.some(f => f.toLowerCase().includes('large') || f.toLowerCase().includes('spacious') || f.toLowerCase().includes('acres'))
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FaHiking className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Best Parks by Feature</h1>
          </div>
          <p className="text-xl text-primary-100">
            Find the perfect Austin dog park for your dog&apos;s unique needs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-7xl mx-auto px-4 py-12">
        {/* Water Access Parks */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaWater className="text-4xl text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Best Parks for Swimming & Water Access</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Perfect for water-loving dogs who need to cool off during Austin summers. These parks offer direct access to Lady Bird Lake or creeks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {waterAccessParks.slice(0, 6).map(park => (
              <Link key={park.id} href={`/parks/${park.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={park.mainImage}
                    alt={park.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{park.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{park.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Pro Tip: Water Safety</h3>
            <p className="text-gray-700">Always check Austin Water quality reports before visiting lake parks. Blue-green algae blooms can be toxic. Bring fresh water to minimize lake water consumption.</p>
          </div>
        </section>

        {/* Small Dog Parks */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaDog className="text-4xl text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Best Parks for Small Dogs</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            These parks feature separate small dog areas to prevent injuries and provide a safer, more comfortable environment for dogs under 25 lbs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {smallDogParks.map(park => (
              <Link key={park.id} href={`/parks/${park.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={park.mainImage}
                    alt={park.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{park.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{park.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-900 mb-2">Pro Tip: Small Dog Safety</h3>
            <p className="text-gray-700">Even in small dog areas, supervise closely. Some owners bring large dogs into small dog sections, which violates rules and creates danger.</p>
          </div>
        </section>

        {/* Agility Equipment Parks */}
        {agilityParks.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FaRunning className="text-4xl text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Best Parks with Agility Equipment</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Keep high-energy dogs engaged with obstacle courses and agility features. Perfect for athletic breeds who need mental stimulation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {agilityParks.map(park => (
                <Link key={park.id} href={`/parks/${park.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={park.mainImage}
                      alt={park.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{park.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{park.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">Pro Tip: Agility Training</h3>
              <p className="text-gray-700">Introduce agility equipment gradually. Don&apos;t force your dog to use obstacles - let them explore at their own pace with treats and encouragement.</p>
            </div>
          </section>
        )}

        {/* Shady Parks */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaTree className="text-4xl text-green-700" />
            <h2 className="text-3xl font-bold text-gray-900">Best Shaded Parks for Summer</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tree cover and natural shade make these parks safer during Austin&apos;s brutal summer months. Essential for heat-sensitive breeds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {shadyParks.slice(0, 6).map(park => (
              <Link key={park.id} href={`/parks/${park.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={park.mainImage}
                    alt={park.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{park.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{park.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2">Pro Tip: Summer Visits</h3>
            <p className="text-gray-700">Even with shade, avoid peak heat hours (11 AM - 6 PM) in summer. Early morning visits in shaded parks are your best bet May-September.</p>
          </div>
        </section>

        {/* Scenic Parks */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaHiking className="text-4xl text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-900">Most Scenic Dog Parks</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            These parks offer stunning views, natural beauty, and Instagram-worthy backdrops. Perfect for dogs who love exploring diverse terrain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {scenicParks.slice(0, 6).map(park => (
              <Link key={park.id} href={`/parks/${park.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={park.mainImage}
                    alt={park.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{park.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{park.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Large Open Space Parks */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaRunning className="text-4xl text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">Best Parks for High-Energy Dogs</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Large, open spaces where your dog can run full-speed and burn serious energy. Ideal for athletic breeds and fetch enthusiasts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {largeOpenParks.slice(0, 6).map(park => (
              <Link key={park.id} href={`/parks/${park.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={park.mainImage}
                    alt={park.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{park.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{park.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-900 mb-2">Pro Tip: High-Energy Dogs</h3>
            <p className="text-gray-700">Bring a ball or frisbee (but be prepared to share or put it away if other dogs become possessive). Large parks give you space to tire out energetic dogs safely.</p>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-bold text-gray-900">Park Name</th>
                  <th className="text-center p-3 font-bold text-gray-900">Water</th>
                  <th className="text-center p-3 font-bold text-gray-900">Small Dog Area</th>
                  <th className="text-center p-3 font-bold text-gray-900">Agility</th>
                  <th className="text-center p-3 font-bold text-gray-900">Shade</th>
                </tr>
              </thead>
              <tbody>
                {dogParks.slice(0, 10).map(park => (
                  <tr key={park.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3">
                      <Link href={`/parks/${park.slug}`} className="text-primary-600 font-semibold hover:underline">
                        {park.name}
                      </Link>
                    </td>
                    <td className="text-center p-3">
                      {park.features.some(f => f.toLowerCase().includes('water') || f.toLowerCase().includes('lake') || f.toLowerCase().includes('swim')) ? '✓' : '-'}
                    </td>
                    <td className="text-center p-3">
                      {park.features.some(f => f.toLowerCase().includes('small')) ? '✓' : '-'}
                    </td>
                    <td className="text-center p-3">
                      {park.features.some(f => f.toLowerCase().includes('agility') || f.toLowerCase().includes('obstacle')) ? '✓' : '-'}
                    </td>
                    <td className="text-center p-3">
                      {park.features.some(f => f.toLowerCase().includes('shade') || f.toLowerCase().includes('tree')) ? '✓' : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/" className="inline-block mt-6 text-primary-600 font-semibold hover:underline">
            → View Complete Park Directory
          </Link>
        </section>

        {/* Matching Parks to Dog Personalities */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Match Parks to Your Dog&apos;s Personality</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Water-Loving Breeds (Labs, Retrievers, Spaniels)</h3>
              <p className="text-gray-700 mb-3">Choose parks with lake or creek access where your dog can swim and cool off.</p>
              <p className="text-gray-700 font-semibold">Top Picks: Red Bud Isle, Auditorium Shores, Bull Creek</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Small or Senior Dogs</h3>
              <p className="text-gray-700 mb-3">Look for separate small dog areas and parks with calmer atmospheres.</p>
              <p className="text-gray-700 font-semibold">Top Picks: West Austin Dog Park, Emma Long Metropolitan Park, Norwood Estate</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Shy or Nervous Dogs</h3>
              <p className="text-gray-700 mb-3">Choose smaller, quieter parks during off-peak hours where your dog can build confidence gradually.</p>
              <p className="text-gray-700 font-semibold">Top Picks: Visit any park on weekday mornings (7-9 AM) when crowds are minimal</p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">For High-Energy Athletes (Border Collies, Huskies, Aussies)</h3>
              <p className="text-gray-700 mb-3">Spacious parks where your dog can run full-speed and burn energy.</p>
              <p className="text-gray-700 font-semibold">Top Picks: Zilker Metropolitan Park, Walnut Creek Metropolitan Park</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Social Butterflies</h3>
              <p className="text-gray-700 mb-3">Popular parks with consistent crowds and lots of playmates.</p>
              <p className="text-gray-700 font-semibold">Top Picks: Yard Bar (private, admission fee), Auditorium Shores, Zilker</p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Park</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The &quot;best&quot; dog park is different for every dog. Consider these factors when choosing:
            </p>
            <ul className="space-y-3 mb-8">
              <li><strong>Your Dog&apos;s Size:</strong> Small dogs need separate areas or quieter parks</li>
              <li><strong>Energy Level:</strong> Match park size to your dog&apos;s need for space</li>
              <li><strong>Water Interest:</strong> Swimming dogs thrive at lake parks</li>
              <li><strong>Socialization Level:</strong> Nervous dogs need gradual exposure at quieter parks</li>
              <li><strong>Heat Tolerance:</strong> Thick-coated breeds need maximum shade and water access</li>
              <li><strong>Drive Time:</strong> Closer parks = more frequent visits = better socialization</li>
            </ul>

            <div className="bg-primary-50 border-2 border-primary-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Explore Multiple Parks</h3>
              <p className="text-gray-700 leading-relaxed">
                Don&apos;t limit yourself to one park. Variety helps your dog generalize socialization skills and prevents 
                territorial behavior. Try visiting 2-3 different parks regularly to give your dog diverse experiences and 
                keep visits interesting.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/guides/first-timer-guide" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">First-Timer&apos;s Guide</span>
            </Link>
            <Link href="/guides/seasonal-tips" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Seasonal Tips</span>
            </Link>
            <Link href="/guides/dog-park-safety" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Safety Guide</span>
            </Link>
            <Link href="/" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Browse All Parks</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
