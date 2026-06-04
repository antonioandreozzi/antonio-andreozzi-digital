'use client'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section
      id="contatti"
      className="section-padding"
      style={{
        background: 'var(--bg-void)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container-site">
        <div
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontWeight: 500,
                fontFamily: 'var(--font-inter)',
              }}
            >
              Iniziamo
            </span>
            <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
          </div>

          {/* Headline */}
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}
          >
            Prenota{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>20 minuti</em>
            <br />
            gratuiti.
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              maxWidth: '480px',
              margin: '0 auto 3rem',
            }}
          >
            Nessun impegno. Nessuna vendita. Solo una conversazione per capire
            dove sei, dove vuoi arrivare, e cosa ti blocca.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/lavora-con-me"
              className="cta-primary"
            >
              <Mail size={14} />
              Scrivimi
            </a>
            <a
              href="/lavora-con-me"
              className="cta-ghost"
            >
              Scopri i servizi
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Email visible */}
          <p
            style={{
              marginTop: '2.5rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-inter)',
              letterSpacing: '0.06em',
            }}
          >
            antonioandreozzidigital@gmail.com
          </p>
        </div>
      </div>
    </section>
  )
}
