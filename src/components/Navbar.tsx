'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled ? 'py-3 glass-card shadow-lg' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold text-gradient">
            Bloom Euphoria
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'About', 'Collection', 'Contact'].map((item) => (
              <Link 
                href={`#${item.toLowerCase()}`} 
                key={item}
                className="text-gray-800 hover:text-primary-600 transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
          
          {/* Shopping cart and mobile menu toggle */}
          <div className="flex items-center">
            <button 
              className="p-2 text-gray-800 hover:text-primary-600 transition-colors duration-300"
              aria-label="Shopping cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            
            <button 
              className="ml-4 p-2 text-gray-800 hover:text-primary-600 transition-colors duration-300 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed top-0 right-0 w-full h-screen z-40 glass-card"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <div className="flex justify-end p-6">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 hover:text-primary-600"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center h-full">
              {['Home', 'About', 'Collection', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-medium text-gray-800 hover:text-primary-600 py-4"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
