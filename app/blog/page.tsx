import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articoli su brand, marketing, intelligenza artificiale e comunicazione. Niente tattiche del mese — solo riflessioni utili per chi costruisce qualcosa di duraturo.',
}

const posts = [
  {
    date: 'Giu 2025',
    tag: 'Brand',
    title: 'Perché le PMI italiane hanno un problema di brand, non di marketing',
    excerpt: 'Aumentare il budget di marketing non basta se il brand non comunica il valore reale della tua attività. Ecco perché — e come si risolve davvero.',
    slug: '/blog/pmi-italiane-problema-brand-non-marketing',
  },
  {
    date: 'Giu 2025',
    tag: 'Brand',
    title: 'Perché il tuo brand non viene ricordato (e come cambiarlo)',
    excerpt: 'La memoria non è un problema di budget. È un problema di chiarezza. Se non sai spiegare in 10 secondi cosa fai e per chi, nessuna campagna ti salverà.',
    slug: '#',
  },
  {
    date: 'Mag 2025',
    tag: 'AI',
    title: 'Come uso l\'AI nel mio lavoro quotidiano (senza perdere la voce)',
    excerpt: "L'intelligenza artificiale non è un sostituto della strategia. È un amplificatore. Ti mostro come l'ho integrata senza che i miei contenuti diventassero generici.",
    slug: '#',
  },
  {
    date: 'Mag 2025',
    tag: 'Comunicazione',
    title: 'Il tone of voice non è un documento. È un comportamento.',
    excerpt: 'Molte aziende hanno una brand guideline con il tone of voice. Pochissime lo applicano davvero. La differenza sta nel capire che è un modo di essere, non una lista di regole.',
    slug: '#',
  },
  {
    date: 'Apr 2025',
    tag: 'Posizionamento',
    title: 'Smettila di competere sul prezzo. Ecco come posizionarti diversamente.',
    excerpt: 'Quando non riesci a spiegare il tuo valore, l\'unica leva rimasta è il prezzo. Questo articolo ti aiuta a uscire da quel loop.',
    slug: '#',
  },
  {
    date: 'Mar 2025',
    tag: 'Content Strategy',
    title: 'Il sistema editoriale che uso per i miei clienti (e per me stesso)',
    excerpt: 'Produrre contenuti senza un sistema è come costruire senza fondamenta. Ti mostro la struttura che uso ogni mese per pianificare, creare e distribuire.',
    slug: '#',
  },
  {
    date: 'Feb 2025',
    tag: 'Brand',
    title: 'Identità vs. immagine: la distinzione che cambia tutto',
    excerpt: "L'immagine è ciò che mostri. L'identità è ciò che sei. La maggior parte delle imprese lavora sull'immagine e si dimentica dell'identità. Il risultato è fragilità.",
    slug: '#',
  },
]

export default function Blog() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Blog"
          title="Riflessioni su brand,"
          titleAccent="marketing e identità."
          subtitle="Niente tattiche del mese. Solo analisi, strumenti e punti di vista per chi vuole costruire qualcosa che duri."
        />

        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            {/* Filter bar */}
            <div
              className="flex flex-wrap gap-3 mb-14"
              style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}
            >
              {['Tutti', 'Brand', 'AI', 'Comunicazione', 'Posizionamento', 'Content Strategy'].map((tag) => (
                <button
                  key={tag}
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: tag === 'Tutti' ? 'var(--bg-void)' : 'var(--text-muted)',
                    background: tag === 'Tutti' ? 'var(--accent)' : 'transparent',
                    border: '1px solid var(--border)',
                    padding: '0.35rem 0.8rem',
                    fontFamily: 'var(--font-inter)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: '1px solid var(--border)', background: 'var(--border)' }}>
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="card-hover"
                  style={{
                    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)' }}>
                      {post.tag}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)' }}>
                      {post.date}
                    </span>
                  </div>
                  <h2
                    className="font-display animated-line"
                    style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 400, lineHeight: 1.3, color: 'var(--text-primary)' }}
                  >
                    <a href={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {post.title}
                    </a>
                  </h2>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, flexGrow: 1 }}>
                    {post.excerpt}
                  </p>
                  <a
                    href={post.slug}
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                  >
                    Leggi →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
