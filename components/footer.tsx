import { Mail } from 'lucide-react'

import { LinkedInIcon } from '@/components/icons'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-muted-foreground">
          <span className="font-mono text-foreground">Fernando Ballesteros</span> · Full-Stack
          Software Engineer
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:dev.fballesteros@gmail.com"
            aria-label="Email Fernando"
            className="text-muted-foreground transition-colors hover:text-brand"
          >
            <Mail className="size-4.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/fernando-ballesteros-ba60b8222"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fernando on LinkedIn"
            className="text-muted-foreground transition-colors hover:text-brand"
          >
            <LinkedInIcon className="size-4.5" />
          </a>
          <span className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
