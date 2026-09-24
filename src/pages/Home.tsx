import { About } from '@/components/About'
import { FinalCTA } from '@/components/FinalCTA'
import { Hero } from '@/components/Hero'
import { PremiumStatement } from '@/components/PremiumStatement'
import { ProofStrip } from '@/components/ProofStrip'
import { Testimonials } from '@/components/Testimonials'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { homeJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = homeJsonLd()

export default function Home() {
  usePageMeta({
    title: 'Virtual Assistant Services | CALEBrated Virtual Services',
    description:
      'CALEBrated gives busy business owners reliable virtual assistant support for admin work, customer service, and daily operations, so you get your time back.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <Hero />
      <ProofStrip />
      <PremiumStatement />
      <About teaser />
      <ServicesPreview />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
