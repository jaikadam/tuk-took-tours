'use client'

import { motion } from 'framer-motion'

interface BlogFiltersProps {
  categories: { value: string; label: string }[]
  selectedCategory: string
  sortBy: 'latest' | 'oldest' | 'popular'
  onCategoryChange: (category: string) => void
  onSortChange: (sort: 'latest' | 'oldest' | 'popular') => void
}

export default function BlogFilters({
  categories,
  selectedCategory,
  sortBy,
  onCategoryChange,
  onSortChange,
}: BlogFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-lg mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ x: 4 }}
              onClick={() => onCategoryChange(category.value)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category.value
                  ? 'bg-primary-600 text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Sort Filter */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-lg mb-4">Sort By</h3>
        <div className="space-y-2">
          {[
            { value: 'latest', label: 'Latest' },
            { value: 'oldest', label: 'Oldest' },
            { value: 'popular', label: 'Most Popular' },
          ].map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ x: 4 }}
              onClick={() => onSortChange(option.value as 'latest' | 'oldest' | 'popular')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                sortBy === option.value
                  ? 'bg-primary-600 text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary-50 rounded-lg p-4 border border-primary-200"
      >
        <p className="text-sm text-primary-900">
          💡 Tip: Check back regularly for new travel stories and insider tips from our community!
        </p>
      </motion.div>
    </div>
  )
}
