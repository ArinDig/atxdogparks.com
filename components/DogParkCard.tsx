import Link from 'next/link'
import Image from 'next/image'
import { DogPark } from '@/types/dogPark'
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaDog } from 'react-icons/fa'

interface DogParkCardProps {
  park: DogPark
}

export default function DogParkCard({ park }: DogParkCardProps) {
  return (
    <Link href={`/parks/${park.slug}`} className="group">
      <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={park.mainImage}
            alt={park.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {park.leashPolicy}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {park.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {park.description}
          </p>

          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
              <span className="line-clamp-1">{park.address}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <FaClock className="text-primary-600 flex-shrink-0" />
              <span>{park.hours}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <FaDollarSign className="text-primary-600 flex-shrink-0" />
              <span className="font-semibold text-green-600">{park.fees}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaDog className="text-primary-600 flex-shrink-0" />
              <span className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded">
                {park.leashPolicy}
              </span>
            </div>
          </div>

          <button className="mt-4 w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            View Details
          </button>
        </div>
      </article>
    </Link>
  )
}

