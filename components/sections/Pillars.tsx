'use client'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

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
  return (
    <section
      id="servizi"
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 'clamp(80px, 10vw, 140px)',
        paddingBottom: 'clamp(80px, 10vw, 140px)',
      }}
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span style={{ display: 'block', width: '24px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
          <span style={{
            fontSize: '0.65rem',
            letterSpacing: '0.20em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'var(--font-inter)',
          }}>
            Cosa costruiamo insieme
          </span>
        </div>

        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            fontWeight: 300,
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          Non vendiamo servizi.{' '}
          <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>
            Costruiamo sistemi.
          </em>
        </h2>

        {/* Griglia card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.08)',
        }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4, background: '#181818' }}
              style={{
                background: '#111111',
                padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                transition: 'background 0.3s ease',
              }}
            >
              {/* Numero + tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.20em',
                  color: 'rgba(255,255,255,0.35)',
                  fontFamily: 'var(--font-inter)',
                }}>
                  {p.num}
                </span>
                <span style={{
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '0.2rem 0.55rem',
                  fontFamily: 'var(--font-inter)',
                }}>
                  {p.tag}
                </span>
              </div>

              {/* Divider */}
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)' }} />

              {/* Title */}
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
                  fontWeight: 300,
                  lineHeight: 1.3,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                  flexGrow: 1,
                }}
              >
                {p.href ? (
                  <Link href={p.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {p.title}
                  </Link>
                ) : p.title}
              </h3>

              {/* Body */}
              <p style={{
                fontSize: '0.85rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.5)',
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
                      fontSize: '0.58rem',
                      letterSpacing: '0.10em',
                      color: 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      padding: '0.18rem 0.5rem',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Arrow per card con link */}
              {p.href && (
                <div style={{ color: 'rgba(255,255,255,0.25)', marginTop: 'auto' }}>
                  <ArrowUpRight size={16} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
