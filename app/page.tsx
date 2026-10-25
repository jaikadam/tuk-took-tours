'use client'

import HeroSection from '@/components/home/HeroSection'
import SearchBar from '@/components/home/SearchBar'
import TrendingDestinations from '@/components/home/TrendingDestinations'
import FeaturedPackages from '@/components/home/FeaturedPackages'
import HowItWorks from '@/components/home/HowItWorks'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Collections from '@/components/home/Collections'
import Testimonials from '@/components/home/Testimonials'
import Gallery from '@/components/home/Gallery'
import LatestBlogPosts from '@/components/home/LatestBlogPosts'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <TrendingDestinations />
      <FeaturedPackages />
      <HowItWorks />
      <WhyChooseUs />
      <Collections />
      <Testimonials />
      <Gallery />
      <LatestBlogPosts />
      <Newsletter />
    </>
  )
}
