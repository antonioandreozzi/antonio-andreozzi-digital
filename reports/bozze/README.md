# Bozze e contenuti personali

**Regola di Antonio (16/11/2026):** nessun contenuto personale va pubblicato senza il suo ok esplicito, dato in chat su quella bozza. Un ok dato in passato o su un altro contenuto non vale per quello nuovo.

## Come funziona (due volte a settimana, martedì e venerdì)

1. **I semi.** Antonio scrive le sue storie vere in `.claude/storie-personali.json`, oppure le detta in chat e l'agente le aggiunge lì. Un seme è un episodio: cosa è successo, quando e dove, chi c'era, i numeri veri, la lezione, cosa non dire.
2. **La bozza.** La routine "Storia personale Antonio" prende il primo seme con `"used": false`. Il **martedì** preferisce le storie di tipo `umano` (vita, senso, paure, abitudini, famiglia, libri), il **venerdì** quelle di tipo `lavoro`; se non ce ne sono di quel tipo prende la prima libera. Per il titolo usa le formule e i 40 titoli di `reports/mappa-contenuti-big.md`, e scrive un pacchetto in tre formati, seguendo lo schema in `reports/creator-articles-report.md` (sezione "Post e reel"):
   - articolo per il blog (900–1.300 parole);
   - post LinkedIn/Facebook (150–300 parole);
   - script di un reel da 30–60 secondi.
   Lo salva in `reports/bozze/storia-in-attesa.md`, lo mostra ad Antonio in chat e gli manda una notifica. Poi si ferma.
3. **L'ok.** Antonio risponde in quella conversazione: ok, modifiche o no.
4. **Dopo l'ok:**
   - l'articolo va sul blog (`app/blog/{slug}/` e `app/blog/page.tsx`);
   - post e reel vanno in `reports/storie-pubblicate/`, pronti da pubblicare: Antonio li pubblica dai suoi profili;
   - il seme passa a `"used": true` e `storia-in-attesa.md` si svuota.

## Regole

- Mai inventare episodi, persone, luoghi, date, numeri o dialoghi. Se manca un dettaglio, si resta generici o lo si chiede ad Antonio.
- Se c'è già una bozza in attesa, non se ne scrive un'altra: si ricorda quella.
- Se i semi sono finiti, si chiedono nuove storie ad Antonio e ci si ferma.
- Lo stile si ispira ai big (Vignali, Bottoni, Welsh, Hormozi e gli altri del report), ma la voce resta quella di Antonio: niente milioni, niente lusso, niente tono da guru. Non si copiano titoli o frasi dei creator.

## Bozze presenti

- `01-vero-concorrente.md`, `02-dieci-cose-pmi-sud.md`, `03-ai-non-decide-al-posto-tuo.md` (16/11/2026): articoli d'opinione con segnaposto `[TUA STORIA: …]`. Non sono pubblicati e restano in attesa delle storie di Antonio e del suo ok.
