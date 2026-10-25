'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, BookOpen, Users, TrendingUp, AlertCircle, LogOut } from 'lucide-react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'blog' | 'users'>('overview')

  const stats = [
    { label: 'Total Bookings', value: '234', change: '+12%', icon: BookOpen },
    { label: 'Revenue', value: '$89,420', change: '+8.2%', icon: TrendingUp },
    { label: 'Active Users', value: '1,204', change: '+5.4%', icon: Users },
    { label: 'Blog Posts', value: '42', change: '+2', icon: BarChart3 },
  ]

  const recentBookings = [
    { id: 'BK-001', guest: 'Sarah Johnson', package: 'Bali Paradise', status: 'confirmed', date: '2024-10-12' },
    { id: 'BK-002', guest: 'Mike Chen', package: 'Tokyo Adventure', status: 'pending', date: '2024-10-11' },
    { id: 'BK-003', guest: 'Emma Wilson', package: 'Paris Romance', status: 'confirmed', date: '2024-10-10' },
  ]

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-100">
      <div className="container-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="heading-lg mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn btn-outline flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                  <span className="text-xs font-semibold text-green-600">{stat.change}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="heading-md text-gray-900">{stat.value}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg"
        >
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'bookings', label: 'Bookings' },
              { id: 'blog', label: 'Blog Posts' },
              { id: 'users', label: 'Users' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-4 font-semibold transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="heading-md mb-4">Recent Bookings</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">ID</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Guest</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Package</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentBookings.map((booking) => (
                          <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-gray-900">{booking.id}</td>
                            <td className="px-4 py-3 text-gray-700">{booking.guest}</td>
                            <td className="px-4 py-3 text-gray-700">{booking.package}</td>
                            <td className="px-4 py-3">
                              <span className={`badge ${booking.status === 'confirmed' ? 'badge-primary' : 'badge-warning'} capitalize`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{booking.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Pending Actions</h4>
                      <p className="text-sm text-blue-800">You have 3 pending bookings that need confirmation.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'bookings' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="heading-md">All Bookings</h3>
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">ID</th>
                        <th className="px-4 py-3 text-left font-semibold">Guest</th>
                        <th className="px-4 py-3 text-left font-semibold">Amount</th>
                        <th className="px-4 py-3 text-left font-semibold">Status</th>
                        <th className="px-4 py-3 text-left font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-200">
                          <td className="px-4 py-3 font-semibold">{booking.id}</td>
                          <td className="px-4 py-3">{booking.guest}</td>
                          <td className="px-4 py-3">$1,299</td>
                          <td className="px-4 py-3">
                            <span className={`badge ${booking.status === 'confirmed' ? 'badge-primary' : 'badge-warning'}`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <button className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'blog' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="heading-md">Blog Posts</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn btn-primary btn-sm"
                  >
                    + New Post
                  </motion.button>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Hidden Gems in Southeast Asia', status: 'published', date: '2024-10-10' },
                    { title: 'Budget Travel Tips', status: 'draft', date: '2024-10-08' },
                    { title: 'Visa Guide for Indians', status: 'published', date: '2024-10-05' },
                  ].map((post, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div>
                        <p className="font-semibold text-gray-900">{post.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{post.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`badge ${post.status === 'published' ? 'badge-primary' : 'badge-warning'}`}>
                          {post.status}
                        </span>
                        <button className="text-primary-600 text-sm font-semibold">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'users' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h3 className="heading-md">Registered Users</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Email</th>
                        <th className="px-4 py-3 text-left font-semibold">Bookings</th>
                        <th className="px-4 py-3 text-left font-semibold">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Sarah Johnson', email: 'sarah@example.com', bookings: 3, joined: '2024-01-15' },
                        { name: 'Mike Chen', email: 'mike@example.com', bookings: 1, joined: '2024-02-20' },
                        { name: 'Emma Wilson', email: 'emma@example.com', bookings: 5, joined: '2023-12-10' },
                      ].map((user, i) => (
                        <tr key={i} className="border-b border-gray-200">
                          <td className="px-4 py-3 font-semibold text-gray-900">{user.name}</td>
                          <td className="px-4 py-3 text-gray-600">{user.email}</td>
                          <td className="px-4 py-3">{user.bookings}</td>
                          <td className="px-4 py-3 text-gray-600">{user.joined}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
