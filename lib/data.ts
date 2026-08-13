export type ProjectLink = {
  type: 'ios' | 'android' | 'website'
  href: string
  label?: string
}

export type Project = {
  name: string
  tagline: string
  description: string
  tags: string[]
  links: ProjectLink[]
  current?: boolean
}

export const featuredProjects: Project[] = [
  {
    name: 'Wmobil',
    tagline: 'Real-time restaurant sales dashboard',
    description:
      'Lets restaurant owners track real-time sales across one or many locations, with a full range of reports. Includes an AI chatbot that generates those reports from natural-language questions. Owned architecture and delivery end-to-end.',
    tags: ['Flutter', 'Real-time', 'AI Chatbot', 'iOS + Android'],
    links: [
      {
        type: 'ios',
        href: 'https://apps.apple.com/mx/app/wmobil-2-0/id1528819632',
      },
      {
        type: 'android',
        href: 'https://play.google.com/store/apps/details?id=com.inowu.wmobil&hl=es_MX',
      },
    ],
  },
  {
    name: 'Bub',
    tagline: 'AI study guide & scheduling for K-12',
    description:
      'An AI-powered study guide and scheduling app built for a K-12 school, combining generated study material with class scheduling.',
    tags: ['Flutter', 'AI Chatbot', 'Scheduling', 'iOS + Android'],
    links: [
      { type: 'ios', href: 'https://apps.apple.com/mx/app/bub/id6449195313' },
      {
        type: 'android',
        href: 'https://play.google.com/store/apps/details?id=com.learning.bub&hl=es_MX',
      },
    ],
  },
  {
    name: 'Unite',
    tagline: 'Social & events app (US client)',
    description:
      'Social and events platform for a US client. Built the matching algorithm and the real-time features that power live interaction between users.',
    tags: ['React Native (Expo)', 'EAS', 'Matching algorithm', 'Real-time'],
    links: [
      {
        type: 'ios',
        href: 'https://apps.apple.com/us/app/unit%C4%93/id1625185363',
      },
    ],
  },
]

export const otherProjects: Project[] = [
  {
    name: 'Coffee Shop POS',
    current: true,
    tagline: 'Offline-first point-of-sale platform',
    description:
      'Offline-first POS for restaurants: a Windows desktop app for staff plus branded iOS/Android self-ordering apps for customers. Works fully on LAN without internet — unlike cloud-only competitors (Square/Toast/Clover). Deploying to a paying pilot client.',
    tags: ['Flutter', 'Windows desktop', 'iOS + Android', 'Offline-first', 'LAN sync'],
    links: [],
  },
  {
    name: 'Wfacturas',
    tagline: 'Self-invoicing for restaurant checks',
    description:
      'Lets diners self-invoice their check with the Mexican tax authority by scanning a QR code on the receipt. Restaurants pay a subscription for an invoice quota.',
    tags: ['React + Next.js', 'Fintech', 'Subscriptions', 'Tax integration'],
    links: [{ type: 'website', href: 'https://wfacturas.com/' }],
  },
  {
    name: 'Tonetip',
    tagline: 'Companion app + Android SDK',
    description:
      'Consumer app shipped to both stores, with a companion Android SDK published to Maven Central for third-party integration.',
    tags: ['Swift', 'Kotlin', 'iOS + Android', 'Android SDK', 'Maven Central'],
    links: [
      {
        type: 'ios',
        href: 'https://apps.apple.com/mx/app/tonetip/id1598183150',
      },
      {
        type: 'android',
        href: 'https://play.google.com/store/apps/details?id=com.tonetip&hl=es_MX',
      },
    ],
  },
  {
    name: 'Quamtum Personal Audio',
    tagline: 'Hardware headphone companion',
    description:
      'App for a hardware headphone company showcasing their product line, featuring a built-in audio equalizer that tunes output in real time.',
    tags: ['Flutter', 'Audio', 'Equalizer', 'Android'],
    links: [
      {
        type: 'android',
        href: 'https://play.google.com/store/apps/details?id=com.inowu.quamtumAudio',
      },
    ],
  },
  {
    name: 'Ion Dental Lab',
    tagline: 'B2B dental order management',
    description:
      'B2B application for managing dental lab orders — order intake, tracking, and status across the lab workflow.',
    tags: ['Flutter', 'B2B', 'iOS + Android', 'Order management'],
    links: [
      {
        type: 'android',
        href: 'https://play.google.com/store/apps/details?id=com.inowu.ion&pcampaignid=web_share',
      },
    ],
  },
  {
    name: 'Birrieria La Purisima',
    tagline: 'HR system + public landing page',
    description:
      'Built both an internal HR management system and the public-facing landing page for the business — full stack, from data model to marketing site.',
    tags: ['React + Vite', 'HTML/CSS/JS', 'HR system'],
    links: [
      {
        type: 'website',
        href: 'https://portal.birrierialapurisima.com.mx/',
        label: 'HR Website',
      },
      {
        type: 'website',
        href: 'https://birrierialapurisima.com.mx/',
        label: 'Landing Website',
      },
    ],
  },
  {
    name: 'Prepared Partners',
    tagline: 'Dating app — releasing Dec 2026',
    description:
      'A dating app slated for release in December 2026. Landing page live ahead of launch.',
    tags: ['Flutter', 'iOS + Android', 'Real-time', 'Upcoming'],
    links: [{ type: 'website', href: 'https://preparedpartners.com/' }],
  },
  {
    name: 'FiverMx',
    tagline: 'Construction company landing page',
    description:
      'Marketing landing page for a construction company — clean, fast, and conversion-focused.',
    tags: ['HTML/CSS/JS', 'Landing page'],
    links: [{ type: 'website', href: 'https://fivermx.com/' }],
  },
]

export type SkillGroup = {
  category: string
  primary: string[]
  secondary?: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Mobile',
    primary: [
      'Flutter',
      'Riverpod 2.x (codegen)',
      'BLoC',
      'Provider',
      'GoRouter',
      'Freezed',
      'Firebase (Auth/Firestore/Storage)',
      'Dio',
      'Shared Preferences',
      'RevenueCat',
    ],
    secondary: ['React Native (Expo)', 'Native iOS (Swift)', 'Native Android (Kotlin)'],
  },
  {
    category: 'Backend',
    primary: ['NestJS', 'Prisma', 'PostgreSQL'],
    secondary: ['Node.js', 'MongoDB', 'MySQL', 'Firebase', 'Payload CMS', 'GraphQL'],
  },
  {
    category: 'Real-time & Integrations',
    primary: ['LiveKit', 'Agora RTC/RTM', '100ms', 'Twilio', 'WebSockets'],
  },
  {
    category: 'Infra & DevOps',
    primary: [
      'Docker',
      'VPS deployment',
      'nginx',
      "Let's Encrypt",
      'Cloudflare',
      'Tailscale',
      'CI/CD pipelines',
    ],
  },
  {
    category: 'AI & Tools',
    primary: [
      'Claude Code',
      'Cowork',
      'ChatGPT',
      'Codex',
      'DeepSeek',
      'Gemini',
      'Leonardo AI',
    ],
    secondary: ['Git', 'GitHub', 'Monday', 'Notion', 'Slack', 'Figma'],
  },
  {
    category: 'Testing & More',
    primary: ['Flutter unit/widget/integration testing'],
    secondary: [
      'OAuth flows',
      'Payment/subscription systems',
      'Backend migrations (Firebase → NestJS/Postgres, dual-write)',
    ],
  },
]
