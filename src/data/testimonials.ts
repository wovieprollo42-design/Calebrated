export interface TestimonialSlot {
  id: number
  isPlaceholder?: boolean
  quote?: string
  name?: string
  role?: string
}

// No real client testimonials have been provided yet.
// These are clearly marked placeholder slots only, replace with real,
// attributed client testimonials before launch. Never fabricate quotes,
// names, companies, or ratings. The section stays hidden while every
// slot is still a placeholder.
export const testimonialSlots: TestimonialSlot[] = [
  { id: 1, isPlaceholder: true },
  { id: 2, isPlaceholder: true },
  { id: 3, isPlaceholder: true },
]
