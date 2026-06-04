import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'
import { Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cattedrale — Progetto Annuale',
  description:
    'Dodici mesi di lavoro insieme. La trasformazione completa del tuo brand: identità, strategia, cultura, comunicazione, sistema commerciale. Max 2 clienti/anno.',
}

const includes = [
  'Sessioni mensili 1:1 (90 min) + sessioni bimestrali (3 ore)',
  'Accesso email/messaggio continuo durante i 12 mesi',
  'Revisioni illimitate su tutti i materiali',
  'Piano editoriale annuale',
  'Presenza a max 2 eventi aziendali',
  'Dashboard strategica trimestrale',
]

const excludes = [
  'Gestione operativa dei canali',
  'Sviluppo sito web o campagne advertising',
  'Lavoro con il team — solo con il decision maker',
]

const quarters = [
  { n: '1° Trimestre', title: 'Diagnosi e visione', desc: 'Analisi profonda di chi sei, dove sei e dove vuoi arrivare. Fondamenta dell\'identità. Chiarezza totale prima di qualsiasi azione.' },
  { n: '2° Trimestre', title: 'Costruzione e architettura', desc: 'Brand identity completa, posizionamento, tono di voce, messaggi fondativi. Il sistema prende forma.' },
  { n: '3° Trimestre', title: 'Implementazione', desc: 'Si porta fuori. Contenuti, comunicazione, sistema commerciale. Si testa, si ottimizza, si consolida.' },
  { n: '4° Trimestre', title: 'Consolidamento e indipendenza', desc: 'Il brand funziona in modo autonomo. La tua azienda sa chi è, come comunicarlo e come crescere senza dipendere da un\'agenzia esterna.' },
]

export default function Cattedrale() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Cattedrale · Su misura"
          title="Dodici mesi."
          titleAccent="La trasformazione completa."
          subtitle="Accompagnamento continuativo per un anno. Per chi vuole costruire qualcosa che duri decenni, non trimestri. Max 2 clienti all'anno."
        />

        {/* Intro statement */}
        <section style={{ background: 'var(--bg-void)', borderBottom: '1px solid var(--border)', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
          <div className="container-site max-w-3xl">
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                fontWeight: 300,
                lineHeight: 1.5,
                color: 'var(--text-primary)',
                fontStyle: 'italic',
              }}
            >
              "Dodici mesi di lavoro insieme. Non solo sessioni periodiche — accompagnamento continuativo. Per costruire una trasformazione reale della tua identità di brand: dall'interno verso l'esterno."
            </p>
            <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, lineHeight: 1.7 }}>
              Identità, strategia, cultura, comunicazione, sistema commerciale. Tutto, in un anno.
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
              <div className="lg:col-span-7">

                {/* Per chi è */}
                <div style={{ marginBottom: '3rem' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.5rem' }}>Per chi è</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      'Imprenditori di PMI con fatturati da €5M a €30M',
                      'Fondatori di seconda o terza generazione che vogliono modernizzare il brand',
                      'Professionisti con studi da 5+ dipendenti',
                      'Chi ha lavorato con agenzie senza ottenere i risultati attesi',
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

                {/* Struttura 4 trimestri */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '2rem' }}>Struttura dell'anno</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {quarters.map((q) => (
                      <div key={q.n} style={{ display: 'flex', gap: '1.5rem' }}>
                        <span style={{ fontSize: '0.6rem', color: 'var(--accent)', fontFamily: 'var(--font-inter)', letterSpacing: '0.08em', paddingTop: '0.2rem', flexShrink: 0, minWidth: '90px' }}>{q.n}</span>
                        <div>
                          <p className="font-display" style={{ fontSize: '1.15rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{q.title}</p>
                          <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{q.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.5rem' }}>Cattedrale</p>
                  <p className="font-display" style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                    4 rate da €5.500
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '0.5rem' }}>
                    Totale €22.000 · Pagamento trimestrale
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2rem' }}>
                    Progetto annuale 1:1 · 12 mesi · Accompagnamento continuativo
                  </p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '0.75rem' }}>
                      → Max 2 clienti/anno
                    </p>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      Questo è il progetto più impegnativo che offro. È su misura. Prima di ogni proposta economica c'è sempre una call conoscitiva.
                    </p>
                  </div>
                  <a href="/lavora-con-me" className="cta-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    Scrivimi per parlarne
                  </a>
                  <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                    antonioandreozzidigital@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding" style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)' }}>
          <div className="container-site max-w-2xl mx-auto text-center">
            <p className="font-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '1.2rem', fontStyle: 'italic' }}>
              "Non si tratta di come appari nel mercato. Si tratta di cosa sei veramente."
            </p>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', marginBottom: '3rem' }}>
              — Ryan Holiday
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/lavora-con-me" className="cta-primary">Scrivimi</a>
              <Link href="/lavora-con-me" className="cta-ghost">← Tutti i servizi</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
