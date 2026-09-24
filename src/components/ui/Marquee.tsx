import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: ReactNode
  className?: string
  trackClassName?: string
  direction?: 'left' | 'right'
  duration?: number
  pauseOnHover?: boolean
}

export function Marquee({
  children,
  className,
  trackClassName,
  direction = 'left',
  duration = 30,
  pauseOnHover = false,
}: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: '10%' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style = {
    '--marquee-duration': `${duration}s`,
    animationPlayState: inView ? 'running' : 'paused',
  } as CSSProperties

  return (
    <div ref={ref} className={cn('group/marquee overflow-hidden', className)}>
      <div
        style={style}
        className={cn(
          'flex w-max will-change-transform',
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse',
          pauseOnHover && 'group-hover/marquee:[animation-play-state:paused]',
          reduceMotion && '[animation:none]',
          trackClassName,
        )}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
