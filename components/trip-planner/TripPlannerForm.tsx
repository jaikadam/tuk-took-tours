'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Heart, DollarSign, MessageSquare, User, Mail, Phone } from 'lucide-react'

interface TripPlannerFormProps {
  step: 'destination' | 'dates' | 'travelers' | 'interests' | 'review'
  formData: {
    destination: string
    duration: number
    startDate: string
    travelers: number
    interests: string[]
    hotelType: string
    budget: string
    specialRequests: string
    name: string
    email: string
    phone: string
  }
  setFormData: (data: any) => void
}

const destinations = ['Bali', 'Paris', 'Tokyo', 'Dubai', 'Maldives', 'Santorini', 'New York', 'Machu Picchu']
const interests = ['Beach', 'Mountain', 'Culture', 'Adventure', 'Food', 'History', 'Shopping', 'Nightlife']
const hotelTypes = ['Budget', 'Mid-range', 'Luxury', 'Resort', 'Boutique']

export default function TripPlannerForm({
  step,
  formData,
  setFormData,
}: TripPlannerFormProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Step 1: Destination */}
      {step === 'destination' && (
        <>
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-600" />
              Select Destination
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {destinations.map((dest) => (
                <motion.button
                  key={dest}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFormData({ ...formData, destination: dest })}
                  className={`p-3 rounded-lg font-semibold transition-all ${
                    formData.destination === dest
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dest}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary-600" />
              Trip Duration
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="30"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                className="flex-1"
              />
              <span className="text-lg font-bold text-primary-600 min-w-fit">
                {formData.duration} days
              </span>
            </div>
          </motion.div>
        </>
      )}

      {/* Step 2: Dates */}
      {step === 'dates' && (
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary-600" />
            Start Date
          </label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
          />
          <p className="text-sm text-gray-600 mt-2">
            End date: {formData.startDate
              ? new Date(new Date(formData.startDate).getTime() + formData.duration * 24 * 60 * 60 * 1000).toDateString()
              : 'Select start date'}
          </p>
        </motion.div>
      )}

      {/* Step 3: Travelers */}
      {step === 'travelers' && (
        <>
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-600" />
              Number of Travelers
            </label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                max="20"
                value={formData.travelers}
                onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) })}
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
              />
              <span className="text-lg font-bold text-primary-600 min-w-fit">
                {formData.travelers} {formData.travelers === 1 ? 'person' : 'people'}
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary-600" />
              Budget Per Person
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['budget', 'mid', 'luxury'].map((budget) => (
                <motion.button
                  key={budget}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFormData({ ...formData, budget })}
                  className={`p-3 rounded-lg font-semibold capitalize transition-all ${
                    formData.budget === budget
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {budget === 'mid' ? 'Mid-range' : budget}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Hotel Type</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {hotelTypes.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setFormData({ ...formData, hotelType: type })}
                  className={`p-3 rounded-lg text-sm font-semibold transition-all ${
                    formData.hotelType === type
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </>
      )}

      {/* Step 4: Interests */}
      {step === 'interests' && (
        <>
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary-600" />
              What interests you? (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interests.map((interest) => (
                <motion.button
                  key={interest}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const isSelected = formData.interests.includes(interest)
                    setFormData({
                      ...formData,
                      interests: isSelected
                        ? formData.interests.filter((i) => i !== interest)
                        : [...formData.interests, interest],
                    })
                  }}
                  className={`p-3 rounded-lg font-semibold transition-all ${
                    formData.interests.includes(interest)
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {interest}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary-600" />
              Special Requests (Optional)
            </label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              placeholder="Tell us about any special needs or preferences..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 resize-none"
              rows={4}
            />
          </motion.div>
        </>
      )}

      {/* Step 5: Review */}
      {step === 'review' && (
        <>
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <User className="w-4 h-4 text-primary-600" />
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-600" />
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-600" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-50 border border-blue-200 rounded-lg p-4"
          >
            <p className="text-sm text-blue-900">
              ✓ By submitting this form, you agree to receive personalized travel recommendations and updates from Tuk Took Tours.
            </p>
          </motion.div>
        </>
      )}
    </motion.div>
  )
}
