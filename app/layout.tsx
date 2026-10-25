import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButton from '@/components/FloatingActionButton'

export const metadata: Metadata = {
  title: 'Tuk Took Tours - Your World. Your Journey.',
  description:
    'Explore stunning destinations and book your perfect adventure with Tuk Took Tours. Premium travel packages to 50+ countries.',
  keywords: [
    'travel tours',
    'vacation packages',
    'adventure travel',
    'travel booking',
    'international tours',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tuktoktours.com',
    siteName: 'Tuk Took Tours',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Tuk Took Tours',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <FloatingActionButton />
      </body>
    </html>
  )
}
