import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Decorative brand-geometry primitives derived from the CALEBrated mark:
 * a rotated square (diamond) frame and a small plus/cross accent.
 * Used as compositional elements, never as literal logo redraws.
 */

interface AngularFrameProps {
  className?: string
  size?: number
  strokeWidth?: number
  color?: string
  animate?: boolean
  delay?: number
}

export function AngularFrame({
  className,
  size = 420,
  strokeWidth = 1,
  color = '#FF5400',
  animate = true,
  delay = 0,
}: AngularFrameProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      aria-hidden="true"
      className={cn('pointer-events-none absolute', className)}
      style={{ width: size, height: size }}
      initial={animate && !reduceMotion ? { opacity: 0, rotate: 38, scale: 0.9 } : { opacity: 1 }}
      animate={animate && !reduceMotion ? { opacity: 1, rotate: 45, scale: 1 } : { opacity: 1, rotate: 45 }}
      transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="h-full w-full"
        style={{
          border: `${strokeWidth}px solid ${color}`,
          borderRadius: '22%',
        }}
      />
    </motion.div>
  )
}

export function PlusAccent({
  className,
  size = 28,
  color = '#FF8C00',
}: {
  className?: string
  size?: number
  color?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3C13.1 3 14 3.9 14 5V10H19C20.1 10 21 10.9 21 12C21 13.1 20.1 14 19 14H14V19C14 20.1 13.1 21 12 21C10.9 21 10 20.1 10 19V14H5C3.9 14 3 13.1 3 12C3 10.9 3.9 10 5 10H10V5C10 3.9 10.9 3 12 3Z"
        fill={color}
      />
    </svg>
  )
}

export function GridOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 bg-grid-texture bg-grid', className)}
      style={{
        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
      }}
    />
  )
}

export function NoiseOverlay({ className, opacity = 0.05 }: { className?: string; opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 noise-overlay', className)}
      style={{ opacity }}
    />
  )
}

export function SpotlightGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute rounded-full blur-[120px]', className)}
      style={{
        background: 'radial-gradient(circle, rgba(255,84,0,0.35) 0%, rgba(255,84,0,0) 70%)',
      }}
    />
  )
}
