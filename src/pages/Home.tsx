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
    title: 'Virtual Assistant Services | CALEBrated Virtual Services',
    description:
      'CALEBrated gives busy business owners reliable virtual assistant support for admin work, customer service, and daily operations, so you get your time back.',
    jsonLd: JSON_LD,
  })

  return (
    <>
      <HomeHero />
      <PartnerLogos />
      <FeaturesIntro />
      <FeatureCards />
      <WebsiteFeature />
      <ServiceGrid />
      <WorldwideStats />
      <CoreValues />
      <WhyChooseUs />
      <Appointments />
      <ConnectWithUs />
    </>
  )
}
