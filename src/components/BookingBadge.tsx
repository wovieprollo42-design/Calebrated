import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Phone, X } from 'lucide-react'
import { CALENDLY_URL } from '@/data/home'
import { EASE_PREMIUM } from '@/lib/motion'

// Placeholder avatar. Swap this one constant for the owner's real photo when they send one.
const AVATAR_SRC = '/brand/calebrated-mark@2x.png'

const DISMISS_KEY = 'calebrated-teaser-dismissed'
const SHOW_DELAY_MS = 3000

function readDismissed(): boolean {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === '1'
  } catch {
    // sessionStorage unavailable (private mode, blocked storage). Fall back to in-memory state only.
    return false
  }
}

function writeDismissed(): void {
  try {
    sessionStorage.setItem(DISMISS_KEY, '1')
  } catch {
    // Same fallback as above: the in-memory `dismissed` state still hides it for the rest of this page's life.
  }
}

export function BookingBadge() {
  const reduceMotion = useReducedMotion()
  const [dismissed, setDismissed] = useState(readDismissed)
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const timer = window.setTimeout(() => setShowBubble(true), SHOW_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [dismissed])

  function dismiss() {
    setShowBubble(false)
    setDismissed(true)
    writeDismissed()
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {showBubble && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            role="status"
            className="relative w-[min(320px,calc(100vw_-_2rem))] rounded-2xl bg-white p-4 pr-11 shadow-card"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close message"
              className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center text-gray-500 transition-colors duration-150 hover:text-navy"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1E232B_0%,#161B22_100%)]">
                <img src={AVATAR_SRC} alt="" width={48} height={48} className="h-7 w-7 object-contain" />
              </span>
              <span className="pt-1 text-body text-navy">
                Hi there! Have a question?
                <br />
                Talk with us here.
              </span>
            </a>
            {/* Tail pointing down at the button. Centered on the button, which sits gap-3 below and shares the
                same right edge (both are right-aligned in the flex column above). */}
            <span aria-hidden="true" className="absolute -bottom-2 right-5 h-4 w-4 bg-white [clip-path:polygon(0_0,100%_0,50%_100%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phone icon: this button will open the GHL AI consultant agent once it is set up. Until then it books a
          free consultation. */}
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book a Free Consultation (opens in a new tab)"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-badge transition-colors duration-200 hover:bg-orange-deep"
      >
        <Phone size={24} aria-hidden="true" />
      </a>
    </div>
  )
}
