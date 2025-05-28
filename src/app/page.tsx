'use client'

import { useEffect, useState } from 'react'
import HeroSection from '@/components/HeroSection'
import FlowerBlast from '@/components/FlowerBlast'
import CursorTrail from '@/components/CursorTrail'
import AboutSection from '@/components/AboutSection'
import ProductsSection from '@/components/ProductsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showBlast, setShowBlast] = useState(false)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
      // Trigger flower blast after loading
      setTimeout(() => setShowBlast(true), 500)
    }, 2000)
  }, [])

  return (
    <main className="relative min-h-screen">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {showBlast && <FlowerBlast />}
          <CursorTrail />
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </main>
  )
}
