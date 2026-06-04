'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?:   number
  y?:       number
  className?: string
  style?:   React.CSSProperties
}

export default function RevealOnScroll({
  children,
  delay   = 0,
  y       = 28,
  className,
  style,
}: RevealOnScrollProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.85s ease ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
