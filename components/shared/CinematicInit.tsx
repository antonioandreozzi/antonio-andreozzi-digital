'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CinematicInit() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll<HTMLElement>('section')

      sections.forEach((section, i) => {
        if (i === 0) return // Skip hero

        gsap.fromTo(section,
          { opacity: 0.3, y: 30 },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              end: 'top 50%',
              scrub: false,
              once: true,
            },
          }
        )
      })

      ScrollTrigger.refresh()
    }, 600)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return null
}
