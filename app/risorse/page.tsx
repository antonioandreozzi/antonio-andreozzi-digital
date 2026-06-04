import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'
import { Download, FileText, BookOpen, Zap } from 'lucide-react'
import NewsletterForm from '@/components/shared/NewsletterForm'

export const metadata: Metadata = {
  title: 'Risorse Gratuite',
  description:
    'Risorse gratuite su brand, marketing e AI: guide, template, checklist e strumenti pratici per imprenditori e professionisti italiani.',
}

const resources = [
  {
    icon: FileText,
    tag: 'Guida PDF',
    title: 'Il Brand Clarity Canvas',
    desc: 'Un framework visivo per chiarire il tuo posizionamento, il tuo target e il tuo messaggio in meno di 2 ore. Usato con tutti i miei clienti prima di ogni progetto.',
    cta: 'Scarica gratis',
  },
  {
    icon: BookOpen,
    tag: 'Template',
    title: 'Il Tono di Voce in 5 Domande',
    desc: 'Una guida rapida per definire il tono di voce del tuo brand. Include esempi pratici, domande di esplorazione e un template da riempire.',
    cta: 'Scarica gratis',
  },
  {
    icon: Zap,
    tag: 'Checklist',
    title: 'Audit del Brand: 30 punti da controllare',
    desc: "Prima di investire in comunicazione, verifica che il tuo brand sia solido. Questa checklist ti guida attraverso 30 punti critici — dall'identità alla coerenza visiva.",
    cta: 'Scarica gratis',
  },
  {
    icon: FileText,
    tag: 'Guida PDF',
    title: 'AI per il Content Marketing: starter pack',
    desc: "Come usare ChatGPT, Claude e altri strumenti AI senza perdere la tua voce. Include prompt pronti all'uso e workflow pratici per chi non vuole diventare un tecnico.",
    cta: 'Scarica gratis',
  },
  {
    icon: BookOpen,
    tag: 'Template',
    title: 'Piano Editoriale Mensile',
    desc: 'Il template che uso io e che uso con i miei clienti per pianificare i contenuti del mese. Compatibile con Notion e Google Sheets.',
    cta: 'Scarica gratis',
  },
  {
    icon: FileText,
    tag: 'Mini-corso',
    title: 'Posizionamento in 7 giorni',
    desc: 'Una sequenza email con esercizi pratici per lavorare sul tuo posizionamento in una settimana. Un micro-step al giorno, risultati concreti alla fine.',
    cta: 'Iscriviti gratis',
  },
]

export default function Risorse() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          kicker="Risorse Gratuite"
          title="Strumenti che"
          titleAccent="puoi usare subito."
          subtitle="Guide, template e checklist per costruire il tuo brand, affinare la tua comunicazione e usare l'AI in modo intelligente. Tutto gratuito."
        />

        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: '1px solid var(--border)', background: 'var(--border)' }}>
              {resources.map((r) => {
                const Icon = r.icon
                return (
                  <div
                    key={r.title}
                    className="card-hover border-glow"
                    style={{
                      padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.2rem',
                    }}
                  >
                    {/* Icon + tag */}
                    <div className="flex items-center gap-3">
                      <Icon size={16} style={{ color: 'var(--accent)', opacity: 0.8 }} />
                      <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)' }}>
                        {r.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="font-display"
                      style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 400, lineHeight: 1.3, color: 'var(--text-primary)' }}
                    >
                      {r.title}
                    </h2>

                    {/* Desc */}
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, flexGrow: 1 }}>
                      {r.desc}
                    </p>

                    {/* CTA */}
                    <button
                      className="cta-ghost"
                      style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <Download size={12} />
                      {r.cta}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section
          className="section-padding"
          style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)' }}
        >
          <div className="container-site max-w-2xl mx-auto text-center">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '1.5rem' }}>
              Newsletter
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '1rem' }}
            >
              Ricevi nuove risorse
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>ogni settimana.</em>
            </h2>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2.5rem' }}>
              Niente spam. Solo contenuti utili su brand, marketing e AI — diretti alla tua casella email.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
