'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY!,
        },
        body: JSON.stringify({
          email,
          listIds: [Number(process.env.NEXT_PUBLIC_BREVO_LIST_ID)],
          updateEnabled: true,
        }),
      })

      if (res.ok || res.status === 204) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p style={{
        fontFamily:    'var(--font-inter)',
        fontSize:      '0.9rem',
        color:         'var(--accent)',
        textAlign:     'center',
        letterSpacing: '0.04em',
        maxWidth:      '480px',
        margin:        '0 auto',
      }}>
        Perfetto — controlla la tua email. Le risorse sono in arrivo.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto' }}
    >
      <input
        type="email"
        required
        placeholder="La tua email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
        style={{
          flexGrow:    1,
          background:  'var(--bg-card)',
          border:      '1px solid var(--border)',
          borderRight: 'none',
          color:       'var(--text-primary)',
          padding:     '0.9rem 1.2rem',
          fontSize:    '0.85rem',
          fontFamily:  'var(--font-inter)',
          outline:     'none',
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="cta-primary"
        style={{ flexShrink: 0 }}
      >
        {status === 'loading' ? '...' : 'Iscriviti'}
      </button>
      {status === 'error' && (
        <p style={{
          position:   'absolute',
          marginTop:  '3.5rem',
          fontSize:   '0.75rem',
          color:      '#e05c5c',
          fontFamily: 'var(--font-inter)',
        }}>
          Qualcosa è andato storto. Riprova.
        </p>
      )}
    </form>
  )
}
