import { FaDog, FaMapMarkedAlt, FaHeart } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600&q=80)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/90 to-primary-800/90" />
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 p-4 rounded-full">
            <FaDog className="text-6xl" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Discover the Best Dog Parks in Austin
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto text-balance">
          Find the perfect off-leash area, dog-friendly park, or scenic trail for your furry friend in Austin, Texas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <FaMapMarkedAlt className="text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">10+ Locations</h3>
            <p className="text-primary-100 text-sm">
              From downtown to surrounding areas
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <FaDog className="text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Off-Leash Areas</h3>
            <p className="text-primary-100 text-sm">
              Let your pup run free and socialize
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <FaHeart className="text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Dog-Friendly</h3>
            <p className="text-primary-100 text-sm">
              The most pet-friendly city in Texas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

