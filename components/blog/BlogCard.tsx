'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Share2 } from 'lucide-react'

interface BlogCardProps {
  post: {
    id: number
    title: string
    slug: string
    excerpt: string
    image: string
    category: string
    author: string
    publishedAt: string
    tags: string[]
    readingTime: number
    featured: boolean
  }
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
        post.featured ? 'md:flex' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-gray-200 ${post.featured ? 'md:w-1/3' : 'h-48'}`}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-3 left-3">
            <span className="badge badge-accent">Featured</span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="badge badge-primary capitalize text-xs">
            {post.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col ${post.featured ? 'md:w-2/3' : ''}`}>
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readingTime} min read
          </div>
          <span>•</span>
          <span>{post.author}</span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="heading-sm mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
          >
            Read Article
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Share2 className="w-4 h-4 text-gray-600" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
