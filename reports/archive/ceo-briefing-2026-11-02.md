# Briefing settimanale — 2026-11-02

*Aggiornato il 02/11 dopo le risposte di Antonio: non è nell'elenco fornitori del voucher e non si genera nessuna chiave Brevo.*

## Le 3 cose più importanti questa settimana

1. **Entro mercoledì 4/11: carosello e Reel sul Voucher Cloud & Cybersecurity, solo informativi** (domande dal 10/11 ore 12:00, in ordine di arrivo). Antonio non è nell'elenco fornitori, quindi il voucher non può pagare i suoi servizi: i contenuti devono dirlo chiaramente e non proporre offerte collegate. Solo social e newsletter (entro giovedì 5/11), niente guida sul blog. Prima controlla l'importo massimo sulla pagina MIMIT/Invitalia, che gli agenti non hanno potuto leggere (quasi tutte le fonti dicono 20.000 €, una 10.000 €). Sul voucher AI niente cifre: il riepilogo del DDL di bilancio non lo cita.
2. **Prima di giovedì: metti l'articolo chatbot in testa a `topics.json`.** Oggi il blog agent ha pubblicato un articolo sull'ecommerce, e la coda non ha ancora nessun topic su chatbot o short video. Titolo: *Chatbot per PMI a Napoli e Caserta: cosa deve fare per portarti clienti (e perché deve dire subito che è un'AI)*. Leggi l'art. 50 su EUR-Lex o senti un legale prima di pubblicare.
3. **Oggi: lancia a mano l'Action "Stato del sito".** Stamattina non è partita e gli ultimi due articoli non sono ancora stati controllati: [Actions](https://github.com/antonioandreozzi/antonio-andreozzi-digital/actions). Lunedì prossimo verifica che parta da sola.

**Correggo il briefing del 29/10:**
- "Deve dirlo per legge": le fonti non concordano su chi abbia l'obbligo, se il fornitore o la PMI che usa il chatbot.
- D.Lgs. 179/2026: riguarda lavoratori e candidati, non i chatbot per i clienti. Toglilo dall'articolo.
- "Lunedì 3/11": era martedì.

## Stato del sito

✅ **Nessun errore nell'ultimo controllo, ma è di 4 giorni fa.** Fonte: `reports/stato-sito.md`, generato il 29/10 alle 00:18 (ora di Roma).
- Pagine chiave tutte 200, la più lenta `/` con 330 ms. Sitemap: 27 URL, 0 in errore.
- ⚠️ **Il controllo di stamattina non è partito.** Alle 07:23 l'Action risulta lanciata solo due volte, entrambe a mano il 29/10: nessuna esecuzione programmata finora.
- Gli articoli Black Friday (30/10) ed ecommerce (02/11) sono usciti dopo il controllo: non sono ancora verificati.
- Il curl da questo ambiente dà 000 (rete bloccata): normale, non è un problema del sito.

## Dal Content Strategy Agent

Chatbot e short video: ancora zero articoli su 17, e dopo il chatbot tocca allo short video. Il suo report legge ancora il competitor della settimana prima: anticipa il Competitor Agent.

## Dal Competitor Research Agent

Minaccia: **Libellula Web** ora compare in SERP anche su Napoli e Campania, quindi "AI + Napoli" non è più uno spazio libero (visto dai titoli, pagine non aperte). Opportunità: personal brand, short video e WhatsApp per PMI a Napoli e Caserta, dove non ha trovato presidio locale (volumi non verificati).

## Dati che non riesco a vedere

Incollali in `reports/dati-settimana.md` (non esiste ancora) o rispondi alla run:
- prenotazioni Diagnosi / Progetto / Sistema della settimana
- traffico GA4 (sessioni, top 5 pagine) e Search Console (click, query principali)
- iscritti alla newsletter (totale e nuovi)

## Una domanda per Antonio

Usi ancora Brevo per la newsletter? Il form su `/risorse` nel codice invia ancora gli iscritti a Brevo.
