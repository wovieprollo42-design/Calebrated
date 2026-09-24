import { Check, ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('font-display text-base font-medium uppercase tracking-[0.05em] text-orange sm:text-lg', className)}>
      {children}
    </p>
  )
}

export function SectionTitle({
  children,
  className,
  tone = 'navy',
}: {
  children: ReactNode
  className?: string
  tone?: 'navy' | 'black' | 'white'
}) {
  return (
    <h2
      className={cn(
        'mt-4 font-display text-[1.875rem] font-medium leading-[1.3] sm:text-[2.25rem] lg:text-[2.5rem]',
        tone === 'navy' && 'text-navy',
        tone === 'black' && 'font-semibold text-black',
        tone === 'white' && 'text-white',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function CheckList({ items, tone = 'dark', className }: { items: string[]; tone?: 'dark' | 'light'; className?: string }) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check size={18} strokeWidth={3} className="mt-1 shrink-0 text-orange" aria-hidden="true" />
          <span className={cn('text-base leading-relaxed', tone === 'dark' ? 'text-gray-600' : 'text-white')}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const buttonBase =
  'group inline-flex items-center justify-center gap-2 rounded-md font-display text-[15px] font-medium transition-all duration-300 ease-premium'

export function OutlineButton({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={cn(
        buttonBase,
        'border border-orange px-16 py-3 text-orange hover:bg-orange hover:text-white',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function SolidButton({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={cn(
        buttonBase,
        'bg-orange px-14 py-3.5 text-white shadow-[0_10px_30px_-10px_rgba(255,84,0,0.6)] hover:-translate-y-0.5 hover:bg-orange-deep',
        className,
      )}
    >
      {children}
      <ChevronRight size={16} strokeWidth={3} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}
