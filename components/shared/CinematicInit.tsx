'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Inizializza il sistema di scroll cinematico 3D su tutte le sezioni.
 * Aggiunge effetto "camera che vola verso di te" via CSS transforms + GSAP.
 * Su mobile: effetto ridotto per performance.
 */
export default function CinematicInit() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const isTablet = window.innerWidth < 1024

    // Rispetta prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Delay per permettere al DOM di renderizzarsi
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll<HTMLElement>('section')

      sections.forEach((section, i) => {
        // Non animare la prima sezione (hero) — già gestita
        if (i === 0) return

        const intensity = isMobile ? 0.4 : isTablet ? 0.7 : 1.0

        gsap.fromTo(section,
          {
            // Punto di partenza: lontano e inclinato
            rotateX:     isMobile ? 0 : 6 * intensity,
            translateZ:  isMobile ? 0 : -80 * intensity,
            scale:       isMobile ? 1 : 0.97,
            opacity:     0.4,
            transformOrigin: '50% 0%',
          },
          {
            rotateX:    0,
            translateZ: 0,
            scale:      1,
            opacity:    1,
            ease:       'power2.out',
            scrollTrigger: {
              trigger: section,
              start:   'top 90%',
              end:     'top 30%',
              scrub:   isMobile ? false : 1.2,
              once:    isMobile,
            },
          }
        )
      })

      // Effetto profondità sugli heading delle sezioni
      document.querySelectorAll<HTMLElement>('h1, h2').forEach((heading) => {
        if (isMobile) return

        gsap.fromTo(heading,
          { z: -40, opacity: 0.6 },
          {
            z:       0,
            opacity: 1,
            ease:    'power2.out',
            scrollTrigger: {
              trigger:  heading,
              start:    'top 88%',
              end:      'top 50%',
              scrub:    0.8,
            },
          }
        )
      })

      ScrollTrigger.refresh()
    }, 800)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return null
}
