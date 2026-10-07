'use client'
import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Environment, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { HalfFloatType } from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Mesh } from 'three'

gsap.registerPlugin(ScrollTrigger)

// Module-level scroll state — driven by GSAP ScrollTrigger
const scrollState = { progress: 0 }

function AnimatedKnot() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const p = scrollState.progress

    // Speed and intensity grow with scroll progress
    meshRef.current.rotation.y += delta * (0.18 + p * 1.6)
    meshRef.current.rotation.z += delta * (0.06 + p * 0.5)

    // Subtle size pulse + slight scale growth on scroll
    const base  = 1 + p * 0.18
    const pulse = Math.sin(Date.now() * 0.0014) * 0.04
    meshRef.current.scale.setScalar(base + pulse)
  })

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.45}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.34, 200, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#C8913A"
          metalness={0.97}
          roughness={0.02}
          distort={0.10}
          speed={1.6}
          envMapIntensity={4}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.10} />
      <pointLight position={[6, 6, 6]}   intensity={8}  color="#E5B86A" />
      <pointLight position={[-6, -4, -4]} intensity={4}  color="#C8913A" />
      <pointLight position={[0, -5, 4]}   intensity={2}  color="#FFFFFF" />
      <Environment preset="city" />
      <AnimatedKnot />
      <Sparkles count={160} scale={10} size={1.8} speed={0.18} color="#E5B86A" opacity={0.4} />
      <EffectComposer frameBufferType={HalfFloatType}>
        <Bloom intensity={2.6} luminanceThreshold={0.12} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </>
  )
}

interface Props {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export default function ScrollCanvas({ containerRef }: Props) {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end:   'bottom bottom',
      scrub: true,
      onUpdate: (self) => { scrollState.progress = self.progress },
    })
    return () => trigger.kill()
  }, [containerRef])

  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 44 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  )
}
