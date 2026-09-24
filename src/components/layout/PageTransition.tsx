import { useReducedMotion, type Variants } from 'framer-motion'
import { EASE_PREMIUM } from '@/lib/motion'

export const PAGE_ENTER_MS = 450
export const PAGE_EXIT_MS = 300

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: PAGE_ENTER_MS / 1000, ease: EASE_PREMIUM },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: PAGE_EXIT_MS / 1000, ease: EASE_PREMIUM },
  },
}

const reducedPageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: PAGE_ENTER_MS / 1000, ease: EASE_PREMIUM } },
  exit: { opacity: 0, transition: { duration: PAGE_EXIT_MS / 1000, ease: EASE_PREMIUM } },
}

export function usePageVariants(): Variants {
  const reduceMotion = useReducedMotion()
  return reduceMotion ? reducedPageVariants : pageVariants
}
