'use client'

import { motion } from 'framer-motion'
import { Star, MapPin, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function TrendingDestinations() {
  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537225228614-b4fad34a2b08?w=800&h=600&fit=crop&q=90',
      rating: 4.9,
      reviews: 2847,
      travelers: '12.5K',
      price: '$1,299',
      highlight: 'Tropical Paradise',
      description: 'Experience ancient temples, pristine beaches, and luxury resorts',
    },
    {
      id: 2,
      name: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=90',
      rating: 4.95,
      reviews: 3124,
      travelers: '8.9K',
      price: '$1,899',
      highlight: 'Alpine Luxury',
      description: 'Majestic mountains, world-class skiing, and fine dining',
    },
    {
      id: 3,
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1573505933290-0de2f004cb67?w=800&h=600&fit=crop&q=90',
      rating: 5.0,
      reviews: 4521,
      travelers: '15.3K',
      price: '$2,499',
      highlight: 'Overwater Villas',
      description: 'Crystal waters, private islands, and ultimate relaxation',
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=800&h=600&fit=crop&q=90',
      rating: 4.85,
      reviews: 3876,
      travelers: '11.2K',
      price: '$1,599',
      highlight: 'Modern Tradition',
      description: 'Neon lights, ancient temples, and culinary excellence',
    },
    {
      id: 5,
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop&q=90',
      rating: 4.92,
      reviews: 5234,
      travelers: '18.7K',
      price: '$1,799',
      highlight: 'City of Love',
      description: 'Iconic monuments, world-class museums, and romance',
    },
    {
      id: 6,
      name: 'New Zealand',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop&q=90',
      rating: 4.88,
      reviews: 2965,
      travelers: '9.4K',
      price: '$1,699',
      highlight: 'Adventure Capital',
      description: 'Stunning landscapes, adventure activities, and nature',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="section py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(95,187,125,0.3),transparent_70%)]" />
      </div>

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-primary-50 rounded-full border border-primary-200"
          >
            <p className="text-primary-700 font-semibold text-sm">LUXURY CURATED</p>
          </motion.div>
          <h2 className="heading-lg mb-4 text-gray-900">
            Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Premium Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most sought-after luxury travel experiences from our expert-curated collection
          </p>
        </motion.div>

        {/* Destination Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination, idx) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Premium Card Container */}
              <div className="relative h-96 overflow-hidden bg-slate-900">
                {/* Background Image */}
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.15 }}
                />

                {/* Sophisticated Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Accent Line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                />

                {/* Highlight Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="absolute top-4 right-4 px-4 py-2 bg-primary-500/90 backdrop-blur-md rounded-full border border-primary-400/50"
                >
                  <p className="text-white text-sm font-semibold">{destination.highlight}</p>
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + idx * 0.1 }}
                  className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20"
                >
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-bold text-sm">{destination.rating}</span>
                  <span className="text-white/70 text-xs">({destination.reviews})</span>
                </motion.div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg mb-2">{destination.name}</h3>
                    <p className="text-yellow-100 drop-shadow-md mb-4 leading-relaxed text-sm font-semibold">{destination.description}</p>

                    {/* Footer Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-white text-sm font-semibold drop-shadow-md">
                        <motion.div
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Users className="w-4 h-4" />
                          <span>{destination.travelers}</span>
                        </motion.div>
                      </div>
                      <p className="text-2xl font-bold text-primary-300">{destination.price}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Hover CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm"
                >
                  <Link
                    href={`/destinations/${destination.id}`}
                    className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors group/btn"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore All Luxury Destinations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
