import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { DURATION, EASE_PREMIUM, REVEAL_OFFSET } from '@/lib/motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  duration?: number
  amount?: number
}

const OFFSETS: Record<NonNullable<ScrollRevealProps['direction']>, { x?: number; y?: number }> = {
  up: { y: REVEAL_OFFSET },
  left: { x: -REVEAL_OFFSET },
  right: { x: REVEAL_OFFSET },
  none: {},
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = DURATION.base,
  amount = 0.2,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  const offset = OFFSETS[direction]
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
      variants={variants}
      transition={{ duration, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  )
}
