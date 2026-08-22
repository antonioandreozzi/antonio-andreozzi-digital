import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Consulenza Brand e Marketing — Lavora con Antonio Andreozzi',
  description:
    'Consulenza brand strategy 1:1 per imprenditori italiani, PMI e professionisti. Diagnosi, Progetto, Sistema e Cattedrale: quattro percorsi per costruire un brand che comunica quanto vali.',
}

const services = [
  {
    code:    'DIAGNOSI',
    price:   '€497',
    format:  'Sessione unica 1:1 · 3 ore',
    tagline: 'Capisci dove sei e cosa fare subito.',
    body:    '3 ore per capire cosa non funziona nel tuo posizionamento e ricevere un piano scritto di priorità. Il punto di ingresso naturale.',
    href:    '/diagnosi',
    spots:   '2 posti disponibili questo mese',
  },
  {
    code:    'PROGETTO',
    price:   '€3.500',
    format:  'Percorso 1:1 · 8 settimane',
    tagline: 'Costruiamo il tuo brand da zero.',
    body:    '6 sessioni 1:1, posizionamento, voce, sistema editoriale. Tutto consegnato in un manuale operativo finale.',
    href:    '/progetto',
    spots:   '3 posti disponibili questo mese',
  },
  {
    code:    'SISTEMA',
    price:   '€9.000',
    format:  'Accompagnamento 1:1 · 6 mesi',
    tagline: 'Brand Architecture completa.',
    body:    '12 sessioni, revisioni continue, dashboard mensile. Identità, posizionamento, voce, contenuti, sistema commerciale.',
    href:    '/sistema',
    spots:   'Max 3 clienti in parallelo',
  },
  {
    code:    'CATTEDRALE',
    price:   'Su misura',
    format:  'Progetto annuale · 12 mesi',
    tagline: 'La trasformazione completa.',
    body:    'Accompagnamento continuativo per 12 mesi. Identità, strategia, cultura, comunicazione, sistema commerciale. Max 2 clienti/anno.',
    href:    '/cattedrale',
    spots:   'Max 2 clienti/anno',
  },
]

export default function LavoraConMe() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero section — consulenza */}
        <section
          style={{
            paddingTop: 'clamp(120px, 14vw, 180px)',
            paddingBottom: 'clamp(60px, 8vw, 100px)',
            background: 'var(--bg-void)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

              {/* Left: copy */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-8">
                  <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: 'var(--font-inter)' }}>
                    Lavora con me
                  </span>
                </div>

                <h1
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                    fontWeight: 300,
                    lineHeight: 1.06,
                    color: 'var(--text-primary)',
                    marginBottom: '1.5rem',
                  }}
                >
                  Le aziende italiane
                  <br />
                  non hanno un problema
                  <br />
                  di marketing.
                  <br />
                  <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                    Hanno un problema di brand.
                  </em>
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                    lineHeight: 1.75,
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    maxWidth: '520px',
                    marginBottom: '3rem',
                  }}
                >
                  Aiuto imprenditori di PMI e liberi professionisti a costruire un brand
                  che vale quanto vale la loro attività. Per chi ha qualcosa di reale da
                  comunicare e non sa ancora come farlo al livello che merita.
                </p>

                {/* Per chi è / Non fa per te */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.2rem' }}>
                      Fa per te se
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {[
                        'La tua attività funziona bene — ma il mercato non la percepisce per quello che vale.',
                        'Hai già investito in marketing. Non ha cambiato niente di strutturale.',
                        'Vedi competitor più piccoli con un brand più forte del tuo.',
                        'Sai che manca qualcosa — ma non sai esattamente cosa.',
                      ].map((item) => (
                        <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.1rem', fontSize: '0.8rem' }}>→</span>
                          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.2rem', opacity: 0.7 }}>
                      Non fa per te se
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {[
                        'Cerchi qualcuno che "faccia marketing" senza costruire le fondamenta.',
                        'Vuoi risultati in 30 giorni senza lavorare sull\'identità.',
                        'Non sei pronto a mettere in discussione come ti stai presentando al mercato.',
                      ].map((item) => (
                        <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: '0.1rem', fontSize: '0.8rem', opacity: 0.5 }}>✕</span>
                          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, opacity: 0.6 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: photo */}
              <div className="lg:col-span-5">
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/5',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                  }}
                >
                  <Image
                    src="/antonio.jpg"
                    alt="Antonio Andreozzi, consulente brand strategy e marketing digitale a Caserta"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  {/* Subtle gradient overlay bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '35%',
                      background: 'linear-gradient(to top, rgba(9,9,11,0.7), transparent)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                      Antonio Andreozzi
                    </p>
                    <p style={{ fontSize: '0.72rem', color: 'rgba(237,232,223,0.7)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      Marketing Strategist · Parete, CE
                    </p>
                  </div>
                </div>

                {/* Contact quick */}
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  {[
                    { label: 'Email',    value: 'antonioandreozzidigital@gmail.com' },
                    { label: 'Tel',      value: '+39 333 434 2510' },
                    { label: 'Indirizzo', value: 'Via G. Corrado, 11 – Parete (CE)' },
                  ].map((c) => (
                    <div key={c.label} style={{ display: 'flex', gap: '1rem' }}>
                      <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, minWidth: '60px', paddingTop: '0.1rem' }}>{c.label}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mappa */}
        <section
          style={{
            background:   'var(--bg-void)',
            borderTop:    '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* Info */}
              <div
                className="lg:col-span-4"
                style={{
                  padding:        'clamp(2rem, 5vw, 4rem) 0',
                  paddingRight:   'clamp(2rem, 4vw, 3rem)',
                  borderRight:    '1px solid var(--border)',
                  display:        'flex',
                  flexDirection:  'column',
                  justifyContent: 'center',
                  gap:            '2rem',
                }}
              >
                <div>
                  <p style={{ fontSize:'0.65rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--accent)', fontFamily:'var(--font-inter)', fontWeight:500, marginBottom:'1rem' }}>
                    Dove siamo
                  </p>
                  <p className="font-display" style={{ fontSize:'clamp(1.4rem, 2.5vw, 2rem)', fontWeight:300, lineHeight:1.2, color:'var(--text-primary)' }}>
                    Parete, Caserta.
                    <br />
                    <em style={{ color:'var(--accent)', fontStyle:'italic' }}>Lavoriamo in tutta Italia.</em>
                  </p>
                </div>

                <div style={{ display:'flex', flexDirection:'column', gap:'1.2rem' }}>
                  {[
                    { label:'Indirizzo', value:'Via G. Corrado, 11 – 81030 Parete (CE)' },
                    { label:'Email',     value:'antonioandreozzidigital@gmail.com' },
                    { label:'Telefono',  value:'+39 333 434 2510' },
                    { label:'Modalità',  value:'In presenza e da remoto in tutta Italia' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p style={{ fontSize:'0.6rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--accent)', fontFamily:'var(--font-inter)', fontWeight:500, marginBottom:'0.2rem' }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize:'0.85rem', color:'var(--text-muted)', fontFamily:'var(--font-inter)', fontWeight:300, lineHeight:1.6 }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://maps.google.com/?q=Via+G.+Corrado+11+Parete+CE+Italia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-ghost"
                  style={{ alignSelf:'flex-start' }}
                >
                  Apri su Google Maps →
                </a>
              </div>

              {/* Mappa embed */}
              <div
                className="lg:col-span-8"
                style={{ position:'relative', minHeight:'clamp(280px, 40vw, 480px)' }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=Via+G.+Corrado+11+Parete+Caserta+Italia&output=embed&hl=it&z=15"
                  width="100%"
                  height="100%"
                  style={{
                    border:     'none',
                    display:    'block',
                    filter:     'grayscale(90%) contrast(1.1) brightness(0.7)',
                    minHeight:  'clamp(280px, 40vw, 480px)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Antonio Andreozzi Digital — Via G. Corrado, 11 Parete CE"
                />
                {/* Overlay per blend col tema scuro */}
                <div
                  aria-hidden="true"
                  style={{
                    position:  'absolute',
                    inset:     0,
                    background:'linear-gradient(to right, var(--bg-void) 0%, transparent 8%)',
                    pointerEvents:'none',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          style={{
            paddingTop: 'clamp(60px, 8vw, 100px)',
            paddingBottom: 'clamp(60px, 8vw, 100px)',
            background: 'var(--bg-surface)',
          }}
        >
          <div className="container-site">
            <div className="flex items-center gap-3 mb-12">
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: 'var(--font-inter)' }}>
                Quattro modi di lavorare insieme · Tutti 1:1
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid var(--border)', background: 'var(--border)' }}>
              {services.map((s) => (
                <div
                  key={s.code}
                  className="card-hover"
                  style={{
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                  }}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.4rem' }}>{s.code}</p>
                      <p className="font-display" style={{ fontSize: 'clamp(2rem, 2.5vw, 2.8rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1 }}>{s.price}</p>
                    </div>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '0.3rem 0.7rem', fontFamily: 'var(--font-inter)', flexShrink: 0 }}>{s.format}</span>
                  </div>
                  <h2 className="font-display" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', fontWeight: 400, lineHeight: 1.25, color: 'var(--text-primary)', fontStyle: 'italic' }}>{s.tagline}</h2>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, flexGrow: 1 }}>{s.body}</p>
                  <p style={{ fontSize: '0.63rem', letterSpacing: '0.1em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', opacity: 0.8 }}>→ {s.spots}</p>
                  <Link href={s.href} className="cta-ghost" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    Scopri di più <ArrowUpRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soluzioni Digitali */}
        <section
          style={{
            paddingTop: 'clamp(60px, 8vw, 100px)',
            paddingBottom: 'clamp(60px, 8vw, 100px)',
            background: 'var(--bg-void)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div className="container-site">
            <div className="flex items-center gap-3 mb-4">
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: 'var(--font-inter)' }}>
                Soluzioni Digitali
              </span>
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1rem' }}
            >
              Non solo consulenza.
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Costruiamo anche il digitale.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '560px', marginBottom: '3rem' }}>
              Per chi ha bisogno di passare dalla strategia all&apos;esecuzione: e-commerce pronti a vendere e app su misura per il tuo business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid var(--border)', background: 'var(--border)' }}>

              {/* E-commerce */}
              <div className="card-hover" style={{ padding: 'clamp(2rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>E-COMMERCE</span>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '0.3rem 0.7rem', fontFamily: 'var(--font-inter)' }}>Su misura · Chiavi in mano</span>
                </div>
                <h3 className="font-display" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', fontWeight: 400, lineHeight: 1.2, color: 'var(--text-primary)', fontStyle: 'italic' }}>
                  Vendere online non è aprire uno shop. È costruire un sistema.
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, flexGrow: 1 }}>
                  Realizzo e-commerce per PMI, artigiani e liberi professionisti che vogliono vendere online senza dipendere da template generici. Dalla scelta della piattaforma alla messa online: identità visiva, schede prodotto ottimizzate, integrazione pagamenti, SEO locale.
                </p>
                <div className="flex flex-wrap gap-2" style={{ marginBottom: '0.5rem' }}>
                  {['Shopify', 'WooCommerce', 'SEO locale', 'UX & Conversioni', 'Pagamenti integrati'].map((t) => (
                    <span key={t} style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', padding: '0.2rem 0.5rem', fontFamily: 'var(--font-inter)' }}>{t}</span>
                  ))}
                </div>
                <a href="mailto:antonioandreozzidigital@gmail.com" className="cta-ghost" style={{ alignSelf: 'flex-start' }}>
                  Parliamo del tuo progetto →
                </a>
              </div>

              {/* App */}
              <div className="card-hover" style={{ padding: 'clamp(2rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>APP & WEB APP</span>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '0.3rem 0.7rem', fontFamily: 'var(--font-inter)' }}>Mobile & Web · Su misura</span>
                </div>
                <h3 className="font-display" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', fontWeight: 400, lineHeight: 1.2, color: 'var(--text-primary)', fontStyle: 'italic' }}>
                  Un&apos;app che le persone usano davvero.
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, flexGrow: 1 }}>
                  Sviluppo applicazioni mobile e web per piccole e medie imprese e professionisti. Non template preconfezionati: soluzioni costruite intorno al tuo processo, al tuo cliente e alla tua identità. Gestionali, prenotazioni, cataloghi, portali clienti.
                </p>
                <div className="flex flex-wrap gap-2" style={{ marginBottom: '0.5rem' }}>
                  {['App Mobile iOS & Android', 'Web App', 'Gestionale su misura', 'Portale clienti', 'Prenotazioni online'].map((t) => (
                    <span key={t} style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', padding: '0.2rem 0.5rem', fontFamily: 'var(--font-inter)' }}>{t}</span>
                  ))}
                </div>
                <a href="mailto:antonioandreozzidigital@gmail.com" className="cta-ghost" style={{ alignSelf: 'flex-start' }}>
                  Parliamo del tuo progetto →
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          style={{
            paddingTop: 'clamp(60px, 8vw, 100px)',
            paddingBottom: 'clamp(60px, 8vw, 100px)',
            background: 'var(--bg-void)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div className="container-site max-w-2xl mx-auto text-center">
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.2rem' }}>
              Non sai da dove
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>partire?</em>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2.5rem' }}>
              Scrivi e dimmi dove sei. Il punto di ingresso è la Diagnosi — 3 ore di lavoro insieme per capire esattamente cosa non funziona e da dove partire.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/393334342510" target="_blank" rel="noopener noreferrer" className="cta-primary">
                <MessageCircle size={14} />
                Scrivimi su WhatsApp
              </a>
              <a href="mailto:antonioandreozzidigital@gmail.com" className="cta-ghost">
                <Mail size={14} />
                Scrivimi
              </a>
              <Link href="/diagnosi" className="cta-ghost">Inizia dalla Diagnosi →</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
