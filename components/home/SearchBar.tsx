'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Calendar, Users } from 'lucide-react'

export default function SearchBar() {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    travellers: '1',
    budget: 'all',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
    console.log('Search:', formData)
  }

  return (
    <section className="relative -mt-20 z-20 pb-12 container-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
      >
        <h2 className="heading-md mb-6 text-center">Find Your Perfect Adventure</h2>

        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Destination */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              Destination
            </label>
            <input
              type="text"
              name="destination"
              placeholder="Where to?"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            />
          </motion.div>

          {/* Start Date */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            />
          </motion.div>

          {/* Travellers */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-1" />
              Travellers
            </label>
            <select
              name="travellers"
              value={formData.travellers}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5+ People</option>
            </select>
          </motion.div>

          {/* Budget */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            >
              <option value="all">All Budgets</option>
              <option value="budget">Budget</option>
              <option value="mid">Mid-range</option>
              <option value="luxury">Luxury</option>
            </select>
          </motion.div>

          {/* Search Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary self-end"
          >
            <Search className="w-5 h-5" />
            <span className="hidden sm:inline">Search</span>
          </motion.button>
        </form>

        {/* Popular Searches */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {['Bali', 'Paris', 'Tokyo', 'Dubai', 'Maldives'].map((place) => (
              <button
                key={place}
                onClick={() => setFormData((prev) => ({ ...prev, destination: place }))}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-600 transition-colors"
              >
                {place}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
