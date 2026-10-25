'use client'

import { motion } from 'framer-motion'
import { Mail, Send, Zap, Globe, Users } from 'lucide-react'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubscribed(true)
    setLoading(false)

    // Reset after 3 seconds
    setTimeout(() => {
      setEmail('')
      setSubscribed(false)
    }, 3000)
  }

  return (
    <section className="section py-24 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"
      />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(95,187,125,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(107,91,149,0.1),transparent_50%)] pointer-events-none" />

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
            >
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold text-white/90">EXCLUSIVE OFFERS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            >
              Stay Updated on <br />
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-secondary-300 bg-clip-text text-transparent">
                Premium Escapes
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Subscribe to our luxury travel newsletter and get exclusive access to limited-time offers, insider travel tips, and first dibs on new destinations
            </motion.p>
          </div>

          {/* Newsletter Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 mb-8 max-w-2xl mx-auto"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400 pointer-events-none" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 disabled:opacity-50"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Subscribing...
                </>
              ) : subscribed ? (
                <>
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    ✓
                  </motion.span>
                  Success!
                </>
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: subscribed ? 1 : 0, y: subscribed ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            {subscribed && (
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500/20 backdrop-blur-md rounded-full border border-primary-400/50"
              >
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
                  ✨
                </motion.span>
                <span className="text-white font-semibold">Welcome to exclusive travel alerts!</span>
              </motion.div>
            )}
          </motion.div>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-white/60 text-sm"
          >
            We respect your privacy. Unsubscribe at any time. See our{' '}
            <a href="/privacy" className="text-primary-300 hover:text-primary-200 underline transition-colors">
              Privacy Policy
            </a>
          </motion.p>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: 'Exclusive Deals',
                description: 'Early access to limited-time packages and flash sales',
              },
              {
                icon: Globe,
                title: 'Insider Tips',
                description: 'Expert travel advice, hidden gems, and destination guides',
              },
              {
                icon: Users,
                title: 'Community Stories',
                description: 'Travel stories and experiences from fellow luxury explorers',
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75 + i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary-400/50 transition-all duration-300 group"
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
          >
            {[
              { number: '25K+', label: 'Newsletter Subscribers' },
              { number: '98%', label: 'Open Rate' },
              { number: '4.5★', label: 'Avg. Rating' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-4xl font-black bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-white/70 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400"
        animate={{ backgroundPosition: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  )
}
