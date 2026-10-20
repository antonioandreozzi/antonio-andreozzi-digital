'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 8,   suffix: '+', label: 'anni di esperienza', desc: 'Nel marketing e brand strategy' },
  { value: 120, suffix: '+', label: 'clienti seguiti',    desc: 'PMI, freelancer, professionisti' },
  { value: 3.2, suffix: 'x', label: 'ROI medio',          desc: 'Sui progetti di posizionamento' },
  { value: 50,  suffix: '+', label: 'brand costruiti',    desc: 'Da zero o completamente riposizionati' },
]

function CountUp({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [current, setCurrent] = useState(0)
  const isDecimal = target % 1 !== 0

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const steps    = 60
    const interval = duration / steps
    const increment = target / steps
    let count = 0
    const timer = setInterval(() => {
      count += increment
      if (count >= target) {
        setCurrent(target)
        clearInterval(timer)
      } else {
        setCurrent(count)
      }
    }, interval)
    return () => clearInterval(timer)
  }, [started, target])

  const display = isDecimal ? current.toFixed(1) : Math.floor(current).toString()
  return <>{display}{suffix}</>
}

export default function Stats() {
  const ref     = useRef<HTMLDivElement>(null)
  const inView  = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      style={{
        borderTop:    '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background:   '#0A0A0A',
      }}
    >
      <div ref={ref} className="container-site">
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap:                 '1px',
          background:          'rgba(255,255,255,0.08)',
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              style={{
                background: '#0A0A0A',
                padding:    'clamp(2.5rem, 4vw, 4rem) clamp(1.5rem, 3vw, 2.5rem)',
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize:      'clamp(3rem, 6vw, 5.5rem)',
                  fontWeight:    300,
                  lineHeight:    1,
                  color:         '#C9A84C',
                  letterSpacing: '-0.03em',
                  marginBottom:  '0.6rem',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                <CountUp target={s.value} suffix={s.suffix} started={inView} />
              </div>
              <div style={{
                fontSize:      '0.82rem',
                fontWeight:    500,
                color:         '#FFFFFF',
                fontFamily:    'var(--font-inter)',
                letterSpacing: '0.04em',
                marginBottom:  '0.3rem',
              }}>
                {s.label}
              </div>
              <div style={{
                fontSize:   '0.75rem',
                color:      'rgba(255,255,255,0.38)',
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
              }}>
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
