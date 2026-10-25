'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="heading-lg mb-3">Get In Touch</h1>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our travel packages? Our friendly team is here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {[
              {
                icon: Mail,
                title: 'Email',
                details: 'hello@tuktoktours.com',
                description: 'We respond within 24 hours',
              },
              {
                icon: Phone,
                title: 'Phone',
                details: '+1 (234) 567-890',
                description: '24/7 Customer Support',
              },
              {
                icon: MapPin,
                title: 'Office',
                details: '123 Travel Street',
                description: 'Adventure City, AC 12345',
              },
              {
                icon: Clock,
                title: 'Hours',
                details: 'Mon - Fri: 9AM - 6PM',
                description: 'Sat - Sun: 10AM - 4PM (UTC)',
              },
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{contact.title}</h3>
                      <p className="font-semibold text-primary-600">{contact.details}</p>
                      <p className="text-xs text-gray-600 mt-1">{contact.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-6xl mb-4 inline-block"
                >
                  ✓
                </motion.div>
                <h3 className="heading-md mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Name */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Your name"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>

                  {/* Subject */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn btn-primary btn-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>

        {/* FAQ Preview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="heading-md mb-8">Quick Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'How do I book a package?', a: 'Simply browse our packages, click "Book Now", and follow the checkout process.' },
              { q: 'Can I customize a package?', a: 'Yes! Use our Trip Planner or contact our team for custom itineraries.' },
              { q: 'What\'s your cancellation policy?', a: 'Free cancellation up to 14 days before travel. See full policy for details.' },
              { q: 'Do you offer group discounts?', a: 'Yes! Groups of 6+ get special rates. Contact us for quotes.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary-600" />
                  {item.q}
                </p>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}
