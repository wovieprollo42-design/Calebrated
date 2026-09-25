import { PageHeader } from '@/components/ui/PageHeader'
import { usePageMeta } from '@/lib/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found | CALEBrated Virtual Services',
    description:
      'We could not find this page. Go back to the CALEBrated home page to see our services, or book a free consultation to talk about what you need.',
    noindex: true,
  })

  return (
    <PageHeader
      eyebrow="404"
      title="Page Not Found"
      intro="The page may have moved. Let's get you back home."
      cta={{ label: 'Back to Home', to: '/', variant: 'secondary' }}
    />
  )
}
