'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-white">
      <div className="container-lg max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="heading-lg mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: October 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none space-y-8"
        >
          <section>
            <h2 className="heading-md mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Tuk Took Tours ("we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="heading-md mb-4">2. Information Collection and Use</h2>
            <p className="text-gray-700 mb-4">We collect several different types of information for various purposes to provide and improve our service to you:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Personal Data: Name, email address, phone number, address, etc.</li>
              <li>Usage Data: Pages visited, time spent on pages, and other diagnostic data</li>
              <li>Payment Information: Processed securely through third-party providers</li>
              <li>Cookies: Small data files used to enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-md mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">Tuk Took Tours uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information for service improvement</li>
              <li>To monitor the usage of our service</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-md mb-4">4. Security of Data</h2>
            <p className="text-gray-700 mb-4">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="heading-md mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="heading-md mb-4">6. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@tuktoktours.com
            </p>
          </section>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-green-900">
              We are committed to protecting your privacy and ensuring you have a positive experience on our website.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
