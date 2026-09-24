import { FinalCTA } from '@/components/FinalCTA'
import { Process } from '@/components/Process'
import { PageHeader } from '@/components/ui/PageHeader'
import { processJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = processJsonLd()

export default function ProcessPage() {
  usePageMeta({
    title: 'How It Works | Hiring a Virtual Assistant with CALEBrated',
    description:
      'See how hiring a virtual assistant with CALEBrated works: four clear steps from discovery to ongoing business operations support that scales with your company.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A Simple Path to Steady Virtual Business Support."
        intro="Hiring a virtual assistant for small business owners and growing teams should feel simple. CALEBrated follows four clear steps, from the first conversation to ongoing operations support that scales with you."
      />
      <Process />
      <FinalCTA />
    </>
  )
}
