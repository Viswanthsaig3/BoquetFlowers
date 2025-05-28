'use client'

import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 to-red-50 z-50">
      <div className="text-center">
        <motion.div 
          className="relative"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-5 h-5 rounded-full"
                style={{ 
                  backgroundColor: i % 2 === 0 ? '#FF0000' : '#FF5C98',
                  left: '50%',
                  top: '50%',
                  translateX: '-50%',
                  translateY: '-50%',
                  rotate: `${i * 72}deg`,
                  transformOrigin: '0 10px'
                }}
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.h2
          className="mt-8 text-xl text-primary-600 font-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Bloom Euphoria
        </motion.h2>
        
        <motion.p
          className="mt-2 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Crafting floral magic...
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingScreen
