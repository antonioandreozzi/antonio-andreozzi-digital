import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articoli su brand, marketing, intelligenza artificiale e comunicazione. Niente tattiche del mese — solo riflessioni utili per chi costruisce qualcosa di duraturo.',
}

const posts: { date: string; tag: string; title: string; excerpt: string; slug: string }[] = [
  {
    date: '1 Ottobre 2026',
    tag: 'AI',
    title: 'AI e marketing locale: come usarla per trovare clienti nella tua provincia',
    excerpt: 'Come usare l\'AI per trovare clienti a Caserta, Napoli e in Campania. Cinque strumenti pratici per PMI e freelancer senza budget da multinazionale.',
    slug: 'ai-trovare-clienti-caserta-napoli',
  },
  {
    date: '28 Settembre 2026',
    tag: 'AI',
    title: 'Automazioni per freelancer: cosa delegare all\'AI e cosa no',
    excerpt: 'Guida pratica per freelancer e PMI a Napoli e Caserta: cosa delegare all\'AI, cosa tenere per sé, e il test in 3 domande per decidere.',
    slug: 'automazioni-ai-freelancer-napoli-caserta',
  },
  {
    date: '24 Settembre 2026',
    tag: 'AI',
    title: 'Come creare contenuti con l\'AI senza sembrare un robot',
    excerpt: 'Come usare l\'AI per creare contenuti autentici senza perdere la tua voce. Metodi pratici per PMI e freelancer a Napoli e Caserta.',
    slug: 'creare-contenuti-ai-senza-sembrare-robot',
  },
  {
    date: '21 Settembre 2026',
    tag: 'AI',
    title: 'Intelligenza artificiale nel marketing: come la uso senza perdere la voce',
    excerpt: "Come uso l'AI nel marketing quotidiano a Napoli e Caserta senza diventare generico. Metodi concreti per PMI e professionisti campani.",
    slug: 'intelligenza-artificiale-marketing-napoli-voce-autentica',
  },
  {
    date: '17 Settembre 2026',
    tag: 'AI',
    title: 'AI per PMI a Caserta e Napoli: gli strumenti che uso davvero',
    excerpt: 'Intelligenza artificiale per le PMI a Caserta e Napoli: gli strumenti che uso davvero con i miei clienti, senza tecnicismi e senza hype.',
    slug: 'ai-per-pmi-caserta-napoli',
  },
  {
    date: '14 Settembre 2026',
    tag: 'Brand',
    title: 'Perché il tuo brand non viene ricordato (e come cambiarlo)',
    excerpt: 'Il tuo brand esiste ma nessuno lo ricorda? Ecco i 4 motivi reali che vedo ogni giorno tra le PMI di Caserta e Napoli, e come risolverli.',
    slug: 'perche-brand-non-viene-ricordato-caserta-napoli',
  },
  {
    date: '7 Settembre 2026',
    tag: 'Brand',
    title: 'Come costruire un messaggio di brand chiaro in 7 giorni',
    excerpt: 'Se la tua PMI a Napoli o Caserta non sa come comunicare il proprio valore, questo metodo in 7 giorni ti porta dalla confusione alla chiarezza.',
    slug: 'come-costruire-messaggio-brand-chiaro-napoli-caserta',
  },
  {
    date: '3 Settembre 2026',
    tag: 'Brand',
    title: 'Brand identity Caserta: identità vs immagine per le PMI',
    excerpt: 'Molte PMI di Caserta e Napoli confondono identità e immagine aziendale. Ecco la distinzione che cambia tutto per il tuo brand.',
    slug: 'brand-identity-caserta-identita-vs-immagine',
  },
  {
    date: '31 Agosto 2026',
    tag: 'Brand',
    title: 'Posizionamento di marca: come smettere di competere sul prezzo a Caserta e Napoli',
    excerpt: 'Come costruire un posizionamento di marca che ti differenzia a Caserta e Napoli senza competere sul prezzo. Guida per PMI campane.',
    slug: 'posizionamento-di-marca-caserta-napoli',
  },
  {
    date: '27 Agosto 2026',
    tag: 'Brand',
    title: 'Personal brand a Napoli: da dove partire davvero',
    excerpt: 'Costruire un personal brand a Napoli e in Campania: gli errori da evitare, da dove iniziare e come farlo funzionare per freelancer e imprenditori del Sud.',
    slug: 'personal-brand-napoli-imprenditori',
  },
  {
    date: '24 Agosto 2026',
    tag: 'Brand',
    title: 'Consulente brand Caserta: costruire un brand che dura',
    excerpt: 'Sei un imprenditore a Caserta o Napoli? Ecco cosa fa davvero un consulente brand per PMI e come costruire un brand riconoscibile senza sprecare budget.',
    slug: 'consulente-brand-caserta-napoli',
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
