import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'
import { Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Short Video Agency — Reels, TikTok e YouTube Shorts | Antonio Andreozzi',
  description:
    'Produco Reels Instagram, TikTok e YouTube Shorts per brand e professionisti a Caserta e Napoli. Hook studiati, montaggio veloce, contenuti pronti da pubblicare che crescono davvero.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Short Video Agency',
  description: 'Produzione di video brevi per brand e professionisti: Reels Instagram, TikTok, YouTube Shorts. Hook, montaggio e testi ottimizzati per la crescita organica.',
  provider: { '@type': 'Person', name: 'Antonio Andreozzi', url: 'https://antonioandreozzidigital.com' },
  areaServed: ['Caserta', 'Napoli', 'Campania'],
  serviceType: 'Short Form Video Production',
}

const includes = [
  'Strategia dei contenuti e piano editoriale mensile',
  'Scrittura degli hook e degli script',
  'Montaggio professionale con testi, musica e transizioni',
  'Ottimizzazione caption e hashtag per ogni piattaforma',
  'Consegna file pronti da pubblicare (MP4 ottimizzato)',
  'Revisioni incluse fino all\'approvazione finale',
]

const excludes = [
  'Riprese video — le fornisci tu (ti dico esattamente come girarle)',
  'Pubblicazione sui canali — la gestisci tu o il tuo team',
  'Ads a pagamento — questo è solo organico',
]

const steps = [
  { n: '01', title: 'Analisi del tuo profilo e obiettivi', desc: 'Guardo i tuoi canali, il tuo settore, i competitor. Capisco il tuo tono, il tuo pubblico e cosa vuoi ottenere — crescita, clienti, autorevolezza.' },
  { n: '02', title: 'Piano editoriale e script', desc: 'Costruisco il calendario dei contenuti per il mese. Scrivo gli hook, gli script e le didascalie. Ti mando tutto per approvazione prima di partire.' },
  { n: '03', title: 'Tu giri, io monto', desc: 'Ti dico esattamente come girare ogni video: angolazione, durata, cosa dire. Poi mi mandi il grezzo e io lo trasformo in un contenuto che ferma lo scroll.' },
  { n: '04', title: 'Consegna e ottimizzazione continua', desc: 'Ricevi i video pronti da pubblicare. Ogni mese analizzo le performance e aggiustiamo la strategia in base a cosa funziona davvero.' },
]

const faqs = [
  {
    q: 'Devo avere attrezzatura professionale per girare?',
    a: 'No. Lo smartphone è sufficiente. Ti dico io come impostare la luce, l\'inquadratura e il suono per ottenere un risultato professionale anche senza telecamera.',
  },
  {
    q: 'Quanti video produce al mese?',
    a: 'Dipende dal pacchetto scelto. Si va da 4 video al mese (1 a settimana) fino a 12-16 per chi vuole una presenza costante su più piattaforme.',
  },
  {
    q: 'Funziona anche se parto da zero follower?',
    a: 'Sì. L\'algoritmo di TikTok e Reels distribuisce i contenuti in base alla qualità, non al numero di follower. Con hook e formato giusti, anche un account nuovo può esplodere.',
  },
  {
    q: 'Lavori solo con aziende di Caserta e Napoli?',
    a: 'No. Lavoro da remoto con brand e professionisti in tutta Italia. L\'unica cosa che mi serve è il video grezzo che mi mandi online.',
  },
]

export default function ShortVideo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Short Video Agency"
          title="Video che fermano lo scroll"
          titleAccent="e fanno crescere il brand."
          subtitle="Produco Reels Instagram, TikTok e YouTube Shorts per brand e professionisti. Hook studiati, montaggio veloce, contenuti pronti da pubblicare — costruiti per crescere davvero."
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
                      'Imprenditori e professionisti che vogliono crescere sui social senza perdere ore a montare video',
                      'Brand locali di Caserta, Napoli e Campania che vogliono una presenza digitale riconoscibile',
                      'Chi ha già dei contenuti grezzi ma non sa come trasformarli in video che performano',
                      'Chi vuole costruire autorevolezza nel proprio settore attraverso i video brevi',
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
                    Short Video Agency
                  </p>
                  <p className="font-display" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                    Preventivo gratuito
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2rem' }}>
                    Il prezzo dipende dal numero di video e dalle piattaforme. Scrivimi e ti rispondo entro 24 ore con una proposta su misura.
                  </p>

                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '0.5rem' }}>
                      → Prima chiamata gratuita
                    </p>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      Analizzo il tuo profilo e ti dico subito se posso aiutarti a crescere — e come.
                    </p>
                  </div>

                  <a
                    href="mailto:antonioandreozzidigital@gmail.com?subject=Short%20Video%20Agency%20-%20Richiesta%20preventivo"
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
