'use client'

import { motion } from 'framer-motion'

export default function AnimatedLogoHero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center py-12 relative"
    >
      {/* Large Animated Logo */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.8 },
        }}
        className="relative w-32 h-32 md:w-48 md:h-48 mb-8 cursor-pointer drop-shadow-2xl"
      >
        <svg
          viewBox="0 0 200 240"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated Tuk Tuk */}
          <g id="tuk-tuk">
            {/* Main Body */}
            <motion.rect
              x="50"
              y="100"
              width="100"
              height="60"
              rx="15"
              fill="#5FBB7D"
              animate={{ fill: ['#5FBB7D', '#6B9D7D', '#5FBB7D'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Body Accent Line (Gold) */}
            <motion.rect
              x="50"
              y="95"
              width="100"
              height="6"
              rx="3"
              fill="#FFD700"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Window/Windshield */}
            <rect
              x="60"
              y="50"
              width="80"
              height="50"
              rx="12"
              fill="#87CEEB"
              stroke="#6B5B95"
              strokeWidth="4"
            />

            {/* Windshield Frame */}
            <motion.path
              d="M 60 50 Q 100 40 140 50"
              fill="none"
              stroke="#6B5B95"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Left Wheel - Rotating */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              transformOrigin="70 165"
            >
              <circle cx="70" cy="165" r="18" fill="#333333" />
              <circle cx="70" cy="165" r="14" fill="#555555" />
              <circle cx="70" cy="165" r="10" fill="#FFD700" />
              {/* Wheel spokes */}
              <line x1="70" y1="147" x2="70" y2="165" stroke="#444" strokeWidth="1.5" />
              <line x1="85" y1="158" x2="70" y2="165" stroke="#444" strokeWidth="1.5" />
              <line x1="85" y1="172" x2="70" y2="165" stroke="#444" strokeWidth="1.5" />
              <line x1="55" y1="172" x2="70" y2="165" stroke="#444" strokeWidth="1.5" />
            </motion.g>

            {/* Right Wheel - Rotating */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              transformOrigin="130 165"
            >
              <circle cx="130" cy="165" r="18" fill="#333333" />
              <circle cx="130" cy="165" r="14" fill="#555555" />
              <circle cx="130" cy="165" r="10" fill="#FFD700" />
              {/* Wheel spokes */}
              <line x1="130" y1="147" x2="130" y2="165" stroke="#444" strokeWidth="1.5" />
              <line x1="145" y1="158" x2="130" y2="165" stroke="#444" strokeWidth="1.5" />
              <line x1="145" y1="172" x2="130" y2="165" stroke="#444" strokeWidth="1.5" />
              <line x1="115" y1="172" x2="130" y2="165" stroke="#444" strokeWidth="1.5" />
            </motion.g>

            {/* Left Mirror */}
            <motion.circle
              cx="40"
              cy="80"
              r="6"
              fill="#6B5B95"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <line x1="40" y1="80" x2="30" y2="75" stroke="#6B5B95" strokeWidth="2" />

            {/* Right Mirror */}
            <motion.circle
              cx="160"
              cy="80"
              r="6"
              fill="#6B5B95"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <line x1="160" y1="80" x2="170" y2="75" stroke="#6B5B95" strokeWidth="2" />

            {/* Front Bumper */}
            <rect x="55" y="158" width="90" height="4" rx="2" fill="#6B5B95" />

            {/* Animated Headlights with glow */}
            <motion.circle
              cx="65"
              cy="110"
              r="4"
              fill="#FFE135"
              animate={{
                r: [4, 6, 4],
                opacity: [0.7, 1, 0.7],
                filter: ['drop-shadow(0 0 2px #FFE135)', 'drop-shadow(0 0 8px #FFE135)', 'drop-shadow(0 0 2px #FFE135)'],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.circle
              cx="135"
              cy="110"
              r="4"
              fill="#FFE135"
              animate={{
                r: [4, 6, 4],
                opacity: [0.7, 1, 0.7],
                filter: ['drop-shadow(0 0 2px #FFE135)', 'drop-shadow(0 0 8px #FFE135)', 'drop-shadow(0 0 2px #FFE135)'],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </g>

          {/* Brand Name */}
          <text x="100" y="200" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#6B5B95">
            TUK TOOK
          </text>
        </svg>

        {/* Rotating glow halo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary-400 to-secondary-400 opacity-30 blur"
          style={{
            backgroundClip: 'padding-box',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #5FBB7D, #6B5B95)',
          }}
        />

        {/* Pulse glow effect */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-primary-400"
        />
      </motion.div>

      {/* Tagline with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <h3 className="text-2xl md:text-4xl font-black mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-white to-primary-200">
            Tuk it easy, make it crazy
          </span>
        </h3>
        <p className="text-lg text-white/95 max-w-md mx-auto font-light leading-relaxed">
          Experience the world in luxury. Let your adventure begin!
        </p>
      </motion.div>

      {/* Animated action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <motion.a
          href="/destinations"
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(95, 187, 125, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
        >
          ✨ Explore Destinations
        </motion.a>
        <motion.a
          href="/trip-planner"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full font-bold hover:bg-primary-50 transition-all"
        >
          🗺️ Plan Your Trip
        </motion.a>
      </motion.div>

      {/* Floating elements for visual interest */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-1/4 text-4xl opacity-20"
      >
        🌴
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 text-4xl opacity-20"
      >
        ✈️
      </motion.div>
    </motion.div>
  )
}
