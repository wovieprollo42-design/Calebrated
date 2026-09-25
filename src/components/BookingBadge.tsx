import { motion, useReducedMotion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { CALENDLY_URL } from '@/data/home'

export function BookingBadge() {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: reduceMotion ? 0 : 0.8, duration: 0.4 }}
      className="fixed bottom-4 right-4 z-40 sm:bottom-5 sm:right-5"
    >
      {/* Phone icon: this button will open the GHL AI consultant agent once it is set up. Until then it books a free
          consultation. Mobile shows only the icon so the badge never covers page content. */}
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book a Free Consultation (opens in a new tab)"
        className="flex h-14 w-14 items-center justify-center gap-2 rounded-2xl bg-orange font-display text-ink shadow-badge transition-colors duration-200 hover:bg-orange-deep hover:text-white sm:h-12 sm:w-auto sm:rounded-full sm:pl-4 sm:pr-6"
      >
        <Phone size={24} aria-hidden="true" className="sm:h-5 sm:w-5" />
        <span className="hidden font-display text-btn font-medium sm:inline">Book a Free Consultation</span>
      </a>
    </motion.div>
  )
}
