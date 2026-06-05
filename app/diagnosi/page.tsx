import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'
import { Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diagnosi del Brand €497 — Sessione Intensiva 1:1 | Antonio Andreozzi',
  description:
    '3 ore di lavoro 1:1 per capire cosa non funziona nel tuo posizionamento e ricevere un piano scritto di priorità. Il punto di ingresso naturale per lavorare con Antonio Andreozzi.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Diagnosi del Brand',
  description: 'Sessione intensiva 1:1 di 3 ore per analizzare il posizionamento del brand e ricevere un piano scritto di priorità.',
  provider: { '@type': 'Person', name: 'Antonio Andreozzi', url: 'https://www.antonioandreozzidigital.com' },
  offers: { '@type': 'Offer', price: '497', priceCurrency: 'EUR', availability: 'https://schema.org/LimitedAvailability' },
  areaServed: 'IT',
  serviceType: 'Brand Strategy Consulting',
}

const includes = [
  'Sessione live 1:1 di 3 ore (video call)',
  'Analisi del tuo brand attuale (sito, social, messaggi)',
  'Identificazione dei 3 problemi principali',
  'Piano di priorità scritto consegnato entro 48 ore',
  '30 minuti di follow-up via email nella settimana successiva',
]

const excludes = [
  'Implementazione — lavori tu sulla base del report',
  'Sessioni aggiuntive',
  'Gestione canali o produzione di contenuti',
]

const steps = [
  { n: '01', title: 'Prenoti la sessione', desc: 'Compili un form di pre-sessione. Mi racconti dove sei, cosa stai costruendo, cosa non funziona.' },
  { n: '02', title: 'Sessione live 1:1 · 3 ore', desc: 'Lavoriamo insieme via video call. Analizzo il tuo brand, faccio le domande giuste, arriviamo alla radice del problema.' },
  { n: '03', title: 'Report scritto entro 48 ore', desc: 'Ricevi un documento con i 3 problemi principali identificati e le priorità ordinate per impatto.' },
  { n: '04', title: 'Follow-up nei 7 giorni successivi', desc: '30 minuti di supporto via email per chiarire dubbi sul report e decidere il passo successivo.' },
]

const faqs = [
  {
    q: 'Posso usare la Diagnosi per valutare se lavorare con te a lungo termine?',
    a: 'Sì. È esattamente per questo che esiste. Ti dà modo di capire come lavoro, che tipo di valore produco e se c\'è affinità. Molti clienti dei percorsi lunghi sono partiti da qui.',
  },
  {
    q: 'Il report è generico o personalizzato?',
    a: 'È interamente personalizzato sulla tua situazione. Non esiste un template standard: ogni report è scritto da zero dopo la sessione.',
  },
  {
    q: 'Se poi voglio continuare, il costo della Diagnosi viene scalato?',
    a: 'Sì. Il costo di €497 viene scalato integralmente sul Progetto o sul Sistema, se decidi di continuare entro 60 giorni.',
  },
]

export default function Diagnosi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Diagnosi · €497"
          title="Capisci dove sei"
          titleAccent="e cosa fare subito."
          subtitle="Una sessione di lavoro intensiva, solo tu e Antonio. 3 ore per capire cosa non funziona nel tuo posizionamento e ricevere un piano scritto di priorità."
        />

        {/* Main content */}
        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

              {/* Left: description */}
              <div className="lg:col-span-7">
                {/* Per chi è */}
                <div style={{ marginBottom: '3rem' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.5rem' }}>
                    Per chi è
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      'Imprenditori, professionisti o freelancer che non sanno da dove partire con il brand',
                      'Chi ha già un sito, dei social, una newsletter — ma sente che qualcosa non funziona',
                      'Chi vuole capire come lavora Antonio prima di investire in un percorso lungo',
                      'Chi ha bisogno di un piano chiaro e di qualcuno che glielo dica senza filtri',
                    ].map((item) => (
                      <div key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.15rem' }}>→</span>
                        <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Include / Non include */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem', marginBottom: '3rem' }}>
                  <div>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.2rem' }}>
                      Include
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {includes.map((item) => (
                        <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <Check size={13} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }} />
                          <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.2rem' }}>
                      Non include
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {excludes.map((item) => (
                        <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <X size={13} style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: '0.2rem', opacity: 0.5 }} />
                          <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, opacity: 0.7 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Come funziona */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '2rem' }}>
                    Come funziona
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {steps.map((s) => (
                      <div key={s.n} style={{ display: 'flex', gap: '1.5rem' }}>
                        <span style={{ fontSize: '0.6rem', color: 'var(--accent)', fontFamily: 'var(--font-inter)', letterSpacing: '0.12em', paddingTop: '0.2rem', flexShrink: 0 }}>
                          {s.n}
                        </span>
                        <div>
                          <p className="font-display" style={{ fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                            {s.title}
                          </p>
                          <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: sticky CTA box */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Diagnosi
                  </p>
                  <p className="font-display" style={{ fontSize: '3.5rem', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.5rem' }}>
                    €497
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2rem' }}>
                    Sessione unica 1:1 · 3 ore · Report scritto
                  </p>

                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '0.5rem' }}>
                      → 2 posti disponibili questo mese
                    </p>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      Il costo viene scalato integralmente sul Progetto o sul Sistema, se decidi di continuare entro 60 giorni.
                    </p>
                  </div>

                  <a href="mailto:antonioandreozzidigital@gmail.com?subject=Prenoto%20la%20Diagnosi" className="cta-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    Prenota la Diagnosi
                  </a>
                  <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                    Scrivi a: antonioandreozzidigital@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding" style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)' }}>
          <div className="container-site max-w-3xl">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '3rem' }}>
              Domande frequenti
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((f) => (
                <div key={f.q} style={{ borderBottom: '1px solid var(--border)', padding: '1.8rem 0' }}>
                  <p className="font-display" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
                    {f.q}
                  </p>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '3rem' }}>
              <Link href="/lavora-con-me" className="cta-ghost">← Torna ai servizi</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
