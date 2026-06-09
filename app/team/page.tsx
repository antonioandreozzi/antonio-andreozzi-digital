import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Team — Antonio Andreozzi Digital',
  description:
    'Le persone dietro Antonio Andreozzi Digital. Un team costruito attorno a una sola idea: che il marketing, fatto bene, cambia la traiettoria di un business.',
}

const team = [
  {
    img: '/antonio.jpg',
    name: 'Antonio Andreozzi',
    role: 'Founder & CEO',
    bio: [
      'Ha dedicato anni a studiare come le persone prendono decisioni — e come i brand entrano (o non entrano) in quella scelta. Oggi mette quella conoscenza al servizio di imprenditori che vogliono costruire qualcosa che duri.',
      'Il suo approccio nasce da un percorso non lineare: creatività, due fallimenti formativi, e anni di studio tra psicologia, filosofia e strategia. Quello che ha costruito è un metodo che unisce identità, posizionamento e crescita in un sistema coerente.',
      'Lavora in modo selettivo, 1:1, con chi è pronto a costruire — davvero.',
    ],
    facts: [
      { label: 'Specializzazione', value: 'Brand Identity & Strategy' },
      { label: 'Formato', value: 'Solo 1:1, mai in gruppo' },
      { label: 'Sede', value: 'Parete (CE) · Remote Italia' },
    ],
  },
  {
    img: '/luca-damiani.png',
    name: 'Luca Damiani',
    role: 'Head of Strategy',
    bio: [
      'Entra in ogni progetto con una domanda precisa: dove si può creare più valore con meno dispersione. Ha affinato questo approccio in anni di lavoro tra consulenza strategica e digital marketing, su progetti costruiti da zero o riposizionati.',
      'Il suo contributo si misura in chiarezza portata. Prende obiettivi complessi, li scompone, costruisce la sequenza logica che porta dal punto A al risultato.',
      'In agenzia è la persona che garantisce che ogni strategia abbia una struttura — e che quella struttura tenga nel tempo.',
    ],
    facts: [
      { label: 'Specializzazione', value: 'Strategia & Crescita Digitale' },
      { label: 'Focus', value: 'Sistemi, metriche, esecuzione' },
      { label: 'Approccio', value: 'Prima la chiarezza, poi l\'azione' },
    ],
  },
]

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        <PageHeader
          kicker="Il team"
          title="Le persone che"
          titleAccent="muovono i mercati."
          subtitle="Due prospettive diverse, un solo obiettivo: costruire brand e strategie che lasciano un segno."
        />

        {/* Intro quote */}
        <section className="section-padding" style={{ background: 'var(--bg-void)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 lg:col-start-4">
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: 'var(--text-primary)',
                    fontStyle: 'italic',
                    textAlign: 'center',
                  }}
                >
                  "Crediamo che dietro ogni strategia ci sia sempre una storia umana.
                  Il nostro lavoro è fare in modo che quella storia venga ascoltata."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team members */}
        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
          <div className="container-site">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
                  style={{ borderTop: '1px solid var(--border)', paddingTop: '4rem' }}
                >
                  {/* Photo col */}
                  <div className={`lg:col-span-4 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div
                      style={{
                        aspectRatio: '4/5',
                        border: '1px solid var(--border)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={member.img}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '45%',
                          background: 'linear-gradient(to top, rgba(9,9,11,0.85), transparent)',
                          pointerEvents: 'none',
                        }}
                      />
                      <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                        <p style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-inter)', marginBottom: '0.3rem' }}>
                          {member.name}
                        </p>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(237,232,223,0.7)', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Facts */}
                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                      {member.facts.map((f) => (
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

                  {/* Content col */}
                  <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : ''} flex flex-col justify-center`}>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--accent)', fontFamily: 'var(--font-inter)', display: 'block', marginBottom: '1rem' }}>
                      0{index + 1}
                    </span>
                    <h2
                      className="font-display"
                      style={{
                        fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                        fontWeight: 300,
                        lineHeight: 1.1,
                        color: 'var(--text-primary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {member.name}
                    </h2>
                    <p
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 500,
                        marginBottom: '2.5rem',
                      }}
                    >
                      {member.role}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                      {member.bio.map((para, i) => (
                        <p
                          key={i}
                          style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 300,
                            fontSize: '0.95rem',
                            lineHeight: 1.9,
                            color: 'var(--text-muted)',
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section className="section-padding" style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 lg:col-start-3" style={{ textAlign: 'center' }}>
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                    fontWeight: 300,
                    lineHeight: 1.2,
                    color: 'var(--text-primary)',
                    marginBottom: '1.2rem',
                  }}
                >
                  Sei pronto a costruire qualcosa
                  <br />
                  <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>che duri davvero?</em>
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 2.5rem' }}>
                  Il primo passo è una conversazione. Raccontaci il tuo progetto e capiremo insieme se possiamo aiutarti.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="/lavora-con-me" className="cta-primary">Lavora con noi</a>
                  <a href="/diagnosi" className="cta-ghost">Inizia dalla Diagnosi</a>
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
