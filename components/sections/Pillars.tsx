'use client'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
    body: "L'intelligenza artificiale non sostituisce la strategia: la amplifica. Ti insegno a usare gli strumenti giusti per produrre contenuti, analizzare il mercato e muoverti più veloce — senza perdere la tua voce.",
    tags: ['Strumenti AI', 'Content System', 'Automazioni'],
  },
  {
    num: '03',
    tag: 'La Tua Voce',
    title: 'Essere riconoscibili',
    body: "Non basta esserci. Serve che le persone sentano la tua voce e la riconoscano. Lavoriamo sul tono, sulle parole, sul ritmo della tua comunicazione — finché non diventa inequivocabilmente tua.",
    tags: ['Tono di voce', 'Copywriting', 'Content Strategy'],
  },
  {
    num: '04',
    tag: 'E-commerce',
    title: 'Vendere online non è aprire uno shop. È costruire un sistema.',
    body: 'Realizzo e-commerce su misura per PMI, artigiani e liberi professionisti. Dalla strategia alla messa online: piattaforma, identità visiva, schede prodotto che convertono, integrazione pagamenti.',
    tags: ['Shopify', 'WooCommerce', 'UX & Conversioni'],
  },
  {
    num: '05',
    tag: 'App',
    title: 'Un\'app che le persone usano davvero',
    body: 'Sviluppo applicazioni mobile e web per piccole e medie imprese e professionisti. Non template: soluzioni costruite intorno al tuo processo, al tuo cliente, alla tua identità.',
    tags: ['App Mobile', 'Web App', 'Gestionale su misura'],
  },
]

export default function Pillars() {
  const [hovered, setHovered] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section
      id="servizi"
      className="section-padding"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
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
                Cosa costruiamo insieme
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
              }}
            >
              Non vendiamo servizi.
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Costruiamo sistemi.</em>
            </h2>
          </div>
        </div>

        {/* Pillars grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
            border: '1px solid var(--border)',
            background: 'var(--border)',
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.num}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'var(--bg-card)' : 'var(--bg-surface)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'background 0.3s ease',
                cursor: 'default',
              }}
            >
              {/* Number + tag */}
              <div className="flex items-center justify-between">
                <span
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {p.num}
                </span>
                <span
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                    padding: '0.25rem 0.6rem',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {p.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: hovered === i ? 'var(--accent)' : 'var(--text-primary)',
                  transition: 'color 0.3s ease',
                }}
              >
                {p.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  flexGrow: 1,
                }}
              >
                {p.body}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      color: 'var(--text-muted)',
                      background: 'rgba(255,255,255,0.04)',
                      padding: '0.2rem 0.5rem',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                style={{
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? 'translateX(0)' : 'translateX(-8px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  color: 'var(--accent)',
                }}
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
