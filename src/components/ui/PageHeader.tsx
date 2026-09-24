import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { EASE_PREMIUM } from '@/lib/motion'

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  intro?: string
  cta?: { label: string; to: string }
}

export function PageHeader({ eyebrow, title, intro, cta }: PageHeaderProps) {
  const reduceMotion = useReducedMotion()

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE_PREMIUM },
  })

  return (
    <section className="relative isolate overflow-hidden bg-[#283036] py-24 lg:py-32">
      <motion.img
        src="/images/home/hero.jpg"
        alt=""
        width={1908}
        height={894}
        initial={{ scale: reduceMotion ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE_PREMIUM }}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[75%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(24,31,38,0.95) 0%, rgba(33,41,49,0.88) 50%, rgba(40,48,54,0.55) 100%)',
        }}
      />

      <div className="mx-auto max-w-[1140px] px-6">
        <motion.p
          {...rise(0.1)}
          className="font-display text-base font-medium uppercase tracking-[0.05em] text-orange sm:text-lg"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          {...rise(0.25)}
          className="mt-4 max-w-4xl font-display text-[2.25rem] font-bold leading-[1.15] text-white text-balance sm:text-5xl lg:text-[3.5rem]"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p {...rise(0.45)} className="mt-6 max-w-2xl text-[17px] font-medium leading-relaxed text-white/90">
            {intro}
          </motion.p>
        )}

        {cta && (
          <motion.div {...rise(0.6)} className="mt-10">
            <Link
              to={cta.to}
              className="group inline-flex items-center gap-3 rounded-md bg-orange px-10 py-4 font-display text-[15px] font-medium text-white shadow-lg transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-orange-deep"
            >
              {cta.label}
              <ChevronRight size={16} strokeWidth={3} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
