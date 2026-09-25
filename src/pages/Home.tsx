import { HomeHero } from '@/components/home/HomeHero'
import {
  Appointments,
  PartnerLogos,
  ConnectWithUs,
  CoreValues,
  FeatureCards,
  FeaturesIntro,
  ServiceGrid,
  WebsiteFeature,
  WhyChooseUs,
  WorldwideStats,
} from '@/components/home/HomeSections'
import { homeJsonLd } from '@/lib/seo'
import { usePageMeta } from '@/lib/usePageMeta'

const JSON_LD = homeJsonLd()

export default function Home() {
  usePageMeta({
    title: 'Virtual Assistant Services for Small Business | CALEBrated',
    description:
      'CALEBrated Virtual Services is a remote team of virtual assistants who handle your admin, marketing, and website work. Book a free consultation to get started.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <HomeHero />
      <PartnerLogos />
      <FeaturesIntro />
      <ServiceGrid />
      <WebsiteFeature />
      <WorldwideStats />
      <FeatureCards />
      <CoreValues />
      <WhyChooseUs />
      <Appointments />
      <ConnectWithUs />
    </>
  )
}
