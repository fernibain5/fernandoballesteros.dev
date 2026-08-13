import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type Role = {
  company: string
  role: string
  period: string
  points: string[]
}

const ROLES: Role[] = [
  {
    company: 'INOWU',
    role: 'Software Engineer',
    period: '~4 years',
    points: [
      'Led architecture and delivery on multiple published products across mobile and web.',
      'Primary stack: Flutter for mobile, NestJS / Prisma / PostgreSQL on the backend.',
      'Owned API integrations, real-time features, and technical documentation.',
      'Led a Firebase → NestJS/Postgres migration using a dual-write strategy.',
    ],
  },
  {
    company: 'Soft Restaurant (via distributor)',
    role: 'Customer Support',
    period: '3 years (prior)',
    points: [
      "Supported Latin America's largest restaurant/bar POS system.",
      'Direct, day-to-day insight into POS and restaurant-tech operations.',
      'Informs the domain understanding behind my POS and hospitality projects.',
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border bg-card/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built and shipped"
        />

        <div className="relative">
          <span
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-2"
            aria-hidden="true"
          />
          <div className="space-y-10">
            {ROLES.map((role, i) => (
              <Reveal key={role.company} delay={i * 100}>
                <div className="relative pl-8 sm:pl-12">
                  <span className="absolute left-0 top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-brand bg-background">
                    <span className="size-1.5 rounded-full bg-brand" />
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {role.role}
                      <span className="text-brand"> · {role.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {role.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-brand"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
