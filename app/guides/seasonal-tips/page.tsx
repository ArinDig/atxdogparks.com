import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaSun, FaSnowflake, FaCloudRain, FaLeaf, FaDog } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Seasonal Guide to Austin Dog Parks | Year-Round Safety Tips',
  description: 'Navigate Austin weather at dog parks year-round. Essential tips for summer heat, spring allergies, winter precautions, and rainy day alternatives.',
  alternates: {
    canonical: 'https://atxdogparks.com/guides/seasonal-tips',
  },
}

export default function SeasonalTips() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FaSun className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Seasonal Tips & Weather Guide</h1>
          </div>
          <p className="text-xl text-primary-100">
            Enjoy Austin dog parks safely year-round with season-specific strategies
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <Image
            src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&q=80"
            alt="Dog enjoying park in different seasons"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg mb-8"
            priority
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaSun className="text-yellow-500" />
              Summer (May - September)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Austin summers are dangerous for dogs. Heat exhaustion can be fatal. Follow these critical safety rules:
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-900 mb-4">CRITICAL: Visit Only During Cool Hours</h3>
              <ul className="space-y-2">
                <li>• <strong>Best Times:</strong> Before 9 AM or after 8 PM</li>
                <li>• <strong>Avoid:</strong> 11 AM - 6 PM when pavement and air temps are highest</li>
                <li>• <strong>Test Pavement:</strong> Place your hand on the ground for 7 seconds. If it&apos;s too hot for you, it&apos;s too hot for paws</li>
                <li>• <strong>Limit Sessions:</strong> 20-30 minutes maximum, even in the morning</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Summer Safety Checklist</h3>
            <ul className="space-y-3 mb-8">
              <li><strong>Double Your Water:</strong> Bring 32-64 oz per dog, plus a collapsible bowl</li>
              <li><strong>Seek Shade Parks:</strong> Choose parks with tree cover like Zilker or Bull Creek</li>
              <li><strong>Water Access Parks:</strong> Lake parks like Red Bud Isle and Auditorium Shores offer cooling relief</li>
              <li><strong>Paw Protection:</strong> Apply Musher&apos;s Secret paw balm or use dog booties on hot days</li>
              <li><strong>Cooling Vest:</strong> Consider a cooling vest for thick-coated breeds</li>
              <li><strong>Watch for Heat Exhaustion:</strong> Excessive panting, bright red tongue, lethargy = leave immediately</li>
            </ul>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">Breeds at High Risk in Austin Heat</h3>
              <p className="text-gray-700 mb-3">Exercise extreme caution with:</p>
              <ul className="space-y-2">
                <li>• Brachycephalic breeds (Bulldogs, Pugs, Boston Terriers, Frenchies)</li>
                <li>• Thick-coated breeds (Huskies, Malamutes, Chow Chows)</li>
                <li>• Senior dogs and puppies</li>
                <li>• Overweight dogs</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center gap-3">
              <FaLeaf className="text-green-500" />
              Spring (March - April)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Spring brings beautiful weather but also seasonal challenges:
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Allergies and Pollen</h3>
            <ul className="space-y-3 mb-8">
              <li><strong>Cedar Fever Season:</strong> December-February (late winter/early spring) brings high cedar pollen</li>
              <li><strong>Oak and Grass Pollen:</strong> March-May peaks in Austin</li>
              <li><strong>Signs Your Dog Has Allergies:</strong> Excessive scratching, watery eyes, paw licking, ear infections</li>
              <li><strong>Prevention:</strong> Wipe paws and coat with damp towel after park visits to remove pollen</li>
              <li><strong>Treatment:</strong> Consult your vet about antihistamines or allergy medications</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fire Ants and Insects</h3>
            <ul className="space-y-3 mb-8">
              <li><strong>Fire Ants Emerge:</strong> Spring warmth brings active fire ant mounds</li>
              <li><strong>Avoid Mounds:</strong> Scan the ground before letting your dog rest or dig</li>
              <li><strong>If Bitten:</strong> Brush ants off immediately, rinse with water, apply ice to reduce swelling</li>
              <li><strong>Fleas and Ticks:</strong> Year-round prevention is essential in Austin</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center gap-3">
              <FaSnowflake className="text-blue-400" />
              Winter (December - February)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Austin winters are mild, but cold snaps and rain can still pose challenges:
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Cold Weather Considerations</h3>
            <ul className="space-y-3 mb-8">
              <li><strong>Below 45°F:</strong> Short-haired, small, or senior dogs may need a jacket</li>
              <li><strong>Wet Dogs Get Cold Fast:</strong> If your dog swims in winter, towel dry immediately</li>
              <li><strong>Shorter Sessions:</strong> Cold, windy days = 20-30 minute visits max</li>
              <li><strong>Watch for Shivering:</strong> If your dog shivers, hunches, or seems reluctant to move, leave and warm them up</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Rainy Day Tips</h3>
            <ul className="space-y-3 mb-8">
              <li><strong>Muddy Paws:</strong> Bring extra towels and consider paw booties</li>
              <li><strong>Lightning Safety:</strong> Leave immediately if you hear thunder - don&apos;t wait for lightning</li>
              <li><strong>Flooded Areas:</strong> Avoid parks near creeks that flood (Shoal Creek, Bull Creek)</li>
              <li><strong>Post-Rain Hazards:</strong> Check for debris, fallen branches, or pooled water before entering</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center gap-3">
              <FaCloudRain className="text-gray-500" />
              Rainy Day Alternatives
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When dog parks are closed or weather is too severe, try these Austin alternatives:
            </p>
            <ul className="space-y-4 mb-8">
              <li>
                <strong>Covered Facilities:</strong> Some Austin parks have covered pavilions where dogs can play in light rain
              </li>
              <li>
                <strong>Indoor Doggy Daycare:</strong> Austin has many great options (Ruff House, Zoom Room, Dogtopia)
              </li>
              <li>
                <strong>Hiking Trails:</strong> Barton Creek Greenbelt and many Austin trails allow dogs on leash, even in rain
              </li>
              <li>
                <strong>Dog-Friendly Breweries:</strong> Many Austin breweries welcome dogs in their outdoor areas
              </li>
              <li>
                <strong>Home Play:</strong> Indoor fetch, tug-of-war, puzzle toys, and training sessions keep dogs mentally stimulated
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Month-by-Month Austin Dog Park Guide</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Jan-Feb: Coolest months, perfect for all dogs. Watch for cold snaps.</h4>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Mar-Apr: Beautiful weather! High pollen. Wipe paws after visits.</h4>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">May: Heat begins. Start shifting to early morning/evening visits.</h4>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Jun-Aug: DANGEROUS HEAT. Early morning only (before 9 AM). Consider skipping.</h4>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Sep: Still hot but improving. Evening visits become safer after 7 PM.</h4>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Oct-Nov: Ideal weather! Peak dog park season in Austin.</h4>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Dec: Cool and pleasant. Occasional cold fronts. Great for visits.</h4>
              </div>
            </div>

            <div className="bg-primary-50 border-2 border-primary-300 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-primary-900 mb-4">The Bottom Line on Austin Weather</h3>
              <p className="text-gray-700 leading-relaxed">
                Austin&apos;s climate is wonderful for outdoor activities 8-9 months of the year, but summer heat is no joke. 
                Plan your dog park visits around the weather, always bring extra water, and never hesitate to cut a visit 
                short if conditions become uncomfortable. Your dog&apos;s safety is always more important than getting exercise.
              </p>
            </div>
          </div>
        </div>


        {/* Featured Parks */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Best Parks by Season</h2>
          <p className="text-gray-600 mb-6">Summer means shade and water. Fall and spring are perfect for anything.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Link href="/parks/emma-long-metropolitan-park" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🏖️</span>
              <div>
                <div className="font-semibold text-gray-900">Emma Long Metropolitan Park</div>
                <div className="text-sm text-gray-600">Lake Travis access with shade — a summer standout for water-loving dogs.</div>
              </div>
            </Link>
            <Link href="/parks/red-bud-isle" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🌿</span>
              <div>
                <div className="font-semibold text-gray-900">Red Bud Isle</div>
                <div className="text-sm text-gray-600">Shaded trails and water access. Great year-round but magical in fall.</div>
              </div>
            </Link>
            <Link href="/parks/auditorium-shores-off-leash-area" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🌊</span>
              <div>
                <div className="font-semibold text-gray-900">Auditorium Shores</div>
                <div className="text-sm text-gray-600">Open area with lake access — go early in summer, any time in spring/fall.</div>
              </div>
            </Link>
            <Link href="/parks/walnut-creek-metropolitan-park" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🌲</span>
              <div>
                <div className="font-semibold text-gray-900">Walnut Creek Metropolitan Park</div>
                <div className="text-sm text-gray-600">Tree-lined trails and off-leash areas — perfect for a cool fall morning.</div>
              </div>
            </Link>
          </div>
          <Link href="/" className="text-primary-600 font-semibold hover:underline text-sm">Browse all Austin dog parks →</Link>
        </div>

        {/* Related Guides */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/guides/dog-park-safety" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Safety Guide</span>
            </Link>
            <Link href="/guides/first-timer-guide" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">First-Timer&apos;s Guide</span>
            </Link>
            <Link href="/guides/best-parks-by-feature" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Best Parks by Feature</span>
            </Link>
            <Link href="/gear" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Summer Safety Gear</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
