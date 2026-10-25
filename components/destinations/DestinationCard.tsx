'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Star, Calendar } from 'lucide-react'

interface DestinationCardProps {
  destination: {
    id: number
    name: string
    country: string
    description: string
    image: string
    price: number
    rating: number
    reviews: number
    season: string
  }
  index: number
}

export default function DestinationCard({
  destination,
  index,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Best Season Badge */}
        <div className="absolute top-3 left-3">
          <div className="flex items-center gap-1 badge badge-primary">
            <Calendar className="w-3 h-3" />
            {destination.season}
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-primary-600">
          From ${destination.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1">
          {destination.name}
        </h3>

        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          {destination.country}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4 py-3 border-y border-gray-100">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
            <span className="font-semibold text-gray-900">{destination.rating}</span>
          </div>
          <span className="text-sm text-gray-600">
            ({destination.reviews} reviews)
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <Link
            href={`/destinations/${destination.id}`}
            className="w-full btn btn-primary btn-sm block text-center"
          >
            Explore Destination
          </Link>
          <button className="w-full btn btn-ghost btn-sm">
            View Packages
          </button>
        </div>
      </div>
    </motion.div>
  )
}
