import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EASE_PREMIUM } from '@/lib/motion'

export function HomeHero() {
  const reduceMotion = useReducedMotion()
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE_PREMIUM },
  })

  return (
    <section id="home" className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#283036]">
      <motion.img
        src="/images/home/hero.jpg"
        alt=""
        width={1908}
        height={894}
        initial={{ scale: reduceMotion ? 1 : 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE_PREMIUM }}
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

      <img
        src="/images/home/shape-square.png"
        alt=""
        aria-hidden="true"
        width={120}
        height={120}
        className="pointer-events-none absolute right-[24%] top-[14%] hidden w-10 animate-float opacity-90 lg:block"
      />
      <img
        src="/images/home/shape-triangle.png"
        alt=""
        aria-hidden="true"
        width={146}
        height={160}
        className="pointer-events-none absolute bottom-[10%] left-[20%] hidden w-10 animate-float-slow opacity-90 md:block"
      />

      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          <motion.p {...rise(0.1)} className="font-display font-bold leading-none tracking-tight">
            <span className="text-3xl text-orange sm:text-4xl">CALEB</span>
            <span className="text-3xl text-white sm:text-4xl">rated</span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.34em] text-white/80">
              Virtual Services
            </span>
          </motion.p>

          <motion.h1
            {...rise(0.25)}
            className="mt-10 font-display text-[2.4rem] font-bold uppercase leading-[1.12] text-white sm:text-5xl lg:text-[4.2rem]"
          >
            Are You Ready To <span className="block text-orange">Defy Your Limits?</span>
          </motion.h1>

          <motion.p {...rise(0.45)} className="mt-8 max-w-2xl text-[17px] font-medium leading-relaxed text-white/90">
            Unleash your full potential with our cutting-edge strategies and innovative solutions to empower you to
            defy limits, break barriers, and achieve remarkable success. Join us on this exhilarating journey to
            embrace the extraordinary and unlock unprecedented opportunities.
          </motion.p>

          <motion.div {...rise(0.6)} className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-md bg-navy px-10 py-4 font-display text-[15px] font-medium text-white shadow-lg transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-orange"
            >
              Get Started
              <ChevronRight size={16} strokeWidth={3} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
