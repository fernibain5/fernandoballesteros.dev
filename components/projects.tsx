import { Star } from 'lucide-react'

import { PlatformLinks } from '@/components/platform-links'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { featuredProjects, otherProjects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A sample of production apps and platforms I've architected and shipped. Featured work is highlighted first."
      />

      {/* Featured — larger, prominent cards */}
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 90} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/50">
              <span
                className="absolute inset-x-0 top-0 h-1 bg-brand"
                aria-hidden="true"
              />
              <div className="flex items-center gap-2 text-brand">
                <Star className="size-4 fill-brand" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-widest">Featured</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand">{project.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-border pt-4">
                <PlatformLinks links={project.links} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Secondary grid */}
      <Reveal className="mt-16 mb-6">
        <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
          More projects
        </h3>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 80} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/50">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-base font-semibold tracking-tight">{project.name}</h4>
                {project.current ? (
                  <span className="shrink-0 rounded-full bg-brand-muted px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-brand">
                    Current
                  </span>
                ) : null}
              </div>
              <p className="mt-0.5 text-xs font-medium text-brand">{project.tagline}</p>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-border pt-3">
                <PlatformLinks links={project.links} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
