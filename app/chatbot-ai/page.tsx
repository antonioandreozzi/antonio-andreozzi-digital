import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'
import { Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chatbot AI per PMI — Assistente Digitale 24/7 | Antonio Andreozzi',
  description:
    'Costruisco chatbot AI su misura per PMI e professionisti a Caserta e Napoli. Rispondono ai clienti in tempo reale, qualificano i lead e aumentano le vendite automaticamente.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chatbot AI per PMI',
  description: 'Chatbot AI su misura per PMI e professionisti. Customer support automatico, qualificazione lead e vendite 24/7.',
  provider: { '@type': 'Person', name: 'Antonio Andreozzi', url: 'https://antonioandreozzidigital.com' },
  areaServed: ['Caserta', 'Napoli', 'Campania'],
  serviceType: 'AI Chatbot Development',
}

const includes = [
  'Analisi del tuo business e dei bisogni dei clienti',
  'Sviluppo chatbot personalizzato (non template)',
  'Integrazione su sito web, WhatsApp o Instagram',
  'Addestramento con le tue FAQ, prodotti e servizi',
  'Test e messa online',
  '30 giorni di supporto post-lancio',
]

const excludes = [
  'Costi delle piattaforme AI di terze parti (es. OpenAI)',
  'Contenuti da inserire nel chatbot — li fornisci tu',
  'Gestione mensile — puoi aggiornarla autonomamente',
]

const steps = [
  { n: '01', title: 'Chiamata conoscitiva gratuita', desc: 'Mi racconti la tua attività, i tuoi clienti tipici e cosa vuoi automatizzare. Capisco se il chatbot è la soluzione giusta.' },
  { n: '02', title: 'Strategia e architettura', desc: 'Definisco i flussi di conversazione, le domande frequenti, gli obiettivi del bot (supporto, lead, vendite) e le integrazioni necessarie.' },
  { n: '03', title: 'Sviluppo e addestramento', desc: 'Costruisco il chatbot, lo addestro con le informazioni della tua azienda e lo testo a fondo prima di mostrartelo.' },
  { n: '04', title: 'Lancio e affinamento', desc: 'Mettiamo online il chatbot. Nei 30 giorni successivi monitoro le conversazioni e ottimizziamo le risposte in base ai dati reali.' },
]

const faqs = [
  {
    q: 'Il chatbot risponde in modo rigido o capisce le domande libere?',
    a: 'Dipende dal livello scelto. I chatbot più avanzati usano AI generativa (tipo GPT) e capiscono domande in linguaggio naturale, anche formulate in modo non standard. Non è un semplice menu a bottoni.',
  },
  {
    q: 'Su quali canali posso metterlo?',
    a: 'Sito web, WhatsApp Business, Instagram Direct e Facebook Messenger. Possiamo integrarne più di uno nello stesso progetto.',
  },
  {
    q: 'Posso aggiornarlo da solo dopo il lancio?',
    a: 'Sì. Ti consegno una documentazione chiara e, se la piattaforma lo permette, un pannello di controllo dove puoi modificare le risposte autonomamente senza toccare codice.',
  },
  {
    q: 'Quanto costa?',
    a: 'Dipende dalla complessità: numero di flussi, canali di integrazione, livello di AI utilizzato. Il preventivo è gratuito — scrivimi e ti dico subito una stima reale.',
  },
]

export default function ChatbotAI() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Chatbot AI"
          title="Un assistente che lavora"
          titleAccent="mentre tu non ci sei."
          subtitle="Costruisco chatbot AI su misura per PMI e professionisti. Rispondono ai clienti in tempo reale, qualificano i lead e aumentano le vendite — 24 ore su 24, anche di domenica."
        />

        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

              {/* Left */}
              <div className="lg:col-span-7">

                {/* Per chi è */}
                <div style={{ marginBottom: '3rem' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1.5rem' }}>
                    Per chi è
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      'PMI e professionisti che ricevono sempre le stesse domande dai clienti',
                      'Chi vuole qualificare i lead automaticamente prima di rispondere',
                      'Negozi, studi, agenzie che vogliono supporto clienti H24 senza assumere personale',
                      'Chi ha un e-commerce e vuole aumentare le conversioni con un assistente alla vendita',
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

              {/* Right: sticky CTA */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.5rem' }}>
                    Chatbot AI
                  </p>
                  <p className="font-display" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                    Preventivo gratuito
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2rem' }}>
                    Il prezzo dipende dalla complessità del progetto. Scrivimi e ti rispondo entro 24 ore con una stima reale.
                  </p>

                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '0.5rem' }}>
                      → Chiamata conoscitiva gratuita
                    </p>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      Nessun impegno. Capisco il tuo caso e ti dico se il chatbot fa al caso tuo — e quanto costerebbe farlo bene.
                    </p>
                  </div>

                  <a
                    href="mailto:antonioandreozzidigital@gmail.com?subject=Chatbot%20AI%20-%20Richiesta%20preventivo"
                    className="cta-primary"
                    style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                  >
                    Richiedi il preventivo
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
