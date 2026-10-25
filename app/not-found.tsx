'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 pt-24 pb-12">
      <div className="container-lg text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Lost Tuk Tuk Animation */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-8xl mb-8"
          >
            🛺
          </motion.div>

          {/* 404 Text */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-display mb-4 text-primary-600"
          >
            404
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="heading-lg text-gray-900 mb-4"
          >
            Oops! Page Not Found
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-body-lg text-gray-600 mb-8 max-w-xl mx-auto"
          >
            Your tuk tuk seems to have taken a wrong turn! The page you're looking for 
            doesn't exist. Let's get you back on the right path to amazing travel experiences.
          </motion.p>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 bg-white rounded-lg p-6 shadow-lg inline-block"
          >
            <p className="text-sm text-gray-600 mb-4">Here's where you can go:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {[
                { href: '/', label: 'Home', icon: Home },
                { href: '/destinations', label: 'Destinations' },
                { href: '/packages', label: 'Packages' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link, i) => {
                const Icon = link.icon as any
                return (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1 transition-colors"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <div>
              <Link href="/" className="btn btn-primary btn-lg inline-flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </div>

            <div className="text-sm text-gray-600">
              <p>Need help? <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">Contact our support team</Link></p>
            </div>
          </motion.div>

          {/* Fun Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-gray-400 text-sm"
          >
            <p>Don't worry, even the best travelers get lost sometimes! 🌍</p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
