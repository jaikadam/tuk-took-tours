'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: number
  category: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'Booking',
    question: 'How do I book a package?',
    answer:
      'Simply browse our packages, select your preferred dates and group size, and follow the checkout process. You can pay in full or use our flexible payment plans.',
  },
  {
    id: 2,
    category: 'Booking',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, debit cards, PayPal, bank transfers, and digital wallets. All transactions are securely encrypted.',
  },
  {
    id: 3,
    category: 'Cancellation',
    question: 'What is your cancellation policy?',
    answer:
      'Free cancellation up to 14 days before your trip. Cancellations between 7-14 days incur a 50% charge. Within 7 days, no refunds are possible.',
  },
  {
    id: 4,
    category: 'Cancellation',
    question: 'Can I reschedule my booking?',
    answer:
      'Yes! You can reschedule to any available date within 12 months without any additional charges, subject to availability.',
  },
  {
    id: 5,
    category: 'Visa',
    question: 'Do I need a visa?',
    answer:
      'Visa requirements vary by destination and your nationality. We provide detailed visa information for each destination. Our team can assist with recommendations.',
  },
  {
    id: 6,
    category: 'Visa',
    question: 'Do you help with visa applications?',
    answer:
      'While we don\'t process visas directly, we provide comprehensive visa guides, checklists, and can connect you with trusted visa services.',
  },
  {
    id: 7,
    category: 'Travel',
    question: 'What is included in the package price?',
    answer:
      'Most packages include accommodation, daily breakfast, local transportation, guided tours, and entrance fees. Check individual package details for specifics.',
  },
  {
    id: 8,
    category: 'Travel',
    question: 'Are flights included?',
    answer:
      'International flights are typically not included. However, we can help you book flights and offer special rates through our partner airlines.',
  },
  {
    id: 9,
    category: 'Support',
    question: 'What if I have an issue during my trip?',
    answer:
      'Our 24/7 support team is always available. You\'ll receive emergency contact numbers and have access to our in-destination support.',
  },
  {
    id: 10,
    category: 'Support',
    question: 'Can I customize a package?',
    answer:
      'Absolutely! Use our Trip Planner tool or contact our team directly to create a fully customized itinerary tailored to your preferences and budget.',
  },
]

const categories = ['All', ...Array.from(new Set(faqData.map((item) => item.category)))]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredFAQ =
    selectedCategory === 'All'
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory)

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="container-lg max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="heading-lg mb-3">Frequently Asked Questions</h1>
          <p className="text-body-lg text-gray-600">
            Find answers to common questions about our services and booking process.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 flex flex-wrap gap-3 justify-center"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {filteredFAQ.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <motion.button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <span className="inline-block badge badge-primary text-xs mb-2 capitalize">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-gray-900">{item.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary-600" />
                </motion.div>
              </motion.button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedId === item.id ? 'auto' : 0,
                  opacity: expandedId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-gray-200"
              >
                <p className="px-6 py-4 text-gray-600 leading-relaxed">{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-center text-white"
        >
          <h3 className="heading-md mb-3">Didn't find your answer?</h3>
          <p className="text-white/90 mb-6">
            Our customer support team is here to help! Contact us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Support
            </button>
            <button className="btn border-2 border-white text-white hover:bg-white/10">
              Live Chat
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
