'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { imageConfig } from '@/lib/imageConfig'

const ProductsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  
  return (
    <section id="collection" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-pink-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-display font-bold mb-4 text-gradient"
          >
            Our Signature Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-gray-700"
          >
            Explore our handcrafted bouquets, designed with passion to celebrate every occasion
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {imageConfig.products.map((product) => (
            <motion.div 
              key={product.id} 
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              variants={itemVariants}
            >
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-semibold">₹{product.price.toLocaleString('en-IN')}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-600 text-white rounded-full 
                                    text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="px-8 py-3 border-2 border-primary-500 text-primary-600 font-medium rounded-full
                      hover:bg-primary-500 hover:text-white transition-all duration-300"
          >
            View All Collections
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
