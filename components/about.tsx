import { Boxes, GitBranch, Rocket, Workflow } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const HIGHLIGHTS = [
  {
    Icon: Rocket,
    title: '10+ production apps shipped',
    body: 'Live on the App Store and Google Play across fintech-adjacent, access control, hospitality tech, and consumer apps.',
  },
  {
    Icon: Workflow,
    title: 'End-to-end ownership',
    body: 'Architecture, hardware/API integrations, and documentation — not just writing code to a spec.',
  },
  {
    Icon: Boxes,
    title: 'Stack-adaptable',
    body: 'Picks up and ships with whatever a project needs — Node.js, MongoDB, Firebase, MySQL, Payload CMS, GraphQL.',
  },
  {
    Icon: GitBranch,
    title: 'Migrations & real-time',
    body: 'Led a Firebase → NestJS/Postgres migration with a dual-write strategy; built real-time and WebRTC features.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="About"
        title="Engineer who owns the whole path to production"
        description="Roughly four years building software at INOWU — primarily Flutter for mobile and NestJS / Prisma / PostgreSQL on the backend, with additional work across React Native (Expo) and native iOS (Swift) and Android (Kotlin)."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <div className="hidden sm:block space-y-5">
            <p>
              I&apos;m comfortable taking a project from an idea to a shipped product: designing
              the architecture, integrating third-party APIs and services, and writing the
              documentation that keeps a team moving. I care about the parts of engineering
              that don&apos;t show up in a ticket.
            </p>
            <p>
              Over the last few years I&apos;ve shipped 10+ production apps across the App Store
              and Google Play — spanning payment and POS platforms, access control,
              hospitality tech, and consumer apps. Each one came with its own constraints, and I
              adapt to a project&apos;s existing stack rather than forcing a favorite tool.
            </p>
          </div>
          <p>
            That adaptability is deliberate: I&apos;ve shipped with Node.js, MongoDB, Firebase,
            MySQL, Payload CMS, and GraphQL as different projects demanded, while keeping
            Flutter and NestJS as the core I go deepest in.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-xl border border-border bg-card p-5">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-muted text-brand">
                  <item.Icon className="size-4.5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
