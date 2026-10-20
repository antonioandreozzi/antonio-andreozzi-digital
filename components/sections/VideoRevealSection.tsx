'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  videoSrc: string
  label?: string
  headline: string
  sub?: string
}

export default function VideoRevealSection({ videoSrc, label, headline, sub }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stickyRef  = useRef<HTMLDivElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const sticky  = stickyRef.current
    const video   = videoRef.current
    const text    = textRef.current
    if (!wrapper || !sticky || !video || !text) return

    // Fase 1: clip-path circle si espande da 8% a 150%
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start:   'top top',
        end:     'bottom bottom',
        scrub:   1.5,
      },
    })

    tl.fromTo(
      video,
      { clipPath: 'circle(8% at 50% 50%)', scale: 1.08 },
      { clipPath: 'circle(80% at 50% 50%)', scale: 1.0, ease: 'none', duration: 0.5 }
    )
    .to(
      video,
      { clipPath: 'circle(150% at 50% 50%)', ease: 'none', duration: 0.5 },
    )
    .fromTo(
      text,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, ease: 'power2.out', duration: 0.35 },
      '-=0.2'
    )

    return () => ScrollTrigger.getAll().forEach(t => {
      if (t.vars.trigger === wrapper) t.kill()
    })
  }, [])

  return (
    /* Wrapper alto — dà spazio per lo scroll */
    <div ref={wrapperRef} style={{ height: '320vh', position: 'relative' }}>

      {/* Sticky container — rimane fermo mentre scorri */}
      <div
        ref={stickyRef}
        style={{
          position:  'sticky',
          top:       0,
          height:    '100vh',
          width:     '100%',
          overflow:  'hidden',
          display:   'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0A',
        }}
      >
        {/* Video che esplode */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{
            position:  'absolute',
            inset:     0,
            width:     '100%',
            height:    '100%',
            objectFit: 'cover',
            clipPath:  'circle(8% at 50% 50%)',
            willChange: 'clip-path',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Overlay leggero sul video aperto */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:      0,
            background: 'rgba(0,0,0,0.45)',
            pointerEvents: 'none',
          }}
        />

        {/* Testo centrato — appare mentre il video si apre */}
        <div
          ref={textRef}
          style={{
            position:  'relative',
            zIndex:    10,
            textAlign: 'center',
            maxWidth:  '720px',
            padding:   '0 2rem',
            opacity:   0,
          }}
        >
          {label && (
            <div className="flex items-center justify-center gap-3 mb-6">
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
              <span style={{
                fontSize:      '0.6rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color:         'rgba(255,255,255,0.45)',
                fontFamily:    'var(--font-inter)',
              }}>
                {label}
              </span>
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
            </div>
          )}

          <h2
            className="font-display"
            style={{
              fontSize:      'clamp(2.2rem, 5.5vw, 5rem)',
              fontWeight:    300,
              lineHeight:    1.08,
              color:         '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom:  sub ? '1.5rem' : 0,
            }}
            dangerouslySetInnerHTML={{ __html: headline }}
          />

          {sub && (
            <p style={{
              fontSize:   'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.75,
              color:      'rgba(255,255,255,0.55)',
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              maxWidth:   '520px',
              margin:     '0 auto',
            }}>
              {sub}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
