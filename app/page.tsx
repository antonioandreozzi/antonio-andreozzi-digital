import Navbar          from '@/components/layout/Navbar'
import Footer          from '@/components/layout/Footer'
import Hero            from '@/components/sections/Hero'
import ScrollExperience from '@/components/sections/ScrollExperience'
import Problem         from '@/components/sections/Problem'
import About           from '@/components/sections/About'
import GLBShowcase     from '@/components/sections/GLBShowcase'
import Pillars         from '@/components/sections/Pillars'
import Quote           from '@/components/sections/Quote'
import FAQ             from '@/components/sections/FAQ'
import CTA             from '@/components/sections/CTA'
import Ticker          from '@/components/sections/Ticker'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />

        {/* Scroll-driven 3D narrative — 300vh sticky storytelling */}
        <ScrollExperience />

        <Ticker speed={30} />

        <Problem />

        <About />

        {/* GLB-style interactive 3D object — drag to rotate */}
        <GLBShowcase />

        <Ticker speed={22} reverse />

        <Pillars />

        <Quote />

        <FAQ />

        <Ticker speed={26} />

        <CTA />
      </main>
      <Footer />
    </>
  )
}
