'use client'
export default function NewsletterForm() {
  return (
    <form
      style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="La tua email"
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
      <button type="submit" className="cta-primary" style={{ flexShrink: 0 }}>
        Iscriviti
      </button>
    </form>
  )
}
