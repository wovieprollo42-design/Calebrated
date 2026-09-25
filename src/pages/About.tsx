import { About } from '@/components/About'
import { FinalCTA } from '@/components/FinalCTA'
import { ValueDifference } from '@/components/ValueDifference'
import { PageHeader } from '@/components/ui/PageHeader'
import { CoreValues, PartnerLogos } from '@/components/home/HomeSections'
import { aboutJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = aboutJsonLd()

export default function AboutPage() {
  usePageMeta({
    title: 'About CALEBrated | A Remote Team of Virtual Assistants',
    description:
      'Meet CALEBrated Virtual Services, a remote team that helps busy business owners get more done without hiring in-house. See how we work and what we value.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Meet Your Remote Team"
        intro="A remote team of virtual assistants who handle your admin, marketing, and website work."
        image="/images/pages/about.jpg"
        imagePosition="object-[68%_center]"
      />
      <PartnerLogos />
      <About />
      <CoreValues showLink={false} />
      <ValueDifference />
      <FinalCTA />
    </>
  )
}
