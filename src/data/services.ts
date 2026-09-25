export interface ServiceItem {
  slug: string
  title: string
  description: string
}

export interface ServiceGroup {
  id: string
  name: string
  intro: string
  services: ServiceItem[]
}

// The one master service list (structure.md section 3), 17 services in 3 groups.
// The Services page and the contact form's service picker both read from this.
export const serviceGroups: ServiceGroup[] = [
  {
    id: 'admin-operations',
    name: 'Admin & Operations',
    intro: 'The recurring work that keeps your business running.',
    services: [
      {
        slug: 'administrative-support',
        title: 'Administrative Support',
        description: 'Day-to-day admin work, from scheduling and document prep to inbox management, handled with care.',
      },
      {
        slug: 'calendar-email-management',
        title: 'Calendar & Email Management',
        description: 'A calendar that protects your time and an inbox that stays under control.',
      },
      {
        slug: 'customer-service',
        title: 'Customer Service',
        description: 'Friendly, on-brand customer service across email, chat, and phone, so every message gets a reply.',
      },
      {
        slug: 'data-entry',
        title: 'Data Entry & Management',
        description: 'Clean, accurate data entry, so your records and systems stay reliable as you grow.',
      },
      {
        slug: 'bookkeeping',
        title: 'Bookkeeping',
        description: 'Accurate books and clear reports, so you always know where your business stands.',
      },
      {
        slug: 'crm-support',
        title: 'CRM Support',
        description: 'Your CRM kept current, with records updated and pipelines you can trust.',
      },
      {
        slug: 'research-reporting',
        title: 'Research & Reporting',
        description: 'Research and reports that turn information into decisions you can act on.',
      },
    ],
  },
  {
    id: 'marketing-growth',
    name: 'Marketing & Sales',
    intro: 'Getting your business in front of the right people.',
    services: [
      {
        slug: 'social-media-management',
        title: 'Social Media Management',
        description: 'Content, scheduling, and community replies that keep your pages active and on-brand.',
      },
      {
        slug: 'graphic-design',
        title: 'Graphic Design',
        description: 'Clean, on-brand design for your website, social posts, and marketing materials.',
      },
      {
        slug: 'email-marketing',
        title: 'Email Marketing',
        description: 'Email campaigns and automated sequences that bring customers back and keep leads warm.',
      },
      {
        slug: 'paid-advertising',
        title: 'Paid Advertising',
        description: 'Ad campaigns on Google, Facebook, and Instagram, set up and managed to reach the right customers.',
      },
      {
        slug: 'seo',
        title: 'Search Engine Optimization (SEO)',
        description: 'On-page and local SEO that helps your business rank higher and bring in steady traffic.',
      },
      {
        slug: 'lead-generation',
        title: 'Lead Generation',
        description: 'Research-driven prospecting that keeps new leads coming into your pipeline.',
      },
    ],
  },
  {
    id: 'websites-automation',
    name: 'Websites & Automation',
    intro: 'The tools that work for you around the clock.',
    services: [
      {
        slug: 'website-development',
        title: 'Website Development',
        description: 'A custom website built to look good and turn visitors into leads.',
      },
      {
        slug: 'funnel-creation',
        title: 'Funnel Creation',
        description: 'Landing pages and funnels that guide visitors toward a booked call or a sale.',
      },
      {
        slug: 'ghl-automation',
        title: 'GHL and Automation Services',
        description: 'GoHighLevel setup and automations that follow up on leads while you focus elsewhere.',
      },
      {
        slug: 'ai-chatbot-voice-ai',
        title: 'AI Chatbot & Voice AI',
        description: 'A chatbot or voice agent that answers questions and books appointments any time.',
      },
    ],
  },
]

// Flat list, in group order. Used by src/lib/seo.ts (JSON-LD) and the contact form's
// grouped <optgroup> options.
export const services: ServiceItem[] = serviceGroups.flatMap((group) => group.services)
