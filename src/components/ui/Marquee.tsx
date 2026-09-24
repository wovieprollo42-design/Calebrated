import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from 'react'
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
  const [hovered, setHovered] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: '10%' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  function onPointer(e: PointerEvent<HTMLDivElement>, value: boolean) {
    if (pauseOnHover && e.pointerType === 'mouse') setHovered(value)
  }

  const paused = !inView || (pauseOnHover && hovered)
  const style = {
    '--marquee-duration': `${duration}s`,
    animationPlayState: paused ? 'paused' : 'running',
  } as CSSProperties

  if (reduceMotion) {
    return (
      <div ref={ref} className={cn('overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden', className)}>
        <div className={cn('flex w-max', trackClassName)}>{children}</div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn('overflow-hidden', className)}
      onPointerEnter={(e) => onPointer(e, true)}
      onPointerLeave={(e) => onPointer(e, false)}
    >
      <div
        style={style}
        className={cn(
          'flex w-max will-change-transform',
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse',
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
