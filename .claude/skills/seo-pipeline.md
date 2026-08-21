# SEO Pipeline — Antonio Andreozzi Digital

Quando invocata (manualmente con `/seo-pipeline` o automaticamente dal calendario), esegui tutte le fasi in sequenza senza fermarti. Produci sempre un articolo completo.

---

## FASE 0 — Selezione Topic

Leggi il file `.claude/topics.json` nella cartella del progetto (`C:\Users\SDB\Desktop\antonio-andreozzi-digital`).

Trova il primo topic con `"status": "pending"`. Questo è il topic da lavorare.

Se l'utente ha passato un argomento manuale (es. `/seo-pipeline consulente brand Caserta`), usa quello invece e ignora la coda.

**Variabili fisse:**
- Target geo: Provincia di Caserta, Provincia di Napoli, Campania
- Target audience: Titolari PMI, freelancer, personal brand locali
- Lunghezza minima: 1.500 parole
- Lingua: Italiano

---

## FASE 1 — Agente Keyword

**Obiettivo:** Verificare e arricchire la keyword principale. Trovare 5-8 keyword secondarie LSI.

**Azioni:**
1. WebSearch: `"{keyword_principale}" site:answerthepublic.com OR site:seozoom.it`
2. WebSearch: `"{keyword_principale}" Campania intitle:"guida" OR intitle:"come" OR intitle:"perché"`
3. WebSearch: `domande "{titolo_base}" imprenditori Napoli Caserta`
4. Analizza e definisci:
   - Keyword principale definitiva
   - 5-8 keyword secondarie
   - Intento di ricerca (informazionale / commerciale / transazionale)
   - Stima difficoltà (quanti competitor forti esistono?)

**Output:** Lista keyword strutturata.

---

## FASE 2 — Agente Mercato

**Obiettivo:** Capire i pain point reali degli imprenditori locali su questo topic.

**Azioni:**
1. WebSearch: `"{keyword_principale}" "provincia di Caserta" OR "provincia di Napoli" problemi`
2. WebSearch: `"{titolo_base}" PMI Campania "come fare" OR "quanto costa" OR "non riesco"`
3. WebSearch: `"{keyword_principale}" domande frequenti imprenditori piccole imprese Sud Italia`
4. Identifica:
   - 3-5 pain point principali
   - Le domande più frequenti
   - Il linguaggio colloquiale che usano

**Output:** Pain point + domande frequenti + linguaggio target.

---

## FASE 3 — Agente SERP

**Obiettivo:** Analizzare i top 3 risultati Google per trovare i gap.

**Azioni:**
1. WebSearch con la keyword principale
2. Prendi i primi 3 URL non pubblicitari
3. WebFetch su ciascuno dei 3 URL
4. Per ogni articolo analizza:
   - Struttura (H2, H3)
   - Lunghezza stimata
   - Argomenti trattati e mancanti
   - Focus locale presente o assente
   - Qualità della scrittura (meccanica/SEO vs. autentica)

**Output:** Tabella comparativa + lista GAP da colmare.

---

## FASE 4 — Agente Decisione

**Obiettivo:** Definire la strategia dell'articolo basandosi sui dati.

**Decisioni:**
- Keyword principale definitiva
- Angolo unico (basato su gap SERP + pain point mercato)
- Struttura H2/H3 proposta
- Titolo SEO ottimizzato (max 60 caratteri, include keyword)
- Meta description (max 155 caratteri)
- Slug URL (kebab-case, include keyword geografica)
- Elementi differenzianti rispetto ai competitor

**Output:** Brief completo pronto per il Writer.

---

## FASE 5 — Agente Writer

**Obiettivo:** Scrivere l'articolo completo, minimo 1.500 parole.

**Regole:**
- Tono: diretto, professionale, autentico — come parla Antonio Andreozzi
- Prima persona dove appropriato: "nel mio lavoro con i clienti...", "quello che vedo spesso..."
- Hook forte nell'intro che parla al target locale
- Esempi concreti riferiti a Caserta/Napoli/Campania
- Keyword secondarie inserite in modo naturale (non forzato)
- CTA finale: invito a contattare Antonio o leggere altri articoli
- NON usare linguaggio da agenzia generica

**Struttura minima:**
```
Intro (150-200 parole) — hook + problema + promessa
H2 — [sezione 1] (200-250 parole)
  H3 — sottopunto
  H3 — sottopunto
H2 — [sezione 2] (200-250 parole)
H2 — [sezione 3] (200-250 parole)
H2 — [focus locale: Caserta/Napoli/Campania] (200-250 parole)
H2 — Conclusione + CTA (100-150 parole)
```

**Output:** Articolo completo in testo.

---

## FASE 6 — Agente Optimizer

**Obiettivo:** Rifinire l'articolo colmando i gap identificati nella Fase 3.

**Checklist:**
- Ogni gap SERP è stato colmato? ✓
- Keyword principale: nel titolo H1, nel primo paragrafo, in almeno un H2, nella conclusione ✓
- Keyword secondarie distribuite naturalmente ✓
- Menzione esplicita di Caserta e/o Napoli e/o Campania ✓
- Lunghezza ≥ 1.500 parole — integra se necessario ✓
- CTA presente e chiara ✓

**Output:** Articolo finale ottimizzato.

---

## FASE 7 — Creazione File

Crea il file:
`C:\Users\SDB\Desktop\antonio-andreozzi-digital\app\blog\[slug]\page.tsx`

Template Next.js da usare:

```tsx
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '[TITOLO SEO]',
  description: '[META DESCRIPTION]',
}

export default function ArticoloBlog() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section
          style={{
            paddingTop: 'clamp(120px, 14vw, 180px)',
            paddingBottom: 'clamp(40px, 6vw, 70px)',
            background: 'var(--bg-void)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div className="container-site" style={{ maxWidth: '760px' }}>
            <div className="flex items-center gap-3 mb-6">
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: 'var(--font-inter)' }}>
                [CATEGORIA]
              </span>
            </div>
            <h1
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}
            >
              [TITOLO H1]
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', letterSpacing: '0.06em' }}>
              [MESE ANNO] · [X] min di lettura
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-surface)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site article-prose" style={{ maxWidth: '760px' }}>
            [ARTICOLO IN JSX]
          </div>
        </section>

        <section style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Vuoi parlarne con me?
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Se hai un business nella provincia di Caserta o Napoli e vuoi lavorare sul tuo brand, scrivimi.
            </p>
            <a href="/contatti" className="cta-primary">Parliamo →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
```

---

## FASE 8 — Aggiorna la Coda

Dopo aver creato il file, aggiorna `.claude/topics.json`:
- Imposta `"status": "done"` sul topic appena lavorato
- Imposta `"pubblicato": "[DATA OGGI]"`

---

## FASE 9 — Report Finale

Mostra all'utente:
```
✓ Articolo creato
Titolo: [titolo]
Keyword: [keyword principale]
Slug: /blog/[slug]
Parole: ~[numero]
Prossimo step: npm run build → npx wrangler deploy
```
