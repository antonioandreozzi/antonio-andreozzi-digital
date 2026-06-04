'use client'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// ── Vertex shader ────────────────────────────────────────────
const VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`

// ── Fragment shader — domain-warping liquid ──────────────────
const FRAG = `
uniform float uTime;
uniform vec2  uMouse;
varying vec2  vUv;

float hash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.0-2.0*f);
  float a = hash(i);
  float b = hash(i+vec2(1,0));
  float c = hash(i+vec2(0,1));
  float d = hash(i+vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
}

float fbm(vec2 p) {
  float v=0.; float a=0.5;
  for(int i=0;i<6;i++){
    v += a * noise(p);
    p  = p*2.1 + vec2(1.7, 9.2);
    a *= 0.48;
  }
  return v;
}

void main() {
  vec2 uv = vUv * 1.4;
  float t  = uTime * 0.05;
  vec2  m  = uMouse * 0.18;

  /* ── Domain warping — tre strati creano l'effetto liquido ── */
  vec2 q = vec2(
    fbm(uv + t + m),
    fbm(uv + vec2(5.2, 1.3) - t * 0.4)
  );
  vec2 r = vec2(
    fbm(uv + 4.0*q + vec2(1.7, 9.2) + t * 0.13),
    fbm(uv + 4.0*q + vec2(8.3, 2.8) - t * 0.1)
  );
  float f = fbm(uv + 4.5*r + t * 0.07);

  /* ── Palette: nero → ambra scura → oro liquido ────────────── */
  vec3 void_col  = vec3(0.035, 0.034, 0.043);
  vec3 ember_col = vec3(0.14,  0.065, 0.01);
  vec3 amber_col = vec3(0.28,  0.14,  0.04);
  vec3 gold_col  = vec3(0.52,  0.30,  0.08);

  vec3 col = mix(void_col,  ember_col, smoothstep(0.20, 0.65, f));
  col      = mix(col,       amber_col, smoothstep(0.50, 0.85, f));
  col      = mix(col,       gold_col,  smoothstep(0.78, 1.00, f*f) * 0.7);

  float alpha = smoothstep(0.08, 0.55, f) * 0.6 + 0.04;
  gl_FragColor = vec4(col, alpha);
}
`

export default function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const isMobile = window.innerWidth < 768

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    renderer.setPixelRatio(isMobile ? 0.5 : Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene  = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const geo    = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      uTime:  { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }

    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthWrite: false,
    })

    scene.add(new THREE.Mesh(geo, mat))

    const onMouse = (e: MouseEvent) => {
      if (isMobile) return
      uniforms.uMouse.value.set(
        (e.clientX / window.innerWidth) * 2 - 1,
       -(e.clientY / window.innerHeight) * 2 + 1
      )
    }

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('resize', onResize)

    const FPS = isMobile ? 18 : 55
    const interval = 1000 / FPS
    let last = 0
    let raf: number

    const animate = (ts: number) => {
      raf = requestAnimationFrame(animate)
      if (ts - last < interval) return
      last = ts
      uniforms.uTime.value = ts * 0.001
      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      mat.dispose()
      geo.dispose()
    }
  }, [])

  if (reduced) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        0,
        pointerEvents: 'none',
        width:         '100vw',
        height:        '100vh',
        opacity:       0.75,
      }}
    />
  )
}
