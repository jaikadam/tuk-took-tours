'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Zap, Users, Wallet, Navigation2, Globe } from 'lucide-react'

const collections = [
  {
    id: 1,
    name: 'Honeymoon',
    description: 'Romantic getaways for newlyweds',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    count: 245,
  },
  {
    id: 2,
    name: 'Adventure',
    description: 'Thrilling experiences and activities',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    count: 189,
  },
  {
    id: 3,
    name: 'Family',
    description: 'Fun for all ages and interests',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    count: 312,
  },
  {
    id: 4,
    name: 'Budget',
    description: 'Affordable and amazing travels',
    icon: Wallet,
    color: 'from-green-500 to-emerald-500',
    count: 267,
  },
  {
    id: 5,
    name: 'Luxury',
    description: 'Premium experiences and comfort',
    icon: Navigation2,
    color: 'from-purple-500 to-indigo-500',
    count: 156,
  },
  {
    id: 6,
    name: 'Solo',
    description: 'Self-discovery and empowerment',
    icon: Globe,
    color: 'from-teal-500 to-cyan-500',
    count: 198,
  },
]

export default function Collections() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="heading-lg mb-3">Travel Collections</h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Curated collections tailored to every travel style and preference.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {collections.map((collection) => {
            const Icon = collection.icon

            return (
              <motion.div
                key={collection.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${collection.color} p-8 text-white cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full transform translate-x-20 -translate-y-20" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  {/* Title and Description */}
                  <h3 className="font-bold text-xl mb-1">{collection.name}</h3>
                  <p className="text-white/80 text-sm mb-6">
                    {collection.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-end justify-between mt-auto">
                    <span className="text-sm text-white/70">
                      {collection.count} packages
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-xl"
                    >
                      →
                    </motion.div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <span className="text-white font-semibold">
                    Explore Collection
                  </span>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
