'use client'
import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
  href?: string
  strength?: number
}

export default function MagneticButton({ children, className, href, strength = 0.35 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x   = useMotionValue(0)
  const y   = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.5 })

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect   = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width  / 2
    const centerY = rect.top  + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Tag = href ? 'a' : 'div'

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ display: 'inline-block' }}>
      <motion.div style={{ x: springX, y: springY }}>
        <Tag href={href} className={className}>
          {children}
        </Tag>
      </motion.div>
    </div>
  )
}
