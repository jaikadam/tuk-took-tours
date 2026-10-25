'use client'

import { motion } from 'framer-motion'
import { Check, Heart, MapPin, Calendar, Users } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedPackages() {
  const packages = [
    {
      id: 1,
      name: 'Bali Luxury Retreat',
      image: 'https://images.unsplash.com/photo-1537225228614-b4fad34a2b08?w=800&h=600&fit=crop&q=90',
      duration: '7 Days',
      travelers: '2-6 People',
      price: 1299,
      rating: 4.9,
      tag: 'Best Seller',
      features: ['5-Star Resort', 'Private Guide', 'Spa Treatments'],
      description: 'Experience pure luxury in Bali with premium accommodations and exclusive experiences',
    },
    {
      id: 2,
      name: 'Swiss Alpine Escape',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=90',
      duration: '6 Days',
      travelers: '2-8 People',
      price: 1899,
      rating: 4.95,
      tag: 'Premium',
      features: ['Alpine Resort', 'Ski Access', 'Gourmet Dining'],
      description: 'Discover alpine luxury with world-class skiing and fine dining experiences',
    },
    {
      id: 3,
      name: 'Maldives Paradise',
      image: 'https://images.unsplash.com/photo-1573505933290-0de2f004cb67?w=800&h=600&fit=crop&q=90',
      duration: '5 Days',
      travelers: '2-4 People',
      price: 2499,
      rating: 5.0,
      tag: 'Luxury',
      features: ['Overwater Villa', 'Private Beach', 'Water Sports'],
      description: 'Ultimate luxury with private overwater villas and pristine island surroundings',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="section py-24 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-primary-200"
        />
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
            className="inline-block mb-4 px-4 py-2 bg-secondary-50 rounded-full border border-secondary-200"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-secondary-700 font-semibold text-sm">EXCLUSIVELY CURATED</p>
          </motion.div>
          <h2 className="heading-lg mb-4 text-gray-900">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Luxury Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked travel packages designed for the discerning traveler seeking unforgettable experiences
          </p>
        </motion.div>

        {/* Package Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              whileHover={{ y: -20, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 z-0" />

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Tag Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-bold text-xs shadow-lg"
                >
                  {pkg.tag}
                </motion.div>

                {/* Wishlist Button */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <Heart className="w-5 h-5 text-white" />
                </motion.button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20">
                  <span className="text-yellow-400 font-bold text-sm">{pkg.rating}★</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 bg-gradient-to-br from-slate-900 to-slate-950">
                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors"
                >
                  {pkg.name}
                </motion.h3>

                {/* Description */}
                <p className="text-yellow-100 text-sm mb-4 line-clamp-2 font-semibold drop-shadow-md">{pkg.description}</p>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-3 mb-5 py-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white font-semibold drop-shadow-md">
                    <Calendar className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold drop-shadow-md">
                    <Users className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm">{pkg.travelers}</span>
                  </div>
                </div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="space-y-2 mb-5 py-4 border-t border-white/10"
                >
                  {pkg.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.05 }}
                      className="flex items-center gap-2 text-white font-semibold drop-shadow-md text-sm"
                    >
                      <Check className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Price & CTA */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary-300">${pkg.price}</span>
                    <span className="text-white/60 text-sm">/per person</span>
                  </div>
                  <Link
                    href={`/packages/${pkg.id}`}
                    className="w-full block text-center py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Details
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Hover Accent */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Browse All Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/packages"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-600 to-secondary-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
          >
            Browse All Premium Packages
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
