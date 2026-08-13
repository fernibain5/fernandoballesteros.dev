'use client'

import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

import { LinkedInIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

const EMAIL = 'dev.fballesteros@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/fernando-ballesteros-ba60b8222'

export function Contact() {
  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a recruiter'}`)
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${from ? ` (${from})` : ''}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-brand/20'

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about your team's next hire"
        description="Open to remote full-time and contract roles (US, LATAM and Europe). The fastest way to reach me is email."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <Reveal className="space-y-3">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/50"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-brand-muted text-brand">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Email</span>
              <span className="block truncate text-sm font-medium group-hover:text-brand">
                {EMAIL}
              </span>
            </span>
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/50"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-brand-muted text-brand">
              <LinkedInIcon className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">LinkedIn</span>
              <span className="block truncate text-sm font-medium group-hover:text-brand">
                /in/fernando-ballesteros
              </span>
            </span>
          </a>

          <div className="rounded-xl border border-dashed border-border p-5">
            <p className="flex items-center gap-2 text-sm font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Available now
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Open to remote full-time &amp; contract roles.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Jane Recruiter"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell me about the role or project…"
                className={`${inputClass} resize-y`}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-5 h-11 w-full gap-2 px-5 text-sm sm:w-auto"
            >
              <Send className="size-4" />
              Send message
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Opens your email client, pre-addressed to {EMAIL}.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
