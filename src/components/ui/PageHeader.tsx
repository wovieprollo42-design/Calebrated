import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { AngularFrame } from '@/components/BrandGeometry'
import { MagneticButton } from '@/components/MagneticButton'
import { AmbientBackground } from '@/components/motion/AmbientBackground'
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
    <section className="relative overflow-hidden border-b border-white/10 bg-ink pb-20 pt-40 lg:pb-28 lg:pt-48">
      <AmbientBackground intensity="low" scrim={0.15} />
      <AngularFrame
        className="right-[-4%] top-[10%] hidden lg:block"
        size={320}
        strokeWidth={1}
        color="rgba(255,84,0,0.35)"
        delay={0.3}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.p {...rise(0.1)} className="text-xs font-semibold uppercase tracking-widest2 text-orange">
          {eyebrow}
        </motion.p>

        <motion.h1
          {...rise(0.25)}
          className="mt-5 max-w-4xl font-display text-display-lg font-semibold text-white text-balance"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p {...rise(0.45)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {intro}
          </motion.p>
        )}

        {cta && (
          <motion.div {...rise(0.6)} className="mt-10">
            <MagneticButton to={cta.to} variant="solid">
              {cta.label}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>
        )}
      </div>
    </section>
  )
}
