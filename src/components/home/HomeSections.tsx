import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Marquee } from '@/components/ui/Marquee'
import {
  CALENDLY_URL,
  coreValues,
  featureCards,
  featurePoints,
  homeServices,
  partnerLogoRows,
  stats,
  websitePoints,
  whyChooseUs,
} from '@/data/home'
import { CheckList, Eyebrow, OutlineButton, SectionTitle, SolidButton } from './HomeUI'

export function PartnerLogos() {
  return (
    <section aria-labelledby="partners-title" className="relative overflow-hidden bg-white py-16 lg:py-20">
      <ScrollReveal className="mx-auto flex max-w-[1140px] items-center gap-5 px-6">
        <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
        <h2
          id="partners-title"
          className="text-center font-display text-sm font-medium uppercase tracking-[0.22em] text-gray-500 sm:text-[15px]"
        >
          Trusted by growing businesses
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
      </ScrollReveal>

      <div className="mt-12 space-y-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {partnerLogoRows.map((row, r) => (
          <Marquee key={r} direction={r % 2 === 0 ? 'left' : 'right'} duration={r % 2 === 0 ? 55 : 62} pauseOnHover className="py-3">
            {[...row, ...row].map((partner, i) => (
              <div
                key={partner.src + i}
                className="group mr-6 flex h-[104px] w-[200px] shrink-0 items-center justify-center rounded-2xl bg-white px-7 ring-1 ring-gray-100 shadow-[0_14px_34px_-22px_rgba(52,63,90,0.45)] transition-all duration-500 ease-premium hover:-translate-y-1 hover:ring-orange/30 hover:shadow-[0_22px_44px_-20px_rgba(255,84,0,0.35)] sm:h-[116px] sm:w-[232px]"
              >
                <img
                  src={partner.src}
                  alt={i < row.length ? partner.alt : ''}
                  width={partner.width}
                  height={partner.height}
                  loading="lazy"
                  draggable={false}
                  className="max-h-[58px] w-auto max-w-full object-contain transition-transform duration-500 ease-premium group-hover:scale-105 sm:max-h-[66px]"
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
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1140px] items-center gap-10 px-6 lg:grid-cols-[1.25fr_0.75fr]">
        <ScrollReveal>
          <Eyebrow>Features</Eyebrow>
          <SectionTitle tone="black">Pushing the Boundaries of What&rsquo;s Possible In The Virtual Realm</SectionTitle>
          <p className="mt-6 text-[17px] leading-relaxed text-black/80">
            Our cutting-edge virtual services harness the power of technology to create seamless virtual environments
            that transcend traditional boundaries.
          </p>
          <CheckList items={featurePoints} className="mt-8" />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.15}>
          <img
            src="/images/home/features.png"
            alt="CALEBrated team members working together at a laptop"
            width={932}
            height={779}
            loading="lazy"
            className="mx-auto w-full max-w-[520px]"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}

export function FeatureCards() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto grid max-w-[1380px] gap-8 px-6 md:grid-cols-2">
        {featureCards.map((card, i) => (
          <ScrollReveal key={card.title} delay={(i % 2) * 0.1} className="h-full">
            <article className="group h-full rounded-2xl bg-white p-6 shadow-[0_12px_40px_-12px_rgba(52,63,90,0.18)] transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(52,63,90,0.28)] sm:p-8">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt=""
                  width={767}
                  height={330}
                  loading="lazy"
                  className="aspect-[767/330] w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              <h3 className="mt-7 font-display text-2xl font-semibold text-black lg:text-[26px]">{card.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-black/75">{card.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export function WebsiteFeature() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1140px] items-center gap-14 px-6 lg:grid-cols-2">
        <ScrollReveal direction="left" className="order-2 lg:order-1">
          <img
            src="/images/home/website.png"
            alt="A custom website shown on a laptop screen"
            width={932}
            height={779}
            loading="lazy"
            className="mx-auto w-full max-w-[520px]"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="order-1 lg:order-2">
          <Eyebrow>Features</Eyebrow>
          <SectionTitle>Unlock the Full Potential of a Well-crafted Website Tailored to Your Unique Needs.</SectionTitle>
          <p className="mt-6 text-[17px] leading-relaxed text-gray-600">
            Are you looking to establish a strong online presence or revamp your existing website? Look no further than
            CALEBrated Virtual Services.
          </p>
          <CheckList items={websitePoints} className="mt-8" />
          <OutlineButton to="/services" className="mt-10">
            Learn More
          </OutlineButton>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function ServiceGrid() {
  return (
    <section aria-labelledby="home-services-title" className="bg-white pb-24 lg:pb-32">
      <h2 id="home-services-title" className="sr-only">
        Our Services
      </h2>
      <div className="mx-auto flex max-w-[1380px] flex-wrap justify-center gap-8 px-6">
        {homeServices.map((service, i) => (
          <ScrollReveal
            key={service.title}
            delay={(i % 3) * 0.08}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]"
          >
            <article className="group h-full rounded-2xl bg-white p-8 shadow-[0_12px_40px_-12px_rgba(52,63,90,0.16)] transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(255,84,0,0.25)]">
              <img
                src={service.icon}
                alt=""
                width={160}
                height={160}
                loading="lazy"
                className="h-20 w-20 transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110"
              />
              <h3 className="mt-6 font-display text-[22px] font-medium text-navy">{service.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{service.description}</p>
            </article>
          </ScrollReveal>
        ))}
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
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
    </span>
  )
}

export function WorldwideStats() {
  return (
    <section
      className="relative bg-white bg-contain bg-center bg-no-repeat py-24 lg:py-32"
      style={{ backgroundImage: 'url(/images/home/map.jpg)' }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <Eyebrow>Worldwide Experience</Eyebrow>
          <SectionTitle className="mx-auto max-w-3xl">We Always Try To Understand Users Expectation</SectionTitle>
          <p className="mt-6 text-[17px] text-gray-600">
            Enhance your business operations and streamline your workflow. Connect with us.
          </p>
        </ScrollReveal>
        <dl className="mt-16 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08} className="flex flex-col items-center">
              <dt className="order-2 mt-2 font-display text-lg text-navy lg:text-xl">{stat.label}</dt>
              <dd className="font-display text-6xl font-light text-orange lg:text-7xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function CoreValues() {
  return (
    <section className="bg-[#F8F9FB] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1380px] gap-16 px-6 lg:grid-cols-2">
        <ScrollReveal>
          <Eyebrow>Why Us</Eyebrow>
          <SectionTitle className="lg:text-[2.75rem]">
            Our Core Values Serve As The Foundation of Everything We Do
          </SectionTitle>
          <p className="mt-6 text-[17px] leading-relaxed text-gray-600">
            These values define our company culture, guide our actions, and shape our relationships with clients and
            team members. We are proud to uphold the following core values:
          </p>
          <SolidButton to="/about" className="mt-10">
            Learn More
          </SolidButton>
        </ScrollReveal>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {coreValues.map((value, i) => (
            <ScrollReveal key={value.title} delay={(i % 2) * 0.1 + Math.floor(i / 2) * 0.1}>
              <img src={value.icon} alt="" width={112} height={112} loading="lazy" className="h-14 w-14 rounded-md" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy lg:text-[26px]">{value.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">{value.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const half = Math.ceil(whyChooseUs.length / 2)
  return (
    <section
      className="py-24 lg:py-28"
      style={{ background: 'linear-gradient(90deg, #0B0D12 0%, #151A24 35%, #232A3B 70%, #323D56 100%)' }}
    >
      <div className="mx-auto max-w-[1140px] px-6">
        <ScrollReveal>
          <h2 className="font-display text-[2.25rem] font-semibold uppercase text-white lg:text-[2.75rem]">
            Why Choose Us?
          </h2>
          <p className="mt-6 max-w-5xl text-[17px] font-medium leading-relaxed text-white">
            We provide affordable solutions that cut out pointless overhead expenses, assisting you in achieving maximum
            effectiveness while maximizing your budget. With the help of our virtual assistants, you can be sure to
            quickly assemble the ideal team.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mt-12 grid gap-x-12 gap-y-3 md:grid-cols-2">
            <CheckList items={whyChooseUs.slice(0, half)} tone="light" />
            <CheckList items={whyChooseUs.slice(half)} tone="light" />
          </div>
          <OutlineButton to="/services" className="mt-12">
            Learn More
          </OutlineButton>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function Appointments() {
  const ref = useRef<HTMLDivElement>(null)
  const load = useInView(ref, { once: true, margin: '400px 0px' })

  return (
    <section id="appointments" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[1140px] px-6">
        <ScrollReveal className="text-center">
          <Eyebrow>Appointments</Eyebrow>
          <SectionTitle className="mx-auto max-w-3xl">Book a Free Consultation With Our Team</SectionTitle>
        </ScrollReveal>
        <div
          ref={ref}
          className="mt-12 overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_-12px_rgba(52,63,90,0.18)]"
        >
          {load ? (
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=ff5400`}
              title="Schedule an appointment with CALEBrated Virtual Services"
              loading="lazy"
              className="h-[720px] w-full border-0"
            />
          ) : (
            <div className="flex h-[720px] items-center justify-center text-gray-500">Loading calendar...</div>
          )}
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          Calendar not loading?{' '}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-orange hover:underline">
            Open the booking page
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export function ConnectWithUs() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get('email')
    window.location.href = `mailto:infocalebrated@gmail.com?subject=${encodeURIComponent(
      'Newsletter subscription',
    )}&body=${encodeURIComponent(`Please subscribe ${email} to CALEBrated updates.`)}`
    setSent(true)
  }

  return (
    <section className="overflow-hidden bg-[#FAFBFC] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1140px] items-center gap-14 px-6 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <img
            src="/images/home/connect.png"
            alt="The CALEBrated team, ready to connect with you"
            width={932}
            height={779}
            loading="lazy"
            className="mx-auto w-full max-w-[520px]"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <SectionTitle className="mt-0 lg:text-[2.25rem]">
            Experience the CALEBrated Virtual Services advantage today
          </SectionTitle>
          <p className="mt-6 text-[17px] leading-relaxed text-gray-600">
            Witness the transformation in your business. Contact us now to discuss your virtual assistance needs and
            embark on a journey towards unparalleled efficiency and growth.
          </p>
          {sent ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 font-display text-lg text-navy"
            >
              Thank you! Your email app should now be open with your subscription request.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                name="email"
                type="email"
                required
                placeholder="sample@mail.com"
                className="h-12 flex-1 rounded-md border border-gray-200 bg-white px-4 text-[15px] text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none sm:rounded-r-none"
              />
              <button
                type="submit"
                className="h-12 rounded-md bg-orange px-12 font-display text-[15px] font-medium text-white transition-colors duration-300 hover:bg-orange-deep sm:rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
