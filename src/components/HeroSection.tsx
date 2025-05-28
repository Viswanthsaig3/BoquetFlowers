'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 1
      })
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])
  
  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50/70 to-red-50/80"
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,92,152,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,0,0,0.1),transparent_60%)]"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.h2 
          className="text-secondary-700 font-semibold text-xl md:text-2xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Welcome to
        </motion.h2>
        
        <h1 
          ref={headingRef} 
          className="hero-title text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tighter"
        >
          Bloom Euphoria
        </h1>
        
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Experience the artistry of nature with our exquisite floral arrangements,
          designed to bring elegance and emotion to every moment.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <a 
            href="#collection" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-700 text-white 
                      font-medium rounded-full shadow-lg hover:shadow-xl transition-all 
                      hover:-translate-y-1 duration-300"
          >
            Explore Collection
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
