'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Petal {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  duration: number
  color: string
  delay: number
}

const FlowerBlast = () => {
  const [petals, setPetals] = useState<Petal[]>([])
  
  useEffect(() => {
    const petalCount = 100
    const colors = [
      '#FF0000', '#FF3333', '#FF6666', '#FF9999',
      '#FF99BE', '#FF85B1', '#FF70A5', '#FF5C98'
    ]
    
    const newPetals: Petal[] = []
    
    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        x: 50 + (Math.random() - 0.5) * 80, // Position around center
        y: 50 + (Math.random() - 0.5) * 80,
        size: 10 + Math.random() * 30,
        rotation: Math.random() * 360,
        duration: 2 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5
      })
    }
    
    setPetals(newPetals)
    
    // Clean up animation after some time
    const timer = setTimeout(() => {
      setPetals([])
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {petals.map(petal => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            backgroundColor: petal.color,
            width: petal.size,
            height: petal.size * 1.2,
            borderRadius: '50% 50% 0 50%',
            originX: 0.5,
            originY: 0.5,
          }}
          initial={{ 
            scale: 0, 
            opacity: 0,
            rotate: 0,
          }}
          animate={{ 
            scale: [0, 1, 0.8],
            opacity: [0, 1, 0],
            rotate: [0, petal.rotation, petal.rotation * 2],
            x: [0, (Math.random() - 0.5) * window.innerWidth * 0.6], 
            y: [0, (Math.random() - 0.5) * window.innerHeight * 0.6]
          }}
          transition={{ 
            duration: petal.duration,
            delay: petal.delay,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default FlowerBlast
