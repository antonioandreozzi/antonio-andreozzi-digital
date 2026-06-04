'use client'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Quanto costa lavorare con te?',
    a: "Dipende dal progetto. Non ho un listino fisso perché ogni lavoro è diverso. Il punto di partenza è la Diagnosi: 3 ore di lavoro insieme per capire dove sei e cosa fare. Da lì costruiamo una proposta su misura.",
  },
  {
    q: 'Lavori anche con piccole imprese e freelancer?',
    a: "Sì. Anzi, spesso con PMI e professionisti indipendenti il lavoro è più interessante perché il brand coincide quasi sempre con la persona. Non serve essere una grande azienda per costruire un brand forte — serve chiarezza.",
  },
  {
    q: 'Quanto tempo ci vuole per vedere i risultati?',
    a: "Un brand non si costruisce in una settimana. Ma già nei primi 30-60 giorni di lavoro sistemico noterai un cambiamento nel modo in cui comunichi e nel tipo di clienti che attiri. I risultati profondi si vedono in 3-6 mesi.",
  },
  {
    q: 'Devo avere già un sito o una presenza online?',
    a: "No. Possiamo partire da zero. Anzi, a volte è meglio: costruiamo tutto correttamente dall'inizio invece di dover smantellare ciò che non funziona.",
  },
  {
    q: 'Lavori solo a Caserta o anche a distanza?',
    a: "Lavoro principalmente da remoto con clienti in tutta Italia. Sono basato a Parete (CE) ma la mia esperienza non ha confini geografici — ho collaborato con imprenditori da Milano a Palermo.",
  },
  {
    q: "Cosa distingue il tuo approccio da un'agenzia tradizionale?",
    a: "Le agenzie vendono servizi. Io costruisco sistemi. Non eseguo un brief: ti aiuto a capire cosa stai costruendo, perché lo stai costruendo e per chi. Poi — e solo poi — iniziamo a produrre. Nessuna attività slegata da una strategia.",
  },
  {
    q: "Hai esperienza con l'intelligenza artificiale applicata al marketing?",
    a: "Sì. Uso l'AI quotidianamente e insegno ai miei clienti come farlo in modo sensato — non per rimpiazzare la strategia, ma per amplificarla. AI per chi pensa, non per chi ripete.",
  },
  {
    q: 'Come iniziamo a lavorare insieme?',
    a: "Parti dalla Diagnosi — il punto di ingresso naturale. 3 ore di lavoro insieme, un report scritto con le priorità chiare. Se vuoi continuare, costruiamo un percorso su misura. Scrivimi a antonioandreozzidigital@gmail.com.",
  },
]

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4 py-6"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span
            style={{
              fontSize: '0.6rem',
              color: 'var(--accent)',
              fontFamily: 'var(--font-inter)',
              letterSpacing: '0.12em',
              marginTop: '0.15rem',
              flexShrink: 0,
            }}
          >
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span
            className="font-display"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              fontWeight: 400,
              color: open ? 'var(--accent)' : 'var(--text-primary)',
              lineHeight: 1.4,
              transition: 'color 0.3s ease',
            }}
          >
            {q}
          </span>
        </div>
        <span
          style={{
            color: 'var(--accent)',
            flexShrink: 0,
            marginTop: '0.15rem',
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(0deg)' : 'rotate(0deg)',
          }}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p
          style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            paddingLeft: 'calc(0.6rem + 1rem)',
            paddingBottom: '1.5rem',
          }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left label */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  fontWeight: 500,
                  fontFamily: 'var(--font-inter)',
                }}
              >
                FAQ
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
              }}
            >
              Domande
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>frequenti.</em>
            </h2>
            <p
              style={{
                marginTop: '1.5rem',
                fontSize: '0.88rem',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
              }}
            >
              Nessuna domanda è troppo banale. Se hai dubbi non li trovi qui, scrivimi.
            </p>
          </div>

          {/* Right: accordion */}
          <div
            ref={ref}
            className="lg:col-span-8"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
            }}
          >
            {faqs.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} idx={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
