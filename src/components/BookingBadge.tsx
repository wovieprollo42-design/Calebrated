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
      className="fixed bottom-24 right-5 z-40 sm:right-8"
    >
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-full bg-orange py-3 pl-4 pr-6 font-display text-white shadow-[0_12px_30px_-8px_rgba(255,84,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-deep"
      >
        <CalendarDays size={20} aria-hidden="true" />
        <span className="flex flex-col leading-tight">
          <span className="text-[15px] font-semibold">Book an Appointment</span>
          <span className="text-[11px] text-white/85">Free consultation</span>
        </span>
      </a>
    </motion.div>
  )
}
