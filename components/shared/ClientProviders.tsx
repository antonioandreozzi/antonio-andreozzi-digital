'use client'
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

export default function ClientProviders() {
  return (
    <>
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
