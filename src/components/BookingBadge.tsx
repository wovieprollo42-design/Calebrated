import { motion, useReducedMotion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'
import { CALENDLY_URL } from '@/data/home'

export function BookingBadge() {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-4 right-4 z-40 sm:bottom-5 sm:right-5"
    >
      {/* Mobile shows only the calendar icon so the badge never covers page content. */}
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book an Appointment, free consultation"
        className="flex h-14 w-14 items-center justify-center gap-3 rounded-2xl bg-orange font-display text-white shadow-[0_12px_30px_-8px_rgba(255,84,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-deep sm:h-auto sm:w-auto sm:justify-start sm:rounded-full sm:py-3 sm:pl-4 sm:pr-6"
      >
        <CalendarDays size={24} aria-hidden="true" className="sm:h-5 sm:w-5" />
        <span aria-hidden="true" className="hidden flex-col leading-tight sm:flex">
          <span className="text-[15px] font-semibold">Book an Appointment</span>
          <span className="text-[11px] text-white/85">Free consultation</span>
        </span>
      </a>
    </motion.div>
  )
}
