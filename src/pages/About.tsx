import { About } from '@/components/About'
import { FinalCTA } from '@/components/FinalCTA'
import { PremiumStatement } from '@/components/PremiumStatement'
import { ValueDifference } from '@/components/ValueDifference'
import { PageHeader } from '@/components/ui/PageHeader'
import { aboutJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = aboutJsonLd()

export default function AboutPage() {
  usePageMeta({
    title: 'About CALEBrated | Virtual Business Support Partner',
    description:
      'Meet CALEBrated, a virtual business support partner providing dependable remote administrative support that keeps operations organized while you grow.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <PageHeader
        eyebrow="About CALEBrated"
        title="A Virtual Business Support Partner Built Around the Way You Work."
        intro="CALEBrated Virtual Services gives owners and teams dependable remote administrative support without adding headcount, so operations stay organized while you focus on growth."
      />
      <About />
      <PremiumStatement />
      <ValueDifference />
      <FinalCTA />
    </>
  )
}
