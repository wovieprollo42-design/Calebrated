import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TrustStrip } from '@/components/TrustStrip'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { ValueDifference } from '@/components/ValueDifference'
import { Process } from '@/components/Process'
import { PremiumStatement } from '@/components/PremiumStatement'
import { Testimonials } from '@/components/Testimonials'
import { FinalCTA } from '@/components/FinalCTA'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <ValueDifference />
        <Process />
        <PremiumStatement />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
