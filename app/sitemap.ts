import type { MetadataRoute } from 'next'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

// Sitemap generata al build (output: 'export' → out/sitemap.xml).
// Gli articoli vengono letti in automatico dalle cartelle app/blog/<slug>/page.tsx,
// quindi ogni nuovo articolo entra nella sitemap senza toccare questo file.
// La data (lastmod) viene dall'array `posts` di app/blog/page.tsx.

export const dynamic = 'force-static'

const BASE = 'https://antonioandreozzidigital.com'

type Freq = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

const PAGINE: { path: string; changeFrequency: Freq; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/chi-sono/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/lavora-con-me/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/diagnosi/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/progetto/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sistema/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/cattedrale/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/short-video/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/chatbot-ai/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog/', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/video/', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/risorse/', changeFrequency: 'monthly', priority: 0.6 },
]

const MESI: Record<string, string> = {
  gennaio: '01', febbraio: '02', marzo: '03', aprile: '04', maggio: '05', giugno: '06',
  luglio: '07', agosto: '08', settembre: '09', ottobre: '10', novembre: '11', dicembre: '12',
}

// "28 Ottobre 2026" → "2026-10-28"
function dataIso(data: string): string | undefined {
  const m = data.trim().match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]+)\s+(\d{4})$/)
  const mese = m && MESI[m[2].toLowerCase()]
  return m && mese ? `${m[3]}-${mese}-${m[1].padStart(2, '0')}` : undefined
}

// slug → data, letti dall'array `posts` di app/blog/page.tsx
function dateArticoli(dirBlog: string): Map<string, string> {
  const date = new Map<string, string>()
  const file = join(dirBlog, 'page.tsx')
  if (!existsSync(file)) return date
  const sorgente = readFileSync(file, 'utf8')
  for (const blocco of sorgente.matchAll(/\{[^{}]*?date:\s*['"]([^'"]+)['"][^{}]*?slug:\s*['"]([^'"]+)['"][^{}]*?\}/g)) {
    const iso = dataIso(blocco[1])
    if (iso) date.set(blocco[2], iso)
  }
  return date
}

export default function sitemap(): MetadataRoute.Sitemap {
  const dirBlog = join(process.cwd(), 'app', 'blog')
  const date = dateArticoli(dirBlog)

  const articoli = readdirSync(dirBlog, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dirBlog, d.name, 'page.tsx')))
    .map((d) => d.name)
    .sort((a, b) => (date.get(b) ?? '').localeCompare(date.get(a) ?? ''))

  return [
    ...PAGINE.map((p) => ({ url: BASE + p.path, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...articoli.map((slug) => ({
      url: `${BASE}/blog/${slug}/`,
      ...(date.get(slug) ? { lastModified: date.get(slug) } : {}),
      changeFrequency: 'monthly' as Freq,
      priority: 0.8,
    })),
  ]
}
