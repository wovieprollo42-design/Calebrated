export interface TestimonialSlot {
  id: number
  isPlaceholder: true
}

// No real client testimonials have been provided yet.
// These are clearly marked placeholder slots only — replace with real,
// attributed client testimonials before launch. Never fabricate quotes,
// names, companies, or ratings.
export const testimonialSlots: TestimonialSlot[] = [
  { id: 1, isPlaceholder: true },
  { id: 2, isPlaceholder: true },
  { id: 3, isPlaceholder: true },
]
