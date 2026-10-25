'use client'

import { useState } from 'react'
import { MessageCircle, Phone, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/1234567890',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:+1234567890',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    }),
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Menu Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 right-0 space-y-3"
          >
            {contactOptions.map((option, i) => {
              const Icon = option.icon
              return (
                <motion.a
                  key={option.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  href={option.href}
                  target={option.href.startsWith('tel') ? undefined : '_blank'}
                  rel={option.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
                  className={`flex items-center gap-3 p-3 rounded-full ${option.color} text-white shadow-lg hover:shadow-xl transition-all duration-200 w-fit`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium whitespace-nowrap pr-2">
                    {option.label}
                  </span>
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-200"
        aria-label="Contact us"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Notification Badge */}
      {!isOpen && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
        />
      )}
    </div>
  )
}
