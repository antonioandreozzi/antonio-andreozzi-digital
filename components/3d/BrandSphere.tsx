'use client'
import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh, Points, Group } from 'three'

// Mouse position — aggiornato fuori dal canvas per performance
const mousePos = { x: 0, y: 0 }

function OuterSphere() {
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.08
    ref.current.rotation.y += delta * 0.13
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2, 2]} />
      <meshBasicMaterial color="#C8913A" wireframe transparent opacity={0.22} />
    </mesh>
  )
}

function InnerSphere() {
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x -= delta * 0.05
    ref.current.rotation.y -= delta * 0.09
    ref.current.rotation.z += delta * 0.04
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.25, 1]} />
      <meshBasicMaterial color="#E5B86A" wireframe transparent opacity={0.15} />
    </mesh>
  )
}

function CoreDot() {
  const ref = useRef<Mesh>(null)
  const t   = useRef(0)
  useFrame((_, delta) => {
    if (!ref.current) return
    t.current += delta
    ref.current.scale.setScalar(1 + Math.sin(t.current * 1.5) * 0.12)
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.07, 16, 16]} />
      <meshBasicMaterial color="#E5B86A" transparent opacity={0.9} />
    </mesh>
  )
}

function Particles({ count }: { count: number }) {
  const ref = useRef<Points>(null)

  // Distribuisce i punti in un volume sferico attorno alla sfera
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 2.4 + Math.random() * 3.2
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.045
    ref.current.rotation.x += delta * 0.018
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#E5B86A"
        size={0.022}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

// Gruppo principale — reagisce al mouse su desktop
function Scene({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<Group>(null)
  const target   = useRef({ x: 0, y: 0 })

  useFrame((_, delta) => {
    if (!groupRef.current) return
    if (!isMobile) {
      // Segue il mouse con lerp molto morbido
      target.current.x += (mousePos.x * 0.35 - target.current.x) * 0.04
      target.current.y += (mousePos.y * 0.35 - target.current.y) * 0.04
      groupRef.current.rotation.y = target.current.x
      groupRef.current.rotation.x = -target.current.y
    } else {
      // Su mobile: rotazione automatica lenta
      groupRef.current.rotation.y += delta * 0.06
    }
  })

  return (
    <group ref={groupRef}>
      <OuterSphere />
      <InnerSphere />
      <CoreDot />
      <Particles count={isMobile ? 120 : 650} />
    </group>
  )
}

export default function BrandSphere() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Rileva se touch/mobile
    const check = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    check()
    window.addEventListener('resize', check)

    // Mouse listener solo su desktop
    const onMouseMove = (e: MouseEvent) => {
      // Normalizza da -1 a +1
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
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      dpr={[1, isMobile ? 1 : 1.5]} // Limita pixel ratio su mobile
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene isMobile={isMobile} />
    </Canvas>
  )
}
