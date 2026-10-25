'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, DollarSign } from 'lucide-react'

interface CheckoutFormProps {
  bookingData: any
  onSubmit: (data: any) => void
}

export default function CheckoutForm({ bookingData: _, onSubmit }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startDate: '',
    travelers: 1,
    bookingType: 'deposit' as 'full' | 'deposit',
    specialRequests: '',
    addOns: [] as string[],
    acceptTerms: false,
  })

  const addOns = [
    { id: 'airport-transfer', label: 'Airport Transfer', price: 50 },
    { id: 'travel-insurance', label: 'Travel Insurance', price: 150 },
    { id: 'hotel-upgrade', label: 'Hotel Upgrade', price: 100 },
    { id: 'guide-service', label: 'Personal Guide', price: 200 },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      if (name === 'addOns[]') {
        setFormData((prev) => ({
          ...prev,
          addOns: checked
            ? [...prev.addOns, value]
            : prev.addOns.filter((item) => item !== value),
        }))
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-8 space-y-6"
    >
      <h2 className="heading-md mb-6">Traveler Information</h2>

      {/* Names */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
        />
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
        />
      </div>

      {/* Travel Details */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Start Date
        </label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Users className="w-4 h-4" />
          Number of Travelers
        </label>
        <select
          name="travelers"
          value={formData.travelers}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'person' : 'people'}
            </option>
          ))}
        </select>
      </div>

      {/* Add-ons */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Add-Ons (Optional)
        </label>
        <div className="space-y-2">
          {addOns.map((addon) => (
            <label key={addon.id} className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                name="addOns[]"
                value={addon.id}
                checked={formData.addOns.includes(addon.id)}
                onChange={handleChange}
                className="w-4 h-4 rounded"
              />
              <span className="flex-1 text-sm text-gray-700">{addon.label}</span>
              <span className="text-sm font-semibold text-primary-600">+${addon.price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Booking Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          Payment Type
        </label>
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: 'deposit', label: 'Deposit (50%)', info: 'Pay 50% now, rest on check-in' },
            { value: 'full', label: 'Full Payment', info: 'Pay full amount now' },
          ].map((option) => (
            <motion.label
              key={option.value}
              whileHover={{ scale: 1.02 }}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.bookingType === option.value
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="bookingType"
                value={option.value}
                checked={formData.bookingType === option.value}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="font-semibold">{option.label}</span>
              <p className="text-xs text-gray-600 mt-1">{option.info}</p>
            </motion.label>
          ))}
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Special Requests (Optional)
        </label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Any dietary restrictions, accessibility needs, etc."
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 resize-none"
        />
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          required
          className="w-4 h-4 mt-1 rounded"
        />
        <span className="text-sm text-blue-900">
          I agree to the <a href="/terms" className="font-semibold hover:underline">Terms & Conditions</a> and <a href="/privacy" className="font-semibold hover:underline">Privacy Policy</a>
        </span>
      </label>

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={!formData.acceptTerms}
        className="w-full btn btn-primary btn-lg disabled:opacity-50"
      >
        Continue to Payment
      </motion.button>
    </motion.form>
  )
}
