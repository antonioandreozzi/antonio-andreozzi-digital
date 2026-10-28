# Content Strategy Report — 2026-10-29

> Generato dal Content Strategy Agent (run automatico). Fonti interne lette: `.claude/topics.json`, `app/blog/page.tsx`, struttura di `app/`. **`reports/competitor-research-report.md` non esiste ancora**: l'analisi competitor di questa settimana non è basata su dati verificati (vedi sotto). Nessun dato di traffico, ranking o volume di ricerca è disponibile in questo run: dove servirebbe, è segnalato.

---

## Analisi della settimana

### Cosa ha funzionato nei competitor
**Non verificabile questa settimana.** Il report del Competitor Research Agent non è presente nel repo, e senza accesso ad analytics/social insight dei competitor non posso dire cosa abbia "funzionato" (reach, engagement, ranking). Non invento numeri. Azione consigliata: controllare che lo scheduled task competitor giri e committi `reports/competitor-research-report.md` prima di questo agent.

### Stato del blog (dati interni, verificati)
- **15 articoli pubblicati** (24 ago → 28 ott 2026). Distribuzione per tag: Brand 7, AI 5, Content Strategy 2, Voce 1.
- **Ultimi tre:** "Come progettare un'identità verbale" (28/10, Brand), "Ho smesso di pubblicare ogni giorno" (22/10, Content Strategy), "La storia di come hai iniziato vende…" (20/10, Content Strategy).
- **Buco di cadenza:** tra il 6/10 e il 20/10 nessuna pubblicazione, a fronte di un piano "Lunedì e Giovedì".

### Gap da sfruttare
1. **Chatbot AI e short video: zero articoli.** Il sito ha le pagine servizio `/chatbot-ai` e `/short-video`, ma nessun contenuto blog le alimenta con link interni o intercetta ricerche informative a monte. Sono due dei quattro servizi dichiarati: è il gap più grande e il più vicino al fatturato.
2. **`topics.json` non riflette la realtà** (da sistemare a cura del blog agent, questo agent non tocca il file):
   - id 15 "Storytelling per il business" risulta `pending`, ma l'articolo storytelling è uscito il 20/10 → rischio duplicato.
   - Gli articoli del 22/10 e del 28/10 non hanno un topic corrispondente.
   - Nessun topic su chatbot o short video in tutta la coda (32 topic).
3. **Filtri del blog incoerenti:** la barra filtri mostra "Comunicazione" (0 articoli) e non mostra "Voce" (1 articolo). Segnalazione per chi gestisce il codice.
4. **Posizionamento locale + regole nuove:** quasi nessun consulente locale parla in modo chiaro degli obblighi di trasparenza AI per i chatbot (impressione qualitativa, non misurata: va confermata con il report competitor).

### Trend emergenti (verificati su fonti pubbliche)
- **AI Act, art. 50 in vigore dal 2 agosto 2026.** Chi usa un chatbot deve far sapere all'utente che sta parlando con un'AI; immagini/video generati che sembrano reali vanno etichettati da chi li pubblica. Il Digital Omnibus ha rinviato solo gli obblighi sui sistemi ad alto rischio (dic. 2027 / ago. 2028), non la trasparenza. Fonte: [Madistudio, 5/10/2026](https://madistudio.it/blog/ai-act-rinvio/). ⚠️ Prima di pubblicare, confermare su una seconda fonte (es. testo ufficiale EUR-Lex o un commento di studio legale) — oggi ho verificato una sola fonte in dettaglio.
- **Meta Business Agent su WhatsApp Business.** Agente AI per rispondere ai clienti, suggerire prodotti dal catalogo, gestire appuntamenti e raccogliere lead. Presentato al WhatsApp Business Summit di Milano (luglio 2026); disponibilità in Italia descritta come progressiva. Fonti: [Engage.it, 7/7/2026](https://www.engage.it/eventi/whatsapp-business-summit-italia-meta-accelera-sul-business-messaging-con-meta-business-agent.aspx), [Puntoventi, 22/6/2026](https://www.puntoventi.it/meta-business-agent-un-agente-ai-per-le-aziende-ma-non-ancora-per-tutte/). Costi non dichiarati nelle fonti lette. Stato attuale del rollout in Italia (fine ottobre) **non verificato**.
- **Instagram sempre più video-first.** A febbraio 2026 era in test un'app che si apre direttamente sui Reel, con feed "Your Feeds" fatti solo di Reel; nessun rollout generale confermato in quella fonte e Mosseri sostiene che le foto restano centrali. Fonte: [Punto Informatico, 24/2/2026](https://www.punto-informatico.it/instagram-si-apre-direttamente-sui-reel-addio-foto/). Uso consigliato: come contesto ("la direzione è il video"), non come notizia.

---

## Piano blog

**Prossimo articolo consigliato (fuori coda `topics.json`, da aggiungere):**

- **Keyword principale:** `chatbot per PMI` (+ variante locale `chatbot aziendale Napoli Caserta`)
- **Keyword secondarie:** chatbot WhatsApp Business, assistente AI per clienti, chatbot AI Act obblighi, chatbot sito web PMI Campania
- ⚠️ Volumi di ricerca non verificati in questo run (nessun accesso a tool SEO). Verificare con Google Keyword Planner / Search Console prima di fissare la keyword.
- **Titolo:** *Chatbot per PMI: cosa deve fare per portarti clienti (e cosa deve dire per legge dal 2026)*
- **Angolo:** né hype né paura. Il chatbot è un pezzo della voce del brand, non un software da installare. Da agosto 2026 deve dichiarare di essere un'AI: è anche un'occasione per sembrare più onesti della concorrenza. Collegamento naturale con gli articoli già usciti su tone of voice e identità verbale.
- **Struttura H2:**
  1. Il chatbot è il primo dipendente che parla con i tuoi clienti
  2. Cosa può fare davvero un chatbot per una PMI (e cosa no)
  3. Sito, WhatsApp o Instagram: dove metterlo
  4. Cosa chiede l'AI Act dal 2 agosto 2026 (in parole semplici, con fonte)
  5. Il chatbot deve parlare come il tuo brand: tono, parole-firma, limiti
  6. Gli errori che fanno scappare i clienti
  7. Da dove partire: 5 domande prima di attivarlo
  - CTA → `/chatbot-ai`; link interni a tone of voice, identità verbale, automazioni AI.
- **Nota di rigore:** niente casi di clienti o percentuali di conversione se non documentati. Gli esempi vanno presentati come scenari ipotetici.

**Alternativa se si vuole restare sulla coda `topics.json`:** id 13 "Come trovare la tua voce come imprenditore o freelancer" (prossimo `pending`, coerente con l'articolo del 28/10). **Saltare id 15** (storytelling già pubblicato).

**Da aggiungere a `topics.json` nelle prossime settimane (proposta):** "Short video per PMI: come iniziare senza diventare un influencer", "Reel per attività locali a Napoli e Caserta: 10 formati che non richiedono di metterci la faccia", "WhatsApp Business con AI: guida per negozi e studi professionali".

---

## Piano social

### 5 idee Reel/TikTok (con hook)
1. **"Il tuo chatbot deve dirlo per legge. Lo sapevi?"** — 30-40 sec, a camera: cosa prevede l'art. 50 per chi usa un chatbot, mostrato con un esempio di messaggio d'apertura scritto bene vs scritto male. (Citare la fonte in didascalia.)
2. **"Questa risposta automatica ti sta facendo perdere clienti."** — screen recording di un messaggio automatico generico, poi riscritto con la voce del brand. Ponte verso `/chatbot-ai`.
3. **"Non devi metterci la faccia per fare Reel."** — 3 formati senza volto per attività locali (mani al lavoro, prima/dopo, voce fuori campo). Ponte verso `/short-video`.
4. **"Ho smesso di pubblicare ogni giorno."** — riciclo video dell'articolo del 22/10: il filtro prima di pubblicare, in 3 domande.
5. **"Il logo dura dieci anni. Le parole che usi, per sempre."** — riciclo dell'articolo del 28/10: 3 "parole-veleno" che le PMI usano nei testi e come sostituirle.

### 3 caroselli
1. **"AI Act e chatbot: cosa cambia per la tua attività"** — 6-7 slide, linguaggio semplice, fonte nell'ultima slide, disclaimer "non è consulenza legale".
2. **"Dizionario di brand in 5 passi"** — dall'articolo sull'identità verbale.
3. **"Sito, WhatsApp o Instagram? Dove mettere il chatbot"** — pro/contro per tipo di attività (ristorante, studio professionale, negozio).

### 2 post testo (LinkedIn / Facebook)
1. **Riflessione:** "Un chatbot che dice 'sono un assistente AI' all'inizio della chat non perde credibilità. La guadagna. Da agosto è obbligatorio, ma per i brand seri era già una scelta." + domanda aperta ai lettori.
2. **Dietro le quinte:** perché sul blog sono passato da "pubblicare tanto" a "pubblicare con intenzione" — cosa ho cambiato nel processo (solo fatti reali del processo di Antonio, nessun numero se non misurato).

---

## Piano email

**Newsletter: "Il primo dipendente che parla con i tuoi clienti (e non l'hai mai formato)"**
- Apertura: il chatbot / le risposte automatiche come voce del brand.
- Corpo: le 3 cose da controllare oggi sul proprio WhatsApp Business o sito (messaggio di benvenuto, dichiarazione AI se presente un chatbot, passaggio a un umano).
- Link: nuovo articolo chatbot (quando esce) + articolo identità verbale.
- CTA: rispondere all'email con lo screenshot del proprio messaggio automatico per un feedback, oppure prenotare una diagnosi (`/diagnosi`).
- Nota: non verificato se esiste già una lista email/tool newsletter collegato; verificare prima dell'invio.

---

## Opportunità urgenti (entro 48h)

1. **Reel #1 + Carosello #1 su AI Act e chatbot** — tema regolatorio già in vigore, utile ai titolari locali che hanno attivato risposte automatiche o agenti AI. Requisito: confermare l'informazione su una seconda fonte prima di pubblicare.
2. **Riciclo social dell'articolo del 28/10 (identità verbale)** — è il contenuto più recente e non risultano ancora derivati social nel repo. Reel #5 + Carosello #2.
3. **Pulizia rapida coda blog** (per chi gestisce il blog agent): segnare id 15 come fatto, aggiungere i topic chatbot/short video, così il prossimo run automatico di lunedì non rischia un duplicato e inizia a coprire i servizi scoperti.

---

*Limiti di questo report: nessun dato di performance (analytics, social insight, Search Console) disponibile; nessun report competitor; volumi keyword non verificati. Tutti i fatti esterni sono linkati alla fonte letta.*
