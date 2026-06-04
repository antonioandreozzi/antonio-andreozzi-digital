import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'
import { Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Video',
  description:
    'Video su brand, marketing digitale e intelligenza artificiale. Contenuti pratici per imprenditori e professionisti che vogliono costruire un brand autentico.',
}

const videos = [
  {
    title: 'Il problema di forma: perché il tuo brand non viene ricordato',
    duration: '12:34',
    tag: 'Brand',
    thumb: null,
  },
  {
    title: 'Come usare l\'AI per il tuo content marketing (senza sembrare un bot)',
    duration: '18:22',
    tag: 'AI',
    thumb: null,
  },
  {
    title: 'Posizionamento: come uscire dalla guerra dei prezzi',
    duration: '09:47',
    tag: 'Posizionamento',
    thumb: null,
  },
  {
    title: 'Tone of voice: come trovare e mantenere la tua voce unica',
    duration: '15:10',
    tag: 'Comunicazione',
    thumb: null,
  },
  {
    title: 'Il sistema editoriale mensile che uso con i miei clienti',
    duration: '21:05',
    tag: 'Content Strategy',
    thumb: null,
  },
  {
    title: 'Brand identity vs. brand image: la distinzione che cambia tutto',
    duration: '11:58',
    tag: 'Brand',
    thumb: null,
  },
]

export default function Video() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Video"
          title="Guarda, ascolta,"
          titleAccent="costruisci."
          subtitle="Video pratici su brand, marketing e AI. Pensati per chi vuole capire le cose in profondità, non inseguire la prossima tendenza."
        />

        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            {/* YouTube CTA */}
            <div
              className="flex items-center justify-between flex-wrap gap-4 mb-14"
              style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}
            >
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                Tutti i video su YouTube — iscriviti per non perderne nessuno.
              </p>
              <a
                href="https://www.youtube.com/@antonioandreozzi.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-ghost"
              >
                <Play size={12} />
                Apri su YouTube
              </a>
            </div>

            {/* Video grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: '1px solid var(--border)', background: 'var(--border)' }}>
              {videos.map((v) => (
                <div
                  key={v.title}
                  className="card-hover"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {/* Thumbnail placeholder */}
                  <div
                    style={{
                      aspectRatio: '16/9',
                      background: 'var(--bg-card)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: '1px solid var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent)',
                        opacity: 0.7,
                      }}
                    >
                      <Play size={18} fill="currentColor" />
                    </div>
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        right: '0.75rem',
                        fontSize: '0.65rem',
                        letterSpacing: '0.06em',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-inter)',
                        background: 'rgba(9,9,11,0.8)',
                        padding: '0.2rem 0.5rem',
                      }}
                    >
                      {v.duration}
                    </span>
                  </div>

                  {/* Info */}
                  <div style={{ padding: 'clamp(1rem, 2vw, 1.5rem)', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)' }}>
                      {v.tag}
                    </span>
                    <h2
                      className="font-display"
                      style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 400, lineHeight: 1.35, color: 'var(--text-primary)' }}
                    >
                      {v.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
