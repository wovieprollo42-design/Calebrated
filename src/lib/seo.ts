import { socialLinks } from '@/data/home'
import { processSteps } from '@/data/process'
import { serviceGroups, services } from '@/data/services'

// Structured data for every page. Facts only: everything here comes from docs/improve/brief.md.
// Do not add an address, prices, ratings, reviews, founding date, or area served until the owner
// confirms them (see docs/improve/seo.md, "Add later").

export type JsonLd = Record<string, unknown>

export const SITE_URL = 'https://calebratedvirtualservices.com'
export const SITE_NAME = 'CALEBrated Virtual Services'
export const CONTACT_EMAIL = 'infocalebrated@gmail.com'

const SCHEMA_CONTEXT = 'https://schema.org'
const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const LOGO_URL = `${SITE_URL}/brand/icon-512.png`

const ORGANIZATION_DESCRIPTION =
  'CALEBrated Virtual Services is a remote team of virtual assistants and specialists. We handle admin, marketing, and website work for busy business owners, so they can get more done without hiring in-house.'

// Facebook, Instagram, X, and LinkedIn, straight from the footer links.
const SAME_AS = socialLinks.map((link) => link.href)

// Keep this node in step with the static Organization JSON-LD in index.html (same @id, same values).
export const ORGANIZATION: JsonLd = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: 'CALEBrated',
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  email: CONTACT_EMAIL,
  description: ORGANIZATION_DESCRIPTION,
  sameAs: SAME_AS,
  knowsAbout: services.map((service) => service.title),
  contactPoint: {
    '@type': 'ContactPoint',
    email: CONTACT_EMAIL,
    contactType: 'customer service',
    availableLanguage: 'English',
  },
}

const ORGANIZATION_REF: JsonLd = { '@id': ORGANIZATION_ID }

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

// Every service on the Services page, in its three groups, each linked to its own anchor.
function serviceCatalog(): JsonLd {
  return {
    '@type': 'OfferCatalog',
    name: 'Services from CALEBrated Virtual Services',
    itemListElement: serviceGroups.map((group) => ({
      '@type': 'OfferCatalog',
      name: group.name,
      description: group.intro,
      itemListElement: group.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `${pageUrl('/services')}#${service.slug}`,
          provider: ORGANIZATION_REF,
        },
      })),
    })),
  }
}

function webPage(type: string, pathname: string, name: string, description: string): JsonLd {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': type,
    '@id': `${pageUrl(pathname)}#webpage`,
    url: pageUrl(pathname),
    name,
    description,
    inLanguage: 'en',
    isPartOf: { '@id': WEBSITE_ID },
    about: ORGANIZATION_REF,
  }
}

export function homeJsonLd(): JsonLd[] {
  return [
    {
      '@context': SCHEMA_CONTEXT,
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: SITE_NAME,
      alternateName: 'CALEBrated',
      url: pageUrl('/'),
      inLanguage: 'en',
      publisher: ORGANIZATION_REF,
    },
    {
      '@context': SCHEMA_CONTEXT,
      ...ORGANIZATION,
      hasOfferCatalog: serviceCatalog(),
    },
  ]
}

export function aboutJsonLd(): JsonLd[] {
  return [
    {
      ...webPage(
        'AboutPage',
        '/about',
        'About CALEBrated Virtual Services',
        'CALEBrated Virtual Services is a remote team of virtual assistants that helps busy business owners get more done without hiring in-house.',
      ),
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
      name: 'Virtual assistant, marketing, and website services',
      serviceType: 'Virtual assistant services',
      url: pageUrl('/services'),
      provider: ORGANIZATION_REF,
      description:
        'One remote team for admin and operations, marketing and growth, and websites and automation. This covers admin support, bookkeeping, social media, email marketing, paid advertising, SEO, websites, funnels, GHL automation, and AI chatbots and voice AI.',
      hasOfferCatalog: serviceCatalog(),
    },
    breadcrumb('/services', 'Services'),
  ]
}

export function processJsonLd(): JsonLd[] {
  return [
    {
      '@context': SCHEMA_CONTEXT,
      '@type': 'HowTo',
      name: 'How to get started with CALEBrated Virtual Services',
      description:
        'Getting help from CALEBrated takes four steps. It starts with a free consultation call, then a support plan, then your team gets to work, and your support grows with your business.',
      url: pageUrl('/process'),
      step: processSteps.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.title,
        text: step.description,
      })),
    },
    breadcrumb('/process', 'How It Works'),
  ]
}

export function contactJsonLd(): JsonLd[] {
  return [
    {
      ...webPage(
        'ContactPage',
        '/contact',
        'Contact CALEBrated Virtual Services',
        'Book a free consultation with CALEBrated Virtual Services, or send a message about your business.',
      ),
      mainEntity: ORGANIZATION,
    },
    breadcrumb('/contact', 'Contact'),
  ]
}
