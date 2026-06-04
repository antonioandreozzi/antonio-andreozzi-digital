'use client'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown } from 'lucide-react'
import SplitHeadline from '@/components/shared/SplitHeadline'

gsap.registerPlugin(ScrollTrigger)
const BrandSphere = dynamic(() => import('../3d/BrandSphere'), { ssr: false })

export default function Hero() {
  const kickerRef  = useRef<HTMLSpanElement>(null)
  const subRef     = useRef<HTMLParagraphElement>(null)
  const ctaRef     = useRef<HTMLDivElement>(null)
  const arrowRef   = useRef<HTMLDivElement>(null)
  const sphereRef  = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax sulla sfera — si muove più lentamente del contenuto
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
        // Kicker entra per primo
        .from(kickerRef.current, {
          opacity: 0,
          y: 16,
          duration: 0.7,
          ease: 'power2.out',
        })
        // Sottotitolo — dopo il titolo (il titolo anima da solo tramite SplitHeadline)
        .from(subRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.75,
          ease: 'power2.out',
        }, '+=0.3')
        // CTA
        .from(ctaRef.current, {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.4')
        // Freccia scroll
        .from(arrowRef.current, {
          opacity: 0,
          duration: 0.5,
        }, '-=0.2')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-void)' }}
    >
      {/* 3D sphere — sfondo con parallax */}
      <div
        ref={sphereRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.58, willChange: 'transform' }}
        aria-hidden="true"
      >
        <BrandSphere />
      </div>

      {/* Maschera radiale — testo leggibile */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 65% 50%, transparent 15%, var(--bg-void) 65%)',
        }}
      />
      {/* Fade bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '200px', background: 'linear-gradient(to top, var(--bg-void), transparent)' }}
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
            <span style={{ display: 'block', width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontSize:      '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color:         'var(--accent)',
              fontWeight:    500,
            }}>
              Agenzia Marketing · Caserta
            </span>
          </span>

          {/* Headline animata parola per parola */}
          <SplitHeadline
            tag="h1"
            text="Il Tuo Brand Vale Quanto Riesci a Farlo Capire."
            accentWords={['Quanto Riesci']}
            delay={0.5}
            style={{
              fontSize:     'clamp(2.8rem, 7vw, 6rem)',
              lineHeight:   1.04,
              fontWeight:   300,
              color:        'var(--text-primary)',
              letterSpacing:'-0.01em',
              marginBottom: '2rem',
            }}
          />

          {/* Sottotitolo */}
          <p
            ref={subRef}
            style={{
              fontSize:      'clamp(1rem, 1.5vw, 1.2rem)',
              lineHeight:    1.75,
              color:         'var(--text-muted)',
              maxWidth:      '520px',
              fontFamily:    'var(--font-inter)',
              fontWeight:    300,
              marginBottom:  '3rem',
              opacity:       0,
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
        style={{ color: 'var(--text-muted)', opacity: 0 }}
        aria-hidden="true"
      >
        <ArrowDown size={18} />
      </div>
    </section>
  )
}
