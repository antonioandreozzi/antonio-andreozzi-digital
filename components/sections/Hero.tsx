'use client'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown } from 'lucide-react'
import SplitHeadline from '@/components/shared/SplitHeadline'

gsap.registerPlugin(ScrollTrigger)
const BrandSphere = dynamic(() => import('../3d/BrandSphere'), { ssr: false })

const ROTATOR_PHRASES = [
  'Brand che durano.',
  'Identità autentiche.',
  'Sistemi che scalano.',
  'Voci riconoscibili.',
  'Posizionamento netto.',
]

export default function Hero() {
  const kickerRef   = useRef<HTMLSpanElement>(null)
  const subRef      = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const arrowRef    = useRef<HTMLDivElement>(null)
  const sphereRef   = useRef<HTMLDivElement>(null)
  const sectionRef  = useRef<HTMLElement>(null)
  const rotatorRef  = useRef<HTMLSpanElement>(null)
  const [phraseIdx, setPhraseIdx] = useState(0)

  // Text rotator
  useEffect(() => {
    const el = rotatorRef.current
    if (!el) return

    const interval = setInterval(() => {
      // Out
      gsap.to(el, {
        yPercent: -110,
        opacity: 0,
        duration: 0.45,
        ease: 'power3.in',
        onComplete: () => {
          setPhraseIdx(i => (i + 1) % ROTATOR_PHRASES.length)
          gsap.fromTo(el,
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }
          )
        },
      })
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        gsap.to(sphereRef.current, {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      gsap.timeline({ delay: 0.15 })
        .from(kickerRef.current, { opacity: 0, y: 16, duration: 0.7, ease: 'power2.out' })
        .from(subRef.current,   { opacity: 0, y: 20, duration: 0.75, ease: 'power2.out' }, '+=0.3')
        .from(ctaRef.current,   { opacity: 0, y: 16, duration: 0.6,  ease: 'power2.out' }, '-=0.4')
        .from(arrowRef.current, { opacity: 0, duration: 0.5 }, '-=0.2')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="section-dark relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* 3D sphere */}
      <div
        ref={sphereRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.70, willChange: 'transform' }}
        aria-hidden="true"
      >
        <BrandSphere />
      </div>

      {/* Maschera radiale */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 65% 50%, transparent 20%, rgba(9,8,14,0.75) 65%)',
        }}
      />
      {/* Fade bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '220px', background: 'linear-gradient(to top, #09080E, transparent)' }}
        aria-hidden="true"
      />

      {/* Contenuto */}
      <div className="container-site relative z-10 pt-28 pb-24 md:pt-36">
        <div className="max-w-3xl">

          {/* Kicker */}
          <span
            ref={kickerRef}
            className="inline-flex items-center gap-3 mb-8"
            style={{ fontFamily: 'var(--font-inter)', opacity: 0 }}
          >
            <span style={{ display: 'block', width: '32px', height: '1px', background: 'var(--volt)' }} />
            <span style={{
              fontSize: '0.63rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--volt)',
              fontWeight: 600,
            }}>
              Brand Strategy · Marketing · Caserta
            </span>
          </span>

          {/* Headline animata */}
          <SplitHeadline
            tag="h1"
            text="Il Tuo Brand Vale Quanto Riesci a Farlo Capire."
            accentWords={['Quanto Riesci']}
            delay={0.5}
            style={{
              fontSize:      'clamp(2.8rem, 7vw, 6rem)',
              lineHeight:    1.04,
              fontWeight:    300,
              color:         'var(--paper)',
              letterSpacing: '-0.01em',
              marginBottom:  '1.4rem',
            }}
          />

          {/* Text rotator — stile francescosaviano */}
          <div
            style={{
              overflow: 'hidden',
              height: 'clamp(2.2rem, 4vw, 3.2rem)',
              marginBottom: '2.2rem',
            }}
          >
            <span
              ref={rotatorRef}
              style={{
                display: 'block',
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                lineHeight: 1.15,
                color: 'var(--volt)',
                letterSpacing: '-0.01em',
              }}
            >
              {ROTATOR_PHRASES[phraseIdx]}
            </span>
          </div>

          {/* Sottotitolo */}
          <p
            ref={subRef}
            style={{
              fontSize:     'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight:   1.75,
              color:        'var(--dim)',
              maxWidth:     '500px',
              fontFamily:   'var(--font-inter)',
              fontWeight:   300,
              marginBottom: '3rem',
              opacity:      0,
            }}
          >
            Costruiamo brand, sistemi e identità per imprenditori italiani,
            professionisti e freelancer che hanno scelto di non assomigliare a nessuno.
          </p>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4"
            style={{ opacity: 0 }}
          >
            <a href="/lavora-con-me" className="cta-primary">
              Lavora con me
            </a>
            <a href="/chi-sono" className="cta-ghost">
              Chi sono
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={arrowRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-bounce"
        style={{ color: 'var(--dim)', opacity: 0 }}
        aria-hidden="true"
      >
        <ArrowDown size={18} />
      </div>
    </section>
  )
}
