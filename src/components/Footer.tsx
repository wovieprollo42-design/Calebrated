import { Facebook, Instagram, Linkedin, Twitter, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CALENDLY_URL, homeServices, socialLinks } from '@/data/home'
import { container, darkBand } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { BrandLogo } from './BrandLogo'

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  Facebook,
  Instagram,
  'X (Twitter)': Twitter,
  LinkedIn: Linkedin,
}

const SOCIAL_ARIA_LABELS: Record<string, string> = {
  Facebook: 'CALEBrated on Facebook',
}

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/process' },
]

const footerLinkClass =
  'block py-2.5 font-body text-body text-white/80 transition-colors duration-200 hover:text-white hover:underline underline-offset-4'

export function Footer() {
  return (
    <footer className={cn(darkBand, 'border-t border-white/10 text-white')}>
      <div className={cn(container, 'pb-24 pt-16 sm:pt-20 lg:pb-10 lg:pt-24')}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.4fr_1.2fr_0.8fr_1fr] lg:gap-x-10">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" aria-label="CALEBrated Virtual Services, home" className="inline-block">
              <BrandLogo layout="stacked" size="lg" />
            </Link>
            <p className="mt-6 max-w-sm text-body text-white/80">
              A remote team that handles your admin, marketing, and website work.
            </p>
            <a
              href="mailto:infocalebrated@gmail.com"
              className="mt-4 inline-flex min-h-11 items-center text-white underline underline-offset-4"
            >
              infocalebrated@gmail.com
            </a>
            <ul className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = SOCIAL_ICONS[social.label]
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${SOCIAL_ARIA_LABELS[social.label] ?? social.label} (opens in a new tab)`}
                      className="flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-white transition-colors duration-200 hover:bg-white hover:text-ink"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h2 className="font-display text-h4 font-semibold text-white">Services</h2>
            <ul className="mt-3">
              {homeServices.map((service) => (
                <li key={service.title}>
                  <Link to={`/services#${service.slug}`} className={footerLinkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-h4 font-semibold text-white">Company</h2>
            <ul className="mt-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-h4 font-semibold text-white">Get In Touch</h2>
            <ul className="mt-3">
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                  Book a Free Consultation
                </a>
              </li>
              <li>
                <Link to="/contact" className={footerLinkClass}>
                  Send Us a Message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center sm:mt-16">
          <p className="text-label text-white/70">
            &copy; {new Date().getFullYear()} CALEBrated Virtual Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
