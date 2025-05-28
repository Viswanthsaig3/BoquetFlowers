'use client'

import { useEffect, useState } from 'react'

interface Petal {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  rotation: number
  duration: number
  color: string
}

const CursorTrail = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [petals, setPetals] = useState<Petal[]>([])
  const [petalCount, setPetalCount] = useState(0)
  
  useEffect(() => {
    // Add cursor glow effect
    const cursorGlow = document.createElement('div')
    cursorGlow.classList.add('cursor-glow')
    document.body.appendChild(cursorGlow)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      cursorGlow.style.left = `${e.clientX}px`
      cursorGlow.style.top = `${e.clientY}px`
      
      // Only create petals every 3rd movement to avoid too many elements
      if (petalCount % 3 === 0) {
        createPetal(e.clientX, e.clientY)
      }
      setPetalCount(petalCount + 1)
    }
    
    window.addEventListener('mousemove', updateMousePosition)
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.body.removeChild(cursorGlow)
    }
  }, [petalCount])
  
  const createPetal = (x: number, y: number) => {
    const colors = ['#FF5C98', '#FF0000', '#FF6666', '#FF99BE']
    
    const newPetal: Petal = {
      id: Date.now(),
      x,
      y,
      size: 5 + Math.random() * 15,
      opacity: 0.7 + Math.random() * 0.3,
      rotation: Math.random() * 360,
      duration: 1 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }
    
    setPetals(prevPetals => [...prevPetals, newPetal])
    
    // Remove petal after animation
    setTimeout(() => {
      setPetals(prevPetals => prevPetals.filter(petal => petal.id !== newPetal.id))
    }, newPetal.duration * 1000)
  }
  
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.x}px`,
            top: `${petal.y}px`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.2}px`,
            backgroundColor: petal.color,
            borderRadius: '50% 50% 0 50%',
            opacity: petal.opacity,
            transform: `rotate(${petal.rotation}deg)`,
            animationDuration: `${petal.duration}s`
          }}
        />
      ))}
    </div>
  )
}

export default CursorTrail
