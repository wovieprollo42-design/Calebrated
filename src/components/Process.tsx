import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { processSteps } from '@/data/process'
import { ScrollReveal } from './ScrollReveal'

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'end 0.4'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  return (
    <section id="process" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">How It Works</p>
          <h2 className="mt-5 max-w-3xl font-display text-display-md font-semibold text-white text-balance">
            From Overwhelmed to Organized.
          </h2>
        </ScrollReveal>

        <div ref={ref} className="relative mt-24">
          <div className="absolute left-[18px] top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 lg:block" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-[18px] top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-orange lg:block"
          />

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="relative pl-11 lg:pl-11">
                  <span className="absolute left-0 top-0 flex h-[38px] w-[38px] items-center justify-center border border-orange/50 bg-ink font-display text-xs font-semibold text-orange">
                    {step.index}
                  </span>
                  <h3 className="pt-1 font-display text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
