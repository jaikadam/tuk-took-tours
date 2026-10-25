'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '10 Hidden Gems in Southeast Asia You Must Visit',
    excerpt:
      'Discover the best-kept secrets of Southeast Asia, from pristine beaches to ancient temples.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop',
    category: 'Destination Guides',
    readTime: 5,
    author: 'Sarah Chen',
    date: '2024-10-10',
    featured: true,
  },
  {
    id: 2,
    title: 'Budget Travel Tips: Exploring Europe on $50/Day',
    excerpt:
      'Learn how to travel through Europe without breaking the bank. Pro tips from experienced budget travelers.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop',
    category: 'Budget Travel',
    readTime: 8,
    author: 'James Wilson',
    date: '2024-10-08',
  },
  {
    id: 3,
    title: 'The Ultimate Visa Guide for Indian Travelers',
    excerpt:
      'Everything you need to know about visa requirements for top travel destinations.',
    image: 'https://images.unsplash.com/photo-1537225228614-b19960ecc986?w=400&h=250&fit=crop',
    category: 'Visa & Documents',
    readTime: 6,
    author: 'Priya Sharma',
    date: '2024-10-05',
  },
]

export default function LatestBlogPosts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section bg-white">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="heading-lg mb-3">Travel Stories & Tips</h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Inspiration, guides, and tips from seasoned travelers and local experts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                post.featured && index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-200 h-48 sm:h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="badge badge-primary flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="badge badge-accent">Featured</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link href="/blog" className="btn btn-outline btn-lg">
            Read More Stories
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
