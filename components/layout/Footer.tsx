import Link from 'next/link'

const social = [
  { label: 'Instagram',  href: 'https://www.instagram.com/antonioandreozzidigital' },
  { label: 'YouTube',    href: 'https://www.youtube.com/@antonioandreozzi.digital' },
  { label: 'X / Twitter', href: 'https://x.com/DigitalSEO__' },
  { label: 'LinkedIn',   href: 'https://www.linkedin.com/in/antonioandreozzi' },
  { label: 'Facebook',   href: 'https://www.facebook.com/antonioandreozzidigital' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
      }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p
              className="font-display"
              style={{
                fontSize: '1.3rem',
                fontWeight: 300,
                color: 'var(--text-primary)',
                letterSpacing: '0.03em',
                marginBottom: '1rem',
              }}
            >
              We Move
              <span style={{ color: 'var(--accent)' }}> Markets</span>
            </p>
            <p
              style={{
                fontSize: '0.82rem',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                maxWidth: '220px',
              }}
            >
              Agenzia marketing a Caserta. Costruiamo brand, sistemi e identità per chi ha scelto di non assomigliare a nessuno.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                marginBottom: '1.2rem',
              }}
            >
              Navigazione
            </p>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {[
                { label: 'Chi sono',         href: '/chi-sono' },
                { label: 'Blog',             href: '/blog' },
                { label: 'Video',            href: '/video' },
                { label: 'Risorse Gratuite', href: '/risorse' },
                { label: 'Lavora con me',    href: '/lavora-con-me' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="animated-line"
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      textDecoration: 'none',
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + contact */}
          <div>
            <p
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                marginBottom: '1.2rem',
              }}
            >
              Seguimi
            </p>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-line"
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      textDecoration: 'none',
                    }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-inter)',
              letterSpacing: '0.04em',
            }}
          >
            © {year} Antonio Andreozzi Digital · Via G. Corrado, 15 – 81030 Parete (CE)
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Cookie Policy'].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-inter)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
