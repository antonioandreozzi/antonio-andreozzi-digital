'use client'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const GLBCanvas = dynamic(
  () => import('@/components/3d/GLBCanvas'),
  { ssr: false }
)

export default function GLBShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      style={{
        background:   'var(--bg-void)',
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow:     'hidden',
        position:     'relative',
      }}
    >
      {/* Gold ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position:     'absolute',
          top:          '50%',
          right:        '-10%',
          transform:    'translateY(-50%)',
          width:        'clamp(400px, 55vw, 800px)',
          height:       'clamp(400px, 55vw, 800px)',
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(200,145,58,0.09) 0%, transparent 65%)',
          pointerEvents:'none',
        }}
      />

      <div
        ref={ref}
        className="container-site"
        style={{
          display:   'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          alignItems: 'center',
          gap:        'clamp(3rem, 6vw, 8rem)',
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          opacity:    inView ? 1 : 0,
          transform:  inView ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        {/* Copy */}
        <div>
          <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
              Il metodo
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize:   'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color:      'var(--text-primary)',
              marginBottom: '2rem',
            }}
          >
            Strategia,
            <br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>non tattiche.</em>
          </h2>

          <p style={{ fontSize: '0.95rem', lineHeight: 1.82, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '48ch', marginBottom: '1.4rem' }}>
            Non esiste un template universale per costruire un brand. Esiste un processo:
            capire chi sei, definire a chi parli, costruire il sistema che ti rende inconfondibile.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.82, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '48ch' }}>
            Ogni progetto parte da una diagnosi. Ogni decisione poggia su una strategia.
            Ogni output riflette la tua voce — non quella di un template.
          </p>

          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#contatti" className="cta-primary">Iniziamo</a>
            <a href="#chi-sono" className="cta-ghost">Chi sono</a>
          </div>
        </div>

        {/* 3D object */}
        <div
          style={{
            height:     'clamp(380px, 50vw, 560px)',
            position:   'relative',
            cursor:     'grab',
          }}
        >
          {/* Hint drag */}
          <p
            style={{
              position:   'absolute',
              bottom:     '1rem',
              left:       '50%',
              transform:  'translateX(-50%)',
              fontSize:   '0.6rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color:      'rgba(200,145,58,0.5)',
              fontFamily: 'var(--font-inter)',
              zIndex:     10,
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Trascina per ruotare
          </p>
          <GLBCanvas />
        </div>
      </div>
    </section>
  )
}
