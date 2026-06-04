'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.97, y: 16, filter: 'blur(6px)' }}
        animate={{
          opacity: 1, scale: 1, y: 0, filter: 'blur(0px)',
          transition: { duration: 0.65, ease: 'easeOut' },
        }}
        exit={{
          opacity: 0, scale: 1.01, y: -10, filter: 'blur(4px)',
          transition: { duration: 0.35, ease: 'easeIn' },
        }}
        style={{ minHeight: '100vh' }}
      >
        {children}
      </motion.div>

      {/* Accent bar bottom */}
      <motion.div
        key={`bar-${pathname}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 0, opacity: 0, transition: { duration: 0.4, delay: 0.3 } }}
        exit={{
          scaleX: [0, 1, 0] as number[],
          opacity: [1, 1, 0] as number[],
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        aria-hidden="true"
        style={{
          position:        'fixed',
          bottom:          0,
          left:            0,
          right:           0,
          height:          '2px',
          background:      'linear-gradient(90deg, transparent, var(--accent), transparent)',
          zIndex:          9990,
          pointerEvents:   'none',
          transformOrigin: '0% 50%',
        }}
      />
    </>
  )
}
