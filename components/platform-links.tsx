import { Apple, Globe, Play } from 'lucide-react'

import type { ProjectLink } from '@/lib/data'
import { cn } from '@/lib/utils'

const META: Record<ProjectLink['type'], { label: string; Icon: typeof Globe }> = {
  ios: { label: 'App Store', Icon: Apple },
  android: { label: 'Google Play', Icon: Play },
  website: { label: 'Website', Icon: Globe },
}

export function PlatformLinks({
  links,
  className,
}: {
  links: ProjectLink[]
  className?: string
}) {
  if (links.length === 0) {
    return (
      <span className="inline-flex items-center rounded-md border border-dashed border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
        In deployment
      </span>
    )
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {links.map((link, i) => {
        const { label: defaultLabel, Icon } = META[link.type]
        const label = link.label ?? defaultLabel
        return (
          <a
            key={`${link.type}-${i}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <Icon className="size-3.5" aria-hidden="true" />
            {label}
          </a>
        )
      })}
    </div>
  )
}
