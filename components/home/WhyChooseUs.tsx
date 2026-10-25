'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, Users, Clock, Award, Zap, Check } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'SSL encrypted and certified. Your financial information is 100% protected.',
      highlights: ['PCI DSS Compliant', 'SSL 256-bit Encryption', 'Secure Gateway'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      title: '50+ Countries',
      description: 'Curated experiences across all continents with verified local partners.',
      highlights: ['Expert Vetting', 'Local Partners', 'Quality Assured'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Users,
      title: '10,000+ Happy Travelers',
      description: 'Join thousands of satisfied customers with 4.9/5 average rating.',
      highlights: ['Verified Reviews', 'Real Stories', 'Live Testimonials'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance in 15+ languages. We are always here for you.',
      highlights: ['Live Chat', 'Email Support', 'Phone Line'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as Best Online Travel Agency 2023 & 2024 by International Awards.',
      highlights: ['Industry Leader', 'Certified Excellence', 'Premium Service'],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Zap,
      title: 'Best Price Promise',
      description: 'Find cheaper elsewhere? We will match and beat it by 10%.',
      highlights: ['Price Match', '10% Beat', 'Guaranteed'],
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="section py-24 bg-gradient-to-br from-slate-50 via-white to-primary-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-primary-100/30 opacity-30"
      />

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-secondary-50 rounded-full border border-secondary-200"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-secondary-700 font-semibold text-sm">WHY TRAVELERS CHOOSE US</p>
          </motion.div>
          <h2 className="heading-lg mb-4 text-gray-900">
            The Tuk Took <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Difference</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium service, unbeatable prices, and unforgettable experiences - here is why luxury travelers trust us
          </p>
        </motion.div>

        {/* Trust Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -16, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-md group-hover:shadow-2xl transition-shadow duration-300 opacity-90 group-hover:opacity-100" />

                {/* Accent Top Bar */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} rounded-t-2xl`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.6 }}
                />

                <div className="relative p-8 rounded-2xl">
                  {/* Icon Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.15 + idx * 0.08, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} p-3 text-white shadow-lg mb-6`}
                  >
                    <Icon className="w-full h-full" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                    {reason.description}
                  </p>

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25 + idx * 0.08 }}
                    className="space-y-2 pt-5 border-t border-gray-100"
                  >
                    {reason.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 + i * 0.05 }}
                        className="flex items-center gap-2 text-gray-700 text-sm font-medium"
                      >
                        <Check className={`w-4 h-4 bg-gradient-to-br ${reason.color} text-white rounded-full p-0.5 flex-shrink-0`} />
                        {highlight}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Hover Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Happy Travelers' },
              { number: '50+', label: 'Premium Destinations' },
              { number: '4.9★', label: 'Average Rating' },
              { number: '15+', label: 'Languages Supported' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-black mb-2">{stat.number}</p>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 text-lg mb-6">Join thousands of luxury travelers who trust Tuk Took Tours</p>
          <motion.a
            href="/packages"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Start Your Adventure
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
