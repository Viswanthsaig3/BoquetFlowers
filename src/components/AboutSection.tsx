'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { imageConfig } from '@/lib/imageConfig' // Import imageConfig

const AboutSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })
  
  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/30 z-10 rounded-2xl"></div>
              <Image
                src={imageConfig.about.workshop.src} // Use imageConfig
                alt={imageConfig.about.workshop.alt} // Use imageConfig
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full opacity-20"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
              Our Floral Journey
            </h2>
            
            <p className="text-gray-700 mb-6">
              At Bloom Euphoria, we believe that flowers are nature's poetry, speaking a language 
              that transcends words. Our journey began with a simple passion for creating arrangements 
              that evoke emotions and transform spaces.
            </p>
            
            <p className="text-gray-700 mb-8">
              Each bouquet is thoughtfully designed to capture the essence of the moment, 
              whether it's celebrating love, expressing sympathy, or simply bringing joy to everyday life. 
              We source our flowers from sustainable growers, ensuring that our creations are as 
              kind to the earth as they are beautiful to behold.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <div className="bg-primary-100/50 rounded-lg p-5 flex-1 min-w-[150px]">
                <div className="font-display text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-700 text-sm">Years of floral artistry</div>
              </div>
              <div className="bg-secondary-100/50 rounded-lg p-5 flex-1 min-w-[150px]">
                <div className="font-display text-3xl font-bold text-secondary-700 mb-2">5,000+</div>
                <div className="text-gray-700 text-sm">Happy customers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
