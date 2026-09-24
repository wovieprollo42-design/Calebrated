import { processSteps } from '@/data/process'
import { services } from '@/data/services'

export type JsonLd = Record<string, unknown>

export const SITE_URL = 'https://calebratedvirtualservices.com'
export const SITE_NAME = 'CALEBrated Virtual Services'
export const CONTACT_EMAIL = 'infocalebrated@gmail.com'

const SCHEMA_CONTEXT = 'https://schema.org'

export const ORGANIZATION: JsonLd = {
  '@type': 'Organization',
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/brand/icon-512.png`,
  email: CONTACT_EMAIL,
}

export function pageUrl(pathname: string): string {
  if (pathname === '/' || pathname === '') return `${SITE_URL}/`
  return SITE_URL + pathname.replace(/\/+$/, '')
}

export function breadcrumb(pathname: string, name: string): JsonLd {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
      { '@type': 'ListItem', position: 2, name, item: pageUrl(pathname) },
    ],
  }
}

export function homeJsonLd(): JsonLd[] {
  return [
    {
      '@context': SCHEMA_CONTEXT,
      '@type': 'WebSite',
      name: SITE_NAME,
      url: pageUrl('/'),
    },
    {
      '@context': SCHEMA_CONTEXT,
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      url: pageUrl('/'),
      email: CONTACT_EMAIL,
      logo: `${SITE_URL}/brand/icon-512.png`,
      description:
        'CALEBrated Virtual Services provides virtual assistant services and remote administrative support for small businesses and growing teams, covering administrative work, customer service, social media, data entry, calendar and email management, lead generation, CRM support, and research and reporting.',
      areaServed: 'Worldwide',
      serviceType: services.map((service) => service.title),
    },
  ]
}

export function aboutJsonLd(): JsonLd[] {
  return [
    {
      '@context': SCHEMA_CONTEXT,
      '@type': 'AboutPage',
      name: 'About CALEBrated Virtual Services',
      url: pageUrl('/about'),
      description:
        'CALEBrated Virtual Services is a virtual business support partner that gives owners and teams dependable remote administrative support without adding headcount.',
      mainEntity: ORGANIZATION,
    },
    breadcrumb('/about', 'About'),
  ]
}

export function servicesJsonLd(): JsonLd[] {
  return [
    {
      '@context': SCHEMA_CONTEXT,
      '@type': 'Service',
      name: 'Virtual Assistant Services',
      serviceType: 'Virtual assistant services',
      url: pageUrl('/services'),
      provider: ORGANIZATION,
      areaServed: 'Worldwide',
      description:
        'Virtual assistant services from CALEBrated covering remote administrative support, outsourced customer service, social media support, data entry and management, calendar and email management, lead generation support, CRM support, and research and reporting.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'CALEBrated Virtual Assistant Services',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    breadcrumb('/services', 'Services'),
  ]
}

export function processJsonLd(): JsonLd[] {
  return [
    {
      '@context': SCHEMA_CONTEXT,
      '@type': 'HowTo',
      name: 'How to Hire a Virtual Assistant with CALEBrated',
      description:
        'Hiring a virtual assistant with CALEBrated Virtual Services follows four steps, from discovery and support design to integration and ongoing business operations support.',
      step: processSteps.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.title,
        text: step.description,
      })),
    },
    breadcrumb('/process', 'Process'),
  ]
}

export function contactJsonLd(): JsonLd[] {
  return [
    {
      '@context': SCHEMA_CONTEXT,
      '@type': 'ContactPage',
      name: 'Contact CALEBrated Virtual Services',
      url: pageUrl('/contact'),
      description:
        'Contact CALEBrated Virtual Services to book a free consultation and find the right virtual business support for your operations.',
      mainEntity: {
        ...ORGANIZATION,
        contactPoint: {
          '@type': 'ContactPoint',
          email: CONTACT_EMAIL,
          contactType: 'customer service',
          availableLanguage: 'English',
        },
      },
    },
    breadcrumb('/contact', 'Contact'),
  ]
}
