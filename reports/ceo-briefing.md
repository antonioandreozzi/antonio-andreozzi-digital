# Briefing settimanale — 2026-11-02

## Le 3 cose più importanti questa settimana

1. **Oggi: rigenera la chiave API di Brevo.** Ho controllato il repo: il rischio è reale, non teorico. I dettagli sono nella notifica di questa run e non qui, perché il repo è pubblico. Dopo, non rimetterla in `NEXT_PUBLIC_`: finirebbe di nuovo nel browser. Il sito è statico, quindi serve una funzione Cloudflare o il form ospitato da Brevo. Finché non è fatto, il form newsletter su `/risorse` può non funzionare.
2. **Entro mercoledì 4/11: carosello e Reel sul Voucher Cloud & Cybersecurity** (domande dal 10/11 ore 12:00, in ordine di arrivo). Decisione: solo social e newsletter (entro giovedì 5/11), niente guida sul blog. Prima controlla due cose, che gli agenti non hanno potuto leggere: la pagina MIMIT/Invitalia per l'importo massimo (quasi tutte le fonti dicono 20.000 €, una 10.000 €) e l'elenco fornitori. Non scrivere "fatti pagare il chatbot col voucher". Sul voucher AI niente cifre: il riepilogo del DDL di bilancio non lo cita.
3. **Oggi: metti l'articolo chatbot in testa a `topics.json`.** Altrimenti il blog agent scrive "trovare la tua voce" (id 13): la coda non ha ancora nessun topic su chatbot o short video. Titolo: *Chatbot per PMI a Napoli e Caserta: cosa deve fare per portarti clienti (e perché deve dire subito che è un'AI)*. Leggi l'art. 50 su EUR-Lex o senti un legale prima di pubblicare.

**Correggo il briefing del 29/10:**
- "Deve dirlo per legge": le fonti non concordano su chi abbia l'obbligo, se il fornitore o la PMI che usa il chatbot.
- D.Lgs. 179/2026: riguarda lavoratori e candidati, non i chatbot per i clienti. Toglilo dall'articolo.
- "Lunedì 3/11": era martedì.

## Stato del sito

✅ **Nessun errore nell'ultimo controllo, ma è di 4 giorni fa.** Fonte: `reports/stato-sito.md`, generato il 29/10 alle 00:18 (ora di Roma).
- Pagine chiave tutte 200, la più lenta `/` con 330 ms. Sitemap: 27 URL, 0 in errore.
- ⚠️ **Il controllo di stamattina non è partito.** Alle 07:23 l'Action risulta lanciata solo due volte, entrambe a mano il 29/10: nessuna esecuzione programmata finora. Lanciala a mano e controlla lunedì prossimo: [Actions](https://github.com/antonioandreozzi/antonio-andreozzi-digital/actions).
- L'articolo Black Friday (30/10) è uscito dopo il controllo: non è ancora verificato.
- Il curl da questo ambiente dà 000 (rete bloccata): normale, non è un problema del sito.

## Dal Content Strategy Agent

Chatbot e short video: ancora zero articoli su 16, e dopo il chatbot tocca allo short video. Il suo report legge ancora il competitor della settimana prima: anticipa il Competitor Agent.

## Dal Competitor Research Agent

Minaccia: **Libellula Web** ora compare in SERP anche su Napoli e Campania, quindi "AI + Napoli" non è più uno spazio libero (visto dai titoli, pagine non aperte). Opportunità: personal brand, short video e WhatsApp per PMI a Napoli e Caserta, dove non ha trovato presidio locale (volumi non verificati).

## Dati che non riesco a vedere

Incollali in `reports/dati-settimana.md` (non esiste ancora) o rispondi alla run:
- prenotazioni Diagnosi / Progetto / Sistema della settimana
- traffico GA4 (sessioni, top 5 pagine) e Search Console (click, query principali)
- iscritti alla newsletter (totale e nuovi)

## Una domanda per Antonio

Sei nell'elenco dei fornitori abilitati al voucher? Le iscrizioni sono chiuse dal 27/05: se non ci sei, il voucher non può pagare i tuoi servizi e i contenuti devono dire che sono solo informativi.
