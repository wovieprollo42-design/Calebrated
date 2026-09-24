import type { Variants } from 'framer-motion'

export const PAGE_EXIT_MS = 420
export const PAGE_ENTER_MS = 620

// The main element itself never moves: a transformed ancestor would turn the
// fixed curtain into a page-relative box. Motion lives on the children below.
export const pageVariants: Variants = {
  initial: {},
  animate: { transition: { duration: PAGE_ENTER_MS / 1000 } },
  exit: { transition: { duration: PAGE_EXIT_MS / 1000 } },
}
