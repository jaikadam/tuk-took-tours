'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-white">
      <div className="container-lg max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="heading-lg mb-4">Terms & Conditions</h1>
          <p className="text-gray-600">Last updated: October 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none space-y-8"
        >
          <section>
            <h2 className="heading-md mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Tuk Took Tours website and services, you accept and agree to be bound by and comply with these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="heading-md mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Tuk Took Tours for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-md mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The materials on Tuk Took Tours are provided on an 'as is' basis. Tuk Took Tours makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="heading-md mb-4">4. Limitations</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Tuk Took Tours or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tuk Took Tours.
            </p>
          </section>

          <section>
            <h2 className="heading-md mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-700 mb-4">
              The materials appearing on Tuk Took Tours could include technical, typographical, or photographic errors. Tuk Took Tours does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="heading-md mb-4">6. Links</h2>
            <p className="text-gray-700 mb-4">
              Tuk Took Tours has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tuk Took Tours of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="heading-md mb-4">7. Modifications</h2>
            <p className="text-gray-700 mb-4">
              Tuk Took Tours may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="heading-md mb-4">8. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Tuk Took Tours operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-blue-900">
              For questions about these Terms & Conditions, please contact us at legal@tuktoktours.com
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
