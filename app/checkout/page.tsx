'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CheckoutForm from '@/components/booking/CheckoutForm'
import BookingSummary from '@/components/booking/BookingSummary'

export default function CheckoutPage() {
  const [bookingData, setBookingData] = useState({
    packageId: '1',
    packageName: 'Bali Paradise Escape',
    destination: 'Bali, Indonesia',
    price: 899,
    duration: 5,
    startDate: '',
    travelers: 1,
    addOns: [],
    bookingType: 'deposit' as 'full' | 'deposit',
  })
  const [step, setStep] = useState<'booking' | 'payment' | 'confirmation'>('booking')

  const handleBookingSubmit = (data: any) => {
    setBookingData((prev) => ({ ...prev, ...data }))
    setStep('payment')
  }

  const handlePaymentSubmit = (paymentData: any) => {
    // In a real application, process payment here
    console.log('Payment submitted:', paymentData)
    setStep('confirmation')
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="heading-lg mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">Secure your adventure in just a few steps</p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { id: 'booking', label: 'Booking Details' },
            { id: 'payment', label: 'Payment' },
            { id: 'confirmation', label: 'Confirmation' },
          ].map((s, i) => (
            <div key={s.id} className="flex items-center gap-4">
              <motion.div
                animate={{
                  scale: step === s.id ? 1.1 : 1,
                  backgroundColor: step === s.id ? 'rgb(59, 130, 246)' : 
                                   ['booking', 'payment', 'confirmation'].indexOf(s.id) < ['booking', 'payment', 'confirmation'].indexOf(step) ? 'rgb(34, 197, 94)' : 'rgb(209, 213, 219)',
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              >
                {['booking', 'payment', 'confirmation'].indexOf(s.id) < ['booking', 'payment', 'confirmation'].indexOf(step) ? '✓' : i + 1}
              </motion.div>
              <span className="text-sm font-medium text-gray-700">{s.label}</span>
              {i < 2 && <div className="w-8 h-1 bg-gray-300" />}
            </div>
          ))}
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {step === 'booking' && (
              <CheckoutForm
                bookingData={bookingData}
                onSubmit={handleBookingSubmit}
              />
            )}

            {step === 'payment' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="heading-md mb-6">Payment Details</h2>
                <div className="space-y-6">
                  {/* Payment Method Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Select Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                        { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                        { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
                        { id: 'wallet', label: 'Digital Wallet', icon: '💰' },
                      ].map((method) => (
                        <motion.button
                          key={method.id}
                          whileHover={{ scale: 1.05 }}
                          className="p-4 border-2 border-gray-300 rounded-lg hover:border-primary-500 transition-all text-center"
                        >
                          <div className="text-2xl mb-2">{method.icon}</div>
                          <p className="text-sm font-medium">{method.label}</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Card Details */}
                  <div>
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 mb-4"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep('booking')}
                      className="btn btn-outline flex-1"
                    >
                      Back
                    </button>
                    <motion.button
                      onClick={() => handlePaymentSubmit({})}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary flex-1"
                    >
                      Process Payment
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'confirmation' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-6xl mb-4 inline-block"
                >
                  ✓
                </motion.div>
                <h2 className="heading-md mb-2">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-6">
                  Your adventure awaits! A confirmation email has been sent to your inbox.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                  <h3 className="font-semibold mb-4">Booking Reference: #BK-2024-001234</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Package:</strong> {bookingData.packageName}</p>
                    <p><strong>Duration:</strong> {bookingData.duration} days</p>
                    <p><strong>Total Amount:</strong> ${bookingData.price * bookingData.travelers}</p>
                    <p><strong>Status:</strong> <span className="badge badge-primary">Confirmed</span></p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full btn btn-primary">
                    View My Booking
                  </button>
                  <button className="w-full btn btn-outline">
                    Back to Home
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Booking Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <BookingSummary bookingData={bookingData} />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
