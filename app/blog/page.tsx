import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articoli su brand, marketing, intelligenza artificiale e comunicazione. Niente tattiche del mese — solo riflessioni utili per chi costruisce qualcosa di duraturo.',
}

const posts: { date: string; tag: string; title: string; excerpt: string; slug: string }[] = []

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
