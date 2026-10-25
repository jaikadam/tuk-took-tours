'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink {
  label: string
  href: string
  submenu?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Destinations',
    href: '/destinations',
    submenu: [
      { label: 'Asia', href: '/destinations?continent=asia' },
      { label: 'Europe', href: '/destinations?continent=europe' },
      { label: 'Americas', href: '/destinations?continent=americas' },
      { label: 'Africa', href: '/destinations?continent=africa' },
      { label: 'Oceania', href: '/destinations?continent=oceania' },
    ],
  },
  { label: 'Trip Planner', href: '/trip-planner' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <nav className="container-lg">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 group relative"
          >
            <Link href="/" className="flex items-center gap-3 relative">
              {/* Animated Tuk Tuk Logo */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -3, 3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.15, rotate: 360, transition: { duration: 0.6 } }}
                className="relative w-14 h-14 flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 200 240"
                  className="w-full h-full drop-shadow-lg"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Tuk Tuk Body */}
                  <g id="tuk-tuk">
                    {/* Main Body (Green from brand) */}
                    <rect x="50" y="100" width="100" height="60" rx="15" fill="#5FBB7D" />

                    {/* Body Accent Line (Gold) */}
                    <rect x="50" y="95" width="100" height="6" rx="3" fill="#FFD700" />

                    {/* Window/Windshield (Light Blue) */}
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

                    {/* Windshield Frame (Purple from brand) */}
                    <path
                      d="M 60 50 Q 100 40 140 50"
                      fill="none"
                      stroke="#6B5B95"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Left Wheel */}
                    <circle cx="70" cy="165" r="18" fill="#333333" />
                    <circle cx="70" cy="165" r="14" fill="#555555" />
                    <circle cx="70" cy="165" r="10" fill="#FFD700" />

                    {/* Right Wheel */}
                    <circle cx="130" cy="165" r="18" fill="#333333" />
                    <circle cx="130" cy="165" r="14" fill="#555555" />
                    <circle cx="130" cy="165" r="10" fill="#FFD700" />

                    {/* Left Mirror */}
                    <circle cx="40" cy="80" r="6" fill="#6B5B95" />
                    <line x1="40" y1="80" x2="30" y2="75" stroke="#6B5B95" strokeWidth="2" />

                    {/* Right Mirror */}
                    <circle cx="160" cy="80" r="6" fill="#6B5B95" />
                    <line x1="160" y1="80" x2="170" y2="75" stroke="#6B5B95" strokeWidth="2" />

                    {/* Front Bumper */}
                    <rect x="55" y="158" width="90" height="4" rx="2" fill="#6B5B95" />

                    {/* Animated Headlights */}
                    <motion.circle
                      cx="65"
                      cy="110"
                      r="4"
                      fill="#FFE135"
                      opacity="0.9"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="135"
                      cy="110"
                      r="4"
                      fill="#FFE135"
                      opacity="0.9"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </g>
                </svg>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>

              {/* Brand Text */}
              <div className="hidden sm:block">
                <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Tuk Took Tours
                </h1>
                <p className="text-xs text-primary-600 font-semibold italic leading-tight">
                  Tuk it easy, make it crazy
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <button
                  className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                    scrolled
                      ? 'text-gray-700 hover:text-amber-400 hover:bg-gray-100'
                      : 'text-white hover:text-amber-300'
                  }`}
                >
                  <Link href={link.href} className="flex items-center gap-1">
                    {link.label}
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </button>

                {/* Submenu */}
                {link.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"
                  >
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden sm:block"
          >
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden pb-4 space-y-2 overflow-hidden"
            >
              {navLinks.map((link) => (
                <div key={link.href}>
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === link.href ? null : link.href)}
                    className="w-full text-left px-4 py-2 text-white font-medium hover:bg-primary-50/20 hover:text-amber-300 rounded-lg transition-all duration-300 flex items-center justify-between"
                  >
                    <Link href={link.href} className="flex-1">
                      {link.label}
                    </Link>
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {link.submenu && openSubmenu === link.href && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-1 overflow-hidden"
                      >
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-white font-medium hover:bg-primary-50/20 hover:text-amber-300 rounded-lg transition-all duration-300 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                href="/contact"
                className="block px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
