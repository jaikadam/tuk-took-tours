'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Calendar, DollarSign, Users, AlertCircle, CheckCircle } from 'lucide-react'

interface DestinationDetailPageProps {
  params: { id: string }
}

const destinationDetails = {
  '1': {
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537225228614-b19960ecc986?w=800&h=600&fit=crop',
    price: 899,
    rating: 4.8,
    reviews: 2340,
    description:
      'Bali is a magical island destination known for its stunning beaches, ancient temples, and vibrant culture.',
    overview:
      'Bali combines natural beauty with cultural richness. From the serene rice paddies of Ubud to the bustling beaches of Seminyak, Bali offers diverse experiences. The island is famous for its Hindu temples, yoga retreats, and world-class surfing.',
    bestTime: 'April to October (dry season)',
    temperature: '24-31°C (75-88°F)',
    topAttractions: [
      'Tanah Lot Temple',
      'Ubud Monkey Forest',
      'Rice Terraces',
      'Mount Batur',
      'Seminyak Beach',
      'Sacred Water Springs',
    ],
    visaInfo: 'Most nationalities get visa on arrival (30 days)',
    essentials: ['Passport valid for 6+ months', 'Travel insurance recommended', 'Rupiah (local currency)'],
    itineraries: [
      {
        duration: '3 days',
        title: 'Bali Weekend Escape',
        description: 'Perfect for a quick getaway',
      },
      {
        duration: '5 days',
        title: 'Bali Classic',
        description: 'Beaches, temples, and culture',
      },
      {
        duration: '7 days',
        title: 'Bali Adventure',
        description: 'Includes hiking and water sports',
      },
    ],
  },
}

export default function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const destination = destinationDetails[params.id as keyof typeof destinationDetails]

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Destination not found</h1>
          <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist.</p>
          <a href="/destinations" className="btn btn-primary">
            Back to Destinations
          </a>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-20 pb-12 bg-white">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-96 md:h-[500px] w-full overflow-hidden"
      >
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-lg pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <h1 className="heading-display mb-2">{destination.name}</h1>
              <div className="flex items-center gap-2 text-lg">
                <MapPin className="w-5 h-5" />
                {destination.country}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container-lg py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Quick Facts */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: DollarSign, label: 'Starting Price', value: `$${destination.price}` },
                { icon: Calendar, label: 'Best Season', value: destination.bestTime },
                { icon: Users, label: 'Rating', value: `${destination.rating}★` },
              ].map((fact, i) => {
                const Icon = fact.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 text-center"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                    <p className="text-xs text-gray-600">{fact.label}</p>
                    <p className="font-bold text-gray-900">{fact.value}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-4">About {destination.name}</h2>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                {destination.overview}
              </p>
            </motion.section>

            {/* Top Attractions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-4">Top Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.topAttractions.map((attraction, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{attraction}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Visa & Essentials */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-lg p-6 border border-blue-200"
            >
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Visa & Essentials</h3>
                  <p className="text-gray-700 mb-3">{destination.visaInfo}</p>
                  <ul className="space-y-2">
                    {destination.essentials.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Sample Itineraries */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-4">Popular Itineraries</h2>
              <div className="space-y-3">
                {destination.itineraries.map((itinerary, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900">{itinerary.title}</h4>
                        <p className="text-sm text-gray-600">{itinerary.description}</p>
                      </div>
                      <span className="badge badge-primary whitespace-nowrap ml-4">
                        {itinerary.duration}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Quick Booking Card */}
            <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-600">Starting from</p>
                <p className="heading-lg text-primary-600">${destination.price}</p>
                <p className="text-xs text-gray-500">per person</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-gray-600">Temperature</p>
                  <p className="font-semibold">{destination.temperature}</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-gray-600">Best Time</p>
                  <p className="font-semibold">{destination.bestTime}</p>
                </div>
              </div>

              <div className="space-y-2">
                <button className="w-full btn btn-primary">
                  View Packages
                </button>
                <button className="w-full btn btn-outline">
                  Enquire Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs text-gray-600">
                <p>✓ Best Price Guarantee</p>
                <p>✓ 24/7 Support</p>
                <p>✓ Flexible Cancellation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary-600 to-accent-600 py-12 mt-12"
      >
        <div className="container-lg text-center text-white">
          <h2 className="heading-lg mb-4">Ready to Explore {destination.name}?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Browse our curated packages or create a custom itinerary tailored to your preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-primary-600 hover:bg-gray-100">
              Browse Packages
            </button>
            <button className="btn border-2 border-white text-white hover:bg-white/10">
              Custom Trip Planner
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
