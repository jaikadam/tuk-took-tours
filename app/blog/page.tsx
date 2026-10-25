'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import BlogCard from '@/components/blog/BlogCard'
import BlogFilters from '@/components/blog/BlogFilters'
import { Search } from 'lucide-react'

const allBlogPosts = [
  {
    id: 1,
    title: '10 Hidden Gems in Southeast Asia You Must Visit',
    slug: 'hidden-gems-southeast-asia',
    excerpt: 'Discover the best-kept secrets of Southeast Asia, from pristine beaches to ancient temples.',
    content: 'Full blog content here...',
    category: 'destination-guides',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
    publishedAt: '2024-10-10',
    tags: ['asia', 'beach', 'adventure'],
    readingTime: 5,
    featured: true,
  },
  {
    id: 2,
    title: 'Budget Travel Tips: Exploring Europe on $50/Day',
    slug: 'budget-travel-europe',
    excerpt: 'Learn how to travel through Europe without breaking the bank.',
    content: 'Full blog content here...',
    category: 'budget-travel',
    author: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
    publishedAt: '2024-10-08',
    tags: ['europe', 'budget', 'travel-tips'],
    readingTime: 8,
    featured: false,
  },
  {
    id: 3,
    title: 'The Ultimate Visa Guide for Indian Travelers',
    slug: 'visa-guide-indian-travelers',
    excerpt: 'Everything you need to know about visa requirements for top travel destinations.',
    content: 'Full blog content here...',
    category: 'visa-documents',
    author: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1537225228614-b19960ecc986?w=600&h=400&fit=crop',
    publishedAt: '2024-10-05',
    tags: ['visa', 'documents', 'india'],
    readingTime: 6,
    featured: false,
  },
  {
    id: 4,
    title: 'Street Food Adventures in Bangkok',
    slug: 'street-food-bangkok',
    excerpt: 'A culinary journey through Bangkok\'s most delicious street food scenes.',
    content: 'Full blog content here...',
    category: 'food-culture',
    author: 'Michael Johnson',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9f1?w=600&h=400&fit=crop',
    publishedAt: '2024-10-03',
    tags: ['food', 'culture', 'thailand'],
    readingTime: 4,
    featured: false,
  },
  {
    id: 5,
    title: 'A Week in Bali: The Perfect Itinerary',
    slug: 'bali-week-itinerary',
    excerpt: 'Plan your perfect Bali vacation with this comprehensive 7-day itinerary.',
    content: 'Full blog content here...',
    category: 'itineraries',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop',
    publishedAt: '2024-10-01',
    tags: ['bali', 'itinerary', 'asia'],
    readingTime: 7,
    featured: true,
  },
  {
    id: 6,
    title: 'Solo Travel Safety: Essential Tips for Female Travelers',
    slug: 'solo-travel-safety-women',
    excerpt: 'Important safety tips and empowering advice for women traveling alone.',
    content: 'Full blog content here...',
    category: 'travel-tips',
    author: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    publishedAt: '2024-09-28',
    tags: ['solo-travel', 'safety', 'women'],
    readingTime: 6,
    featured: false,
  },
]

const categories = [
  { value: 'all', label: 'All Stories' },
  { value: 'destination-guides', label: 'Destination Guides' },
  { value: 'travel-tips', label: 'Travel Tips' },
  { value: 'budget-travel', label: 'Budget Travel' },
  { value: 'food-culture', label: 'Food & Culture' },
  { value: 'visa-documents', label: 'Visa & Documents' },
  { value: 'itineraries', label: 'Itineraries' },
  { value: 'travel-stories', label: 'Travel Stories' },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'popular'>('latest')

  const filteredPosts = useMemo(() => {
    let filtered = allBlogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })

    // Sort
    switch (sortBy) {
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
        break
      case 'popular':
        // Assume featured posts are more popular
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case 'latest':
      default:
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    }

    return filtered
  }, [selectedCategory, searchQuery, sortBy])

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="heading-lg mb-3">Travel Stories & Tips</h1>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Inspiration, guides, and tips from seasoned travelers and local experts.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 relative"
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-primary-500 transition-colors"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <BlogFilters
              categories={categories}
              selectedCategory={selectedCategory}
              sortBy={sortBy}
              onCategoryChange={setSelectedCategory}
              onSortChange={setSortBy}
            />
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="mb-4 text-sm text-gray-600">
              Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12 bg-white rounded-lg"
              >
                <p className="text-gray-600 text-lg mb-4">No articles found matching your search.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchQuery('')
                  }}
                  className="btn btn-primary"
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
