import { ArrowRight, ChevronRight } from 'lucide-react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonTone = 'light' | 'dark'
export type ButtonSize = 'md' | 'sm'

interface ButtonClassOptions {
  variant?: ButtonVariant
  tone?: ButtonTone
  size?: ButtonSize
  full?: boolean
  className?: string
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md font-display text-btn font-medium transition-colors duration-200'

const SIZES: Record<ButtonSize, string> = {
  md: 'h-12 px-7',
  sm: 'h-11 px-5',
}

const VARIANTS: Record<ButtonVariant, (tone: ButtonTone) => string> = {
  primary: () =>
    'bg-orange text-ink hover:bg-orange-deep hover:text-white active:bg-orange-deep active:text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500',
  secondary: (tone) =>
    tone === 'dark'
      ? 'border-[1.5px] border-white/70 bg-transparent text-white hover:bg-white hover:text-ink active:bg-white active:text-ink'
      : 'border-[1.5px] border-navy bg-transparent text-navy hover:bg-navy hover:text-white active:bg-navy active:text-white disabled:border-gray-300 disabled:text-gray-500',
}

function buttonClass({ variant = 'primary', tone = 'light', size = 'md', full = true, className }: ButtonClassOptions = {}): string {
  return cn(BASE, SIZES[size], VARIANTS[variant](tone), full && 'w-full sm:w-auto', className)
}

interface ButtonLinkProps extends ButtonClassOptions {
  to?: string
  href?: string
  children: ReactNode
  chevron?: boolean
}

export function ButtonLink({ to, href, variant = 'primary', tone = 'light', size = 'md', full = true, className, children, chevron = true }: ButtonLinkProps) {
  const classes = buttonClass({ variant, tone, size, full, className })
  const showChevron = chevron && variant === 'primary'

  if (href) {
    const isExternal = !href.startsWith('mailto:') && !href.startsWith('tel:')
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
        {showChevron && <ChevronRight size={16} strokeWidth={2.5} aria-hidden="true" />}
        {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    )
  }

  return (
    <Link to={to ?? '/'} className={classes}>
      {children}
      {showChevron && <ChevronRight size={16} strokeWidth={2.5} aria-hidden="true" />}
    </Link>
  )
}

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string
  href?: string
  tone?: 'light' | 'dark'
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export function TextLink({ to, href, tone = 'light', icon, children, className, ...rest }: TextLinkProps) {
  const classes = cn(
    'inline-flex min-h-11 items-center gap-2 font-display text-btn font-medium underline-offset-4 decoration-1 transition-colors duration-200 hover:underline',
    tone === 'dark' ? 'text-white hover:decoration-orange' : 'text-orange-deep',
    className,
  )
  const content = (
    <>
      {children}
      {icon ?? <ArrowRight size={16} aria-hidden="true" />}
    </>
  )

  if (href) {
    const isExternal = !href.startsWith('mailto:') && !href.startsWith('tel:')
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={classes}
        {...rest}
      >
        {content}
        {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <a className={classes} {...rest}>
      {content}
    </a>
  )
}
