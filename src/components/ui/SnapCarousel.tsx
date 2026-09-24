import { useCallback, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SnapCarouselProps {
  children: ReactNode
  label: string
  className?: string
  trackClassName?: string
  step?: number
  tone?: 'dark' | 'light'
}

export function SnapCarousel({
  children,
  label,
  className,
  trackClassName,
  step = 360,
  tone = 'dark',
}: SnapCarouselProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    Array.from(el.children).forEach((child) => ro.observe(child))
    return () => ro.disconnect()
  }, [update])

  function scroll(dir: 1 | -1) {
    if ((dir === 1 && !canNext) || (dir === -1 && !canPrev)) return
    ref.current?.scrollBy({ left: dir * step, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const scrollable = canPrev || canNext
  const btn =
    tone === 'dark'
      ? 'border-white/15 bg-ink text-offwhite hover:border-orange hover:bg-orange hover:text-ink aria-disabled:hover:border-white/15 aria-disabled:hover:bg-ink aria-disabled:hover:text-offwhite'
      : 'border-ink/15 bg-offwhite text-ink hover:border-orange hover:bg-orange hover:text-ink aria-disabled:hover:border-ink/15 aria-disabled:hover:bg-offwhite aria-disabled:hover:text-ink'

  return (
    <div className={cn('relative', className)}>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        onScroll={update}
        className={cn(
          'flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          trackClassName,
        )}
      >
        {children}
      </div>

      {scrollable && (
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            aria-label={`${label}: previous`}
            aria-disabled={!canPrev}
            onClick={() => scroll(-1)}
            className={cn(
              'flex h-11 w-11 items-center justify-center border transition-colors duration-300 aria-disabled:cursor-not-allowed aria-disabled:opacity-30',
              btn,
            )}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            aria-label={`${label}: next`}
            aria-disabled={!canNext}
            onClick={() => scroll(1)}
            className={cn(
              'flex h-11 w-11 items-center justify-center border transition-colors duration-300 aria-disabled:cursor-not-allowed aria-disabled:opacity-30',
              btn,
            )}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
