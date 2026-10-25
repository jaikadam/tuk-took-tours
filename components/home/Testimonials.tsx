'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote, MapPin, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=90',
      rating: 5,
      reviews: 'Verified Traveler',
      text: 'Tuk Took Tours made our honeymoon absolutely magical. Every detail was perfect, and the local guides were incredibly knowledgeable. This company truly understands luxury travel.',
      trip: 'Bali & Maldives',
      duration: '10 Days',
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=90',
      rating: 5,
      reviews: 'Verified Traveler',
      text: 'Best value for money I have ever found. The 24/7 support team helped us with last-minute changes without any hassle. Highly professional and customer-centric.',
      trip: 'Southeast Asia',
      duration: '14 Days',
      verified: true,
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=90',
      rating: 5,
      reviews: 'Verified Traveler',
      text: 'The itinerary was perfect - adventurous yet relaxing. We felt like locals, not tourists. Every moment was carefully curated. Absolutely phenomenal experience!',
      trip: 'Japan Explorer',
      duration: '12 Days',
      verified: true,
    },
    {
      id: 4,
      name: 'James Rodriguez',
      location: 'Miami, USA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=90',
      rating: 5,
      reviews: 'Verified Traveler',
      text: 'Fantastic experience from booking to returning home. The team attention to detail is unmatched. Premium accommodations, expert guides, and seamless organization throughout.',
      trip: 'Paris & Switzerland',
      duration: '9 Days',
      verified: true,
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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
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
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-primary-50 rounded-full border border-primary-200"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-primary-700 font-semibold text-sm">REAL EXPERIENCES</p>
          </motion.div>
          <h2 className="heading-lg mb-4 text-gray-900">
            What Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Travelers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Authentic stories from travelers who have experienced the Tuk Took Tours difference
          </p>
        </motion.div>

        {/* Main Testimonial Card - Featured */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
            {/* Accent Line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400"
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary-400 opacity-20" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
              {/* Left: Author Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col items-center md:items-start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative mb-6"
                  >
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-2xl object-cover border-4 border-primary-400 shadow-lg"
                    />
                    {testimonials[activeIndex].verified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                        ✓
                      </div>
                    )}
                  </motion.div>
                  <h4 className="text-xl font-bold text-white text-center md:text-left">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-white/70 text-sm text-center md:text-left">
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </motion.div>

              {/* Center: Testimonial Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl text-white/95 leading-relaxed mb-6 font-light italic">
                  "{testimonials[activeIndex].text}"
                </blockquote>

                {/* Trip Details */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span className="text-sm text-white/80">{testimonials[activeIndex].trip}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
                    <Calendar className="w-4 h-4 text-primary-400" />
                    <span className="text-sm text-white/80">{testimonials[activeIndex].duration}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Carousel - Smaller Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 border-2 ${
                idx === activeIndex
                  ? 'bg-primary-500 border-primary-400 shadow-lg scale-105'
                  : 'bg-white border-gray-200 hover:border-primary-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${idx === activeIndex ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </p>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          idx === activeIndex ? 'fill-yellow-300 text-yellow-300' : 'fill-yellow-400 text-yellow-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className={`text-xs line-clamp-2 ${idx === activeIndex ? 'text-white/90' : 'text-gray-600'}`}>
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Testimonials CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-4">See Our Travelers in Action</h3>
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                Watch real travelers share their unforgettable luxury experiences and adventures with Tuk Took Tours.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Watch Video Stories
              </motion.button>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-2xl overflow-hidden bg-black/20 flex items-center justify-center cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative z-10"
              >
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/40 transition-colors shadow-lg">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
