import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'
import { Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sistema — €9.000',
  description:
    'Sei mesi di lavoro continuativo. Brand Architecture completa: identità, posizionamento, voce, contenuti e sistema commerciale. 12 sessioni 1:1.',
}

const includes = [
  '12 sessioni live 1:1 (90 min, ogni 2 settimane)',
  'Brand audit completo iniziale',
  'Architettura strategica scritta',
  'Sistema di contenuti e piano editoriale',
  'Revisioni scritte (risposta email entro 48 ore)',
  'Dashboard strategica aggiornata mensilmente',
  'Accesso email diretto per tutta la durata dei 6 mesi',
]

const excludes = [
  'Produzione contenuti o gestione canali',
  'Campagne advertising o SEO tecnica',
  'Sviluppo sito web',
  'Sessioni aggiuntive oltre il piano',
]

const months = [
  { n: 'Mese 1', title: 'Diagnosi e fondamenta', desc: 'Analisi profonda della situazione attuale. Identificazione di problemi e opportunità. Definizione degli obiettivi dei 6 mesi.' },
  { n: 'Mese 2', title: 'Identità e voce', desc: 'Architettura del posizionamento. Tono di voce. Messaggi fondativi del brand.' },
  { n: 'Mese 3', title: 'Sistemi di contenuto', desc: 'Struttura editoriale. Formati, frequenze, canali. Come produrre contenuti in modo autonomo e coerente.' },
  { n: 'Mese 4', title: 'Architettura commerciale', desc: 'Come il brand si traduce in acquisizione clienti. Offerta, comunicazione dell\'offerta, processi.' },
  { n: 'Mese 5', title: 'Implementazione e aggiustamenti', desc: 'Si lavora su ciò che hai messo in pratica. Si ottimizza, si corregge, si consolida.' },
  { n: 'Mese 6', title: 'Consolidamento e autonomia', desc: 'Alla fine dei 6 mesi hai un brand con identità precisa e un sistema che funziona senza dipendere da me.' },
]

const faqs = [
  {
    q: 'Il primo mese include già la fase diagnostica?',
    a: 'Sì. Il Mese 1 è dedicato interamente all\'analisi della situazione attuale. Se hai già fatto la Diagnosi separata, partiamo avvantaggiati.',
  },
  {
    q: 'Come funzionano le revisioni scritte?',
    a: 'Tra una sessione e l\'altra puoi mandarmi testi, bozze, materiali da revisionare via email. Rispondo entro 48 ore con feedback scritto.',
  },
  {
    q: 'È disponibile il pagamento a rate?',
    a: 'Sì. Sono disponibili 3 rate da €3.000 ciascuna, una ogni 2 mesi.',
  },
  {
    q: 'Quanti clienti segui in parallelo con il Sistema?',
    a: 'Massimo 3 clienti contemporaneamente. È una scelta deliberata per garantire qualità e attenzione piena a ogni progetto.',
  },
  {
    q: 'Come si accede?',
    a: 'Scrivimi a antonioandreozzidigital@gmail.com. Valutiamo insieme se il Sistema è la soluzione giusta per la tua situazione. Se hai già fatto la Diagnosi, partiamo da lì.',
  },
]

export default function Sistema() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Sistema · €9.000"
          title="Sei mesi."
          titleAccent="Brand Architecture completa."
          subtitle="Un accompagnamento continuativo per costruire identità, posizionamento, voce, contenuti e sistema commerciale. 12 sessioni 1:1, revisioni, dashboard mensile."
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
                      'PMI con fatturato da €1M a €30M che vogliono un brand all\'altezza della loro azienda',
                      'Professionisti strutturati (avvocati, commercialisti, architetti, medici) che vogliono uscire dal mercato delle commodities',
                      'Chi ha già investito in marketing senza ottenere risultati coerenti',
                      'Aziende serie con una comunicazione ancora amatoriale',
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

                {/* Struttura 6 mesi */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '2rem' }}>Struttura dei 6 mesi</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                    {months.map((m) => (
                      <div key={m.n} style={{ display: 'flex', gap: '1.5rem' }}>
                        <span style={{ fontSize: '0.6rem', color: 'var(--accent)', fontFamily: 'var(--font-inter)', letterSpacing: '0.1em', paddingTop: '0.2rem', flexShrink: 0, minWidth: '60px' }}>{m.n}</span>
                        <div>
                          <p className="font-display" style={{ fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{m.title}</p>
                          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.5rem' }}>Sistema</p>
                  <p className="font-display" style={{ fontSize: '3.5rem', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.5rem' }}>€9.000</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2rem' }}>
                    Accompagnamento 1:1 · 6 mesi · 12 sessioni
                  </p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '0.5rem' }}>
                      → Max 3 clienti in parallelo
                    </p>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      Pagamento in 3 rate da €3.000. Call conoscitiva di 30 minuti obbligatoria prima dell'inizio.
                    </p>
                  </div>
                  <a href="mailto:antonioandreozzidigital@gmail.com?subject=Informazioni%20Sistema" className="cta-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    Scrivimi per il Sistema
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
