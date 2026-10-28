# Reports settimanali

Generati automaticamente ogni lunedì dagli scheduled task cloud:

- `content-strategy-report.md` — Content Strategy Agent (~06:30)
- `competitor-research-report.md` — Competitor Research Agent (~06:45)
- `ceo-briefing.md` — CEO Agent (~07:15)
- `stato-sito.md` — generato ogni lunedì (~05:50) dalla GitHub Action `.github/workflows/stato-sito.yml` con `scripts/stato-sito.mjs`; si può lanciare a mano da GitHub → Actions → "Stato del sito" → Run workflow

Le copie datate finiscono in `archive/`.
