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
      target.current.x += (mousePos.x * 0.25 - target.current.x) * 0.04
      target.current.y += (-mousePos.y * 0.25 - target.current.y) * 0.04
      groupRef.current.rotation.y = target.current.x
      groupRef.current.rotation.x = target.current.y
    } else {
      groupRef.current.rotation.y += delta * 0.10
    }
  })

  return (
    <group ref={groupRef}>
      {/* Sfera solida distort — il protagonista */}
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[1.5, 128, 128]} />
          <MeshDistortMaterial
            color="#2A2030"
            metalness={0.95}
            roughness={0.04}
            distort={0.22}
            speed={1.5}
            envMapIntensity={4.0}
          />
        </mesh>
      </Float>

      {/* Wireframe esterno — profondità */}
      <mesh>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="#C8F135" wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  )
}

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]}   intensity={5}   color="#C8F135" />
      <pointLight position={[-5, -3, -3]} intensity={3}   color="#A8D420" />
      <pointLight position={[0, 4, 3]}    intensity={2}   color="#EDE8DF" />

      <GlowSphere isMobile={isMobile} />

      <Sparkles
        count={isMobile ? 60 : 200}
        scale={7}
        size={isMobile ? 1.2 : 2.2}
        speed={0.25}
        color="#C8F135"
        opacity={0.6}
      />

      {/* Riflessi HDR reali sulla superficie metallica */}
      <Environment preset="city" />

      {/* Bloom — il bagliore che trasforma tutto */}
      <EffectComposer frameBufferType={HalfFloatType}>
        <Bloom
          intensity={2.0}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.85}
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
