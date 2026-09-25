import { FinalCTA } from '@/components/FinalCTA'
import { Process } from '@/components/Process'
import { PageHeader } from '@/components/ui/PageHeader'
import { CALENDLY_URL } from '@/data/home'
import { processJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = processJsonLd()

export default function ProcessPage() {
  usePageMeta({
    title: 'How It Works: Hiring a Virtual Assistant | CALEBrated',
    description:
      'Hiring a virtual assistant with CALEBrated takes four simple steps. We start with a free consultation, plan your support, get to work, and grow with you.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="Four Steps To Get Started"
        intro="From your first call to ongoing support, in four simple steps."
        cta={{ label: 'Book a Free Consultation', href: CALENDLY_URL }}
      />
      <Process />
      <FinalCTA />
    </>
  )
}
