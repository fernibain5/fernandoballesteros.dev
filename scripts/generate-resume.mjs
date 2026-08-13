import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

// Minimal dependency-free single-page PDF generator for the resume.
// Produces US Letter (612x792) with Helvetica text lines.

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

// [text, size, fontIndex(0=regular,1=bold), gapBefore]
const lines = [
  ['Fernando Ballesteros', 20, 1, 0],
  ['Full-Stack Software Engineer  |  Mobile (Flutter) + Backend (NestJS)', 11, 0, 6],
  ['Hermosillo, Mexico - open to remote (US, LATAM and Europe)', 10, 0, 2],
  ['dev.fballesteros@gmail.com  |  linkedin.com/in/fernando-ballesteros-ba60b8222', 10, 0, 2],
  ['', 6, 0, 6],
  ['SUMMARY', 12, 1, 8],
  ['Full-stack engineer specializing in mobile apps (primarily Flutter) and NestJS', 10, 0, 4],
  ['backends. Hands-on from architecture to production: real-time systems,', 10, 0, 0],
  ['payment/POS platforms, and consumer mobile apps. 10+ production apps shipped.', 10, 0, 0],
  ['', 6, 0, 6],
  ['EXPERIENCE', 12, 1, 8],
  ['INOWU - Software Engineer  (~4 years)', 11, 1, 4],
  ['- Led architecture and delivery on multiple published mobile and web products.', 10, 0, 2],
  ['- Primary stack: Flutter, NestJS, Prisma, PostgreSQL.', 10, 0, 0],
  ['- Owned API integrations, real-time features, and documentation.', 10, 0, 0],
  ['- Led a Firebase to NestJS/Postgres migration using a dual-write strategy.', 10, 0, 0],
  ['Soft Restaurant (via distributor) - Customer Support  (3 years, prior)', 11, 1, 6],
  ["- Supported Latin America's largest restaurant/bar POS system.", 10, 0, 2],
  ['- Direct insight into POS and restaurant-tech operations.', 10, 0, 0],
  ['', 6, 0, 6],
  ['SELECTED PROJECTS', 12, 1, 8],
  ['Wmobil - real-time restaurant sales dashboard w/ AI chatbot reports (iOS + Android).', 10, 0, 4],
  ['Bub - AI chatbot study guide & scheduling for a K-12 school (iOS + Android).', 10, 0, 0],
  ['Unite (US client) - React Native (Expo) social/events app; matching + real-time.', 10, 0, 0],
  ['Coffee Shop POS - offline-first POS: Windows desktop + iOS/Android self-ordering.', 10, 0, 0],
  ['Wfacturas - QR self-invoicing for restaurant checks (Mexican tax authority).', 10, 0, 0],
  ['Tonetip - app + companion Android SDK published to Maven Central.', 10, 0, 0],
  ['', 6, 0, 6],
  ['SKILLS', 12, 1, 8],
  ['Mobile: Flutter, Riverpod 2.x, BLoC, Provider, GoRouter, Freezed, Firebase, Dio,', 10, 0, 4],
  ['        Shared Preferences, RevenueCat, React Native (Expo), Swift, Kotlin', 10, 0, 0],
  ['Backend: NestJS, Prisma, PostgreSQL, Node.js, MongoDB, MySQL, Payload CMS, GraphQL', 10, 0, 0],
  ['Real-time: LiveKit, Agora RTC/RTM, 100ms, Twilio, WebSockets', 10, 0, 0],
  ["Infra: Docker, VPS, nginx, Let's Encrypt, Cloudflare, Tailscale, CI/CD", 10, 0, 0],
  ['AI/Tools: Claude Code, Cowork, ChatGPT, Codex, DeepSeek, Gemini, Git, GitHub, Figma', 10, 0, 0],
]

let content = 'BT\n'
let y = 748
const x = 54
let first = true
for (const [text, size, font, gap] of lines) {
  const fontRef = font === 1 ? '/F2' : '/F1'
  y -= gap
  if (first) {
    content += `1 0 0 1 ${x} ${y} Tm\n`
    first = false
  } else {
    // move to absolute position via text matrix each line for simplicity
    content += `1 0 0 1 ${x} ${y} Tm\n`
  }
  content += `${fontRef} ${size} Tf\n`
  if (text) content += `(${esc(text)}) Tj\n`
  y -= size + 4
}
content += 'ET'

const objects = []
objects.push('<< /Type /Catalog /Pages 2 0 R >>')
objects.push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
objects.push(
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
)
objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`)
objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')

let pdf = '%PDF-1.4\n'
const offsets = []
objects.forEach((obj, i) => {
  offsets.push(pdf.length)
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`
})

const xrefStart = pdf.length
pdf += `xref\n0 ${objects.length + 1}\n`
pdf += '0000000000 65535 f \n'
for (const off of offsets) {
  pdf += `${String(off).padStart(10, '0')} 00000 n \n`
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

const out = resolve(process.cwd(), 'public/Fernando-Ballesteros-Resume.pdf')
mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, pdf, 'latin1')
console.log('[v0] wrote', out, `(${pdf.length} bytes)`)
