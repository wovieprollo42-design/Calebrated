import { ContactForm, ContactOptions } from '@/components/Contact'
import { PageHeader } from '@/components/ui/PageHeader'
import { contactJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = contactJsonLd()

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us or Book a Free Consultation | CALEBrated',
    description:
      'Book a free consultation with CALEBrated Virtual Services, or send us a message about your business. Tell us what you need, and we will get back to you.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Talk About Your Business"
        intro="Tell us about your business and what you need. We will get back to you."
        aside={<ContactForm />}
        image="/images/pages/contact.jpg"
        imagePosition="object-[38%_center]"
      />
      <ContactOptions />
    </>
  )
}
