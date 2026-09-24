import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ProofStrip } from '@/components/ProofStrip'
import { PremiumStatement } from '@/components/PremiumStatement'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { ValueDifference } from '@/components/ValueDifference'
import { Process } from '@/components/Process'
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
        <ProofStrip />
        <PremiumStatement />
        <About />
        <Services />
        <ValueDifference />
        <Process />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
