'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Chi Sono',         href: '/chi-sono' },
  { label: 'Blog',             href: '/blog' },
  { label: 'Video',            href: '/video' },
  { label: 'Risorse Gratuite', href: '/risorse' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(9, 9, 11, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="container-site">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
              fontWeight: 300,
              letterSpacing: '0.04em',
            }}
          >
            We Move
            <span style={{ color: 'var(--accent)' }}> Markets</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.65rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 500,
                    color: isActive(l.href) ? 'var(--accent)' : 'var(--text-muted)',
                    transition: 'color 0.2s ease',
                    borderBottom: isActive(l.href) ? '1px solid var(--accent)' : '1px solid transparent',
                    paddingBottom: '2px',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/lavora-con-me" className="cta-primary hidden md:inline-flex">
              Lavora con me
            </Link>
            <button
              className="md:hidden flex items-center justify-center w-12 h-12"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EDE8DF', padding: '8px' }}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            >
              {open ? <X size={24} color="#EDE8DF" /> : <Menu size={24} color="#EDE8DF" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu — full screen overlay */}
        {open && (
        <div
          style={{
            position:        'fixed',
            top:             0,
            left:            0,
            right:           0,
            bottom:          0,
            background:      '#09090B',
            zIndex:          99999,
            display:         'flex',
            flexDirection:   'column',
            justifyContent:  'center',
            alignItems:      'center',
          }}
        >
          <ul className="list-none m-0 p-0 flex flex-col gap-8 text-center">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display"
                  style={{
                    textDecoration: 'none',
                    fontSize:       'clamp(2rem, 7vw, 3rem)',
                    fontWeight:     300,
                    fontStyle:      isActive(l.href) ? 'italic' : 'normal',
                    color:          isActive(l.href) ? '#C8913A' : '#EDE8DF',
                    display:        'block',
                    letterSpacing:  '0.02em',
                    fontFamily:     'var(--font-cormorant), Georgia, serif',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: '1rem' }}>
              <Link
                href="/lavora-con-me"
                onClick={() => setOpen(false)}
                className="cta-primary"
                style={{ fontSize: '0.75rem' }}
              >
                Lavora con me
              </Link>
            </li>
          </ul>

          {/* Chiudi con X */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position:   'absolute',
              top:        '1.5rem',
              right:      '1.5rem',
              background: 'none',
              border:     'none',
              color:      '#EDE8DF',
              cursor:     'pointer',
              padding:    '0.5rem',
              zIndex:     9001,
            }}
            aria-label="Chiudi menu"
          >
            <X size={24} color="#EDE8DF" />
          </button>
        </div>
        )}
      </div>
    </header>
  )
}
