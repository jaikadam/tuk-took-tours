'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import DestinationCard from '@/components/destinations/DestinationCard'
import DestinationFilters from '@/components/destinations/DestinationFilters'
import { MapPin } from 'lucide-react'

const allDestinations = [
  {
    id: 1,
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    description: 'Tropical paradise with beautiful beaches, temples, and rice terraces.',
    image: 'https://images.unsplash.com/photo-1537225228614-b19960ecc986?w=500&h=400&fit=crop',
    price: 899,
    currency: 'USD',
    rating: 4.8,
    reviews: 2340,
    budget: 'mid',
    season: 'April-October',
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    description: 'The City of Light with world-class museums, restaurants, and iconic landmarks.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=400&fit=crop',
    price: 1299,
    currency: 'USD',
    rating: 4.9,
    reviews: 3120,
    budget: 'luxury',
    season: 'May-September',
  },
  {
    id: 3,
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    description: 'Modern metropolis blending tradition with cutting-edge technology.',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9f1?w=500&h=400&fit=crop',
    price: 1499,
    currency: 'USD',
    rating: 4.7,
    reviews: 2890,
    budget: 'luxury',
    season: 'March-May',
  },
  {
    id: 4,
    name: 'Dubai',
    country: 'UAE',
    continent: 'Asia',
    description: 'Ultra-modern desert city with luxury shopping and stunning architecture.',
    image: 'https://images.unsplash.com/photo-1512453333214-7d7f686c6f5a?w=500&h=400&fit=crop',
    price: 799,
    currency: 'USD',
    rating: 4.6,
    reviews: 2450,
    budget: 'mid',
    season: 'October-April',
  },
  {
    id: 5,
    name: 'Maldives',
    country: 'Maldives',
    continent: 'Asia',
    description: 'Luxury overwater bungalows and pristine coral reefs.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop',
    price: 1899,
    currency: 'USD',
    rating: 4.9,
    reviews: 3540,
    budget: 'luxury',
    season: 'November-April',
  },
  {
    id: 6,
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    description: 'Stunning sunsets and white-washed buildings on volcanic cliffs.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=400&fit=crop',
    price: 1199,
    currency: 'USD',
    rating: 4.8,
    reviews: 2780,
    budget: 'luxury',
    season: 'May-October',
  },
  {
    id: 7,
    name: 'New York',
    country: 'USA',
    continent: 'Americas',
    description: 'The city that never sleeps with iconic skyscrapers and world-class culture.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=400&fit=crop',
    price: 1099,
    currency: 'USD',
    rating: 4.7,
    reviews: 2650,
    budget: 'luxury',
    season: 'May-September',
  },
  {
    id: 8,
    name: 'Machu Picchu',
    country: 'Peru',
    continent: 'Americas',
    description: 'Ancient Incan citadel set high in the Andes Mountains.',
    image: 'https://images.unsplash.com/photo-1587595431973-160ead2d61bb?w=500&h=400&fit=crop',
    price: 1399,
    currency: 'USD',
    rating: 4.9,
    reviews: 3000,
    budget: 'mid',
    season: 'May-October',
  },
]

type Budget = 'all' | 'budget' | 'mid' | 'luxury'

export default function DestinationsPage() {
  const [selectedContinent, setSelectedContinent] = useState('all')
  const [selectedBudget, setSelectedBudget] = useState<Budget>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDestinations = useMemo(() => {
    return allDestinations.filter((dest) => {
      const matchesContinent =
        selectedContinent === 'all' || dest.continent === selectedContinent
      const matchesBudget = selectedBudget === 'all' || dest.budget === selectedBudget
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesContinent && matchesBudget && matchesSearch
    })
  }, [selectedContinent, selectedBudget, searchQuery])

  const continents = ['all', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania']
  const budgets: { value: Budget; label: string }[] = [
    { value: 'all', label: 'All Budgets' },
    { value: 'budget', label: 'Budget' },
    { value: 'mid', label: 'Mid-range' },
    { value: 'luxury', label: 'Luxury' },
  ]

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container-lg">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="heading-lg mb-3">Explore Destinations</h1>
          <p className="text-body-lg text-gray-600">
            Discover amazing places around the world curated for your perfect journey.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-primary-500 transition-colors"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <DestinationFilters
              continents={continents}
              budgets={budgets}
              selectedContinent={selectedContinent}
              selectedBudget={selectedBudget}
              onContinentChange={setSelectedContinent}
              onBudgetChange={setSelectedBudget}
            />
          </motion.div>

          {/* Destinations Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {filteredDestinations.length > 0 ? (
              <>
                <div className="mb-4 text-sm text-gray-600">
                  Showing {filteredDestinations.length} destinations
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDestinations.map((dest, index) => (
                    <DestinationCard
                      key={dest.id}
                      destination={dest}
                      index={index}
                    />
                  ))}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  No destinations found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedContinent('all')
                    setSelectedBudget('all')
                    setSearchQuery('')
                  }}
                  className="mt-4 btn btn-primary"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
