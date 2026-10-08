'use client'

export default function GradientOrbs() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Orb 1 — Violet, top-left hero */}
      <div
        style={{
          position: 'absolute',
          top: '-15vh',
          left: '-20vw',
          width: '70vw',
          height: '70vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orb-pulse 18s ease-in-out infinite',
          animationDelay: '0s',
        }}
      />

      {/* Orb 2 — Fuchsia, top-right */}
      <div
        style={{
          position: 'absolute',
          top: '5vh',
          right: '-25vw',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,70,239,0.18) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'orb-drift 22s ease-in-out infinite',
          animationDelay: '-7s',
        }}
      />

      {/* Orb 3 — Cyan, bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: '0vh',
          left: '-10vw',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb-pulse 25s ease-in-out infinite',
          animationDelay: '-12s',
        }}
      />

      {/* Orb 4 — Amber accent, mid-right (molto sottile) */}
      <div
        style={{
          position: 'absolute',
          top: '40vh',
          right: '5vw',
          width: '35vw',
          height: '35vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orb-drift 30s ease-in-out infinite',
          animationDelay: '-18s',
        }}
      />

      {/* Orb 5 — Violet piccolo, center page mid-depth */}
      <div
        style={{
          position: 'absolute',
          top: '60vh',
          left: '30vw',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'orb-pulse 20s ease-in-out infinite',
          animationDelay: '-4s',
        }}
      />
    </div>
  )
}
