import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* subtle engineering grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            Open to remote full-time &amp; contract roles
          </div>

          <p className="font-mono text-sm text-brand">Fernando Ballesteros</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Full-Stack Software Engineer
            <span className="block text-muted-foreground">Mobile + Backend</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Full-stack engineer specializing in mobile apps (primarily Flutter) and NestJS
            backends, with hands-on experience taking products from architecture to
            production — real-time systems, payment/POS platforms, and consumer mobile
            apps.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-brand" aria-hidden="true" />
            Hermosillo, Mexico — open to remote work (US, LATAM and Europe)
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              size="lg"
              nativeButton={false}
              className="h-11 gap-2 px-5 text-sm"
              render={<a href="#projects" />}
            >
              View Projects
              <ArrowDown className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-11 gap-2 px-5 text-sm"
              render={
                <a
                  href="/Fernando-Ballesteros-Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Download className="size-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              className="h-11 gap-2 px-5 text-sm"
              render={<a href="#contact" />}
            >
              <Mail className="size-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
