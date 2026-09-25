import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, ChevronDown, Facebook, Loader2, Mail } from 'lucide-react'
import { CALENDLY_URL } from '@/data/home'
import { serviceGroups } from '@/data/services'
import { card, container } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { ButtonLink, TextLink } from './ui/Button'

interface FormValues {
  name: string
  email: string
  business: string
  phone: string
  service: string
  details: string
}

const EMPTY_VALUES: FormValues = { name: '', email: '', business: '', phone: '', service: '', details: '' }

type FieldName = keyof FormValues
type FormErrors = Partial<Record<FieldName, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const REQUIRED_FIELDS: FieldName[] = ['name', 'email', 'service', 'details']
const FIELD_ORDER: FieldName[] = ['name', 'email', 'business', 'phone', 'service', 'details']

function validateField(field: FieldName, values: FormValues): string | undefined {
  switch (field) {
    case 'name':
      return values.name.trim() ? undefined : 'Enter your name'
    case 'email':
      if (!values.email.trim()) return 'Enter your email'
      return EMAIL_RE.test(values.email.trim()) ? undefined : 'Enter a valid email, like name@business.com'
    case 'service':
      return values.service ? undefined : 'Choose a service, or pick Not sure yet'
    case 'details':
      return values.details.trim() ? undefined : 'Tell us a little about what you need'
    default:
      return undefined
  }
}

function validateAll(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  for (const field of REQUIRED_FIELDS) {
    const message = validateField(field, values)
    if (message) errors[field] = message
  }
  return errors
}

const inputClass =
  'mt-2 block h-12 w-full rounded-md border border-gray-500 bg-white px-4 font-body text-body text-navy placeholder:text-gray-500 transition-colors duration-150 hover:border-navy focus:border-navy disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-offwhite disabled:text-gray-500'
const errorInputClass = 'border-orange-deep ring-1 ring-orange-deep'
const labelClass = 'block font-display text-label font-medium text-navy'
const contactRowClass =
  'inline-flex min-h-11 items-center gap-3 text-body font-medium text-orange-deep underline-offset-4 hover:underline'
const editLinkClass =
  'inline-flex min-h-11 items-center gap-2 font-display text-btn font-medium text-orange-deep underline-offset-4 decoration-1 transition-colors duration-200 hover:underline'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-2 flex items-start gap-2 font-body text-label font-medium text-orange-deep">
      <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES)
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLElement | null>>>({})
  const submittingRef = useRef(false)
  const successHeadingRef = useRef<HTMLHeadingElement>(null)
  const returnFocusRef = useRef(false)

  useEffect(() => {
    if (status === 'success') successHeadingRef.current?.focus()
    if (status === 'idle' && returnFocusRef.current) {
      returnFocusRef.current = false
      fieldRefs.current.name?.focus()
    }
  }, [status])

  function setField(field: FieldName, value: string) {
    const next = { ...values, [field]: value }
    setValues(next)
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, next) }))
    }
  }

  function handleBlur(field: FieldName) {
    return () => {
      setTouched((prev) => ({ ...prev, [field]: true }))
      setErrors((prev) => ({ ...prev, [field]: validateField(field, values) }))
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submittingRef.current) return

    const nextErrors = validateAll(values)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, business: true, phone: true, service: true, details: true })

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field])
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus()
      return
    }

    submittingRef.current = true
    setStatus('submitting')

    const body = [
      `Name: ${values.name}`,
      `Business Name: ${values.business || 'Not provided'}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || 'Not provided'}`,
      `Service Needed: ${values.service}`,
      '',
      values.details,
    ].join('\n')

    window.location.href = `mailto:infocalebrated@gmail.com?subject=${encodeURIComponent(
      `New inquiry from ${values.name}`,
    )}&body=${encodeURIComponent(body)}`

    window.setTimeout(() => {
      submittingRef.current = false
      setStatus('success')
    }, 1500)
  }

  const fieldError = (field: FieldName) => (touched[field] ? errors[field] : undefined)
  const submitting = status === 'submitting'

  return (
    <div id="contact-form" className={card}>
      {status === 'success' ? (
        <div role="status">
          <CheckCircle2 size={24} className="text-orange" aria-hidden="true" />
          <h2
            ref={successHeadingRef}
            tabIndex={-1}
            className="mt-4 font-display text-h3 font-semibold text-navy outline-none"
          >
            Almost done: press Send in your email app
          </h2>
          <p className="mt-2 text-body text-gray-600">
            Your email app should now be open with your message ready. Press send there to reach our team.
          </p>
          <p className="mt-4 text-body text-gray-600">
            Nothing opened?{' '}
            <a
              href="mailto:infocalebrated@gmail.com"
              className="text-orange-deep underline underline-offset-4"
            >
              Email us at infocalebrated@gmail.com
            </a>
          </p>
          <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:gap-6">
            <TextLink href={CALENDLY_URL}>Book a Free Consultation</TextLink>
            <button
              type="button"
              onClick={() => {
                returnFocusRef.current = true
                setStatus('idle')
              }}
              className={editLinkClass}
            >
              Edit my message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <p className="text-label text-gray-600">All fields are required unless marked optional.</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>
              <input
                id="contact-name"
                ref={(el) => {
                  fieldRefs.current.name = el
                }}
                name="name"
                type="text"
                autoComplete="name"
                maxLength={120}
                disabled={submitting}
                value={values.name}
                onChange={(e) => setField('name', e.target.value)}
                onBlur={handleBlur('name')}
                aria-invalid={Boolean(fieldError('name'))}
                aria-describedby={fieldError('name') ? 'contact-name-error' : undefined}
                className={cn(inputClass, fieldError('name') && errorInputClass)}
              />
              <FieldError id="contact-name-error" message={fieldError('name')} />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <input
                id="contact-email"
                ref={(el) => {
                  fieldRefs.current.email = el
                }}
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                maxLength={254}
                placeholder="name@business.com"
                disabled={submitting}
                value={values.email}
                onChange={(e) => setField('email', e.target.value)}
                onBlur={handleBlur('email')}
                aria-invalid={Boolean(fieldError('email'))}
                aria-describedby={fieldError('email') ? 'contact-email-error' : undefined}
                className={cn(inputClass, fieldError('email') && errorInputClass)}
              />
              <FieldError id="contact-email-error" message={fieldError('email')} />
            </div>

            <div>
              <label htmlFor="contact-business" className={labelClass}>
                Business <span className="font-body font-normal text-gray-500">(optional)</span>
              </label>
              <input
                id="contact-business"
                name="business"
                type="text"
                autoComplete="organization"
                maxLength={200}
                disabled={submitting}
                value={values.business}
                onChange={(e) => setField('business', e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className={labelClass}>
                Phone <span className="font-body font-normal text-gray-500">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={50}
                disabled={submitting}
                value={values.phone}
                onChange={(e) => setField('phone', e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-service" className={labelClass}>
                Service needed
              </label>
              <div className="relative">
                <select
                  id="contact-service"
                  ref={(el) => {
                    fieldRefs.current.service = el
                  }}
                  name="service"
                  disabled={submitting}
                  value={values.service}
                  onChange={(e) => setField('service', e.target.value)}
                  onBlur={handleBlur('service')}
                  aria-invalid={Boolean(fieldError('service'))}
                  aria-describedby={fieldError('service') ? 'contact-service-error' : undefined}
                  className={cn(inputClass, 'appearance-none pr-10', fieldError('service') && errorInputClass)}
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {serviceGroups.map((group) => (
                    <optgroup key={group.id} label={group.name}>
                      {group.services.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy"
                />
              </div>
              <FieldError id="contact-service-error" message={fieldError('service')} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-details" className={labelClass}>
                What do you need help with?
              </label>
              <textarea
                id="contact-details"
                ref={(el) => {
                  fieldRefs.current.details = el
                }}
                name="details"
                rows={4}
                maxLength={5000}
                disabled={submitting}
                value={values.details}
                onChange={(e) => setField('details', e.target.value)}
                onBlur={handleBlur('details')}
                aria-invalid={Boolean(fieldError('details'))}
                aria-describedby={fieldError('details') ? 'contact-details-error' : undefined}
                className={cn(inputClass, 'h-auto min-h-36 resize-y py-3', fieldError('details') && errorInputClass)}
              />
              <FieldError id="contact-details-error" message={fieldError('details')} />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
            className={cn(
              'mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md px-7 font-display text-btn font-medium transition-colors duration-200 sm:w-auto',
              submitting
                ? 'cursor-wait bg-orange text-ink'
                : 'bg-orange text-ink hover:bg-orange-deep hover:text-white active:bg-orange-deep active:text-white',
            )}
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                Opening your email app...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  )
}

// Shown under the header on the Contact page, for visitors who would rather talk than write.
export function ContactOptions() {
  return (
    <section id="contact-options" className="bg-offwhite py-16 sm:py-20">
      <div className={cn(container, 'grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16')}>
        <div className="lg:col-span-7">
          <h2 className="text-balance font-display text-h2 font-medium text-navy">Prefer To Talk First?</h2>
          <p className="mt-4 max-w-xl text-body text-gray-600">
            Book a free call and tell us what you need. You can also email us or reach us on Facebook.
          </p>
        </div>
        <div className="lg:col-span-5">
          <ButtonLink href={CALENDLY_URL}>Book a Free Consultation</ButtonLink>
          <ul className="mt-6 space-y-1">
            <li>
              <a href="mailto:infocalebrated@gmail.com" className={contactRowClass}>
                <Mail size={20} className="text-navy" aria-hidden="true" />
                infocalebrated@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/calebratedvirtualservices"
                target="_blank"
                rel="noopener noreferrer"
                className={contactRowClass}
              >
                <Facebook size={20} className="text-navy" aria-hidden="true" />
                CALEBrated on Facebook
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
