'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    num: '01',
    tag: 'Brand',
    title: 'Come si costruisce un brand che dura',
    body: 'Il brand non è il logo. È la somma di ogni promessa mantenuta. Ti aiuto a definire il tuo posizionamento, la tua voce e il sistema visivo e narrativo che ti rende inconfondibile nel tempo.',
    tags: ['Posizionamento', 'Brand Identity', 'Messaging'],
  },
  {
    num: '02',
    tag: 'AI',
    title: 'AI per chi pensa, non per chi ripete',
    body: "L'intelligenza artificiale non sostituisce la strategia: la amplifica. Ti insegno a usare gli strumenti giusti per produrre contenuti, analizzare il mercato e muoverti più veloce.",
    tags: ['Strumenti AI', 'Content System', 'Automazioni'],
  },
  {
    num: '03',
    tag: 'La Tua Voce',
    title: 'Essere riconoscibili',
    body: "Non basta esserci. Serve che le persone sentano la tua voce e la riconoscano. Lavoriamo sul tono, sulle parole, sul ritmo della tua comunicazione.",
    tags: ['Tono di voce', 'Copywriting', 'Content Strategy'],
  },
  {
    num: '04',
    tag: 'E-commerce',
    title: 'Vendere online non è aprire uno shop. È costruire un sistema.',
    body: 'Realizzo e-commerce su misura per PMI, artigiani e liberi professionisti. Dalla strategia alla messa online: identità visiva, schede prodotto, integrazione pagamenti.',
    tags: ['Shopify', 'WooCommerce', 'UX & Conversioni'],
  },
  {
    num: '05',
    tag: 'App',
    title: "Un'app che le persone usano davvero",
    body: 'Sviluppo applicazioni mobile e web per piccole e medie imprese e professionisti. Non template: soluzioni costruite intorno al tuo processo e alla tua identità.',
    tags: ['App Mobile', 'Web App', 'Gestionale su misura'],
  },
  {
    num: '06',
    tag: 'Integrazione AI',
    title: "L'AI nei tuoi processi, senza perdere la tua voce",
    body: "Integro strumenti di intelligenza artificiale nelle PMI italiane. Automazioni, content system, workflow su misura. AI applicata al tuo business reale.",
    tags: ['Automazioni AI', 'Content System', 'Workflow'],
  },
  {
    num: '07',
    tag: 'Chatbot AI',
    title: 'Un assistente che lavora per te 24 ore su 24',
    body: "Costruisco chatbot AI su misura per PMI e professionisti. Rispondono ai clienti in tempo reale, qualificano i lead, gestiscono le domande frequenti.",
    tags: ['Customer Support AI', 'Lead Generation', 'Vendite'],
    href: '/chatbot-ai',
  },
  {
    num: '08',
    tag: 'Video Agency',
    title: 'Reels, TikTok e Shorts che fermano lo scroll',
    body: 'Produco video brevi per brand e professionisti: Reels Instagram, TikTok, YouTube Shorts. Hook studiati, montaggio veloce, contenuti pronti da pubblicare.',
    tags: ['Reels Instagram', 'TikTok', 'YouTube Shorts'],
    href: '/short-video',
  },
]

export default function Pillars() {
  const containerRef = useRef<HTMLElement>(null)
  const stripRef     = useRef<HTMLDivElement>(null)
  const headRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const strip     = stripRef.current
      const container = containerRef.current
      if (!strip || !container) return

      // Head fade in
      gsap.from(headRef.current, {
        y: 24, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true },
      })

      // Aspetta che il DOM sia stabile prima di misurare
      const setup = () => {
        const totalScroll = strip.scrollWidth - window.innerWidth

        gsap.to(strip, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start:   'top top',
            end:     `+=${totalScroll}`,
            pin:     true,
            scrub:   1.2,
            anticipatePin: 1,
          },
        })

        // Card stagger — rivelazione mentre entrano
        const cards = strip.querySelectorAll<HTMLElement>('.pillar-card')
        gsap.from(cards, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            once:  true,
          },
        })
      }

      // Piccolo delay per lasciare che GSAP misuri correttamente
      setTimeout(setup, 100)
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="servizi"
      style={{
        background: 'var(--bg-void)',
        overflow: 'hidden',
        borderTop: '1px solid var(--line)',
      }}
    >
      {/* Header — visibile prima dello scroll orizzontale */}
      <div
        ref={headRef}
        className="container-site"
        style={{
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: '4rem',
        }}
      >
        <div className="flex items-center gap-3 mb-5">
          <span style={{ display: 'block', width: '24px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'var(--dim)',
              fontFamily: 'var(--font-inter)',
            }}
          >
            Cosa costruiamo insieme
          </span>
        </div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2
            className="font-display"
            style={{
              fontSize:      'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight:    300,
              color:         '#FFFFFF',
              lineHeight:    1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Non vendiamo servizi.{' '}
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>
              Costruiamo sistemi.
            </em>
          </h2>
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              color: 'var(--dim)',
              fontFamily: 'var(--font-inter)',
            }}
          >
            Scorri →
          </span>
        </div>
      </div>

      {/* Strip orizzontale */}
      <div
        ref={stripRef}
        style={{
          display:    'flex',
          alignItems: 'stretch',
          paddingLeft:  'clamp(20px, 4.5vw, 64px)',
          paddingRight: '80px',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          gap: '1px',
          background: 'var(--line)',
          width: 'max-content',
        }}
      >
        {pillars.map((p) => (
          <div
            key={p.num}
            className="pillar-card"
            style={{
              width:          'clamp(300px, 33vw, 420px)',
              flexShrink:     0,
              background:     'var(--ink)',
              padding:        'clamp(2rem, 3vw, 2.5rem)',
              display:        'flex',
              flexDirection:  'column',
              gap:            '1.5rem',
              borderRight:    '1px solid var(--line)',
              transition:     'background 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink-2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
          >
            {/* Numero + tag */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                fontSize: '0.62rem',
                letterSpacing: '0.20em',
                color: 'var(--dim)',
                fontFamily: 'var(--font-inter)',
              }}>
                {p.num}
              </span>
              <span style={{
                fontSize: '0.58rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                border: '1px solid var(--line)',
                padding: '0.2rem 0.55rem',
                fontFamily: 'var(--font-inter)',
              }}>
                {p.tag}
              </span>
            </div>

            {/* Divider */}
            <div style={{ width: '100%', height: '1px', background: 'var(--line)' }} />

            {/* Title */}
            <h3
              className="font-display"
              style={{
                fontSize:      'clamp(1.2rem, 1.8vw, 1.55rem)',
                fontWeight:    300,
                lineHeight:    1.3,
                color:         '#FFFFFF',
                letterSpacing: '-0.01em',
                flexGrow:      1,
              }}
            >
              {(p as { href?: string }).href ? (
                <Link href={(p as { href?: string }).href!} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {p.title}
                </Link>
              ) : p.title}
            </h3>

            {/* Body */}
            <p style={{
              fontSize:   '0.85rem',
              lineHeight: 1.75,
              color:      'var(--dim)',
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
            }}>
              {p.body}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize:   '0.58rem',
                    letterSpacing: '0.10em',
                    color:      'var(--dim)',
                    border:     '1px solid var(--line)',
                    padding:    '0.18rem 0.5rem',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Arrow */}
            {(p as { href?: string }).href && (
              <div style={{ color: 'rgba(255,255,255,0.3)', marginTop: 'auto' }}>
                <ArrowUpRight size={16} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
