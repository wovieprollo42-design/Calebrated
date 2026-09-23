export interface ProcessStep {
  index: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Discover',
    description: 'We learn how your business operates and where support is needed.',
  },
  {
    index: '02',
    title: 'Design',
    description: 'We build a support plan around your priorities and workflow.',
  },
  {
    index: '03',
    title: 'Integrate',
    description: 'CALEBrated becomes part of your operational rhythm.',
  },
  {
    index: '04',
    title: 'Support & Grow',
    description: 'As your business evolves, your support can evolve with it.',
  },
]
