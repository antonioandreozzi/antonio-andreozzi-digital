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
              className="md:hidden flex items-center justify-center w-10 h-10"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu — full screen overlay */}
        <div
          className="md:hidden"
          style={{
            position:   'fixed',
            top:        0,
            left:       0,
            right:      0,
            bottom:     0,
            background: 'rgba(9, 9, 11, 0.97)',
            backdropFilter: 'blur(20px)',
            zIndex:     40,
            display:    'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap:        '0',
            opacity:    open ? 1 : 0,
            pointerEvents: open ? 'all' : 'none',
            transition: 'opacity 0.3s ease',
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
                    fontSize:       'clamp(1.8rem, 6vw, 2.5rem)',
                    fontWeight:     300,
                    fontStyle:      isActive(l.href) ? 'italic' : 'normal',
                    color:          isActive(l.href) ? 'var(--accent)' : 'var(--text-primary)',
                    display:        'block',
                    letterSpacing:  '0.02em',
                    transition:     'color 0.2s ease',
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
              color:      'var(--text-muted)',
              cursor:     'pointer',
              padding:    '0.5rem',
            }}
            aria-label="Chiudi menu"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
