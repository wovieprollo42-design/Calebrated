export interface ProcessStep {
  index: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Discover',
    description: 'We learn how your business operates, where the workload sits, and which virtual assistant services would make the biggest difference.',
  },
  {
    index: '02',
    title: 'Design',
    description: 'We build a support plan around your priorities, tools, and workflow, whether that means calendar and email management or broader business operations support.',
  },
  {
    index: '03',
    title: 'Integrate',
    description: 'CALEBrated becomes part of your operational rhythm, working inside the systems and schedules you rely on every day.',
  },
  {
    index: '04',
    title: 'Support & Grow',
    description: 'As your business evolves, your support evolves with it, from a few hours each week to dedicated, ongoing operations support.',
  },
]
