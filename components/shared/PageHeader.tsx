interface PageHeaderProps {
  kicker: string
  title: string
  titleAccent?: string
  subtitle?: string
}

export default function PageHeader({ kicker, title, titleAccent, subtitle }: PageHeaderProps) {
  return (
    <section
      style={{
        paddingTop: 'clamp(120px, 14vw, 180px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        background: 'var(--bg-void)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container-site">
        <div className="flex items-center gap-3 mb-8">
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
            {kicker}
          </span>
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: 'var(--text-primary)',
            maxWidth: '800px',
          }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{titleAccent}</em>
            </>
          )}
        </h1>

        {subtitle && (
          <p
            style={{
              marginTop: '1.5rem',
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
