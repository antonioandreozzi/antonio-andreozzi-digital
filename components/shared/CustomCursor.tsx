'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const rafRef  = useRef<number>(0)
  const pos     = useRef({ x: -100, y: -100 })
  const ring    = useRef({ x: -100, y: -100 })

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return

    const dot  = dotRef.current
    const r    = ringRef.current
    if (!dot || !r) return

    // Show custom cursor, hide native
    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Dot: snaps instantly
      dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`

      // Ring: follows with lerp (smooth lag)
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      r.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMove, { passive: true })

    // Expand ring on interactive elements
    const onEnter = () => r.classList.add('is-hovering')
    const onLeave = () => r.classList.remove('is-hovering')

    const attach = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, label')
        .forEach(el => {
          el.addEventListener('mouseenter', onEnter)
          el.addEventListener('mouseleave', onLeave)
        })
    }

    attach()

    // Re-attach on DOM changes (Sanity, dynamic content)
    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    // Hide when leaving window
    const onLeaveDoc = () => {
      dot.style.opacity = '0'
      r.style.opacity   = '0'
    }
    const onEnterDoc = () => {
      dot.style.opacity = '1'
      r.style.opacity   = '1'
    }
    document.addEventListener('mouseleave', onLeaveDoc)
    document.addEventListener('mouseenter', onEnterDoc)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeaveDoc)
      document.removeEventListener('mouseenter', onEnterDoc)
      observer.disconnect()
      document.documentElement.style.cursor = ''
    }
  }, [])

  return (
    <>
      {/* Dot — bianco con outline scuro, visibile su qualsiasi sfondo */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:     'fixed',
          top:          0,
          left:         0,
          width:        '8px',
          height:       '8px',
          borderRadius: '50%',
          background:   'var(--accent)',
          pointerEvents:'none',
          zIndex:       99999,
          transform:    'translate(-100px, -100px)',
          marginLeft:   '-4px',
          marginTop:    '-4px',
          transition:   'opacity 0.3s ease',
          willChange:   'transform',
          boxShadow:    '0 0 0 1.5px rgba(0,0,0,0.6), 0 0 8px rgba(200,145,58,0.8)',
        }}
      />

      {/* Ring — ambra con outline bianco esterno */}
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          width:           '36px',
          height:          '36px',
          borderRadius:    '50%',
          border:          '1.5px solid var(--accent)',
          pointerEvents:   'none',
          zIndex:          99998,
          boxShadow:       '0 0 0 1px rgba(0,0,0,0.4), 0 0 12px rgba(200,145,58,0.3)',
          transform:       'translate(-100px, -100px)',
          marginLeft:      '-18px',
          marginTop:       '-18px',
          transition:      'opacity 0.3s ease, width 0.25s ease, height 0.25s ease, margin 0.25s ease, background 0.25s ease',
          willChange:      'transform',
        }}
      />

      <style>{`
        .cursor-ring.is-hovering {
          width:       56px !important;
          height:      56px !important;
          margin-left: -28px !important;
          margin-top:  -28px !important;
          background:  rgba(200,145,58,0.12) !important;
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.4), 0 0 20px rgba(200,145,58,0.4) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor-ring { display: none; }
        }
      `}</style>
    </>
  )
}
