import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_PREMIUM } from '@/lib/motion'
import { PAGE_ENTER_MS, PAGE_EXIT_MS } from './transition'

const curtainVariants: Variants = {
  initial: { y: '0%' },
  animate: { y: '-100%', transition: { duration: PAGE_ENTER_MS / 1000, ease: EASE_PREMIUM, delay: 0.05 } },
  exit: { y: '0%', transition: { duration: PAGE_EXIT_MS / 1000, ease: EASE_PREMIUM } },
}

const reducedCurtainVariants: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: 0, transition: { duration: 0.25 } },
  exit: { opacity: 1, transition: { duration: 0.2 } },
}

const contentVariants: Variants = {
  initial: { y: 28, opacity: 0.6 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.75, ease: EASE_PREMIUM, delay: 0.1 } },
  exit: { y: 0, opacity: 1, transition: { duration: PAGE_EXIT_MS / 1000 } },
}

const reducedContentVariants: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
}

export function PageCurtain() {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      aria-hidden="true"
      variants={reduceMotion ? reducedCurtainVariants : curtainVariants}
      className="pointer-events-none fixed inset-x-0 bottom-0 top-24 z-[45] flex items-center justify-center will-change-transform"
      style={{ background: 'linear-gradient(90deg, #161B22 0%, #1E232B 55%, #2A2F37 100%)' }}
    >
      <img
        src="/brand/calebrated-mark@2x.png"
        alt=""
        width={192}
        height={168}
        className="h-16 w-auto opacity-90"
      />
    </motion.div>
  )
}

export function PageContent({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()
  return <motion.div variants={reduceMotion ? reducedContentVariants : contentVariants}>{children}</motion.div>
}
