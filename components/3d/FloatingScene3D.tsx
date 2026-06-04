'use client'
import { useRef, useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Parole chiave del brand che volano nello spazio
const WORDS = [
  'BRAND',
  'IDENTITÀ',
  'SISTEMI',
  'AI',
  'VOCE',
  'STRATEGIA',
  'POSIZIONAMENTO',
  'AUTENTICITÀ',
]

// Forme geometriche simbolo di "sistema/struttura"
const SHAPES = [
  { geo: 'icosahedron', args: [0.4, 1],  color: '#C8913A', opacity: 0.35 },
  { geo: 'octahedron',  args: [0.3, 0],  color: '#E5B86A', opacity: 0.25 },
  { geo: 'tetrahedron', args: [0.35, 0], color: '#C8913A', opacity: 0.30 },
  { geo: 'icosahedron', args: [0.25, 0], color: '#E5B86A', opacity: 0.20 },
]

// Genera posizioni casuali ma stabili (seed deterministico)
function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 43758.5453
  return x - Math.floor(x)
}

interface FloatingTextProps {
  text: string
  position: [number, number, number]
  speed: number
  rotSpeed: number
  scrollRef: React.MutableRefObject<number>
  isMobile: boolean
}

function FloatingText({ text, position, speed, rotSpeed, scrollRef, isMobile }: FloatingTextProps) {
  const meshRef  = useRef<THREE.Mesh>(null)
  const matRef   = useRef<THREE.MeshBasicMaterial>(null)

  // Crea texture testo con Canvas 2D
  const texture = useMemo(() => {
    const size = isMobile ? 256 : 512
    const canvas = document.createElement('canvas')
    canvas.width  = size * 3
    canvas.height = size
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle   = 'transparent'
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle   = '#C8913A'
    ctx.font        = `${isMobile ? 60 : 80}px "Georgia", serif`
    ctx.textAlign   = 'center'
    ctx.textBaseline = 'middle'
    ctx.letterSpacing = '8px'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)
    const tex = new THREE.CanvasTexture(canvas)
    return tex
  }, [text, isMobile])

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh) return

    // Scorrimento scroll → oggetto si avvicina
    const scroll = scrollRef.current
    mesh.position.z = position[2] + scroll * speed

    // Rotazione lenta
    mesh.rotation.z += delta * rotSpeed

    // Fade in/out basato sulla distanza dalla camera
    const z = mesh.position.z
    if (matRef.current) {
      const dist = 5 - z
      matRef.current.opacity = THREE.MathUtils.clamp(
        1 - Math.abs(dist - 2) / 4, 0, 0.85
      )
    }

    // Wrap-around: quando passa la camera, torna indietro
    if (mesh.position.z > 6) {
      mesh.position.z = position[2] - 20
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[3, 0.8]} />
      <meshBasicMaterial
        ref={matRef}
        map={texture}
        transparent
        opacity={0}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

interface FloatingShapeProps {
  position: [number, number, number]
  color: string
  opacity: number
  scrollRef: React.MutableRefObject<number>
  speed: number
  rotX: number
  rotY: number
}

function FloatingShape({ position, color, opacity, scrollRef, speed, rotX, rotY }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh) return
    mesh.position.z = position[2] + scrollRef.current * speed
    mesh.rotation.x += delta * rotX
    mesh.rotation.y += delta * rotY
    if (mesh.position.z > 6) mesh.position.z = position[2] - 18
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.3, 1]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
    </mesh>
  )
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const scrollRef = useRef(0)
  const { camera } = useThree()

  useEffect(() => {
    // Posizione camera
    camera.position.set(0, 0, 5)

    const onScroll = () => {
      scrollRef.current = window.scrollY * 0.008
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [camera])

  // Genera oggetti in modo deterministico
  const objects = useMemo(() => {
    const count  = isMobile ? 5 : WORDS.length
    const items  = []

    for (let i = 0; i < count; i++) {
      const r = (n: number) => seededRandom(i * 100 + n)
      items.push({
        type:     'text',
        text:     WORDS[i % WORDS.length],
        position: [
          (r(1) - 0.5) * 6,
          (r(2) - 0.5) * 4,
          -(i * 4 + 3),
        ] as [number, number, number],
        speed:    0.8 + r(3) * 0.4,
        rotSpeed: (r(4) - 0.5) * 0.3,
      })
    }

    // Forme geometriche
    const shapeCount = isMobile ? 3 : 8
    for (let i = 0; i < shapeCount; i++) {
      const r = (n: number) => seededRandom(i * 200 + n + 50)
      items.push({
        type:    'shape',
        position: [
          (r(1) - 0.5) * 7,
          (r(2) - 0.5) * 5,
          -(i * 3 + 2),
        ] as [number, number, number],
        color:   r(3) > 0.5 ? '#C8913A' : '#E5B86A',
        opacity: 0.2 + r(4) * 0.25,
        speed:   0.6 + r(5) * 0.5,
        rotX:    (r(6) - 0.5) * 0.8,
        rotY:    (r(7) - 0.5) * 0.8,
      })
    }

    return items
  }, [isMobile])

  return (
    <>
      {/* Luce ambientale sottile */}
      <ambientLight intensity={0.3} color="#C8913A" />

      {objects.map((obj, i) =>
        obj.type === 'text' ? (
          <FloatingText
            key={i}
            text={obj.text!}
            position={obj.position}
            speed={obj.speed!}
            rotSpeed={obj.rotSpeed!}
            scrollRef={scrollRef}
            isMobile={isMobile}
          />
        ) : (
          <FloatingShape
            key={i}
            position={obj.position}
            color={obj.color!}
            opacity={obj.opacity!}
            scrollRef={scrollRef}
            speed={obj.speed!}
            rotX={obj.rotX!}
            rotY={obj.rotY!}
          />
        )
      )}
    </>
  )
}

export default function FloatingScene3D() {
  const [isMobile, setIsMobile] = useState(false)
  const [reduced, setReduced]   = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      return
    }
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (reduced) return null

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      dpr={[1, isMobile ? 1 : 1.5]}
      aria-hidden="true"
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        1,
        pointerEvents: 'none',
        width:         '100vw',
        height:        '100vh',
      }}
    >
      <Scene isMobile={isMobile} />
    </Canvas>
  )
}
