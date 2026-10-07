'use client'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import CustomCursor  from '@/components/shared/CustomCursor'
import LoadingScreen from '@/components/shared/LoadingScreen'
import CinematicInit from '@/components/shared/CinematicInit'

const NoiseBackground = dynamic(
  () => import('@/components/3d/NoiseBackground'),
  { ssr: false }
)

const FloatingScene3D = dynamic(
  () => import('@/components/3d/FloatingScene3D'),
  { ssr: false }
)

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
      {/* Sfondo liquido gold/ambra */}
      <NoiseBackground />
      {/* Oggetti 3D che volano sullo scroll */}
      <FloatingScene3D />
      <LoadingScreen />
      <CustomCursor />
      <CinematicInit />
    </>
  )
}
