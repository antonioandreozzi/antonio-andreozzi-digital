# Briefing settimanale — 2026-11-16

## Le 3 cose più importanti questa settimana

1. **Oggi: metti il chatbot WhatsApp in testa a `.claude/topics.json`.** È la **quarta settimana** che salta: in `topics.json` non c'è ancora nessuna voce chatbot o short video, e il blog agent ha pubblicato diagnosi (09/11) e regali di Natale (13/11). Il prossimo run è giovedì 19/11.
   - Titolo: *Chatbot WhatsApp per ristoranti, studi e negozi a Napoli e Caserta: quali conversazioni automatizzare e quali no*.
   - Decisione mia: angolo "il chatbot è la prima voce del tuo brand", **nessuna cifra in euro** (vedi punto 2). Keyword principale `chatbot WhatsApp Napoli` con varianti ristoranti / studi medici Caserta. Volumi non verificati.
2. **Entro martedì 17/11: leggi il listino Meta WhatsApp per l'Italia.** Le fonti ora si contraddicono: Money.it dice che i rincari del 01/10 valgono solo per l'India, SendSeven (vendor, aggiornato al 14/11) dice che oltre 1.000 risposte di servizio al mese si pagano. Inoltre il **Meta Business Agent** (a pagamento, ~4-5 centesimi a messaggio secondo SendSeven) è un concorrente diretto del tuo `/chatbot-ai`.
   - Se la newsletter o il carosello del 09/11 dicevano "da ottobre ogni risposta può costarti", pubblica una correzione.
   - Dopo il listino, aggiorna i preventivi aperti.
3. **Entro mercoledì 18/11: due contenuti social, già pronti nei report.**
   - Reel Black Friday (27/11, mancano 11 giorni), dall'articolo del 30/10.
   - Carosello "Voucher Cloud: chi ci guadagna davvero": per avere 20.000 € servono 40.000 € di spesa, l'AI non è tra le voci ammesse, sportello in ordine di arrivo fino al 20/01/2027 ([Money.it](https://www.money.it/voucher-cloud-cybersecurity-2026-domande-aperte-come-funziona)). Prima controlla su [Invitalia](https://www.invitalia.it/incentivi-e-strumenti/voucher-cloud-e-cybersecurity) che sia ancora aperto. Di' che non sei fornitore.
   - **Da non fare:** contenuti sul voucher AI come misura esistente. Non è nel DDL di bilancio, è solo un annuncio.

## Stato del sito

✅ **Nessun errore nell'ultimo controllo, ma è di 7 giorni fa.** Fonte: `reports/stato-sito.md`, generato il 09/11 alle 14:25 (ora di Roma).
- Pagine chiave tutte 200, la più lenta `/blog/` con 345 ms. Sitemap: 31 URL, 0 in errore.
- ⏳ Il controllo di oggi non risulta ancora alle 07:16. La settimana scorsa è arrivato alle 14:25 (in ritardo rispetto alle 05:50): se stasera manca, lancialo a mano da [Actions](https://github.com/antonioandreozzi/antonio-andreozzi-digital/actions).
- L'articolo sui regali di Natale (13/11) è uscito dopo il controllo: non ancora verificato.
- Il curl da questo ambiente dà 000 (rete bloccata): normale, non è un problema del sito.

## Dal Content Strategy Agent

Newsletter entro giovedì 19/11: "Tre cose da sapere prima di attivare un chatbot (e una correzione)". La parte sui costi WhatsApp va scritta solo dopo il listino Meta.

## Dal Competitor Research Agent

Opportunità: **"Businesses in ChatGPT"** (beta OpenAI del 10/11, la "scheda Google" dentro ChatGPT) rende concreto il GEO per attività locali, e su Caserta nessun competitor ne parla. Prima verifica se è disponibile in Italia. Minaccia: il chatbot WhatsApp "fatto da Meta" (vedi punto 2).

## Dati che non riesco a vedere

Incollali in `reports/dati-settimana.md` (non esiste ancora) o rispondi alla run:
- prenotazioni Diagnosi / Progetto / Sistema della settimana
- traffico GA4 (sessioni, top 5 pagine) e Search Console (click, query principali)
- iscritti alla newsletter (totale e nuovi)

## Una domanda per Antonio

L'articolo chatbot salta da quattro settimane: preferisci che il blog agent scelga sempre il topic indicato nel briefing CEO, invece di decidere da `topics.json`?
