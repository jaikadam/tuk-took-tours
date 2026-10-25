'use client'

import { motion } from 'framer-motion'

interface DestinationFiltersProps {
  continents: string[]
  budgets: { value: 'all' | 'budget' | 'mid' | 'luxury'; label: string }[]
  selectedContinent: string
  selectedBudget: 'all' | 'budget' | 'mid' | 'luxury'
  onContinentChange: (continent: string) => void
  onBudgetChange: (budget: 'all' | 'budget' | 'mid' | 'luxury') => void
}

export default function DestinationFilters({
  continents,
  budgets,
  selectedContinent,
  selectedBudget,
  onContinentChange,
  onBudgetChange,
}: DestinationFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Continent Filter */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-lg mb-4">Continents</h3>
        <div className="space-y-2">
          {continents.map((continent) => (
            <motion.button
              key={continent}
              whileHover={{ x: 4 }}
              onClick={() => onContinentChange(continent)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                selectedContinent === continent
                  ? 'bg-primary-600 text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {continent.charAt(0).toUpperCase() + continent.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Budget Filter */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-lg mb-4">Budget</h3>
        <div className="space-y-2">
          {budgets.map((budget) => (
            <motion.button
              key={budget.value}
              whileHover={{ x: 4 }}
              onClick={() => onBudgetChange(budget.value)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                selectedBudget === budget.value
                  ? 'bg-primary-600 text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {budget.label}
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
          💡 Tip: Use filters to narrow down destinations that match your travel
          style and budget.
        </p>
      </motion.div>
    </div>
  )
}
