'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import TripPlannerForm from '@/components/trip-planner/TripPlannerForm'
import TripPlannerPreview from '@/components/trip-planner/TripPlannerPreview'

type FormStep = 'destination' | 'dates' | 'travelers' | 'interests' | 'review'

interface FormData {
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

const initialFormData: FormData = {
  destination: '',
  duration: 5,
  startDate: '',
  travelers: 1,
  interests: [],
  hotelType: 'mid-range',
  budget: 'mid',
  specialRequests: '',
  name: '',
  email: '',
  phone: '',
}

export default function TripPlannerPage() {
  const [currentStep, setCurrentStep] = useState<FormStep>('destination')
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps: FormStep[] = ['destination', 'dates', 'travelers', 'interests', 'review']
  const stepTitles = {
    destination: 'Where do you want to go?',
    dates: 'When do you want to travel?',
    travelers: 'How many travelers?',
    interests: 'What interests you?',
    review: 'Review & Submit',
  }

  const stepDescriptions = {
    destination: 'Choose your dream destination',
    dates: 'Plan your travel dates',
    travelers: 'Tell us about your group',
    interests: 'Select your travel interests',
    review: 'Confirm your details',
  }

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const handlePrevious = () => {
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    // Handle form submission
    console.log('Trip planner submission:', formData)
  }

  const currentIndex = steps.indexOf(currentStep)
  const progress = ((currentIndex + 1) / steps.length) * 100

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl mb-6 inline-block"
            >
              ✓
            </motion.div>

            <h1 className="heading-lg mb-4">Thank You!</h1>
            <p className="text-body-lg text-gray-600 mb-6">
              Your custom trip request has been received. Our travel experts will
              contact you within 24 hours with personalized package recommendations.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="font-bold text-lg mb-4 text-left">Your Trip Details:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-gray-700">
                <div>
                  <p className="text-sm text-gray-600">Destination</p>
                  <p className="font-semibold">{formData.destination}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{formData.duration} days</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Travelers</p>
                  <p className="font-semibold">{formData.travelers} people</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Budget</p>
                  <p className="font-semibold capitalize">{formData.budget}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                We'll send a detailed itinerary to <span className="font-semibold">{formData.email}</span>
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setCurrentStep('destination')
                  setFormData(initialFormData)
                }}
                className="btn btn-primary inline-block"
              >
                Create Another Trip
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="container-lg max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="heading-lg mb-3">Customize Your Perfect Trip</h1>
          <p className="text-body-lg text-gray-600">
            Tell us about your dream vacation and we'll create a personalized itinerary just for you.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-700">
              Step {currentIndex + 1} of {steps.length}
            </span>
            <span className="text-sm font-semibold text-primary-600">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-600 to-accent-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Step Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between mb-12"
        >
          {steps.map((step, index) => (
            <motion.button
              key={step}
              onClick={() => index <= currentIndex && setCurrentStep(step)}
              disabled={index > currentIndex}
              whileHover={index <= currentIndex ? { scale: 1.05 } : {}}
              className={`flex flex-col items-center gap-2 ${
                index <= currentIndex ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
              }`}
            >
              <motion.div
                animate={step === currentStep ? { scale: 1.2 } : { scale: 1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  step === currentStep
                    ? 'bg-primary-600 text-white'
                    : index < currentIndex
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                }`}
              >
                {index < currentIndex ? '✓' : index + 1}
              </motion.div>
              <span className="text-xs text-center max-w-16 text-gray-700">
                {stepDescriptions[step]}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Form Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="heading-md mb-6">{stepTitles[currentStep]}</h2>

          <TripPlannerForm
            step={currentStep}
            formData={formData}
            setFormData={setFormData}
          />
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              currentIndex === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'btn btn-outline'
            }`}
          >
            ← Previous
          </button>

          {currentStep !== 'review' ? (
            <button onClick={handleNext} className="btn btn-primary">
              Next →
            </button>
          ) : (
            <button onClick={handleSubmit} className="btn btn-primary btn-lg">
              Submit Request
            </button>
          )}
        </motion.div>

        {/* Preview Sidebar on Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block fixed right-8 top-32 w-80"
        >
          <TripPlannerPreview formData={formData} />
        </motion.div>
      </div>
    </main>
  )
}
