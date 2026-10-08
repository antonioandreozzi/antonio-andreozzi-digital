'use client'
import { useEffect } from 'react'
import CustomCursor  from '@/components/shared/CustomCursor'
import LoadingScreen from '@/components/shared/LoadingScreen'
import CinematicInit from '@/components/shared/CinematicInit'

function LenisScroll() {
  useEffect(() => {
    let animId: number

    async function init() {
      const { default: Lenis } = await import('lenis')
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        lenis.raf(time)
        animId = requestAnimationFrame(raf)
      }
      animId = requestAnimationFrame(raf)

      return () => {
        lenis.destroy()
        cancelAnimationFrame(animId)
      }
    }

    let cleanup: (() => void) | undefined
    init().then(fn => { cleanup = fn })

    return () => { cleanup?.() }
  }, [])

  return null
}

export default function ClientProviders() {
  return (
    <>
      <LenisScroll />
      <LoadingScreen />
      <CustomCursor />
      <CinematicInit />
    </>
  )
}
