'use client'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import ParallaxImage from '@/components/shared/ParallaxImage'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section id="chi-sono" className="section-padding" style={{ background: 'var(--bg-void)' }}>
      <div className="container-site">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <ParallaxImage
              speed={0.2}
              style={{ aspectRatio: '4/5', border: '1px solid var(--border)' }}
            >
              <Image
                src="/antonio.jpg"
                alt="Antonio Andreozzi, consulente brand strategy e marketing digitale a Caserta"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(9,9,11,0.75), transparent)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '0.3rem' }}>
                  Antonio Andreozzi
                </p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(237,232,223,0.7)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                  Marketing Strategist · Caserta
                </p>
              </div>
            </ParallaxImage>

            {/* Decorative corner */}
            <div
              style={{ position: 'absolute', top: '-16px', left: '-16px', width: '48px', height: '48px', border: '1px solid var(--accent)', opacity: 0.25 }}
              aria-hidden="true"
            />
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-10">
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
                Chi sono
              </span>
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
              }}
            >
              Ciao,
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>sono Antonio.</em>
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
              }}
            >
              <p>
                Aiuto imprenditori italiani, professionisti e freelancer a costruire brand
                che durano. Non vendo servizi singoli: costruisco sistemi. Identità che
                funzionano perché partono da chi sei, non da come vuoi apparire.
              </p>
              <p>
                Ho visto troppi brand spendere budget su campagne che portano visite ma non
                clienti. Il problema non era il budget. Era la forma — la mancanza di un
                posizionamento chiaro, di una voce riconoscibile, di un sistema coerente.
              </p>
              <p>
                Il mio approccio: niente tattiche del mese, niente scorciatoie. Solo lavoro
                profondo sulla tua identità e sul tuo messaggio. Perché un brand che non
                riesci a spiegare, non riesci neanche a vendere.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#servizi" className="cta-primary">
                I miei servizi
              </a>
              <a href="#contatti" className="cta-ghost">
                Parliamo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
