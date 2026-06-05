import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'
import NewsletterForm from '@/components/shared/NewsletterForm'

export const metadata: Metadata = {
  title: 'Risorse Gratuite — In Costruzione | Antonio Andreozzi',
  description:
    'Guide, template e checklist su brand, marketing e AI. Contenuti gratuiti in arrivo per imprenditori e professionisti italiani.',
}

const risorsePreviste = [
  'Il Brand Clarity Canvas',
  'Il Tono di Voce in 5 Domande',
  'Audit del Brand: 30 punti da controllare',
  'AI per il Content Marketing: starter pack',
  'Piano Editoriale Mensile',
  'Posizionamento in 7 giorni',
]

export default function Risorse() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Risorse Gratuite"
          title="In arrivo."
          titleAccent="Presto qui."
          subtitle="Sto preparando guide, template e checklist pratiche su brand, marketing e AI. Iscriviti per riceverle non appena escono."
        />

        {/* In costruzione */}
        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left: cosa sta arrivando */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-10">
                  <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: 'var(--font-inter)' }}>
                    Cosa sta arrivando
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {risorsePreviste.map((titolo, i) => (
                    <div
                      key={titolo}
                      style={{
                        borderBottom: '1px solid var(--border)',
                        padding: '1.4rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                      }}
                    >
                      <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', minWidth: '24px' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p
                        className="font-display"
                        style={{
                          fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                          fontWeight: 400,
                          color: 'var(--text-muted)',
                          fontStyle: 'italic',
                        }}
                      >
                        {titolo}
                      </p>
                      <span
                        style={{
                          marginLeft: 'auto',
                          fontSize: '0.6rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-inter)',
                          opacity: 0.5,
                          flexShrink: 0,
                        }}
                      >
                        In arrivo
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: newsletter signup */}
              <div className="lg:col-span-5">
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                    position: 'sticky',
                    top: '7rem',
                  }}
                >
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', fontWeight: 500, marginBottom: '1rem' }}>
                    Ricevile gratis
                  </p>
                  <h2
                    className="font-display"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '1rem' }}
                  >
                    Iscriviti.
                    <br />
                    <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Le ricevi subito.</em>
                  </h2>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2rem' }}>
                    Ogni risorsa che esce arriva direttamente nella tua email. Niente spam — solo contenuti utili su brand, marketing e AI.
                  </p>
                  <NewsletterForm />
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
