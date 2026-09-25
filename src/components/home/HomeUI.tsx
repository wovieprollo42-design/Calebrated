import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CheckListGroupItem {
  title: string
  text: string
}

export type CheckListItem = string | CheckListGroupItem

function isGroupItem(item: CheckListItem): item is CheckListGroupItem {
  return typeof item === 'object'
}

export function CheckList({
  items,
  tone = 'light',
  twoLine = false,
  className,
}: {
  items: CheckListItem[]
  tone?: 'light' | 'dark'
  twoLine?: boolean
  className?: string
}) {
  return (
    <ul className={cn(twoLine ? 'space-y-4' : 'space-y-3', className)}>
      {items.map((item, i) => (
        <li key={`${isGroupItem(item) ? item.title : item}-${i}`} className="flex items-start gap-3">
          <Check size={18} strokeWidth={3} className="mt-1 shrink-0 text-orange" aria-hidden="true" />
          {isGroupItem(item) ? (
            <span className={cn('text-body', tone === 'dark' ? 'text-white/80' : 'text-gray-600')}>
              <strong className="block font-display font-semibold text-navy">{item.title}</strong>
              {item.text}
            </span>
          ) : (
            <span className={cn('text-body', tone === 'dark' ? 'text-white/80' : 'text-gray-600')}>{item}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
