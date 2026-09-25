import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_PREMIUM } from '@/lib/motion'
import { container, eyebrowDark } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { ButtonLink, type ButtonVariant } from './Button'

interface PageHeaderCta {
  label: string
  to?: string
  href?: string
  variant?: ButtonVariant
}

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  intro?: string
  cta?: PageHeaderCta
  /** Optional right-hand column on desktop, stacked under the text on phones (the Contact form uses it). */
  aside?: ReactNode
}

export function PageHeader({ eyebrow, title, intro, cta, aside }: PageHeaderProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className={cn(
        'relative isolate overflow-hidden bg-charcoal py-14 sm:py-20',
        aside ? 'lg:py-14' : 'lg:py-28',
      )}
    >
      <img
        src="/images/home/hero.jpg"
        alt=""
        width={1908}
        height={894}
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
      {/* Phone scrim: the gradient above alone leaves the text on the photo's brighter side at narrow widths. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#181F26]/55 sm:hidden" />

      <div className={cn(container, Boolean(aside) && 'grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12')}>
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_PREMIUM }}
          className={aside ? 'lg:col-span-6' : undefined}
        >
          <p className={eyebrowDark}>{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-hero font-bold text-white">{title}</h1>
          {intro && <p className="mt-4 max-w-xl text-body font-medium text-white/90">{intro}</p>}
          {cta && (
            <div className="mt-8">
              <ButtonLink to={cta.to} href={cta.href} variant={cta.variant ?? 'primary'} tone="dark">
                {cta.label}
              </ButtonLink>
            </div>
          )}
        </motion.div>
        {aside && (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE_PREMIUM }}
            className="lg:col-span-6"
          >
            {aside}
          </motion.div>
        )}
      </div>
    </section>
  )
}
