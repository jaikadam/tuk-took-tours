'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Globe, Users, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-lg mb-4">About Tuk Took Tours</h1>
            <p className="text-lg text-white/90">
              Redefining travel through authentic experiences, expert curation, and 
              unforgettable journeys across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-gray-50">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-4">Our Story</h2>
              <p className="text-body-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 2020, Tuk Took Tours emerged from a simple belief: travel should 
                be accessible, authentic, and transformative for everyone.
              </p>
              <p className="text-body-lg text-gray-600 mb-4 leading-relaxed">
                What started as a passion project quickly grew into a trusted platform serving 
                10,000+ travelers worldwide. Today, we work with local guides in 50+ countries 
                to craft unforgettable experiences.
              </p>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                Our mission: To make premium travel experiences affordable and accessible to 
                adventurers, families, and explorers everywhere.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop"
                alt="Team adventure"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-3">Our Values</h2>
            <p className="text-body-lg text-gray-600">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Authentic', desc: 'Real experiences with local communities' },
              { icon: Globe, title: 'Sustainable', desc: 'Responsible travel that benefits locals' },
              { icon: Award, title: 'Quality', desc: 'Curated experiences at every level' },
              { icon: Users, title: 'Inclusive', desc: 'Travel for everyone, everywhere' },
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-3">Meet Our Team</h2>
            <p className="text-body-lg text-gray-600">
              Passionate travelers and travel experts dedicated to your adventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Founder & CEO', emoji: '👩‍💼' },
              { name: 'Michael Johnson', role: 'Head of Experiences', emoji: '👨‍💼' },
              { name: 'Priya Sharma', role: 'Community Manager', emoji: '👩‍🔬' },
              { name: 'James Wilson', role: 'Travel Consultant', emoji: '👨‍🏫' },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{member.emoji}</div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4">Ready for Your Adventure?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who've discovered the world with Tuk Took Tours.
            </p>
            <button className="btn bg-white text-primary-600 hover:bg-gray-100">
              Start Exploring
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
