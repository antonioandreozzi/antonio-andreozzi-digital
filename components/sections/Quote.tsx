'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Quote() {
  const sectionRef = useRef<HTMLElement>(null)
  const quoteRef   = useRef<HTMLParagraphElement>(null)
  const citeRef    = useRef<HTMLElement>(null)
  const lineRef    = useRef<HTMLDivElement>(null)
  const bgRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax sul gradient di sfondo
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Quote — fade + slide da sotto
      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      // Linea separatore cresce da centro
      gsap.from(lineRef.current, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: citeRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      // Citazione autore
      gsap.from(citeRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: citeRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        background:   'var(--bg-void)',
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position:     'relative',
        overflow:     'hidden',
      }}
    >
      {/* Gradient parallax di sfondo */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position:     'absolute',
          top:          '-30%',
          left:         '50%',
          transform:    'translateX(-50%)',
          width:        'clamp(400px, 80vw, 900px)',
          height:       'clamp(400px, 80vw, 900px)',
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(200,145,58,0.06) 0%, transparent 65%)',
          pointerEvents:'none',
          willChange:   'transform',
        }}
      />

      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Virgolette decorative */}
          <div
            className="font-display"
            style={{
              fontSize:    'clamp(4rem, 8vw, 7rem)',
              lineHeight:  0.6,
              color:       'var(--accent)',
              opacity:     0.2,
              marginBottom:'2rem',
              fontWeight:  300,
            }}
            aria-hidden="true"
          >
            "
          </div>

          <blockquote>
            <p
              ref={quoteRef}
              className="font-display"
              style={{
                fontSize:     'clamp(1.5rem, 3.5vw, 2.8rem)',
                fontWeight:   300,
                lineHeight:   1.35,
                color:        'var(--text-primary)',
                fontStyle:    'italic',
                marginBottom: '2.5rem',
              }}
            >
              Non si tratta di come appari nel mercato.
              <br />
              Si tratta di{' '}
              <em style={{ color:'var(--accent)', fontStyle:'normal', fontWeight:600 }}>
                cosa sei veramente.
              </em>
            </p>

            <footer>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'1rem' }}>
                <div
                  ref={lineRef}
                  style={{
                    display:         'block',
                    width:           '32px',
                    height:          '1px',
                    background:      'var(--accent)',
                    opacity:         0.6,
                    transformOrigin: '0% 50%',
                  }}
                />
                <cite
                  ref={citeRef}
                  style={{
                    fontSize:      '0.7rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color:         'var(--text-muted)',
                    fontFamily:    'var(--font-inter)',
                    fontStyle:     'normal',
                    fontWeight:    500,
                  }}
                >
                  Ryan Holiday
                </cite>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
