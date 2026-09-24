import { PageHeader } from '@/components/ui/PageHeader'
import { usePageMeta } from '@/lib/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found | CALEBrated Virtual Services',
    description:
      'The page you requested could not be found. Return to the CALEBrated Virtual Services homepage for virtual assistant and business support services.',
    noindex: true,
  })

  return (
    <PageHeader
      eyebrow="404"
      title="This page doesn’t exist, but our virtual assistant services do."
      intro="The link may be outdated or the page may have moved. Head back home to explore our virtual business support services."
      cta={{ label: 'Back to Home', to: '/' }}
    />
  )
}
