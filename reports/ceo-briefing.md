# Briefing settimanale — 2026-10-29

## Le 3 cose più importanti questa settimana

1. **Voucher Cloud & Cybersecurity: le domande aprono il 10/11 alle 12:00.** Contributo fino al 50%, massimo 20.000 €. Pubblica entro lunedì 3/11 un carosello e un post "Come prepararsi alla domanda", con CTA a `/diagnosi`. Sul voucher AI della manovra 2027 non dare cifre: per ora è solo annunciato.
2. **Scrivi il primo articolo sui chatbot.** Oggi chatbot e short video hanno zero articoli, eppure sono servizi in vendita. Titolo proposto: *Chatbot per PMI: cosa deve fare per portarti clienti (e cosa deve dire per legge dal 2026)*. Aggancialo all'AI Act art. 50 e al D.Lgs. 179/2026, chiamalo anche "assistente AI WhatsApp" (è il linguaggio che i competitor stanno adottando) e metti il link a `/chatbot-ai`. Prima di pubblicare, conferma gli obblighi su una seconda fonte ufficiale.
3. **Sistema `.claude/topics.json` prima del prossimo run del blog agent.** L'id 15 (storytelling) risulta ancora `pending` ma è già uscito il 20/10: c'è il rischio di un articolo duplicato. Segnalo come fatto e aggiungi i topic su chatbot e short video.

## Stato del sito

**Non verificato questa settimana.** `reports/stato-sito.md` non esiste: il PC non ha mai generato il controllo. Anche il controllo via curl da qui è fallito: il proxy di questa run blocca `antonioandreozzidigital.com`, quindi tutte e 6 le URL hanno dato errore di connessione senza codice HTTP. Questo non vuol dire che il sito sia giù.
Dal codice risulta che le route `/blog`, `/risorse`, `/diagnosi` e `/lavora-con-me` esistono in `app/`, e che `sitemap.xml` è statico in `public/`.
Per risolvere hai due strade: aggiungere il dominio ai domini consentiti in Settings > Capabilities su claude.ai, oppure far scrivere `reports/stato-sito.md` dal tuo PC.

## Dal Content Strategy Agent

Pubblicazione ferma dal 6/10 al 20/10 contro un piano di 2 a settimana. Priorità: articolo chatbot, poi il riciclo social dell'articolo del 28/10 sull'identità verbale (Reel + carosello). Nota: questo report è stato generato *prima* di quello competitor, quindi non l'ha letto. Va invertito l'ordine dei task.

## Dal Competitor Research Agent

Opportunità: nessun competitor locale presidia **Napoli + personal brand + short video**, né "chatbot WhatsApp PMI Napoli". Minaccia: **Libellula Web** (Caserta) ha già una strategia GEO e settoriale locale avanzata.

## Dati che non riesco a vedere

Incollali qui o in un file `reports/dati-settimana.md`:
- prenotazioni Diagnosi / Progetto / Sistema della settimana
- traffico GA4 (sessioni, top 5 pagine) e Search Console (click, query principali)
- iscritti alla newsletter (totale e nuovi)

Nota: questa è la prima settimana con report archiviati, quindi non c'è ancora uno storico con cui confrontare.

## Una domanda per Antonio

Il voucher Cloud & Cybersecurity copre servizi che vendi tu (sito, chatbot, automazioni), oppure lo usiamo solo come contenuto per attirare contatti?
