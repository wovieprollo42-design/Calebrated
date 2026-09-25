import { animate, useInView, useReducedMotion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ButtonLink, TextLink } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Marquee } from '@/components/ui/Marquee'
import { processSteps } from '@/data/process'
import {
  CALENDLY_URL,
  coreValues,
  homeCopy,
  homeServices,
  homeStepImages,
  partnerLogoRows,
  stats,
  websitePoints,
  whatWeDoPoints,
  whyChooseUs,
} from '@/data/home'
import { card, container, darkBand, sectionY, stripY } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { CheckList } from './HomeUI'

export function PartnerLogos() {
  return (
    <section id="clients" aria-labelledby="partners-title" className={cn('overflow-hidden bg-white', stripY)}>
      <div className={cn(container, 'flex items-center justify-center gap-5')}>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-gray-200 sm:block" />
        <h2 id="partners-title" className="text-balance text-center font-display text-label font-medium uppercase tracking-widest text-gray-500 sm:whitespace-nowrap">
          {homeCopy.clientsHeading}
        </h2>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-gray-200 sm:block" />
      </div>

      <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {partnerLogoRows.map((row, r) => (
          <Marquee key={r} direction={r % 2 === 0 ? 'left' : 'right'} duration={r % 2 === 0 ? 110 : 124} pauseOnHover className="py-3">
            {/* Four copies so each half of the loop is wider than the widest screen; two left a gap on the shorter row. */}
            {[...row, ...row, ...row, ...row].map((partner, i) => (
              <div
                key={partner.src + i}
                className="mr-4 flex h-[84px] w-[156px] shrink-0 items-center justify-center rounded-2xl bg-white px-5 ring-1 ring-gray-200 sm:mr-6 sm:h-[116px] sm:w-[232px] sm:px-7"
              >
                <img
                  src={partner.src}
                  alt={i < row.length ? partner.alt : ''}
                  width={partner.width}
                  height={partner.height}
                  loading="lazy"
                  draggable={false}
                  className="max-h-[46px] w-auto max-w-full object-contain sm:max-h-[66px]"
                />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  )
}

export function FeaturesIntro() {
  return (
    <section id="what-we-do" aria-labelledby="what-we-do-title" className={cn('overflow-hidden bg-offwhite', sectionY)}>
      <div className={cn(container, 'grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16')}>
        <div>
          <SectionHeader
            id="what-we-do-title"
            eyebrow={homeCopy.whatWeDo.eyebrow}
            title={homeCopy.whatWeDo.title}
            intro={homeCopy.whatWeDo.intro}
          />
          <CheckList items={whatWeDoPoints} twoLine className="mt-6" />
        </div>
        <img
          src="/images/home/features.png"
          alt="CALEBrated team members working together at a laptop"
          width={932}
          height={779}
          loading="lazy"
          className="mx-auto h-auto w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[520px]"
        />
      </div>
    </section>
  )
}

export function ServiceGrid() {
  return (
    <section id="services" aria-labelledby="services-title" className={cn('bg-white', sectionY)}>
      <div className={container}>
        <SectionHeader id="services-title" title={homeCopy.services.title} />
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:mt-12 sm:gap-6 lg:gap-8">
          {homeServices.map((service) => (
            <article
              key={service.title}
              className={cn(card, 'flex h-full w-full items-start gap-4 sm:block sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)]')}
            >
              <img src={service.icon} alt="" width={160} height={160} loading="lazy" className="h-12 w-12 shrink-0 sm:h-20 sm:w-20" />
              <div>
                <h3 className="font-display text-h4 font-semibold text-navy sm:mt-6 sm:text-h3">{service.title}</h3>
                <p className="mt-2 text-body text-gray-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
        <TextLink to="/services" className="mt-10">
          See all services
        </TextLink>
      </div>
    </section>
  )
}

export function WebsiteFeature() {
  return (
    <section id="websites" aria-labelledby="websites-title" className={cn('overflow-hidden bg-offwhite', sectionY)}>
      <div className={cn(container, 'grid items-center gap-10 lg:grid-cols-2 lg:gap-16')}>
        <div className="order-1 lg:order-2">
          <SectionHeader
            id="websites-title"
            eyebrow={homeCopy.websites.eyebrow}
            title={homeCopy.websites.title}
            intro={homeCopy.websites.intro}
          />
          <CheckList items={websitePoints} className="mt-6" />
          <ButtonLink href={CALENDLY_URL} className="mt-8">
            Book a Free Consultation
          </ButtonLink>
        </div>
        <img
          src="/images/home/website.png"
          alt="A custom website shown on a laptop screen"
          width={932}
          height={779}
          loading="lazy"
          className="order-2 mx-auto h-auto w-full max-w-[360px] sm:max-w-[440px] lg:order-1 lg:max-w-[520px]"
        />
      </div>
    </section>
  )
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduceMotion, value])

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  )
}

export function WorldwideStats() {
  return (
    <section
      id="results"
      aria-labelledby="results-title"
      className={cn('bg-white bg-contain bg-center bg-no-repeat', sectionY)}
      style={{ backgroundImage: 'url(/images/home/map.jpg)' }}
    >
      <div className={container}>
        <SectionHeader id="results-title" align="center" title={homeCopy.results.title} intro={homeCopy.results.intro} />
        <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-10 sm:mt-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center gap-2">
              <dt className="font-display text-label font-medium text-navy">{stat.label}</dt>
              <dd className="font-display text-5xl font-normal leading-none text-orange sm:text-6xl lg:text-7xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function FeatureCards() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-title" className={cn('bg-offwhite', sectionY)}>
      <div className={container}>
        <SectionHeader id="how-it-works-title" title={homeCopy.howItWorks.title} intro={homeCopy.howItWorks.intro} />
        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:gap-8">
          {processSteps.map((step, i) => (
            <article key={step.title} className={cn(card, 'h-full')}>
              <img
                src={homeStepImages[i]}
                alt=""
                width={767}
                height={330}
                loading="lazy"
                className="aspect-[767/330] w-full rounded-lg object-cover"
              />
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy font-display text-label font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="font-display text-h3 font-semibold text-navy">{step.title}</h3>
              </div>
              <p className="mt-2 text-body text-gray-600">{step.description}</p>
            </article>
          ))}
        </div>
        <TextLink to="/process" className="mt-10">
          See how it works
        </TextLink>
      </div>
    </section>
  )
}

export function CoreValues({ showLink = true }: { showLink?: boolean } = {}) {
  return (
    <section id="values" aria-labelledby="values-title" className={cn('bg-white', sectionY)}>
      <div className={cn(container, 'grid gap-12 lg:grid-cols-2 lg:gap-16')}>
        <div>
          <SectionHeader id="values-title" title={homeCopy.values.title} intro={homeCopy.values.intro} />
          {showLink && (
            <TextLink to="/about" className="mt-8">
              More about us
            </TextLink>
          )}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
          {coreValues.map((value) => (
            <div key={value.title} className="flex items-start gap-4 sm:block">
              <img src={value.icon} alt="" width={112} height={112} loading="lazy" className="h-12 w-12 shrink-0 rounded-md sm:h-14 sm:w-14" />
              <div>
                <h3 className="font-display text-h3 font-semibold text-navy sm:mt-5">{value.title}</h3>
                <p className="mt-2 text-body text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const half = Math.ceil(whyChooseUs.length / 2)
  return (
    <section id="why-us" aria-labelledby="why-us-title" className={cn(darkBand, sectionY)}>
      <div className={container}>
        <SectionHeader id="why-us-title" tone="dark" title={homeCopy.whyUs.title} intro={homeCopy.whyUs.intro} />
        <div className="mt-10 grid gap-x-12 gap-y-3 md:grid-cols-2">
          <CheckList items={whyChooseUs.slice(0, half)} tone="dark" />
          <CheckList items={whyChooseUs.slice(half)} tone="dark" />
        </div>
      </div>
    </section>
  )
}

export function Appointments() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '400px 0px' })
  const [canLoadEmbed, setCanLoadEmbed] = useState(false)

  useEffect(() => {
    if (!inView) return
    setCanLoadEmbed(window.matchMedia('(min-width: 640px)').matches)
  }, [inView])

  return (
    <section id="appointments" aria-labelledby="appointments-title" className={cn('bg-white', sectionY)}>
      <div className={container}>
        <SectionHeader
          id="appointments-title"
          align="center"
          eyebrow={homeCopy.appointments.eyebrow}
          title={homeCopy.appointments.title}
          intro={homeCopy.appointments.intro}
        />

        {/* Phones: a compact booking card. The 720px iframe is skipped below `sm` so it never loads. */}
        <div className={cn(card, 'mt-10 text-center sm:hidden')}>
          <ButtonLink href={CALENDLY_URL} className="w-full">
            Book a Free Consultation
          </ButtonLink>
          <p className="mt-3 text-label text-gray-600">
            Or email{' '}
            <a href="mailto:infocalebrated@gmail.com" className="underline underline-offset-4">
              infocalebrated@gmail.com
            </a>
          </p>
        </div>

        <div ref={ref} className="hidden sm:mt-12 sm:block">
          <div className="overflow-hidden rounded-2xl bg-white shadow-card">
            {canLoadEmbed ? (
              <iframe
                src={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=ff5400`}
                title="Schedule an appointment with CALEBrated Virtual Services"
                loading="lazy"
                className="h-[720px] w-full border-0"
              />
            ) : (
              <div className="flex h-[720px] items-center justify-center text-label text-gray-600">Loading calendar...</div>
            )}
          </div>
          <p className="mt-4 text-center text-label text-gray-600">
            Calendar not loading?{' '}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-orange-deep underline underline-offset-4">
              Open the booking page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export function ConnectWithUs() {
  return (
    <section id="connect" aria-labelledby="connect-title" className={cn('overflow-hidden bg-offwhite', sectionY)}>
      <div className={cn(container, 'grid items-center gap-10 lg:grid-cols-2 lg:gap-16')}>
        <div className="order-1 lg:order-2">
          <SectionHeader id="connect-title" title={homeCopy.connect.title} intro={homeCopy.connect.intro} />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <ButtonLink to="/contact" variant="secondary">
              Send Us a Message
            </ButtonLink>
            <TextLink href="mailto:infocalebrated@gmail.com" icon={<Mail size={16} aria-hidden="true" />}>
              infocalebrated@gmail.com
            </TextLink>
          </div>
        </div>
        <img
          src="/images/home/connect.png"
          alt="The CALEBrated team, ready to connect with you"
          width={932}
          height={779}
          loading="lazy"
          className="order-2 mx-auto h-auto w-full max-w-[360px] sm:max-w-[440px] lg:order-1 lg:max-w-[520px]"
        />
      </div>
    </section>
  )
}
