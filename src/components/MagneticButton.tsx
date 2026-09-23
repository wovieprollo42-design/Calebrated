import { motion, useReducedMotion } from 'framer-motion'
import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  variant?: 'solid' | 'outline' | 'ghost'
}

export function MagneticButton({ children, className, href, onClick, variant = 'solid' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const reduceMotion = useReducedMotion()

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3
    setPos({ x, y })
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 })
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-widest2 transition-colors duration-300'

  const variants = {
    solid: 'bg-orange text-ink hover:bg-orange-warm',
    outline: 'border border-white/25 text-offwhite hover:border-orange hover:text-orange',
    ghost: 'text-offwhite hover:text-orange',
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.a>
  )
}
