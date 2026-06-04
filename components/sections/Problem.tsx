'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitHeadline from '@/components/shared/SplitHeadline'

gsap.registerPlugin(ScrollTrigger)

const points = [
  { n: '01', title: 'Sembrano tutti uguali',    body: 'Stesso tono, stesse promesse, stesse parole. Il mercato non ricorda chi non ha carattere.' },
  { n: '02', title: 'Competono sul prezzo',     body: "Quando non sai spiegare il tuo valore, l'unica leva rimasta è abbassare il prezzo. È una guerra che non puoi vincere." },
  { n: '03', title: 'Inseguono le tendenze',    body: 'Un brand costruito sulle tattiche del mese è un brand che non esiste il mese dopo. Serve un sistema, non un trucco.' },
]

export default function Problem() {
  const sectionRef  = useRef<HTMLElement>(null)
  const line1Ref    = useRef<HTMLDivElement>(null)
  const line2Ref    = useRef<HTMLDivElement>(null)
  const curtain1Ref = useRef<HTMLDivElement>(null)
  const curtain2Ref = useRef<HTMLDivElement>(null)
  const pointsRef   = useRef<HTMLDivElement>(null)
  const spotRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Spotlight che si espande come un proiettore cinematico
      gsap.fromTo(spotRef.current, {
        opacity: 0,
        scale: 0.3,
      }, {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })

      // Linea 1 — curtain scorre da destra a sinistra (rivela il testo)
      gsap.fromTo(curtain1Ref.current,
        { scaleX: 1, transformOrigin: '100% 50%' },
        {
          scaleX: 0,
          duration: 1.0,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: line1Ref.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Linea 2 — curtain con delay
      gsap.fromTo(curtain2Ref.current,
        { scaleX: 1, transformOrigin: '100% 50%' },
        {
          scaleX: 0,
          duration: 1.0,
          ease: 'power3.inOut',
          delay: 0.3,
          scrollTrigger: {
            trigger: line2Ref.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Cards punti — entrano in stagger
      gsap.from(pointsRef.current?.children ?? [], {
        opacity: 0,
        y: 32,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: pointsRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="problema"
      className="section-padding"
      style={{
        background:   'var(--bg-surface)',
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position:     'relative',
        overflow:     'hidden',
      }}
    >
      {/* Spotlight cinematico */}
      <div
        ref={spotRef}
        aria-hidden="true"
        style={{
          position:     'absolute',
          top:          '-20%',
          left:         '50%',
          transform:    'translateX(-50%)',
          width:        'clamp(300px, 60vw, 700px)',
          height:       'clamp(300px, 60vw, 700px)',
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(200,145,58,0.07) 0%, transparent 70%)',
          pointerEvents:'none',
          opacity:      0,
        }}
      />

      <div className="container-site relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-16">
          <span style={{ display:'block', width:'24px', height:'1px', background:'var(--accent)' }} />
          <span style={{ fontSize:'0.65rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--accent)', fontWeight:500, fontFamily:'var(--font-inter)' }}>
            Il problema reale
          </span>
        </div>

        {/* Statement line 1 — reveal cinematico */}
        <div
          ref={line1Ref}
          style={{ position:'relative', display:'inline-block', marginBottom:'0.4rem', overflow:'hidden' }}
        >
          <p
            className="font-display"
            style={{
              fontSize:   'clamp(1.8rem, 4.5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color:      'var(--text-primary)',
              margin:     0,
            }}
          >
            Le imprese italiane non hanno
            <br className="hidden sm:block" />
            {' '}un problema di visibilità.
          </p>
          {/* Curtain */}
          <div
            ref={curtain1Ref}
            aria-hidden="true"
            style={{
              position:   'absolute',
              inset:      0,
              background: 'var(--bg-surface)',
              zIndex:     2,
              transformOrigin: '100% 50%',
            }}
          />
        </div>

        {/* Statement line 2 — accent */}
        <div
          ref={line2Ref}
          style={{ position:'relative', display:'inline-block', marginBottom:'4rem', overflow:'hidden' }}
        >
          <p
            className="font-display"
            style={{
              fontSize:   'clamp(1.8rem, 4.5vw, 4rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              color:      'var(--accent)',
              fontStyle:  'italic',
              margin:     0,
            }}
          >
            Hanno un problema di forma.
          </p>
          {/* Curtain accent */}
          <div
            ref={curtain2Ref}
            aria-hidden="true"
            style={{
              position:   'absolute',
              inset:      0,
              background: 'var(--bg-surface)',
              zIndex:     2,
              transformOrigin: '100% 50%',
            }}
          />
        </div>

        {/* 3 punti */}
        <div
          ref={pointsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{ border:'1px solid var(--border)', background:'var(--border)' }}
        >
          {points.map((p) => (
            <div
              key={p.n}
              style={{
                background: 'var(--bg-surface)',
                padding:    'clamp(1.5rem, 3vw, 2.5rem)',
              }}
            >
              <span style={{ fontSize:'0.6rem', letterSpacing:'0.2em', color:'var(--accent)', fontFamily:'var(--font-inter)', display:'block', marginBottom:'1rem' }}>
                {p.n}
              </span>
              <h3
                className="font-display"
                style={{ fontSize:'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight:400, color:'var(--text-primary)', marginBottom:'0.75rem' }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize:'0.88rem', lineHeight:1.75, color:'var(--text-muted)', fontFamily:'var(--font-inter)', fontWeight:300 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
