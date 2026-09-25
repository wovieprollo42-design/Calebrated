import { motion, useReducedMotion } from 'framer-motion'
import { ButtonLink, TextLink } from '@/components/ui/Button'
import { CALENDLY_URL, homeCopy } from '@/data/home'
import { EASE_PREMIUM } from '@/lib/motion'
import { container } from '@/lib/ui'
import { cn } from '@/lib/utils'

export function HomeHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[36rem] items-center overflow-hidden bg-charcoal sm:min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)]"
    >
      <img
        src="/images/home/hero.jpg"
        alt=""
        width={1908}
        height={894}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(24,31,38,0.94) 0%, rgba(33,41,49,0.84) 42%, rgba(40,48,54,0.35) 78%, rgba(40,48,54,0.2) 100%)',
        }}
      />
      {/* On phones the text spans the full width, over the brightest part of the photo. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#181F26]/55 sm:hidden" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-10 hidden lg:block">
        <div className={cn(container, 'flex justify-end')}>
          <img src="/images/home/shape-square.png" alt="" width={120} height={120} className="w-8 opacity-90" />
        </div>
      </div>

      <div className={cn(container, 'py-14 sm:py-24')}>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_PREMIUM }}
        >
          <p className="hidden font-display font-bold leading-none tracking-tight sm:block">
            <span className="text-3xl text-orange sm:text-4xl">CALEB</span>
            <span className="text-3xl text-white sm:text-4xl">rated</span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.34em] text-white/80">
              Virtual Services
            </span>
          </p>

          <h1 className="font-display text-hero font-bold uppercase text-white max-sm:text-hero-fit sm:mt-10">
            <span className="block">Are You Ready To</span>{' '}
            <span className="block text-orange">Defy Your Limits?</span>
          </h1>

          <p className="mt-5 max-w-xl text-body font-medium text-white/90 sm:mt-8">{homeCopy.heroParagraph}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <ButtonLink href={CALENDLY_URL}>Book a Free Consultation</ButtonLink>
            <TextLink to="#what-we-do" tone="dark">
              See our services
            </TextLink>
          </div>

          <p className="mt-6 font-display text-label font-medium text-white/80">{homeCopy.heroProof}</p>
        </motion.div>
      </div>
    </section>
  )
}
