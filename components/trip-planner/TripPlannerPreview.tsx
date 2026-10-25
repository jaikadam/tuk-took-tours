'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Heart, DollarSign } from 'lucide-react'

interface TripPlannerPreviewProps {
  formData: {
    destination: string
    duration: number
    startDate: string
    travelers: number
    interests: string[]
    hotelType: string
    budget: string
  }
}

export default function TripPlannerPreview({ formData }: TripPlannerPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 sticky top-24"
    >
      <h3 className="font-bold text-lg text-gray-900 mb-4">Trip Summary</h3>

      <div className="space-y-4">
        {/* Destination */}
        {formData.destination && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-3 pb-4 border-b border-gray-200"
          >
            <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs text-gray-600">Destination</p>
              <p className="font-semibold text-gray-900">{formData.destination}</p>
            </div>
          </motion.div>
        )}

        {/* Duration */}
        {formData.duration && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
            className="flex items-start gap-3 pb-4 border-b border-gray-200"
          >
            <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs text-gray-600">Duration</p>
              <p className="font-semibold text-gray-900">
                {formData.duration} days
                {formData.startDate && ` • Starting ${new Date(formData.startDate).toLocaleDateString()}`}
              </p>
            </div>
          </motion.div>
        )}

        {/* Travelers */}
        {formData.travelers && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-3 pb-4 border-b border-gray-200"
          >
            <Users className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs text-gray-600">Travelers</p>
              <p className="font-semibold text-gray-900">
                {formData.travelers} {formData.travelers === 1 ? 'person' : 'people'}
              </p>
            </div>
          </motion.div>
        )}

        {/* Budget */}
        {formData.budget && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-start gap-3 pb-4 border-b border-gray-200"
          >
            <DollarSign className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs text-gray-600">Budget</p>
              <p className="font-semibold text-gray-900 capitalize">
                {formData.budget} • {formData.hotelType} hotels
              </p>
            </div>
          </motion.div>
        )}

        {/* Interests */}
        {formData.interests.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <Heart className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p className="text-xs text-gray-600 mb-2">Interests</p>
              <div className="flex flex-wrap gap-2">
                {formData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="badge badge-primary text-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200"
      >
        <p className="text-xs text-primary-900 font-medium">
          💡 Our travel experts will customize a perfect itinerary based on your preferences!
        </p>
      </motion.div>
    </motion.div>
  )
}
