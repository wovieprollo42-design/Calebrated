import { Instagram, Linkedin, Twitter, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CALENDLY_URL, homeServices, socialLinks } from '@/data/home'
import { BrandLogo } from './BrandLogo'

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  Instagram,
  'X (Twitter)': Twitter,
  LinkedIn: Linkedin,
}

const INFO_LINKS = [
  { label: 'How It Works', to: '/process' },
  { label: 'Why CALEBrated', to: '/about#difference' },
  { label: 'Contact Us', to: '/contact' },
]

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

const linkClass = 'text-[17px] text-white/90 transition-colors duration-300 hover:text-orange'

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(90deg, #0F131B 0%, #151A24 45%, #232A3B 100%)' }}
    >
      <div className="mx-auto max-w-[1140px] px-6 pb-10 pt-20 lg:pt-28">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_0.9fr]">
          <div>
            <Link to="/" aria-label="CALEBrated Virtual Services, home" className="inline-block">
              <BrandLogo layout="stacked" size="lg" />
            </Link>
            <p className="mt-8 max-w-sm text-[17px] leading-relaxed text-white/90">
              Pushing the boundaries of what&rsquo;s possible in the virtual realm.
            </p>
            <ul className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = SOCIAL_ICONS[social.label]
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded border border-white/60 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-orange hover:bg-orange"
                    >
                      <Icon size={16} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium">Services</h2>
            <ul className="mt-4 space-y-2">
              {homeServices.map((service) => (
                <li key={service.title}>
                  <Link to="/services" className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium">Info</h2>
            <ul className="mt-4 space-y-2">
              {INFO_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Book an Appointment
                </a>
              </li>
              <li>
                <a href="mailto:infocalebrated@gmail.com" className={linkClass}>
                  infocalebrated@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium">Company</h2>
            <ul className="mt-4 space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-10 text-center">
          <p className="text-[15px] text-white/90">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved. CALEBrated Virtual Services
          </p>
        </div>
      </div>
    </footer>
  )
}
