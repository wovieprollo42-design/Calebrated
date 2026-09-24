import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, Globe } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const SERVICE_OPTIONS = [
  'Administrative Support',
  'Customer Service',
  'Social Media Support',
  'Data Entry & Management',
  'Calendar & Email Management',
  'Lead Generation',
  'CRM Support',
  'Research & Reporting',
  'Paid Advertising',
  'Search Engine Optimization (SEO)',
  'GHL and Automation Services',
  'AI Chatbot & Voice AI',
  'Email Marketing',
  'Funnel Creation',
  'Not Sure Yet',
]

const inputClass =
  'w-full border-0 border-b border-white/20 bg-transparent py-3 text-base text-white placeholder:text-muted focus:border-orange focus:outline-none focus:ring-0 transition-colors duration-300'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const business = data.get('business')
    const email = data.get('email')
    const phone = data.get('phone')
    const service = data.get('service')
    const details = data.get('details')

    const body = [
      `Name: ${name}`,
      `Business Name: ${business}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service Needed: ${service}`,
      '',
      `${details}`,
    ].join('\n')

    window.location.href = `mailto:infocalebrated@gmail.com?subject=${encodeURIComponent(
      `New inquiry from ${name ?? 'website'}`,
    )}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-white/10 px-6 py-24 lg:border-b-0 lg:border-r lg:px-12 lg:py-32">
          <ScrollReveal>
            <h2 className="font-display text-display-md font-semibold text-white text-balance">
              Let&rsquo;s Build a Better Way to Work.
            </h2>

            <div className="mt-12 space-y-6">
              <a
                href="mailto:infocalebrated@gmail.com"
                className="group flex items-center gap-4 text-lg text-offwhite/90 transition-colors hover:text-orange"
              >
                <Mail size={18} className="text-orange" />
                infocalebrated@gmail.com
              </a>
              <a
                href="https://calebratedvirtualservices.com"
                className="group flex items-center gap-4 text-lg text-offwhite/90 transition-colors hover:text-orange"
              >
                <Globe size={18} className="text-orange" />
                calebratedvirtualservices.com
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="px-6 py-24 lg:px-12 lg:py-32">
          <ScrollReveal delay={0.15} direction="left">
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col justify-center">
                <p className="font-display text-2xl font-semibold text-white">Thank you.</p>
                <p className="mt-3 text-muted">
                  Your email client should have opened with your message ready to send to our team.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <input name="name" type="text" required placeholder="Name" className={inputClass} />
                  <input name="business" type="text" placeholder="Business Name" className={inputClass} />
                  <input name="email" type="email" required placeholder="Email" className={inputClass} />
                  <input name="phone" type="tel" placeholder="Phone" className={inputClass} />
                </div>

                <select name="service" defaultValue="" required className={inputClass}>
                  <option value="" disabled className="bg-ink">
                    Service Needed
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-ink">
                      {opt}
                    </option>
                  ))}
                </select>

                <textarea
                  name="details"
                  required
                  rows={4}
                  placeholder="Tell Us About Your Business"
                  className={inputClass}
                />

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 bg-orange px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-orange-warm"
                >
                  Start the Conversation
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
