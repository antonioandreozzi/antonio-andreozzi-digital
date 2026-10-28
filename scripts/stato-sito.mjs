#!/usr/bin/env node
// Controlla lo stato di antonioandreozzidigital.com e scrive reports/stato-sito.md.
// Gira ogni lunedì via GitHub Action (.github/workflows/stato-sito.yml), prima del CEO Agent,
// perché l'ambiente cloud degli agenti non raggiunge il sito. Si può lanciare anche a mano:
//   node scripts/stato-sito.mjs
// Nessuna dipendenza: usa il fetch nativo di Node 18+.

import { mkdir, writeFile } from 'node:fs/promises'

const BASE = 'https://antonioandreozzidigital.com'
const PAGINE_CHIAVE = ['/', '/blog/', '/risorse/', '/diagnosi/', '/lavora-con-me/', '/sitemap.xml']
const TIMEOUT_MS = 20000
const LENTO_MS = 3000
const UA = 'Mozilla/5.0 (compatible; StatoSitoBot/1.0; +https://antonioandreozzidigital.com)'

async function controlla(url) {
  const inizio = Date.now()
  try {
    // Primo salto senza seguire i redirect, per vederli
    const primo = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(TIMEOUT_MS) })
    let finale = primo
    let redirect = null
    if (primo.status >= 300 && primo.status < 400) {
      redirect = new URL(primo.headers.get('location') || '', url).href
      finale = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(TIMEOUT_MS) })
    }
    const corpo = await finale.text()
    return { url, codice: finale.status, primoCodice: primo.status, redirect, ms: Date.now() - inizio, corpo }
  } catch (err) {
    return { url, codice: 0, errore: err.name === 'TimeoutError' ? `timeout dopo ${TIMEOUT_MS / 1000}s` : err.message, ms: Date.now() - inizio }
  }
}

function esito(r) {
  if (r.codice === 200) return r.ms > LENTO_MS ? '🟡 OK ma lenta' : '✅ OK'
  return '🔴 ERRORE'
}

function riga(r) {
  const percorso = r.url.replace(BASE, '') || '/'
  const codice = r.codice === 0 ? `— (${r.errore})` : r.redirect ? `${r.primoCodice} → ${r.codice}` : `${r.codice}`
  return `| \`${percorso}\` | ${codice} | ${r.ms} ms | ${esito(r)} |`
}

async function inBlocchi(urls, n, fn) {
  const out = []
  for (let i = 0; i < urls.length; i += n) out.push(...(await Promise.all(urls.slice(i, i + n).map(fn))))
  return out
}

const ora = new Date()
const dataRoma = ora.toLocaleString('it-IT', { timeZone: 'Europe/Rome', dateStyle: 'full', timeStyle: 'short' })

const chiave = await inBlocchi(PAGINE_CHIAVE.map((p) => BASE + p), 3, controlla)

// Tutte le URL della sitemap (se raggiungibile)
let urlSitemap = []
const sm = chiave.find((r) => r.url.endsWith('/sitemap.xml'))
if (sm?.codice === 200 && sm.corpo) {
  urlSitemap = [...sm.corpo.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1])
}
const giaFatte = new Set(chiave.map((r) => r.url))
const daControllare = urlSitemap.filter((u) => !giaFatte.has(u))
const sitemap = await inBlocchi(daControllare, 5, controlla)

const problemiChiave = chiave.filter((r) => r.codice !== 200)
const problemiSitemap = sitemap.filter((r) => r.codice !== 200)
const lente = [...chiave, ...sitemap].filter((r) => r.codice === 200 && r.ms > LENTO_MS)
const tuttoOk = problemiChiave.length === 0 && problemiSitemap.length === 0

const md = `# Stato del sito — antonioandreozzidigital.com

Generato il: ${ora.toISOString()} (${dataRoma}, ora di Roma)
Fonte: GitHub Action \`stato-sito.yml\` (rete esterna, non l'ambiente cloud degli agenti)

## Esito

${tuttoOk ? '✅ **Tutto ok**: tutte le pagine controllate rispondono 200.' : `🔴 **Problemi rilevati**: ${problemiChiave.length} pagine chiave e ${problemiSitemap.length} URL della sitemap non rispondono 200.`}
${lente.length ? `\n🟡 Pagine lente (oltre ${LENTO_MS / 1000}s): ${lente.map((r) => `\`${r.url.replace(BASE, '') || '/'}\``).join(', ')}` : ''}

## Pagine chiave

| Pagina | Codice | Tempo | Esito |
|---|---|---|---|
${chiave.map(riga).join('\n')}

## Sitemap

${urlSitemap.length ? `URL nella sitemap: **${urlSitemap.length}** — controllate tutte, non OK: **${problemiSitemap.length}**.` : '⚠️ Sitemap non leggibile: impossibile controllare gli altri URL.'}
${problemiSitemap.length ? `\n| Pagina | Codice | Tempo | Esito |\n|---|---|---|---|\n${problemiSitemap.map(riga).join('\n')}` : ''}
`

await mkdir('reports', { recursive: true })
await writeFile('reports/stato-sito.md', md)
console.log(md)
