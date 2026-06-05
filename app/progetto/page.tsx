import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'
import { Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Progetto Brand €3.500 — 8 Settimane 1:1 | Antonio Andreozzi',
  description:
    '6 sessioni 1:1 in 8 settimane per costruire posizionamento, tono di voce e sistema editoriale. Consegnato in un manuale operativo completo. Per freelancer e professionisti italiani.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Progetto Brand',
  description: '6 sessioni 1:1 in 8 settimane per costruire posizionamento, tono di voce e sistema editoriale. Consegnato in un manuale operativo completo.',
  provider: { '@type': 'Person', name: 'Antonio Andreozzi', url: 'https://www.antonioandreozzidigital.com' },
  offers: { '@type': 'Offer', price: '3500', priceCurrency: 'EUR', availability: 'https://schema.org/LimitedAvailability' },
  areaServed: 'IT',
  serviceType: 'Brand Strategy Consulting',
}

const includes = [
  '6 sessioni live 1:1 (90 min, ogni ~10 giorni)',
  'Analisi iniziale del tuo brand',
  'Dichiarazione di posizionamento scritta',
  'Architettura di voce e tono',
  'Sistema di contenuti personalizzato',
  'Revisioni scritte tra una sessione e l\'altra',
  'Manuale operativo del brand finale',
]

const excludes = [
  'Produzione di contenuti — lavori tu sulla base del sistema',
  'Gestione social, newsletter o canali',
  'Sessioni aggiuntive oltre il programma',
  'Garanzie di performance con tempistiche precise',
]

const sessions = [
  { n: 'Sessione 0', title: 'Diagnosi e obiettivi', desc: 'Dove sei adesso. Cosa vuoi costruire. Da cosa partire.' },
  { n: 'Sessioni 1–2', title: 'Fondamenta del posizionamento', desc: 'Chi sei, per chi lavori, perché ti scelgono. La base di tutto.' },
  { n: 'Sessioni 3–4', title: 'Voce e tono', desc: 'Come parli, come scrivi, come ti distingui nel rumore.' },
  { n: 'Sessioni 5–6', title: 'Sistema editoriale operativo', desc: 'Come produrre contenuti con coerenza senza dipendere da un\'agenzia.' },
  { n: 'Finale', title: 'Consegna del manuale', desc: 'Un documento completo per operare in autonomia da subito.' },
]

const faqs = [
  {
    q: 'Per chi è il Progetto?',
    a: 'Per freelancer e consulenti che vogliono uscire dalla guerra dei prezzi. Per professionisti che faticano a farsi trovare dai clienti giusti. Per chi produce contenuti ma non riesce a farsi riconoscere. Per chi vuole un brand funzionale senza diventare un influencer.',
  },
  {
    q: 'Ho già fatto la Diagnosi. Il costo si scala?',
    a: 'Sì. Se hai fatto la Diagnosi entro 60 giorni, i €497 vengono scalati integralmente sul Progetto. Paghi la differenza.',
  },
  {
    q: 'Posso pagare in rate?',
    a: 'Sì. Sono disponibili 2 rate: €1.750 all\'inizio e €1.750 alla consegna del manuale finale.',
  },
]

export default function Progetto() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Progetto · €3.500"
          title="Otto settimane."
          titleAccent="Un brand costruito."
          subtitle="6 sessioni 1:1 per costruire il tuo posizionamento, la tua voce e il tuo sistema editoriale. Tutto consegnato in un manuale operativo da usare subito."
        />

        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
              <div className="lg:col-span-7">

                {/* Per chi è */}
                <div style={{ marginBottom: '3rem' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.5rem' }}>Per chi è</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      'Freelancer e consulenti che vogliono uscire dalla guerra dei prezzi',
                      'Professionisti che faticano a farsi trovare dai clienti giusti',
                      'Chi produce contenuti ma non riesce a farsi riconoscere',
                      'Chi vuole un brand funzionale senza diventare un influencer',
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
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.2rem' }}>Include</p>
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
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.2rem' }}>Non include</p>
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

                {/* Struttura sessioni */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '2rem' }}>Come funziona</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                    {sessions.map((s) => (
                      <div key={s.n} style={{ display: 'flex', gap: '1.5rem' }}>
                        <span style={{ fontSize: '0.6rem', color: 'var(--accent)', fontFamily: 'var(--font-inter)', letterSpacing: '0.1em', paddingTop: '0.2rem', flexShrink: 0, minWidth: '80px' }}>{s.n}</span>
                        <div>
                          <p className="font-display" style={{ fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{s.title}</p>
                          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.5rem' }}>Progetto</p>
                  <p className="font-display" style={{ fontSize: '3.5rem', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.5rem' }}>€3.500</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2rem' }}>
                    Percorso 1:1 · 8 settimane · 6 sessioni + manuale
                  </p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '0.5rem' }}>
                      → 3 posti disponibili questo mese
                    </p>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      Pagamento in 2 rate disponibile (€1.750 + €1.750). Se hai già fatto la Diagnosi, il costo si scala.
                    </p>
                  </div>
                  <a href="mailto:antonioandreozzidigital@gmail.com?subject=Informazioni%20Progetto" className="cta-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    Scrivimi per il Progetto
                  </a>
                  <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                    antonioandreozzidigital@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding" style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)' }}>
          <div className="container-site max-w-3xl">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '3rem' }}>Domande frequenti</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((f) => (
                <div key={f.q} style={{ borderBottom: '1px solid var(--border)', padding: '1.8rem 0' }}>
                  <p className="font-display" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>{f.q}</p>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{f.a}</p>
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
