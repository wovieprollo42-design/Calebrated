import { FinalCTA } from '@/components/FinalCTA'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { PageHeader } from '@/components/ui/PageHeader'
import { CALENDLY_URL } from '@/data/home'
import { servicesJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = servicesJsonLd()

export default function ServicesPage() {
  usePageMeta({
    title: 'Admin, Marketing, and Website Services | CALEBrated',
    description:
      'Admin support, bookkeeping, social media, email marketing, paid ads, SEO, websites, funnels, GHL automation, and AI chatbots. One remote team handles it all.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="All Our Services In One Place"
        intro="Admin & Operations, Marketing & Sales, and Websites & Automation, all from one team."
        cta={{ label: 'Book a Free Consultation', href: CALENDLY_URL }}
      />
      <Services />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
