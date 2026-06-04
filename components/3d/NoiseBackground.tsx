'use client'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const VERT = `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position,1.0);
}
`

const FRAG = `
uniform float uTime;
uniform vec2  uMouse;
uniform vec2  uResolution;
uniform float uScroll;
varying vec2  vUv;

float hash(vec2 p){
  p = fract(p * vec2(234.34,435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f*f*(3.0-2.0*f);
  float a = hash(i);
  float b = hash(i+vec2(1,0));
  float c = hash(i+vec2(0,1));
  float d = hash(i+vec2(1,1));
  return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);
}

float fbm(vec2 p){
  float v=0.0; float a=0.5;
  for(int i=0;i<5;i++){
    v += a*noise(p);
    p  = p*2.1 + vec2(1.7,9.2);
    a *= 0.5;
  }
  return v;
}

void main(){
  vec2 uv = vUv;
  vec2 m  = uMouse * 0.25;
  float t = uTime * 0.07 + uScroll * 0.0003;

  float n1 = fbm(uv*2.8 + vec2(t, t*0.7) + m);
  float n2 = fbm(uv*5.2 - vec2(t*0.5, t*0.9) - m*0.5);
  float n3 = fbm(vec2(n1+n2)*2.0 + t*0.3);

  float c = n1*0.5 + n2*0.3 + n3*0.2;

  /* Palette: quasi-nero con tocco ambra caldissimo */
  vec3 void_col  = vec3(0.035,0.035,0.043);
  vec3 ember_col = vec3(0.18, 0.11, 0.04);
  vec3 gold_col  = vec3(0.25, 0.16, 0.055);

  vec3 col = mix(void_col, ember_col, c*0.8);
  col      = mix(col, gold_col, c*c*0.4);

  float alpha = c * 0.45 + 0.04;
  gl_FragColor = vec4(col, alpha);
}
`

export default function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    // Rispetta prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) { setReduced(true); return }

    const canvas = canvasRef.current
    if (!canvas) return

    const isMobile = window.innerWidth < 768

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    renderer.setPixelRatio(isMobile ? 0.6 : Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Scena minimal — un quad che copre tutto lo schermo
    const scene  = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1)

    const geo = new THREE.PlaneGeometry(2, 2)
    const uniforms = {
      uTime:       { value: 0 },
      uMouse:      { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uScroll:     { value: 0 },
    }

    const mat = new THREE.ShaderMaterial({
      vertexShader:   VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthWrite:  false,
    })

    scene.add(new THREE.Mesh(geo, mat))

    // Mouse
    const onMouse = (e: MouseEvent) => {
      if (isMobile) return
      uniforms.uMouse.value.set(
        e.clientX / window.innerWidth  * 2 - 1,
       -e.clientY / window.innerHeight * 2 + 1
      )
    }

    // Scroll
    const onScroll = () => {
      uniforms.uScroll.value = window.scrollY
    }

    // Resize
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('scroll',    onScroll, { passive: true })
    window.addEventListener('resize',    onResize)

    // Animazione — throttle su mobile
    let raf: number
    let last = 0
    const FPS = isMobile ? 20 : 60
    const interval = 1000 / FPS

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
      window.removeEventListener('scroll',    onScroll)
      window.removeEventListener('resize',    onResize)
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
        mixBlendMode:  'screen',
        opacity:       0.85,
      }}
    />
  )
}
