'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%'

function scramble(el: HTMLElement, finalText: string, duration = 0.9) {
  let iteration = 0
  const total   = Math.floor(duration / 0.04)
  const interval = setInterval(() => {
    el.innerText = finalText
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' '
        if (i < (iteration / total) * finalText.length) return char
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      })
      .join('')
    if (iteration >= total) clearInterval(interval)
    iteration++
  }, 40)
}

export default function LoadingScreen() {
  const overlayRef  = useRef<HTMLDivElement>(null)
  const line1Ref    = useRef<HTMLDivElement>(null)
  const line2Ref    = useRef<HTMLDivElement>(null)
  const barRef      = useRef<HTMLDivElement>(null)
  const curtainRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const overlay = overlayRef.current
    const line1   = line1Ref.current
    const line2   = line2Ref.current
    const bar     = barRef.current
    const curtain = curtainRef.current
    if (!overlay || !line1 || !line2 || !bar || !curtain) return

    // Solo alla prima visita per sessione
    const seen = sessionStorage.getItem('aad-intro-seen')
    if (seen) {
      // Nascondi immediatamente senza animazione
      overlay.style.display = 'none'
      return
    }
    sessionStorage.setItem('aad-intro-seen', '1')

    // Mostra l'overlay
    overlay.style.display = 'flex'
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        overlay.style.display = 'none'
      },
    })

    // Progress bar
    tl.to(bar, { scaleX: 1, duration: 1.8, ease: 'power2.inOut' }, 0)

    // Linea 1 scramble
    tl.call(() => scramble(line1, 'WE MOVE MARKETS', 1.0), [], 0.2)
    tl.to(line1, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.2)

    // Linea 2 scramble
    tl.call(() => scramble(line2, '', 0.7), [], 0.8)
    tl.to(line2, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.8)

    // Pausa
    tl.to({}, { duration: 0.5 })

    // Curtain sale
    tl.to(curtain, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' })
    tl.to(overlay, { opacity: 0, duration: 0.15 }, '-=0.1')

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position:       'fixed',
        inset:          0,
        zIndex:         99999,
        display:        'none', // mostra solo via JS
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        overflow:       'hidden',
        opacity:        1,
      }}
    >
      {/* Curtain nero */}
      <div
        ref={curtainRef}
        style={{
          position:   'absolute',
          inset:      0,
          background: 'var(--bg-void)',
          zIndex:     1,
        }}
      />

      {/* Contenuto */}
      <div style={{ position:'relative', zIndex:2, textAlign:'center' }}>
        <div
          ref={line1Ref}
          style={{
            fontFamily:    'var(--font-inter)',
            fontSize:      'clamp(1.2rem, 3.5vw, 2.8rem)',
            fontWeight:    300,
            letterSpacing: '0.22em',
            color:         'var(--text-primary)',
            opacity:       0,
            transform:     'translateY(20px)',
            marginBottom:  '0.4rem',
          }}
        >
          WE MOVE MARKETS
        </div>

        <div
          ref={line2Ref}
          style={{
            fontFamily:    'var(--font-cormorant, serif)',
            fontSize:      'clamp(0.9rem, 2vw, 1.6rem)',
            fontWeight:    300,
            letterSpacing: '0.4em',
            color:         'var(--accent)',
            opacity:       0,
            transform:     'translateY(12px)',
            fontStyle:     'italic',
          }}
        >
        </div>

        <div style={{ margin:'2rem auto', width:'40px', height:'1px', background:'var(--border)' }} />

        {/* Progress bar */}
        <div style={{
          width:'clamp(120px,20vw,200px)', height:'1px',
          background:'var(--border)', margin:'0 auto',
          position:'relative', overflow:'hidden',
        }}>
          <div
            ref={barRef}
            style={{
              position:'absolute', inset:0,
              background:'var(--accent)',
              transform:'scaleX(0)',
              transformOrigin:'0% 50%',
            }}
          />
        </div>
      </div>
    </div>
  )
}
