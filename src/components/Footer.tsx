import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/services'
import { ScrollReveal } from './ScrollReveal'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why CALEBrated', href: '#difference' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <ScrollReveal direction="none" amount={0.4}>
        <a
          href="#contact"
          className="group flex items-center justify-between border-b border-white/10 bg-soft px-6 py-8 transition-colors duration-500 ease-premium hover:bg-orange lg:px-12"
        >
          <span className="mx-auto flex w-full max-w-7xl items-center justify-between">
            <span className="font-display text-3xl font-semibold text-white transition-colors duration-500 group-hover:text-ink sm:text-4xl lg:text-5xl">
              Let&rsquo;s Talk
            </span>
            <ArrowUpRight
              size={40}
              strokeWidth={1.5}
              className="text-orange transition-all duration-500 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink"
            />
          </span>
        </a>
      </ScrollReveal>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 lg:px-12">
        <div className="grid grid-cols-1 gap-14 pb-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src="/calebrated-logo.png" alt="CALEBrated Virtual Services" className="h-16 w-16 object-contain" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Professional virtual support built around the way your business works.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">Navigation</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-offwhite/80 transition-colors hover:text-orange">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">Services</p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-sm text-offwhite/80 transition-colors hover:text-orange">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">Contact</p>
            <a
              href="mailto:infocalebrated@gmail.com"
              className="mt-5 block text-sm text-offwhite/80 transition-colors hover:text-orange"
            >
              infocalebrated@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 text-xs text-muted sm:flex-row sm:items-center">
          <p>&copy; 2026 CALEBrated Virtual Services. All Rights Reserved.</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden font-display font-semibold leading-none text-white/5"
        style={{ fontSize: 'clamp(4rem, 16vw, 13rem)', letterSpacing: '-0.03em' }}
      >
        <p className="-mb-6 translate-y-6 whitespace-nowrap text-center">CALEBRATED</p>
      </div>
    </footer>
  )
}
