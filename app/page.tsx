import dogParksData from '@/data/dogParks.json'
import { DogPark } from '@/types/dogPark'
import DogParkCard from '@/components/DogParkCard'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'

const dogParks = dogParksData as DogPark[]

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            All Austin Dog Parks
          </h2>
          <p className="text-gray-600">
            {dogParks.length} amazing dog parks to explore in Austin, Texas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogParks.map((park) => (
            <DogParkCard key={park.id} park={park} />
          ))}
        </div>
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
          </div>
        </div>
      </section>
    </div>
  )
}

