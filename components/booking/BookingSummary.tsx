'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, MapPin, Percent, Lock } from 'lucide-react'

interface BookingSummaryProps {
  bookingData: {
    packageName: string
    destination: string
    price: number
    duration: number
    startDate?: string
    travelers: number
    bookingType?: 'full' | 'deposit'
    addOns?: string[]
  }
}

export default function BookingSummary({ bookingData }: BookingSummaryProps) {
  const addonPrice = bookingData.addOns ? bookingData.addOns.length * 50 : 0
  const subtotal = bookingData.price * bookingData.travelers + addonPrice
  const tax = subtotal * 0.1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-24 bg-white rounded-xl shadow-lg p-6 space-y-6"
    >
      <h3 className="font-bold text-lg">Booking Summary</h3>

      {/* Package Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-3 pb-4 border-b border-gray-200"
      >
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs text-gray-600">Package</p>
            <p className="font-semibold text-gray-900">{bookingData.packageName}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs text-gray-600">Destination</p>
            <p className="font-semibold text-gray-900">{bookingData.destination}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs text-gray-600">Duration</p>
            <p className="font-semibold text-gray-900">{bookingData.duration} days</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Users className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs text-gray-600">Travelers</p>
            <p className="font-semibold text-gray-900">{bookingData.travelers} {bookingData.travelers === 1 ? 'person' : 'people'}</p>
          </div>
        </div>
      </motion.div>

      {/* Price Breakdown */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-2"
      >
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Package (x{bookingData.travelers})</span>
          <span className="font-semibold">${bookingData.price * bookingData.travelers}</span>
        </div>

        {addonPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Add-ons</span>
            <span className="font-semibold">${addonPrice}</span>
          </div>
        )}

        <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">${subtotal}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (10%)</span>
          <span className="font-semibold">${Math.round(tax)}</span>
        </div>
      </motion.div>

      {/* Total */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 border border-primary-200"
      >
        <p className="text-xs text-gray-600 mb-1">Total Amount Due</p>
        <p className="heading-md text-primary-600">${Math.round(subtotal + tax)}</p>
        {bookingData.bookingType === 'deposit' && (
          <p className="text-xs text-gray-600 mt-2 flex items-center gap-1">
            <Percent className="w-3 h-3" />
            Pay ${Math.round((subtotal + tax) / 2)} now, ${Math.round((subtotal + tax) / 2)} on check-in
          </p>
        )}
      </motion.div>

      {/* Payment Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        className="bg-green-50 rounded-lg p-4 border border-green-200 text-xs text-green-900"
      >
        <div className="flex items-start gap-2 mb-2">
          <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>Your payment is 100% secure. We use industry-standard encryption.</p>
        </div>
        <p>✓ Secure SSL Certificate</p>
        <p>✓ PCI DSS Compliant</p>
      </motion.div>

      {/* Guarantees */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2 text-xs text-gray-600"
      >
        <p>✓ Best Price Guarantee</p>
        <p>✓ Flexible Cancellation (14 days)</p>
        <p>✓ 24/7 Customer Support</p>
      </motion.div>
    </motion.div>
  )
}
