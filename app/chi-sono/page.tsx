import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Chi Sono — Antonio Andreozzi, Brand Strategist e Consulente Marketing',
  description:
    'La storia di Antonio Andreozzi: da due fallimenti a brand strategist. Aiuta imprenditori italiani a costruire identità di brand che durano. Basato a Caserta, lavora in tutta Italia.',
}

const chapters = [
  {
    n: '01',
    title: 'Tutto è iniziato con una videocamera e tanta immaginazione.',
    body: `A 9 anni realizzavo il mio primo film senza copione. Trasformavo oggetti domestici in personaggi e angoli di casa in scenografie. Non mi serviva un budget — mi serviva una storia.\n\nPoi sono passato alla scrittura. Quaderni pieni di poesie, racconti per bambini, tentativi di romanzi. Le parole come strumento per dare forma ai pensieri. Per capire il mondo e — se possibile — cambiarlo.`,
  },
  {
    n: '02',
    title: 'Quelli che non leggi per passare il tempo, ma per cambiare il modo in cui guardi ogni cosa.',
    body: `Mentre i miei coetanei leggevano altro, io sfogliavo filosofi e psicologi. Kant, Seneca, Jung, Freud. Libri di marketing e di sviluppo personale. Non cercavo informazioni — cercavo strumenti. Strumenti per trasformare la mente. E, di conseguenza, la vita.`,
  },
  {
    n: '03',
    title: 'Due business falliti. Due grandi insegnamenti.',
    body: `Ho lanciato due progetti con entusiasmo e idee solide. Mi sono scontrato duramente con la realtà. Ho perso soldi, tempo e — per un periodo — fiducia in me stesso.\n\nHo imparato che un'idea non basta. Che il successo non nasce dall'entusiasmo, ma dai sistemi. Dalla capacità di costruire qualcosa di solido, non di improvvisare fino all'esaurimento.`,
  },
  {
    n: '04',
    title: 'Una laurea al Conservatorio. E la scoperta di un limite.',
    body: `La musica mi ha insegnato struttura, ascolto e pazienza. Mi ha insegnato a stare dentro una disciplina senza tradirla.\n\nMa eseguire composizioni altrui non bastava. Volevo creare qualcosa che restasse. Qualcosa con un impatto tangibile, misurabile, reale. E così è cambiata la direzione.`,
  },
  {
    n: '05',
    title: 'È in quel momento che tutto si è mosso.',
    body: `Ho combinato quello che avevo: creatività e strategia. E ho smesso di aiutare i brand a "farsi vedere" per iniziare ad aiutarli a essere riconosciuti, ricordati, scelti.\n\nNon è una distinzione sottile. È la differenza tra fare rumore e avere una voce. Tra avere un sito e avere un'identità. Tra comunicare e significare qualcosa per qualcuno.`,
  },
]

export default function ChiSono() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Chi sono"
          title="Tutto è iniziato con"
          titleAccent="una videocamera."
          subtitle="La storia di come creatività, due fallimenti, una laurea in conservatorio e tanta strategia sono diventati un metodo."
        />

        {/* Story */}
        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

              {/* Sticky image col */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <div
                  style={{
                    aspectRatio: '4/5',
                    border: '1px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/antonio.jpg"
                    alt="Antonio Andreozzi, consulente brand strategy e marketing digitale a Caserta"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '40%',
                      background: 'linear-gradient(to top, rgba(9,9,11,0.8), transparent)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '0.3rem' }}>
                      Antonio Andreozzi
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(237,232,223,0.7)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      Marketing Strategist · Parete (CE)
                    </p>
                  </div>
                </div>

                {/* Quick facts */}
                <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  {[
                    { label: 'Specializzazione', value: 'Brand Identity & Strategy' },
                    { label: 'Formato',           value: 'Solo 1:1, mai in gruppo' },
                    { label: 'Sede',              value: 'Parete (CE) · Remote Italia' },
                    { label: 'Contatto',          value: 'antonioandreozzidigital@gmail.com' },
                  ].map((f) => (
                    <div key={f.label}>
                      <p style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '0.2rem' }}>
                        {f.label}
                      </p>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                        {f.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapters */}
              <div className="lg:col-span-8">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                  {chapters.map((c) => (
                    <div key={c.n} style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
                      <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', display: 'block', marginBottom: '1rem' }}>
                        {c.n}
                      </span>
                      <h2
                        className="font-display"
                        style={{
                          fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
                          fontWeight: 400,
                          lineHeight: 1.25,
                          color: 'var(--text-primary)',
                          marginBottom: '1.5rem',
                          fontStyle: 'italic',
                        }}
                      >
                        {c.title}
                      </h2>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 300,
                          fontSize: '0.95rem',
                          lineHeight: 1.85,
                          color: 'var(--text-muted)',
                        }}
                      >
                        {c.body.split('\n\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ marginTop: '4rem', borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
                  <p
                    className="font-display"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.2 }}
                  >
                    Se questa storia ti risuona,
                    <br />
                    <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>forse possiamo lavorare insieme.</em>
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, lineHeight: 1.75, marginBottom: '2rem', maxWidth: '480px' }}>
                    Non offro corsi preregistrati, gruppi o pacchetti standard. Lavoro 1:1 con un numero limitato di persone alla volta. Il punto di ingresso è la Diagnosi.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="/lavora-con-me" className="cta-primary">Lavora con me</a>
                    <a href="/diagnosi" className="cta-ghost">Inizia dalla Diagnosi</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Video presentazione */}
        <section
          className="section-padding"
          style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
        >
          <div className="container-site">
            <div className="flex items-center gap-3 mb-10">
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: 'var(--font-inter)' }}>
                Guardami in faccia
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Copy */}
              <div className="lg:col-span-5">
                <h2
                  className="font-display"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '1.2rem' }}
                >
                  Prima di lavorare insieme,
                  <br />
                  <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>ascoltami.</em>
                </h2>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                  Ho girato questo video per raccontarti chi sono, come lavoro e perché faccio quello che faccio. Tre minuti che ti dicono se siamo compatibili prima ancora di scrivermi.
                </p>
              </div>

              {/* Video placeholder — in attesa di YouTube */}
              <div className="lg:col-span-7 flex justify-center">
                <div
                  style={{
                    width:           '100%',
                    maxWidth:        '560px',
                    aspectRatio:     '16/9',
                    background:      'var(--bg-card)',
                    border:          '1px solid var(--border)',
                    display:         'flex',
                    flexDirection:   'column',
                    alignItems:      'center',
                    justifyContent:  'center',
                    gap:             '1rem',
                  }}
                >
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)' }}>
                    Video in arrivo
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, textAlign: 'center', padding: '0 2rem' }}>
                    Carica il video su YouTube e mandami il link — lo incorporo in 2 minuti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I work with */}
        <section className="section-padding" style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--text-primary)' }}>
                  Lavoro con
                  <br />
                  <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>chi costruisce.</em>
                </h2>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  {
                    who: 'Imprenditori di PMI',
                    desc: 'Che vogliono un brand all\'altezza della loro azienda.',
                  },
                  {
                    who: 'Professionisti',
                    desc: 'Avvocati, commercialisti, architetti, medici che vogliono uscire dalle commodities.',
                  },
                  {
                    who: 'Freelancer e consulenti',
                    desc: 'Che vogliono essere riconoscibili e smettere di competere sul prezzo.',
                  },
                ].map((item) => (
                  <div key={item.who} style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                    <p className="font-display" style={{ fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                      {item.who}
                    </p>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
