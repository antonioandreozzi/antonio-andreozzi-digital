'use client'
import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    if ('ontouchstart' in window) return
    if (window.innerWidth < 768) return

    // Crea elementi direttamente nel DOM — fuori da React
    const dot  = document.createElement('div')
    const ring = document.createElement('div')

    const BASE = `
      position: fixed;
      top: 0; left: 0;
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-200px, -200px);
    `

    dot.style.cssText = BASE + `
      width: 10px; height: 10px;
      margin-left: -5px; margin-top: -5px;
      background: #ffffff;
      box-shadow: 0 0 0 2px #000, 0 0 10px rgba(200,145,58,0.8);
      z-index: 2147483647;
    `

    ring.style.cssText = BASE + `
      width: 38px; height: 38px;
      margin-left: -19px; margin-top: -19px;
      border: 2px solid #ffffff;
      box-shadow: 0 0 0 1px #000;
      z-index: 2147483646;
      transition: width 0.2s, height 0.2s, margin 0.2s;
    `

    document.body.appendChild(dot)
    document.body.appendChild(ring)

    // Nascondi cursore nativo
    document.documentElement.style.cursor = 'none'

    let mx = -200, my = -200
    let rx = -200, ry = -200
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const animate = () => {
      dot.style.transform  = `translate(${mx}px, ${my}px)`
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMove, { passive: true })

    // Hover su link/bottoni
    const expand = () => {
      ring.style.width  = '56px'
      ring.style.height = '56px'
      ring.style.marginLeft = '-28px'
      ring.style.marginTop  = '-28px'
    }
    const shrink = () => {
      ring.style.width  = '38px'
      ring.style.height = '38px'
      ring.style.marginLeft = '-19px'
      ring.style.marginTop  = '-19px'
    }

    const attach = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', expand)
        el.addEventListener('mouseleave', shrink)
      })
    }
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.style.cursor = ''
      obs.disconnect()
      dot.remove()
      ring.remove()
    }
  }, [])

  return null
}
