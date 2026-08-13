import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/data'

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-card/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="T-shaped, not a flat list"
          description="Deep in a primary mobile + backend stack, broad across the tools different projects have required. Solid badges are where I go deepest; outlined badges are what I've shipped with as needed."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 80} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold tracking-tight">{group.category}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.primary.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-brand px-3 py-1.5 text-sm font-medium text-brand-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {group.secondary && group.secondary.length > 0 ? (
                  <>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Also worked with
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {group.secondary.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-border px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
