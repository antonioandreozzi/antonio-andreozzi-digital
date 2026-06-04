import Navbar   from '@/components/layout/Navbar'
import Footer   from '@/components/layout/Footer'
import Hero     from '@/components/sections/Hero'
import Problem  from '@/components/sections/Problem'
import About    from '@/components/sections/About'
import Pillars  from '@/components/sections/Pillars'
import Quote    from '@/components/sections/Quote'
import FAQ      from '@/components/sections/FAQ'
import CTA      from '@/components/sections/CTA'
import Ticker   from '@/components/sections/Ticker'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />

        {/* Ticker 1 — dopo hero */}
        <Ticker speed={30} />

        <Problem />

        <About />

        {/* Ticker 2 — inverso tra About e Pillars */}
        <Ticker speed={22} reverse />

        <Pillars />

        <Quote />

        <FAQ />

        {/* Ticker 3 — prima del CTA */}
        <Ticker speed={26} />

        <CTA />
      </main>
      <Footer />
    </>
  )
}
