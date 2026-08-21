import type { Metadata } from 'next'
import Link from 'next/link'
import DogParkCard from '@/components/DogParkCard'
import dogParksData from '@/data/dogParks.json'
import { DogPark } from '@/types/dogPark'

const dogParks: DogPark[] = dogParksData

export const metadata: Metadata = {
  title: 'All Austin Dog Parks — Complete Directory of 28 Off-Leash Parks',
  description:
    'Every dog park in the Austin metro in one place. 24 free off-leash parks plus paid options, with hours, fees, leash rules, and amenities for each. Covers Austin, Cedar Park, Round Rock, Georgetown, Buda and Leander.',
  alternates: {
    canonical: 'https://atxdogparks.com/parks',
  },
}

export default function AllParksPage() {
  const freeParks = dogParks.filter((park) => park.fees.trim().toLowerCase() === 'free')
  const paidParks = dogParks.filter((park) => park.fees.trim().toLowerCase() !== 'free')

  const sortByName = (a: DogPark, b: DogPark) => a.name.localeCompare(b.name)
  const freeSorted = [...freeParks].sort(sortByName)
  const paidSorted = [...paidParks].sort(sortByName)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4 text-primary-100" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>All Parks</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Austin Dog Parks</h1>
          <p className="text-lg text-primary-50 max-w-3xl">
            Every dog park we cover across the Austin metro — {dogParks.length} in total, from downtown
            off-leash areas to fenced neighborhood runs and dog-friendly bars. {freeParks.length} of them
            are completely free.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Finding the Right Park</h2>
          <p className="text-gray-700 mb-4">
            Austin&apos;s dog parks vary more than you might expect. Some are fully fenced, which matters a
            great deal if your dog&apos;s recall is a work in progress. Others are wide-open greenbelt areas
            where off-leash is permitted but nothing stops a dog from wandering toward a road or a creek.
            A few are dog-friendly businesses rather than city parks, with different rules and a cover charge.
          </p>
          <p className="text-gray-700 mb-4">
            The other thing worth planning around is heat. From roughly June through September, midday at an
            unshaded park is genuinely hard on a dog, and several of the most popular spots have very little
            tree cover. Parks with water access — Red Bud Isle, Auditorium Shores, Emma Long — become the
            practical choice in summer, and early morning is the reliable window everywhere else.
          </p>
          <p className="text-gray-700">
            Browse the full list below, or start with our{' '}
            <Link href="/guides/best-parks-by-feature" className="text-primary-600 font-semibold hover:underline">
              guide to parks by feature
            </Link>{' '}
            if you&apos;re looking for something specific like swimming access, agility equipment, or a
            separate small-dog area.
          </p>
        </div>

        {/* Free parks */}
        <section className="mb-14">
          <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
            <h2 className="text-3xl font-bold text-gray-900">Free Dog Parks</h2>
            <span className="text-gray-600">{freeSorted.length} parks</span>
          </div>
          <p className="text-gray-700 mb-6 max-w-3xl">
            No fees, no membership, no reservation. These are public parks operated by Austin and the
            surrounding cities — just show up during posted hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeSorted.map((park) => (
              <DogParkCard key={park.id} park={park} />
            ))}
          </div>
        </section>

        {/* Paid parks */}
        {paidSorted.length > 0 && (
          <section className="mb-14">
            <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
              <h2 className="text-3xl font-bold text-gray-900">Paid &amp; Membership Parks</h2>
              <span className="text-gray-600">{paidSorted.length} parks</span>
            </div>
            <p className="text-gray-700 mb-6 max-w-3xl">
              These charge admission, require a membership, or are dog-friendly businesses rather than
              public parks. In exchange you generally get better fencing, maintained surfaces, and in a
              couple of cases a bar attached.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paidSorted.map((park) => (
                <DogParkCard key={park.id} park={park} />
              ))}
            </div>
          </section>
        )}

        {/* Guides CTA */}
        <section className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Before Your First Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/guides/first-timer-guide"
              className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <div>
                <div className="font-semibold text-gray-900">First-Timer&apos;s Guide</div>
                <div className="text-sm text-gray-600">What to bring and what to expect</div>
              </div>
            </Link>
            <Link
              href="/guides/dog-park-etiquette"
              className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <div>
                <div className="font-semibold text-gray-900">Dog Park Etiquette</div>
                <div className="text-sm text-gray-600">The unwritten rules, written down</div>
              </div>
            </Link>
            <Link
              href="/guides/dog-park-safety"
              className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <div>
                <div className="font-semibold text-gray-900">Safety Guide</div>
                <div className="text-sm text-gray-600">Reading body language and avoiding trouble</div>
              </div>
            </Link>
            <Link
              href="/guides/seasonal-tips"
              className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <div>
                <div className="font-semibold text-gray-900">Seasonal Tips</div>
                <div className="text-sm text-gray-600">Surviving an Austin summer with a dog</div>
              </div>
            </Link>
          </div>
        </section>
      </div>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'All Austin Dog Parks',
            description: `Complete directory of ${dogParks.length} dog parks in the Austin metro area.`,
            url: 'https://atxdogparks.com/parks',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: dogParks.length,
              itemListElement: dogParks.map((park, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://atxdogparks.com/parks/${park.slug}`,
                name: park.name,
              })),
            },
          }),
        }}
      />
    </main>
  )
}
