'use client'
import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ScrollCanvas = dynamic(
  () => import('@/components/3d/ScrollCanvas'),
  { ssr: false }
)

gsap.registerPlugin(ScrollTrigger)

const panels = [
  {
    headline: 'Il tuo brand',
    em:       'non è un logo.',
    sub:      'È la somma di ogni promessa mantenuta — ogni parola, ogni scelta, ogni giorno.',
  },
  {
    headline: 'La maggior parte',
    em:       "si ferma all'estetica.",
    sub:      "Un'identità costruita sulla superficie crolla al primo cambio di tendenza.",
  },
  {
    headline: 'Costruiamo',
    em:       'qualcosa che dura.',
    sub:      "Sistema. Posizionamento. Voce. Un brand che sai spiegare è un brand che sai vendere.",
    cta:      true,
  },
]

export default function ScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      refs.forEach(r => gsap.set(r.current, { opacity: 0, y: 28 }))

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start:   'top top',
          end:     'bottom bottom',
          scrub:   0.6,
        },
      })

      // Panel 1: 0% – 28%  in,  28% – 38%  out
      tl.to(refs[0].current, { opacity: 1, y: 0, duration: 0.14 }, 0.00)
        .to(refs[0].current, { opacity: 0, y: -22, duration: 0.10 }, 0.27)

      // Panel 2: 35% – 55%  in,  55% – 65%  out
      tl.to(refs[1].current, { opacity: 1, y: 0, duration: 0.14 }, 0.35)
        .to(refs[1].current, { opacity: 0, y: -22, duration: 0.10 }, 0.57)

      // Panel 3: 65% – 85%  in,  stays visible
      tl.to(refs[2].current, { opacity: 1, y: 0, duration: 0.14 }, 0.65)
    }, containerRef)

    return () => ctx.revert()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      ref={containerRef}
      className="section-dark"
      style={{ height: '300vh', position: 'relative', background: '#0F0F13' }}
    >
      {/* Sticky viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
        }}
      >
        {/* ── Left — text panels ── */}
        <div style={{ position: 'relative', height: '100%' }}>
          {panels.map((p, i) => (
            <div
              key={i}
              ref={refs[i]}
              style={{
                position:  'absolute',
                top:       '50%',
                transform: 'translateY(-50%)',
                left:      'clamp(32px, 8vw, 120px)',
                right:     'clamp(24px, 4vw, 60px)',
              }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                  {String(i + 1).padStart(2, '0')} / 03
                </span>
              </div>

              <h2
                className="font-display"
                style={{
                  fontSize:   'clamp(2rem, 3.8vw, 3.4rem)',
                  fontWeight: 300,
                  lineHeight: 1.12,
                  color:      'var(--text-primary)',
                  marginBottom: '0.4rem',
                }}
              >
                {p.headline}
                <br />
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{p.em}</em>
              </h2>

              <p
                style={{
                  marginTop:  '1.4rem',
                  fontSize:   '0.92rem',
                  lineHeight: 1.8,
                  color:      'var(--text-muted)',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  maxWidth:   '42ch',
                }}
              >
                {p.sub}
              </p>

              {p.cta && (
                <a
                  href="#servizi"
                  className="cta-primary"
                  style={{ marginTop: '2.5rem', display: 'inline-flex' }}
                >
                  Scopri i servizi
                </a>
              )}
            </div>
          ))}
        </div>

        {/* ── Right — 3D canvas ── */}
        <div style={{ height: '100vh', position: 'relative' }}>
          <ScrollCanvas containerRef={containerRef} />
        </div>
      </div>
    </section>
  )
}
