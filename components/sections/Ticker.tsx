interface TickerProps {
  items?: string[]
  speed?: number   // secondi per un ciclo completo
  reverse?: boolean
}

const DEFAULT_ITEMS = [
  'BRAND',
  'IDENTITÀ',
  'SISTEMI',
  'AI',
  'POSIZIONAMENTO',
  'VOCE',
  'STRATEGIA',
  'AUTENTICITÀ',
]

export default function Ticker({
  items   = DEFAULT_ITEMS,
  speed   = 28,
  reverse = false,
}: TickerProps) {
  // Duplica due volte per loop seamless
  const track = [...items, ...items, ...items, ...items]

  return (
    <div
      aria-hidden="true"
      style={{
        overflow:        'hidden',
        borderTop:       '1px solid var(--border)',
        borderBottom:    '1px solid var(--border)',
        background:      'var(--bg-surface)',
        padding:         'clamp(1rem, 2vw, 1.5rem) 0',
        userSelect:      'none',
        WebkitUserSelect:'none',
      }}
    >
      <div
        style={{
          display:         'flex',
          gap:             'clamp(2rem, 4vw, 4rem)',
          whiteSpace:      'nowrap',
          animation:       `ticker-${reverse ? 'reverse' : 'forward'} ${speed}s linear infinite`,
          willChange:      'transform',
        }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           'clamp(2rem, 4vw, 4rem)',
              fontSize:      'clamp(0.65rem, 1.2vw, 0.9rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontFamily:    'var(--font-inter)',
              fontWeight:    500,
              color:         i % 2 === 0 ? 'var(--text-muted)' : 'var(--accent)',
              opacity:       i % 2 === 0 ? 0.5 : 0.9,
              flexShrink:    0,
            }}
          >
            {item}
            {/* Separatore */}
            <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', opacity: 0.4 }} />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker-forward {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ticker-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="ticker-forward"],
          [style*="ticker-reverse"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
