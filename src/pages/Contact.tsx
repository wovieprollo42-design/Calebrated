import { Contact } from '@/components/Contact'
import { PageHeader } from '@/components/ui/PageHeader'
import { contactJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = contactJsonLd()

export default function ContactPage() {
  usePageMeta({
    title: 'Contact CALEBrated | Book a Free Virtual Support Consultation',
    description:
      'Contact CALEBrated Virtual Services to book a free consultation. Tell us where you need virtual business support and get a clear next step within one day.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell Us Where Your Operations Need Virtual Business Support."
        intro="Share a few details about your operations and the virtual assistant services you are considering. We reply within one business day with a clear next step."
      />
      <Contact />
    </>
  )
}
