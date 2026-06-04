'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageProps {
  children:  React.ReactNode
  speed?:    number   // 0.1 = lento, 0.4 = veloce
  className?: string
  style?:    React.CSSProperties
}

export default function ParallaxImage({
  children,
  speed    = 0.25,
  className,
  style,
}: ParallaxImageProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Disabilita su mobile per performance
    if (window.innerWidth < 768) return

    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    // L'immagine interna si muove più lentamente del contenitore esterno
    const ctx = gsap.context(() => {
      gsap.to(inner, {
        yPercent: speed * -80,
        ease: 'none',
        scrollTrigger: {
          trigger: outer,
          start:   'top bottom',
          end:     'bottom top',
          scrub:   true,
        },
      })
    })

    return () => ctx.revert()
  }, [speed])

  return (
    <div
      ref={outerRef}
      className={className}
      style={{ overflow: 'hidden', ...style }}
    >
      <div
        ref={innerRef}
        style={{
          willChange: 'transform',
          height:     '115%',        // extra height per il movimento
          marginTop:  '-7.5%',
          position:   'relative',
        }}
      >
        {children}
      </div>
    </div>
  )
}
