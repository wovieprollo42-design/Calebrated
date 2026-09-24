import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { AngularFrame, GridOverlay, PlusAccent } from './BrandGeometry'
import { MagneticButton } from './MagneticButton'
import { AmbientBackground } from './motion/AmbientBackground'

const MotionLink = motion(Link)

export function Hero() {
  const reduceMotion = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 60, damping: 20 })
  const springY = useSpring(my, { stiffness: 60, damping: 20 })
  const frameX = useTransform(springX, (v) => v * 24)
  const frameY = useTransform(springY, (v) => v * 24)
  const frameX2 = useTransform(springX, (v) => v * -16)
  const frameY2 = useTransform(springY, (v) => v * -16)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-28"
    >
      <AmbientBackground intensity="high" scrim={0.2} />

      <motion.div style={{ x: frameX, y: frameY }} className="absolute right-[6%] top-[18%] hidden lg:block">
        <AngularFrame size={360} strokeWidth={1} color="rgba(255,84,0,0.55)" delay={0.2} />
      </motion.div>
      <motion.div style={{ x: frameX2, y: frameY2 }} className="absolute right-[16%] top-[30%] hidden lg:block">
        <AngularFrame size={200} strokeWidth={1.5} color="#FF5400" delay={0.5} />
      </motion.div>
      <motion.div
        style={{ x: frameX, y: frameY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-[10%] top-[52%] hidden lg:block"
      >
        <PlusAccent size={22} color="#FF8C00" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-xs font-semibold uppercase tracking-widest2 text-orange"
          >
            Remote Support &bull; Operations &bull; Business Growth
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-xl font-semibold text-white text-balance"
          >
            Virtual Assistant Services.{' '}
            <br />
            <span className="text-muted">More</span> <span className="text-orange">Time</span> to Lead.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            CALEBrated Virtual Services handles your admin work, customer service, and daily tasks, so you can focus on growing your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <MagneticButton to="/services" variant="solid">
              Explore Our Services
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton to="/contact" variant="outline">
              Book a Consultation
            </MagneticButton>
          </motion.div>

          <MotionLink
            to="/process"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-orange"
          >
            See how we work
            <ArrowRight size={14} />
          </MotionLink>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md"
            style={{ clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }}
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  'linear-gradient(155deg, #283036 0%, #161B25 55%, #0F131B 100%)',
              }}
            >
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                <GridOverlay />
                <div
                  className="absolute h-[60%] w-[60%] rounded-full opacity-40 blur-3xl"
                  style={{ background: 'radial-gradient(circle, rgba(255,84,0,0.5), transparent 70%)' }}
                />
                <div className="relative rotate-45 border border-orange/40" style={{ width: 140, height: 140, borderRadius: '22%' }} />
              </div>
            </div>
            <div className="absolute inset-0 border border-white/10" style={{ clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted lg:flex"
      >
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
