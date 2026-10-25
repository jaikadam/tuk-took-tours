'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Download, MessageSquare, Clock, CheckCircle } from 'lucide-react'

const bookings = [
  {
    id: 'BK-2024-001',
    packageName: 'Bali Paradise Escape',
    destination: 'Bali, Indonesia',
    startDate: '2024-12-15',
    duration: 5,
    travelers: 2,
    status: 'confirmed',
    totalPrice: 1798,
    image: 'https://images.unsplash.com/photo-1537225228614-b19960ecc986?w=400&h=300&fit=crop',
  },
  {
    id: 'BK-2024-002',
    packageName: 'Tokyo Adventure',
    destination: 'Tokyo, Japan',
    startDate: '2025-02-01',
    duration: 7,
    travelers: 1,
    status: 'pending',
    totalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9f1?w=400&h=300&fit=crop',
  },
  {
    id: 'BK-2023-001',
    packageName: 'Paris Romance',
    destination: 'Paris, France',
    startDate: '2023-09-20',
    duration: 6,
    travelers: 2,
    status: 'completed',
    totalPrice: 2598,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
  },
]

type StatusType = 'all' | 'confirmed' | 'pending' | 'completed' | 'cancelled'

export default function MyBookingsPage() {
  const [filterStatus, setFilterStatus] = useState<StatusType>('all')

  const filteredBookings = filterStatus === 'all' 
    ? bookings 
    : bookings.filter((b) => b.status === filterStatus)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'completed':
        return 'bg-blue-100 text-blue-700'
      case 'cancelled':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="heading-lg mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage and track all your travel bookings</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 mb-8 flex-wrap"
        >
          {[
            { value: 'all' as StatusType, label: 'All Bookings' },
            { value: 'confirmed' as StatusType, label: 'Confirmed' },
            { value: 'pending' as StatusType, label: 'Pending' },
            { value: 'completed' as StatusType, label: 'Completed' },
          ].map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.05 }}
              onClick={() => setFilterStatus(filter.value)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filterStatus === filter.value
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-300'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Bookings List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                  {/* Image */}
                  <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={booking.image}
                      alt={booking.packageName}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)} capitalize`}>
                      {booking.status}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900">{booking.packageName}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary-600" />
                        {booking.destination}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary-600" />
                        {new Date(booking.startDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary-600" />
                        {booking.travelers} {booking.travelers === 1 ? 'person' : 'people'}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-600">Booking Reference</p>
                      <p className="font-semibold text-gray-900">{booking.id}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-900">{booking.duration} days</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Total Price</p>
                      <p className="heading-sm text-primary-600">${booking.totalPrice}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary btn-sm flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Invoice
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-outline btn-sm flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Support
                    </motion.button>
                    {booking.status === 'confirmed' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-ghost btn-sm"
                      >
                        Modify
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Timeline */}
                {booking.status !== 'completed' && (
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span>Booking Confirmed</span>
                      </div>
                      <div className="w-8 h-0.5 bg-gray-300" />
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-5 h-5" />
                        <span>Ready to Travel</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 bg-white rounded-lg"
            >
              <p className="text-gray-600 text-lg mb-4">No bookings found</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/packages"
                className="btn btn-primary inline-block"
              >
                Browse Packages
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
