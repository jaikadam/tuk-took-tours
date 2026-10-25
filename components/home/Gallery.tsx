'use client'

import { motion } from 'framer-motion'
import { Heart, Share2, Eye, MapPin } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const [liked, setLiked] = useState<number[]>([])

  const galleryImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1537225228614-b4fad34a2b08?w=800&h=600&fit=crop&q=90',
      title: 'Bali Temple Paradise',
      location: 'Bali, Indonesia',
      views: '24.5K',
      likes: '8.3K',
      category: 'temples',
      span: 'col-span-1 row-span-2',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=90',
      title: 'Alpine Majesty',
      location: 'Swiss Alps',
      views: '18.2K',
      likes: '6.1K',
      category: 'mountains',
      span: 'col-span-2',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1573505933290-0de2f004cb67?w=800&h=600&fit=crop&q=90',
      title: 'Overwater Luxury',
      location: 'Maldives',
      views: '31.8K',
      likes: '12.4K',
      category: 'beaches',
      span: 'col-span-2 row-span-2',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=800&h=600&fit=crop&q=90',
      title: 'Tokyo Nights',
      location: 'Tokyo, Japan',
      views: '22.1K',
      likes: '7.9K',
      category: 'cities',
      span: 'col-span-1',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop&q=90',
      title: 'Eiffel Tower Dreams',
      location: 'Paris, France',
      views: '45.6K',
      likes: '18.2K',
      category: 'cities',
      span: 'col-span-1',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop&q=90',
      title: 'Mountain Adventure',
      location: 'New Zealand',
      views: '19.3K',
      likes: '6.8K',
      category: 'mountains',
      span: 'col-span-1 row-span-2',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1520481614674-35567e1ea902?w=800&h=600&fit=crop&q=90',
      title: 'Greek Island Escape',
      location: 'Santorini, Greece',
      views: '28.7K',
      likes: '10.5K',
      category: 'beaches',
      span: 'col-span-2',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1552080941-7434ffe6e6da?w=800&h=600&fit=crop&q=90',
      title: 'Dubai Luxury',
      location: 'Dubai, UAE',
      views: '32.1K',
      likes: '11.9K',
      category: 'cities',
      span: 'col-span-1',
    },
  ]

  const categories = ['All', 'Beaches', 'Mountains', 'Cities', 'Temples']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory.toLowerCase())

  const toggleLike = (id: number) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id))
    } else {
      setLiked([...liked, id])
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section className="section py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(95,187,125,0.3),transparent_70%)]"
        />
      </div>

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-secondary-50 rounded-full border border-secondary-200"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-secondary-700 font-semibold text-sm">TRAVEL INSPIRATION</p>
          </motion.div>
          <h2 className="heading-lg mb-4 text-gray-900">
            Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Travel Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated moments from our travelers exploring the world premium destinations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-400'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 auto-rows-[300px]"
        >
          {filteredImages.map((photo, idx) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className={`${photo.span} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
            >
              {/* Image */}
              <motion.img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-end p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">{photo.title}</h3>
                <div className="flex items-center gap-1 mb-4">
                  <MapPin className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm text-white drop-shadow-md font-semibold">{photo.location}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(photo.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 hover:bg-white/40 transition-colors font-semibold text-white drop-shadow-md"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        liked.includes(photo.id) ? 'fill-red-400 text-red-400' : 'text-white'
                      }`}
                    />
                    <span className="text-xs">{parseInt(photo.likes) + (liked.includes(photo.id) ? 1 : 0)}K</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 hover:bg-white/40 transition-colors font-semibold text-white drop-shadow-md"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="text-xs">Share</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Stats - Top Right (always visible) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="absolute top-4 right-4 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20"
              >
                <Eye className="w-4 h-4 text-white" />
                <span className="text-xs text-white font-bold drop-shadow-md">{photo.views}</span>
              </motion.div>

              {/* Hover Accent */}
              <motion.div
                className="absolute inset-0 border-2 border-primary-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none rounded-2xl"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12 border-2 border-primary-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Share Your Adventure</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Tag us @tuktooktours on Instagram to be featured in our gallery and inspire fellow travelers
          </p>
          <motion.a
            href="https://instagram.com/tuktooktours"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Follow @tuktooktours on Instagram
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Photography Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Golden Hour Magic',
              description: 'Capture breathtaking landscapes during sunrise and sunset for stunning natural light',
            },
            {
              title: 'Local Stories',
              description: 'Document authentic moments with locals, culture, and hidden gems off the beaten path',
            },
            {
              title: 'Luxury Details',
              description: 'Showcase premium experiences - fine dining, spa treatments, and architectural beauty',
            },
          ].map((tip, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                {i + 1}
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">{tip.title}</h4>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
