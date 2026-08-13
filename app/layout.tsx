import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fernandoballesteros.dev'),
  title: 'Fernando Ballesteros — Full-Stack Software Engineer',
  description:
    'Full-stack software engineer specializing in mobile apps (Flutter) and NestJS backends. 10+ shipped production apps across fintech-adjacent, access control, hospitality tech, and consumer apps.',
  keywords: [
    'Fernando Ballesteros',
    'Software Engineer',
    'Flutter',
    'NestJS',
    'Mobile Developer',
    'Full-Stack Engineer',
    'React Native',
  ],
  authors: [{ name: 'Fernando Ballesteros' }],
  openGraph: {
    title: 'Fernando Ballesteros — Full-Stack Software Engineer',
    description:
      'Mobile (Flutter) + backend (NestJS) engineer. 10+ production apps shipped across App Store and Google Play.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1116' },
  ],
}

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var root = document.documentElement;
    if (stored === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
