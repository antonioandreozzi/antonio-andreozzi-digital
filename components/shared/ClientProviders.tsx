'use client'
import dynamic from 'next/dynamic'
import CustomCursor  from '@/components/shared/CustomCursor'
import LoadingScreen from '@/components/shared/LoadingScreen'
import CinematicInit from '@/components/shared/CinematicInit'

// Three.js — solo client, no SSR
const NoiseBackground = dynamic(
  () => import('@/components/3d/NoiseBackground'),
  { ssr: false }
)

export default function ClientProviders() {
  return (
    <>
      <NoiseBackground />
      <LoadingScreen />
      <CustomCursor />
      <CinematicInit />
    </>
  )
}
