'use client'

import { motion } from 'framer-motion'
import { Search, Sparkles, CreditCard, Plane, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Discover',
      description: 'Explore 50+ premium destinations curated by our luxury travel experts.',
      icon: Search,
      details: ['Browse by region', 'Filter by style', 'Read travel guides'],
      color: 'from-primary-500 to-primary-600',
    },
    {
      number: 2,
      title: 'Customize',
      description: 'Personalize every detail - accommodation, activities, dining, and more.',
      icon: Sparkles,
      details: ['Choose hotels', 'Pick activities', 'Plan itinerary'],
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      number: 3,
      title: 'Book',
      description: 'Secure your journey with flexible payment options and best price guarantee.',
      icon: CreditCard,
      details: ['Select dates', 'Choose payment', 'Get confirmation'],
      color: 'from-primary-600 to-secondary-500',
    },
    {
      number: 4,
      title: 'Travel',
      description: 'Embark on unforgettable adventures with 24/7 support and expert guides.',
      icon: Plane,
      details: ['Live support', 'Expert guides', 'Create memories'],
      color: 'from-secondary-600 to-primary-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="section py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(95,187,125,0.4),transparent_70%)]" />
      </div>

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
            className="inline-block mb-4 px-4 py-2 bg-primary-50 rounded-full border border-primary-200"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-primary-700 font-semibold text-sm">SIMPLE PROCESS</p>
          </motion.div>
          <h2 className="heading-lg mb-4 text-gray-900">
            How Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Luxury Journey</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From inspiration to adventure - four simple steps to book your dream destination
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-secondary-400 to-primary-300 origin-left"
          />

          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  whileHover={{ y: -12 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full">
                    {/* Accent Line Top */}
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                    />

                    {/* Step Number Circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.1 + idx * 0.1, type: 'spring', stiffness: 200 }}
                      className={`absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mb-6"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} p-3 text-white shadow-md`}>
                        <Icon className="w-full h-full" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.25 + idx * 0.1 }}
                      className="space-y-2 pt-4 border-t border-gray-100"
                    >
                      {step.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.05 + i * 0.05 }}
                          className="flex items-center gap-2 text-gray-600 text-sm"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                          {detail}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Hover Arrow */}
                    {idx < steps.length - 1 && (
                      <motion.div
                        className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                      >
                        <ArrowRight className="w-6 h-6 text-primary-400" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-600 text-lg">Ready to start your luxury journey?</p>
            <motion.a
              href="/packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Explore Our Packages
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: '✓ Best Price Guarantee', desc: 'Find cheaper? We match it + 10% off' },
            { title: '✓ Flexible Payments', desc: '50% deposit or pay full - your choice' },
            { title: '✓ 24/7 Expert Support', desc: 'Always here in 15+ languages' },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
