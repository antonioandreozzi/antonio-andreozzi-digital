'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Chi Sono',         href: '/chi-sono' },
  { label: 'Blog',             href: '/blog' },
  { label: 'Video',            href: '/video' },
  { label: 'Risorse Gratuite', href: '/risorse' },
  { label: 'Team',             href: '/team' },
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
        background: scrolled ? 'rgba(7, 7, 15, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.5)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.5)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(167,139,250,0.15)'
          : '1px solid transparent',
        boxShadow: scrolled
          ? '0 0 40px rgba(124,58,237,0.10), 0 1px 0 rgba(255,255,255,0.05)'
          : 'none',
      }}
    >
      <div className="container-site">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            style={{
              textDecoration: 'none',
              color: '#F0EFF8',
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
              fontWeight: 300,
              letterSpacing: '0.04em',
              transition: 'color 0.3s ease',
            }}
          >
            We Move
            <span style={{ color: 'var(--accent)' }}> Markets</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.65rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 500,
                    color: isActive(l.href) ? 'var(--accent)' : 'rgba(249,249,255,0.65)',
                    transition: 'color 0.2s ease',
                    borderBottom: isActive(l.href) ? '1px solid var(--accent)' : '1px solid transparent',
                    paddingBottom: '2px',
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a href="/lavora-con-me" className="cta-primary hidden md:inline-flex">
              Lavora con me
            </a>
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
            width:           '100vw',
            height:          '100vh',
            backgroundColor: '#000000',
            zIndex:          2147483000,
            display:         'flex',
            flexDirection:   'column',
            justifyContent:  'center',
            alignItems:      'center',
            gap:             '2rem',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color:          '#ffffff',
                fontSize:       '2rem',
                fontWeight:     400,
                textDecoration: 'none',
                display:        'block',
                padding:        '0.5rem 2rem',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/lavora-con-me"
            onClick={() => setOpen(false)}
            style={{
              color:           '#7C6CF5',
              fontSize:        '1rem',
              fontWeight:      600,
              textDecoration:  'none',
              border:          '1px solid #7C6CF5',
              padding:         '0.8rem 2rem',
              marginTop:       '1rem',
            }}
          >
            Lavora con me
          </a>

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
