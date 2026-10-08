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
      {/* Orb 1 — viola caldo, top-left, sottilissimo */}
      <div
        style={{
          position: 'absolute',
          top: '-10vh',
          left: '-15vw',
          width: '65vw',
          height: '65vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,60,120,0.14) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb-pulse 22s ease-in-out infinite',
          animationDelay: '0s',
        }}
      />

      {/* Orb 2 — volt glow sottilissimo, bottom-right */}
      <div
        style={{
          position: 'absolute',
          bottom: '5vh',
          right: '-20vw',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,241,53,0.05) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'orb-drift 30s ease-in-out infinite',
          animationDelay: '-10s',
        }}
      />

      {/* Orb 3 — indigo profondo, center */}
      <div
        style={{
          position: 'absolute',
          top: '45vh',
          left: '20vw',
          width: '45vw',
          height: '45vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(50,40,90,0.10) 0%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'orb-pulse 28s ease-in-out infinite',
          animationDelay: '-6s',
        }}
      />
    </div>
  )
}
