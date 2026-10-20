import Navbar              from '@/components/layout/Navbar'
import Footer              from '@/components/layout/Footer'
import Hero                from '@/components/sections/Hero'
import Problem             from '@/components/sections/Problem'
import About               from '@/components/sections/About'
import Pillars             from '@/components/sections/Pillars'
import Quote               from '@/components/sections/Quote'
import FAQ                 from '@/components/sections/FAQ'
import CTA                 from '@/components/sections/CTA'
import Ticker              from '@/components/sections/Ticker'
import VideoRevealSection  from '@/components/sections/VideoRevealSection'

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />

        <Ticker speed={30} />

        <Problem />

        {/* Portale 1 — esplode dopo il problema */}
        <VideoRevealSection
          videoSrc="/hero-v3.mp4"
          label="La strategia"
          headline={'Il mercato premia<br /><em style="font-style:italic;color:rgba(255,255,255,0.5)">chi sa comunicare.</em>'}
          sub="Non basta avere il prodotto migliore. Serve che le persone capiscano perché scegliere te."
        />

        <About />

        <Ticker speed={22} reverse />

        <Pillars />

        <Quote />

        <FAQ />

        {/* Portale 2 — esplode prima della CTA finale */}
        <VideoRevealSection
          videoSrc="/hero-v5.mp4"
          label="Inizia adesso"
          headline={'Tre ore.<br /><em style="font-style:italic;color:rgba(255,255,255,0.5)">Un report. Le priorità chiare.</em>'}
          sub="La Diagnosi è il punto di ingresso. Da lì decidi tu cosa fare."
        />

        <CTA />
      </main>
      <Footer />
    </>
  )
}
