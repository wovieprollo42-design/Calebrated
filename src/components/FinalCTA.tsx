import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GridOverlay, NoiseOverlay } from './BrandGeometry'
import { MagneticButton } from './MagneticButton'
import { ScrollReveal } from './ScrollReveal'

export function FinalCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(115deg, #0F131B 0%, #0F131B 38%, #283036 62%, #FF5400 145%)',
        }}
      />
      <GridOverlay className="opacity-30" />
      <NoiseOverlay opacity={0.05} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-36">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">Ready When You Are</p>
        </ScrollReveal>

        <div className="mt-6 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <ScrollReveal delay={0.1} className="max-w-2xl">
            <h2 className="font-display text-display-lg font-semibold text-white text-balance">
              Ready to Get More{' '}
              <br />
              Off Your Plate?
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Tell us where your business needs support. We&rsquo;ll help you find a smarter way forward.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25} direction="left" className="flex flex-col items-start gap-5">
            <MagneticButton to="/contact" variant="solid">
              Book a Free Consultation
              <motion.span
                animate={reduceMotion ? {} : { x: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
