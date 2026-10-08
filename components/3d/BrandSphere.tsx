'use client'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment, Float, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { HalfFloatType } from 'three'
import type { Group } from 'three'

const mousePos = { x: 0, y: 0 }

function GlowSphere({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<Group>(null)
  const target   = useRef({ x: 0, y: 0 })

  useFrame((_, delta) => {
    if (!groupRef.current) return
    if (!isMobile) {
      target.current.x += (mousePos.x * 0.20 - target.current.x) * 0.04
      target.current.y += (-mousePos.y * 0.20 - target.current.y) * 0.04
      groupRef.current.rotation.y = target.current.x
      groupRef.current.rotation.x = target.current.y
    } else {
      groupRef.current.rotation.y += delta * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {/* Sfera monocromatica — specchio scuro */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[1.5, 128, 128]} />
          <MeshDistortMaterial
            color="#1A1A1A"
            metalness={0.98}
            roughness={0.02}
            distort={0.18}
            speed={1.2}
            envMapIntensity={5.0}
          />
        </mesh>
      </Float>

      {/* Wireframe esterno — geometria pura */}
      <mesh>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="#FFFFFF" wireframe transparent opacity={0.04} />
      </mesh>
    </group>
  )
}

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.15} />
      {/* Luce bianca dura — riflesso speculare principale */}
      <pointLight position={[4, 6, 4]}    intensity={8}  color="#FFFFFF" />
      {/* Luce fill morbida — tonalità leggermente calda */}
      <pointLight position={[-5, -3, -2]} intensity={2}  color="#F0EAE0" />
      {/* Luce di bordo sottile */}
      <pointLight position={[0, -5, 3]}   intensity={1}  color="#FFFFFF" />

      <GlowSphere isMobile={isMobile} />

      <Sparkles
        count={isMobile ? 40 : 120}
        scale={8}
        size={isMobile ? 0.8 : 1.4}
        speed={0.15}
        color="#FFFFFF"
        opacity={0.25}
      />

      <Environment preset="city" />

      <EffectComposer frameBufferType={HalfFloatType}>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.90}
          mipmapBlur
        />
      </EffectComposer>
    </>
  )
}

export default function BrandSphere() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mousePos.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => {
      window.removeEventListener('resize', check)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 40 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, isMobile ? 1 : 2]}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene isMobile={isMobile} />
    </Canvas>
  )
}
