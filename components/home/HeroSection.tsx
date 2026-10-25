'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Users } from 'lucide-react'
import AnimatedLogoHero from './AnimatedLogoHero'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Premium Background with Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 z-0">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(95,187,125,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(107,91,149,0.2),transparent_50%)]" />
      </div>

      {/* Removed floating destination cards - causing performance issues on initial load */}

      {/* Main Content */}
      <div className="container-lg relative z-10">
        {/* Featured Animated Logo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <AnimatedLogoHero />
        </motion.div>

        {/* Original Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full border border-white/40 hover:border-primary-300/50 transition-colors"
          >
            <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
            <span className="text-base font-bold text-white">✨ Luxury Travel Experiences Since 2020</span>
          </motion.div>

          {/* Premium Headline with Gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          >
            <span className="text-white drop-shadow-2xl">
              Your World Awaits
            </span>
            <br />
            <span className="text-yellow-200 drop-shadow-xl font-black">In Luxury & Nature</span>
          </motion.h1>

          {/* Luxury Tagline */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mb-4">
              "Tuk it easy, make it crazy"
            </p>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-lg">
              Premium curated experiences across 50+ luxury destinations. Where every moment becomes an unforgettable memory.
            </p>
          </motion.div>

          {/* Luxury CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <motion.a
              href="/packages"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-2xl hover:shadow-[0_20px_60px_rgba(95,187,125,0.4)] transition-all duration-300"
            >
              <span className="flex items-center gap-2 justify-center">
                Explore Luxury Packages
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            <motion.a
              href="/trip-planner"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-lg font-semibold border-2 border-white/20 hover:border-primary-400 hover:bg-white/15 transition-all duration-300"
            >
              Customize Your Journey
            </motion.a>
          </motion.div>

          {/* Premium Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
          >
            {[
              { number: '50+', label: 'Premium Destinations', icon: MapPin },
              { number: '10K+', label: 'Luxury Travelers', icon: Users },
              { number: '4.9★', label: 'Excellence Rating' },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300"
                >
                  {Icon && <Icon className="w-5 h-5 text-primary-400 mb-3 mx-auto" />}
                  <p className="text-3xl font-bold text-primary-300">{stat.number}</p>
                  <p className="text-xs text-white/60 mt-2">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="mt-16"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-7 h-7 text-primary-400 mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated gradient orbs in background - optimized */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/15 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-500/15 to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </section>
  )
}
