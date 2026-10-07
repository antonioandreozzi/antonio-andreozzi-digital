'use client'
/**
 * GLBCanvas — sezione modello 3D interattivo (stile marina_uiux)
 *
 * Per usare un vero file .glb generato con Meshy AI, Hyper3D Rodin o Blender:
 *   1. Metti il file in /public/model.glb
 *   2. Decommentare le righe useGLTF qui sotto
 *   3. Commentare / rimuovere l'OctahedronGeometry placeholder
 *
 * import { useGLTF } from '@react-three/drei'
 * const { scene } = useGLTF('/model.glb')
 * return <primitive object={scene} scale={1.5} />
 */
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Environment, Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { HalfFloatType } from 'three'
import type { Mesh } from 'three'

function Model() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * 0.12
  })

  return (
    <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.3}>
      {/*
       * Placeholder: geometria icosaedro ad alta suddivisione.
       * Visivamente indistinguibile da un AI-generated GLB model.
       * Sostituire con <primitive object={scene} /> una volta aggiunto il .glb
       */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 6]} />
        <MeshDistortMaterial
          color="#C8913A"
          metalness={0.98}
          roughness={0.01}
          distort={0.08}
          speed={1.2}
          envMapIntensity={5}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.08} />
      <pointLight position={[6, 8, 6]}   intensity={10} color="#E5B86A" />
      <pointLight position={[-6, -4, -4]} intensity={5}  color="#C8913A" />
      <pointLight position={[2, -6, 5]}   intensity={3}  color="#FFFFFF" />
      <Environment preset="city" />
      <Model />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        dampingFactor={0.08}
        rotateSpeed={0.6}
      />
      <EffectComposer frameBufferType={HalfFloatType}>
        <Bloom intensity={3.0} luminanceThreshold={0.10} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </>
  )
}

export default function GLBCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 46 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  )
}
