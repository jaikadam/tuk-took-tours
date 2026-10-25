'use client'

import { notFound } from 'next/navigation'

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  // Simple placeholder
  return (
    <main className="min-h-screen pt-24 pb-12 bg-white">
      <div className="container-lg text-center">
        <h1 className="heading-lg mb-4">Blog Article</h1>
        <p className="text-gray-600 mb-6">Slug: {params.slug}</p>
        <p className="text-gray-600">Blog detail page coming soon...</p>
      </div>
    </main>
  )
}
