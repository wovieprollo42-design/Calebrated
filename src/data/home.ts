export const CALENDLY_URL = 'https://calendly.com/infocalebrated'

export interface PartnerLogo {
  src: string
  alt: string
  width: number
  height: number
}

const logo = (slug: string, alt: string, width: number, height: number): PartnerLogo => ({
  src: `/images/partners/${slug}.png`,
  alt,
  width,
  height,
})

export const partnerLogoRows: PartnerLogo[][] = [
  [
    logo('alphalete', 'Alphalete Trenchless Services', 166, 180),
    logo('amply', 'Amply Development', 217, 180),
    logo('cgr-legacy', 'CGR Legacy Construction', 182, 180),
    logo('bootstrapped', 'Bootstrapped Marketing', 360, 114),
    logo('newwine', 'NewWine', 272, 180),
    logo('designsdx', 'DesignsDx', 360, 94),
    logo('fmh', 'Foundational Marketing Hub', 182, 180),
  ],
  [
    logo('hh-pools', 'H&H Pools', 200, 180),
    logo('maplifts', 'MapLifts', 358, 180),
    logo('pentarm-pools', 'Pentarm Pools', 214, 180),
    logo('calebrated', 'CALEBrated Virtual Services', 190, 180),
    logo('pipeliners-usa', 'Pipeliners USA', 259, 180),
    logo('summit-plumbing', 'Summit Plumbing Pros', 301, 180),
    logo('tag-marketing', 'TAG Marketing', 148, 180),
  ],
]

// Copy for text that used to be hardcoded in the section components.
// Written to brand.md's voice rules: plain English, short sentences, no banned words.
export const homeCopy = {
  heroParagraph:
    'CALEBrated Virtual Services is a remote team of virtual assistants that handles your admin, marketing, and website work. We help busy business owners get more done without hiring in-house. Book a free consultation and tell us what you need.',
  heroProof: 'Trusted by 20+ clients.',
  clientsHeading: 'Businesses Like Yours Work With Us',
  whatWeDo: {
    eyebrow: 'What We Do',
    title: 'One Team For Admin, Marketing, And Website Work',
    intro: 'Busy owners hand us the day-to-day, and we handle it.',
  },
  services: {
    title: 'Services We Handle For You',
  },
  websites: {
    eyebrow: 'Websites & Automation',
    title: 'A Website That Works Hard For You',
    intro: 'We build websites and funnels that turn visitors into booked calls.',
  },
  results: {
    title: 'Our Work So Far',
    intro: 'A quick look at our clients, our feedback, and our team.',
  },
  howItWorks: {
    title: 'What Happens After You Book',
    intro: 'Four simple steps, from your free call to ongoing support.',
  },
  values: {
    title: 'The Character Behind The Work',
    intro: 'These four values guide how we work with every client.',
  },
  whyUs: {
    title: 'Why Choose Us?',
    intro: 'We keep things simple and flexible, so you get support without hiring in-house.',
  },
  appointments: {
    eyebrow: 'Free Consultation',
    title: 'Book A Free Consultation',
    intro: 'Pick a time. We will talk through what you need.',
  },
  connect: {
    title: 'Still Have Questions?',
    intro: 'Send us a message, and we will get back to you.',
  },
}

// Three groups, matching brand.md's message pillar 1. Each group lists 2 or 3 example services.
export const whatWeDoPoints = [
  { title: 'Admin & Operations', text: 'Scheduling, email, data entry, and bookkeeping.' },
  { title: 'Marketing & Sales', text: 'Social media, email marketing, ads, and SEO.' },
  { title: 'Websites & Automation', text: 'Websites, funnels, and GHL automation.' },
]

export const websitePoints = [
  'A custom site that matches your brand.',
  'Copy and pages built to turn visitors into leads.',
  'Sites for small businesses and online stores.',
]

// Images for the "what happens after you book" preview. Paired with processSteps in HomeSections,
// in order, so both pages describe the same 4 steps the same way.
export const homeStepImages = [
  '/images/home/card-1.jpg',
  '/images/home/card-2.jpg',
  '/images/home/card-3.jpg',
  '/images/home/card-4.jpg',
]

// Ordered by group (Admin & Operations, Marketing & Sales, Websites & Automation), each icon stays
// with its own service.
export const homeServices = [
  {
    slug: 'administrative-support',
    icon: '/images/home/service-4.png',
    title: 'Administrative Support',
    description: 'Scheduling, email, and day-to-day tasks handled for you.',
  },
  {
    slug: 'bookkeeping',
    icon: '/images/home/service-6.png',
    title: 'Bookkeeping',
    description: 'Accurate books and reports, so your numbers stay current.',
  },
  {
    slug: 'social-media-management',
    icon: '/images/home/service-3.png',
    title: 'Social Media Management',
    description: 'Content and posting that keeps your pages active.',
  },
  {
    slug: 'graphic-design',
    icon: '/images/home/service-2.png',
    title: 'Graphic Design',
    description: 'Clean, on-brand design for your marketing and social posts.',
  },
  {
    slug: 'email-marketing',
    icon: '/images/home/service-5.png',
    title: 'Email Marketing',
    description: 'Campaigns that reach your list and bring people back.',
  },
  {
    slug: 'paid-advertising',
    icon: '/images/home/service-7.svg',
    title: 'Paid Advertising',
    description: 'Ads on Google, Facebook, and Instagram that reach the right people.',
  },
  {
    slug: 'seo',
    icon: '/images/home/service-8.svg',
    title: 'Search Engine Optimization (SEO)',
    description: 'Better rankings on Google, so more visitors find you.',
  },
  {
    slug: 'website-development',
    icon: '/images/home/service-1.png',
    title: 'Website Development',
    description: 'A website built to look good and bring in leads.',
  },
  {
    slug: 'funnel-creation',
    icon: '/images/home/service-11.svg',
    title: 'Funnel Creation',
    description: 'Pages that guide visitors toward a booked call or sale.',
  },
  {
    slug: 'ghl-automation',
    icon: '/images/home/service-9.svg',
    title: 'GHL and Automation Services',
    description: 'Automations that follow up on leads while you focus elsewhere.',
  },
  {
    slug: 'ai-chatbot-voice-ai',
    icon: '/images/home/service-10.svg',
    title: 'AI Chatbot & Voice AI',
    description: 'A chatbot or voice agent that answers questions any time.',
  },
]

export const stats = [
  { value: 100, suffix: '%', label: 'Projects Success' },
  { value: 20, suffix: '+', label: 'Trusted Clients' },
  { value: 100, suffix: '%', label: 'Positive Feedback' },
  { value: 10, suffix: '+', label: 'Professional Team' },
]

export const coreValues = [
  {
    icon: '/images/home/value-1.png',
    title: 'Excellence',
    description: 'We aim for high-quality work, and we keep improving our skills so you always get our best.',
  },
  {
    icon: '/images/home/value-2.png',
    title: 'Integrity',
    description: 'We are honest and transparent, and we hold ourselves to a high standard in every interaction.',
  },
  {
    icon: '/images/home/value-3.png',
    title: 'Collaboration',
    description: 'We share ideas, welcome different perspectives, and work together to find the best solution for you.',
  },
  {
    icon: '/images/home/value-4.png',
    title: 'Client Focus',
    description: 'Your goals come first. We take time to understand what you need before we start work.',
  },
]

// Trimmed from 10 to 6: concrete reasons only, with no repeats of the values or step cards.
export const whyChooseUs = [
  'Wide range of services',
  'One team instead of several freelancers',
  'Start small and scale as you grow',
  'Costs less than an in-house hire',
  'A proven track record',
  'A free call before you commit to anything',
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/calebratedvirtualservices' },
  { label: 'Instagram', href: 'https://www.instagram.com/caleb.rated/' },
  { label: 'X (Twitter)', href: 'https://twitter.com/rated_cale4967' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/caleb-rated-937707282/' },
]
