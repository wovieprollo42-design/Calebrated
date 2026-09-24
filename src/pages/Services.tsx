import { FinalCTA } from '@/components/FinalCTA'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { PageHeader } from '@/components/ui/PageHeader'
import { servicesJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = servicesJsonLd()

export default function ServicesPage() {
  usePageMeta({
    title: 'Virtual Assistant Services for Small Business | CALEBrated',
    description:
      'Virtual assistant services from CALEBrated: remote administrative support, customer service, CRM and lead support that give your team hours back every week.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Virtual Assistant Services for Your Whole Business."
        intro="Admin work, customer service, CRM updates, and lead research. We handle it inside the tools you already use."
        cta={{ label: 'Book a Consultation', to: '/contact' }}
      />
      <Services />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
