# Content Strategy Report — 2026-11-23

> Generato dal Content Strategy Agent (run automatico). Fonti interne lette: `reports/competitor-research-report.md` (del 16/11), `.claude/topics.json`, `app/blog/page.tsx`, `.claude/blog-agent-log.json`, `reports/creator-articles-report.md`, `reports/mappa-contenuti-big.md`, `reports/bozze/README.md`, `.claude/storie-personali.json`, `reports/archive/content-strategy-2026-11-16.md`. Fonti esterne linkate accanto a ogni dato.
>
> **Limiti di questo run:**
> - **Il report competitor è del 16/11**: non esiste ancora una versione di questa settimana. I dati che ne riprendo hanno 7 giorni, salvo dove li ho riverificati.
> - **Nessun dato di traffico, ranking, volumi di ricerca o insight social di Antonio.** Non so come siano andati i contenuti della settimana scorsa.
> - **Le liste vidIQ di Bottoni e Vignali e gli archivi Substack non si sono aperti** in questo run (accesso bloccato o pagine che caricano i post con JavaScript). Per questi due creator la settimana è "non verificata", non "vuota".
> - Instagram, TikTok, LinkedIn e YouTube non si aprono da qui: le views vengono da vidIQ (snapshot del 21–22/11) e sono totali a quella data.
> - Il motore di ricerca non è geolocalizzato in Italia: i gap SEO sono indicativi.

---

## Analisi della settimana

### In sintesi
1. **Correzione su WhatsApp, questa volta da fonte ufficiale.** La pagina Meta per sviluppatori dice: "Effective October 1, 2026 - Meta will charge on a per-message basis for all service messages", con tariffa uguale a quella utility di ciascun mercato ([Meta, pricing non-template](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages), aperta). **Il "solo India" di Money.it citato nel report del 16/11 non regge.** La soglia di 1.000 messaggi gratuiti al mese compare solo su siti terzi (messagemind.ai, formbeep.com), non sulla pagina Meta letta. Tariffe Italia da fonte terza (formbeep, rate card ottobre 2026): marketing 0,0795 $, utility/servizio 0,0300 $ a messaggio, **non controllate sul rate card ufficiale**. L'articolo chatbot del 16/11 parla di "soglia mensile gratuita": va ricontrollato (vedi Opportunità urgenti).
2. **Voucher Cloud: circa 90 milioni richiesti su 150 in poco più di 24 ore** (dichiarazione MIMIT ripresa da [CorCom, 12/11](https://www.corrierecomunicazioni.it/cyber-security/cybersecurity-e-cloud-gia-a-quota-90-milioni-le-richieste-per-i-voucher-del-mimit-per-le-pmi/)). Nessun aggiornamento trovato dopo il 12/11: non sappiamo se i fondi siano finiti. **Il Reel "il voucher è aperto" del piano scorso non va più pubblicato così.**
3. **Il dato I-Com ora è verificato:** misura le **imprese con almeno 10 addetti** che usano almeno una tecnologia AI. Italia dall'8,2% (2024) al 16,4% (2025); nel 2025 Nord-Ovest 19,3%, Mezzogiorno 12,2%; divario da 2,7 a 7,1 punti ([Lineaedp, 03/11](https://www.lineaedp.it/featured/intelligenza-artificiale-nelle-imprese-litalia-accelera-ma-il-divario-digitale-cresce/)). Le stesse cifre nazionali sono in [Istat, Imprese e ICT 2025](https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/): che I-Com usi Istat è una deduzione, non scritta nell'articolo. **Non riguarda le microimprese sotto i 10 addetti.**
4. **Black Friday venerdì 27/11, tra 4 giorni.** Dato fresco: Confcommercio/Format Research, spesa media prevista 262 € (268 nel 2025), il 77,4% comprerà almeno in parte nei negozi fisici, il 28,6% vuole sostenere i negozi di vicinato ([ANSA, 21/11](https://www.ansa.it/sito/notizie/economia/2026/11/21/black-friday-oltre-il-60-degli-italiani-pronto-agli-acquisti.-spesa-media_08d772bb-f4a5-4ee9-acba-b9dd8fab9c72.html)). Campione e date di rilevazione non indicati.
5. **Il blog ha recuperato:** chatbot WhatsApp (16/11), copywriting (16/11), piano editoriale mensile (20/11) sono online. Short video resta a zero articoli.
6. **Le storie personali di Antonio sono zero.** `storie-personali.json` ha `"storie": []`. Le tre bozze del 16/11 sono ferme sui segnaposto. È il collo di bottiglia di tutta la parte "umana" del piano.

### Cosa ha funzionato nei competitor
**Performance non verificabile:** nessuna fonte italiana pubblica views o condivisioni. Questi sono schemi, non una classifica.

- **Soldi + scadenza + "cosa rientra e cosa no"** resta il formato più ripreso (guide al voucher Cloud: Money.it, Finera, FDF, Confcommercio). Ora c'è un angolo nuovo: la velocità dello sportello (90 M€ in un giorno).
- **Dato territoriale con contrasto netto** (I-Com Nord/Sud): ripreso da testate tech, nessun operatore campano trovato che lo commenti per le PMI locali.
- **Vendor che educano** (Fonio, SendSeven) sui costi WhatsApp: fonti utili ma interessate e, come visto, a volte in contraddizione con Meta.
- **Libellula Web** resta il competitor locale più forte su AI, chatbot e GEO (non riletto questa settimana).

### Gap da sfruttare
1. **Short video per aziende a Caserta: ancora zero articoli** su 23 pubblicati, con la pagina `/short-video` online. È il prossimo articolo.
2. **"Quanto costa davvero rispondere su WhatsApp" con la fonte Meta corretta.** Le guide italiane trovate si contraddicono: chi lo spiega bene per primo guadagna fiducia.
3. **Il divario AI Nord/Sud letto da un campano**, con il dettaglio onesto: riguarda le imprese da 10 addetti in su, le più piccole non sono nemmeno misurate.
4. **Personal brand per imprenditori a Napoli/Caserta** (dal report competitor del 16/11): nessun operatore locale trovato, con riserva su Davide Caiazzo (non verificato).
5. **Black Friday "di vicinato"**: il 28,6% che vuole sostenere i negozi locali è l'aggancio per chi non fa sconti.
6. **Da non inseguire:** `GEO Napoli`, `formazione AI piccole imprese Napoli`, `chatbot WhatsApp per PMI Napoli` generico (presidiati al 09/11).

### Trend emergenti

| Tema | Cosa risulta | Stato della verifica |
|---|---|---|
| **Servizio WhatsApp a pagamento** | Da ottobre ogni messaggio di servizio si paga a tariffa utility; Meta Business Agent a 2 $ per milione di token dal 01/08. | Pagina Meta aperta. Soglia gratuita e tariffe Italia solo da fonti terze. |
| **"Cosa l'AI non deve fare al posto tuo"** | Gaito, "AI: il coraggio di non ottimizzare ogni cosa" (probabile 20/11); Skande sulla tecnica Feynman (17/11); Abdaal "This One AI Prompt Will Organise Your Entire Life" (20/11). | Pagine o elenchi aperti. Il tema resta il più caldo tra i big. |
| **Voucher AI** | DDL in Commissione Bilancio alla Camera, circa 6.600 emendamenti, inammissibilità attese il 23/11, nessun voto ([Fiscomania, 18/11](https://fiscomania.com/manovra-pioggia-di-emendamenti/)). | Nessun emendamento sul voucher AI trovato. **Non presentarlo come misura esistente.** |
| **Schede aziendali negli assistenti** | Businesses in ChatGPT, beta dal 10/11; gli "agenti" aziendali sono solo USA ([OpenAI](https://openai.com/it-IT/index/introducing-businesses-chatgpt/)). | L'Italia non è nominata: disponibilità non confermata. |
| **Longevity economy** | Bandiera, "I vecchi non sono una catastrofe ma un ENORME mercato" (16/11). | Pagina aperta. Angolo utile per negozi e studi locali con clientela over 50. |

---

## Cosa pubblicano i big questa settimana

> Finestra: 16–23/11/2026. [A] = pagina o elenco aperto; [S] = solo titolo in ricerca. Views solo se presenti nella fonte (vidIQ, snapshot 21–22/11). Le date "~" sono ricavate da elenchi con date relative.
>
> **Non aperti:** archivi Substack di Vignali, Bottoni e 20/80; vidIQ di Bottoni, Vignali, Martell e Diary of a CEO; seths.blog; sahilbloom.com; pagina autore di Ritson e articoli di Handley senza date; socialblade, hypeauditor, playboard, heepsy, podtail; Instagram, TikTok, LinkedIn non tentati.

### Italia

| Autore | Formato | Titolo / prima riga | Data | Tesi e struttura | Cosa prende Antonio |
|---|---|---|---|---|---|
| **Gianluca Diegoli** | Newsletter [mini]marketing | ["L'avvento del calendario dell'avvento"](https://lettera.minimarketing.it/posts/2bc0fa96-7ca7-4933-af5e-a1cce3ded252) [A] | 20/11 | Hook: video virale di clienti arrabbiati per un calendario dell'avvento beauty. Storia: i calendari di cioccolato dell'infanzia, poi birra, whisky, caffè. Lezione: nostalgia + comodità + edizione limitata fanno fare marketing gratis ai clienti. CTA: iscrizione, inoltro. | Il formato "oggetto di stagione → meccanismo di marketing" per dicembre: cosa insegna il calendario dell'avvento a un negozio di Caserta. |
| **Rudy Bandiera** | Substack | ["I vecchi non sono una catastrofe ma un ENORME mercato"](https://rudybandiera.substack.com/p/i-vecchi-non-sono-una-catastrofe) [A] | 16/11 | Hook: copertina 2004 "Invecchiamento, la prossima catastrofe" e Coughlin (MIT AgeLab). Corpo: spesa degli over 50, Giappone, perché i marketer giovani li ignorano. Chiusura: smettere di raccontarli fragili. | Il ribaltamento "problema → mercato". Per le PMI locali: i clienti over 50 come pubblico da rispettare nei contenuti. |
| **Riccardo Scandellari (Skande)** | Blog | ["Se non sai spiegarlo, non l'hai capito"](https://www.skande.com/tecnica-feynman-202611.html) [A]. Prima riga: "Capita a volte di illudermi di aver avuto un'idea geniale, per poi scoprire che qualcuno, decenni prima di me,…" | 17/11 | Confessione in apertura, quattro passi della tecnica Feynman, esempi (inflazione, reputazione), tesi: la semplicità viene dalla profondità. CTA: il suo libro e un commento. | Il test "spiegalo a tua nonna" applicato al messaggio di brand: un carosello o un reel. |
| **Raffaele Gaito** | Blog | ["AI: il coraggio di non ottimizzare ogni cosa"](https://www.raffaelegaito.com/ai-il-coraggio-di-non-ottimizzare-ogni-cosa/) [A] | Data non visibile; aggiornato 20/11 secondo i metadati | Hook: Uncanny Valley di Mori. Storia: il 20% di tempo libero di Google e la sua fine. Lezione: esplorazione contro ottimizzazione, l'AI spinge a saltare l'esplorazione. CTA: tempo settimanale per giocare con l'AI, poi libro e accademia. | Un'idea con un nome ("esplorazione contro ottimizzazione") per spiegare alle PMI perché non automatizzare tutto. Si lega alla bozza 3. |
| **Marco Montemagno** | Video YouTube | "Nel 2019 mi sono alzato con un'idea che non mi faceva dormire." ([vidIQ](https://vidiq.com/youtube-stats/channel/@mmontemagno/)) [A] | 15/11 (un giorno prima della finestra) | Storia d'origine di un progetto partendo da una scena (la notte, l'idea). Descrizione non aperta. 1,18K views allo snapshot. | La formula "anno + scena + idea": "Nel [anno] ho [scena]…". |
| **Marco Montemagno** | Podcast | "Parliamo Dello Scandalo Di Nvidia" ([Apple](https://podcasts.apple.com/us/podcast/marco-montemagno-il-podcast/id1214715973)) [A] | Probabile 13–15/11, fuori finestra | Commento a una notizia in 11 minuti. | Nulla di specifico. |
| **Luca Mazzucchelli** | Podcast | "TEORIA DEL TOAST BRUCIATO"; "Come farti ascoltare da tuo figlio: la tecnologia é tua alleata"; "Come inizia il degrado: l'esperimento del vetro rotto" ([Apple](https://podcasts.apple.com/mt/podcast/psicologia-con-luca-mazzucchelli/id906120169)) [A] | Date relative, probabilmente in finestra ma non verificabile | Il primo parte da un episodio quotidiano (perde gli occhiali) e arriva a una teoria con un nome. | "Piccolo incidente → teoria con un nome": molto adatto ai reel di Antonio. |
| **Matteo Flora** (nome aggiunto questa settimana) | Post Telegram e podcast "Ciao, Internet!" | "Il danno più grosso, quasi sempre, non lo fa l'errore. Lo fanno le scuse." e post sul libro *SCUSA!* ([t.me/s/matteoflora](https://t.me/s/matteoflora)) [A] | Date dedotte dagli eventi citati (18–21/11), non mostrate | Reputazione: le crisi spesso sono autoinflitte, il modo di scusarsi conta più dell'errore. | Un tema che le PMI vivono: la recensione negativa e la risposta. Post "come rispondere a una recensione da una stella". |
| **Marcello Ascani** | Evento | Chiusura di NEXUS a Fiuggi, intervista a Marco Trombetti ([Latinapress, 13/11](https://www.latinapress.it/lazio/da-youtube-a-unazienda-da-milioni-marcello-ascani-chiude-nexus-a-fiuggi/)) [A] | 20/11 | Nessun contenuto suo trovato in finestra. | — |
| **Vignali, Bottoni, 20/80** | — | **Non verificato**: archivi e liste vidIQ non aperti. Ultimo podcast Vignali visto: "Personal Branding: nel 2027 cambia tutto. Parliamone." (09/09). | — | — | Ricontrollare la prossima settimana. |
| **Cosentino, Camisani Calzolari** | — | Nulla trovato in finestra. | — | — | — |

### USA e Regno Unito

| Autore | Formato | Titolo / prima riga | Data | Views | Tesi e struttura | Cosa prende Antonio |
|---|---|---|---|---|---|---|
| **Alex Hormozi** | Video lungo | "The Most Valuable Sales Training You'll Ever Watch - $100M Sales Team" ([vidIQ](https://vidiq.com/youtube-stats/channel/@alexhormozi/videos/)) [A] | 16/11 | 356.403 | Formazione completa di 3h21; lo Short collegato rimanda al link. | Il contenuto lungo come "regalo" che alimenta gli short. Da evitare: i dollari nel titolo. |
| **Alex Hormozi** | Shorts | "Dear younger me:" (18/11, 10.643) · "Pick a goal that's big enough it's worth suffering for." (19/11, 24.542) · "If you don't do anything, nothing's going to happen." (20/11, 55.238) · "Because I did it that time, I can do it again." (21/11, 12.917) [A] | 18–21/11 | indicate | Frasi-tesi di una riga usate come titolo: la frase è il hook. | Il formato "una frase sola" per reel da 20 secondi. |
| **Alex Hormozi** | Shorts | "Before you expand, find out how your biggest competitor gets deals." (19/11, 22.748) · "How I'd Scale A Wedding Photography Business" (20/11, 7.221) [A] | 19–20/11 | indicate | "Come farei crescere [mestiere preciso]". | **Formula da prendere:** "Come rilancerei una pizzeria / uno studio a Caserta". |
| **Dan Martell** | Blog | ["How a Code Nerd Who Hated Talking to People Learned to Close $750K Deals (No Charisma Required)"](https://www.danmartell.com/how-to-sell-anything-to-anyone/) [A]. Prima riga: "In my 20s I had two failed companies behind me." | 16/11 | — | Fallimenti → audiolibri in auto → metodo in 4 passi con nome (connect, diagnose, prescribe, commit) → risorsa gratuita. | L'arco fallimento → svolta → metodo con nome. Antonio ha già un metodo con nome (la Diagnosi). |
| **Justin Welsh** | Saturday Essay | ["Your hidden big break."](https://justinwelsh.me/essays/hidden-break/) [A]. Prima riga: "Back in 2010, a young cocktail waitress named Jennifer was offered a job in New York City…" | 21/11 | — | Storia di una cameriera assunta per come gestisce un errore; lezione: i momenti ordinari sono il provino. CTA: commento e iscrizione. | **Per le PMI:** "il tuo prossimo cliente ti sta guardando mentre gestisci un errore". |
| **Ali Abdaal** | Video | "This One AI Prompt Will Organise Your Entire Life" (20/11, 83.576) · "If You Have a Job, Start Selling Your Skills ASAP" (17/11, 80.474) ([vidIQ](https://vidiq.com/youtube-stats/channel/@aliabdaal/videos/)) [A] | 17–20/11 | indicate | Struttura non letta. | "Un solo prompt per…" applicato a una PMI: un reel dimostrativo. |
| **Mel Robbins** | Podcast | "If You Get Anxious Around Other People, You Need to Hear This" (~22/11) · "How to Speak Better Than 99% of People…" (~20/11) · "Why Boys and Men Are Quietly Struggling & What They Need To Hear" (~17/11) ([Apple](https://podcasts.apple.com/podcast/id1646101002)) [A] | ~17–22/11 | — | Coaching dal vivo; "se ti senti X". | La paura di parlare in pubblico o in video, molto vicina al titolo 7 della mappa. |
| **Gary Vaynerchuk** | Podcast e video | "The #1 Thing to Remember as You Head Home for Thanksgiving" (~21/11) · "The #1 Thing Holding You Back is a Lack of Accountability" (~19/11) · "Stop dwelling - do the next fucking thing" (19/11, 1,65K) [A] | ~17–21/11 | dove indicate | Hook legato a un momento dell'anno. | "Prima di sederti a tavola a Natale…": il momento stagionale come hook. |
| **Codie Sanchez** | Podcast e video | "This Video Will Find You When You Need It The Most" (~17/11) · "The Hidden GTA VI Cash Cow" (19/11, 49,68K) [A] | ~17–19/11 | dove indicate | Titolo "destino"; opportunità di business da una notizia. | Il titolo "destino" funziona solo con un pubblico che già ti segue: da non usare ora. |
| **Steven Bartlett** | Podcast | Puntate su politica, spionaggio, salute (~17–21/11) [A] | — | — | Nessuna su business o brand. | Nulla questa settimana. |
| **Rory Sutherland** | Rubrica Spectator | ["We are in a 'cost of trying' crisis"](https://spectator.com/article/we-are-in-a-cost-of-trying-crisis/?edition=us) [A, solo elenco] | 18/11 | — | Ribattezza il "caro vita" come "caro tentativo": si cresce se provare costa poco. | Coniare un termine da una frase nota: "il caro tentativo" per le PMI che non provano nulla di nuovo. |
| **Seth Godin** | Blog | "Earning enrollment", "Selling to friends", "Practical empathy", "Have your AI call my AI" (mirror feeder.co) [A] | Probabilmente 12–22/11, date non confermabili | — | Un'idea per post, 150–200 parole. | "Vendere agli amici": tema reale per chi lavora in paese. |
| **Lenny Rachitsky** (nome aggiunto) | Podcast | "First principles: What it takes to be a great product manager in the AI era \| Sherif Mansour" [A] | ~22–23/11 | — | Intervista. | Poco pertinente per le PMI. |
| **Nulla trovato in finestra** | — | Morgan Housel, April Dunford, Jun Yuh, Paul Graham, Jasmin Alić (solo LinkedIn); Ritson e Handley senza date; Sahil Bloom non aperto. | — | — | — | — |

### Evergreen non ancora nei report
1. **Andrea Bottoni, ["Siamo stati educati per perderci."](https://andreabottoni.substack.com/p/sei-stati-educati-per-perderci)** (31/03/2026) [A]. Era nella mappa solo come titolo. Prima riga: "La maggior parte delle persone vive una vita in cui si sente completamente intrappolata." La scuola insegna a evitare l'errore; la visione nasce dall'azione; quattro leve (apprendimento, azione, energia, ambiente). **Per Antonio:** modello per il titolo 4 della mappa (il periodo in cui non sapevi cosa stavi facendo).
2. **Dario Vignali, ["Dov'è finita la tua identità?"](https://dariovignali.substack.com/p/dove-finita-la-tua-identita)** (05/05/2026) [A]. Prima riga: "Internet ti sta facendo quello che il fiume fa al sasso." Le piattaforme ci fanno suonare tutti uguali (desiderio mimetico di Girard). **Per Antonio:** il ponte perfetto tra contenuto umano e voce del brand.
3. **Paul Graham, ["Do Things That Don't Scale"](https://paulgraham.com/ds.html)** [A, da elenco]: per un pezzo "le cose che faccio a mano con ogni cliente".

---

## Contenuti umani della settimana

### 1) Cosa hanno pubblicato i big (16–23/11)

| Titolo esatto | Creator | Data | Views | Famiglia (mappa) | Formula |
|---|---|---|---|---|---|
| Dear younger me: | Hormozi (Short) | 18/11 | 10.643 | 11. Consigli al me più giovane | Lettera a sé stesso (variante della formula 2, età) |
| Pick a goal that's big enough it's worth suffering for. | Hormozi (Short) | 19/11 | 24.542 | 3/8. Motivazione | **Nuova:** frase-tesi come titolo |
| If you don't do anything, nothing's going to happen. | Hormozi (Short) | 20/11 | 55.238 | 3. Motivazione | **Nuova:** frase-tesi come titolo |
| Because I did it that time, I can do it again. | Hormozi (Short) | 21/11 | 12.917 | 8. Autostima | **Nuova:** frase-tesi come titolo |
| How a Code Nerd Who Hated Talking to People Learned to Close $750K Deals (No Charisma Required) | Martell (blog) | 16/11 | — | 6. Fallimenti / 14 | **Nuova:** "eroe improbabile + risultato + (senza X)" |
| This One AI Prompt Will Organise Your Entire Life | Abdaal | 20/11 | 83.576 | 4. Abitudini / 14 | **Nuova:** "un solo strumento sistema tutto" |
| If You Have a Job, Start Selling Your Skills ASAP | Abdaal | 17/11 | 80.474 | 9. Soldi e scelte | **Nuova:** "se sei [identità] + ordine urgente" (vicina alla 4) |
| Your hidden big break. | Welsh (saggio) | 21/11 | — | 1. Lezioni di vita | **Nuova:** titolo breve e criptico con il punto |
| Se non sai spiegarlo, non l'hai capito | Skande | 17/11 | — | 5. Abilità che la scuola non insegna | Frase-tesi |
| TEORIA DEL TOAST BRUCIATO | Mazzucchelli (podcast) | data non verificabile | — | 8. Autostima | **Nuova:** "teoria / esperimento con un nome" |
| Come inizia il degrado: l'esperimento del vetro rotto | Mazzucchelli (podcast) | data non verificabile | — | 4. Abitudini | Come sopra |
| If You Get Anxious Around Other People, You Need to Hear This | Mel Robbins | ~22/11 | — | 3/8 | Formula 4, "se ti senti X" |
| The #1 Thing to Remember as You Head Home for Thanksgiving | GaryVee | ~21/11 | — | 1 | **Nuova:** momento dell'anno come hook |
| This Video Will Find You When You Need It The Most | Codie Sanchez | ~17/11 | — | 3 | Titolo "destino" (già nella mappa come "da adattare") |
| Nel 2019 mi sono alzato con un'idea che non mi faceva dormire. | Montemagno | 15/11 (fuori finestra di un giorno) | 1,18K | 7. Cambiare vita | Anno + scena (già nella mappa) |

**Bottoni, Vignali, Ascani, Bartlett, Martell (video):** nessun contenuto umano verificato in finestra. Per Bottoni e Vignali le fonti non si sono aperte; per Bartlett le puntate trovate sono di politica e salute; per Ascani nulla di suo.

**Formule nuove da aggiungere alla mappa** (segnalazione, la mappa non la tocco):
1. **Frase-tesi come titolo** (Hormozi, Skande): la lezione stessa è il titolo. Ideale per reel brevi.
2. **"Eroe improbabile + risultato + (senza X)"** (Martell): "Come un timido ha imparato a… (senza carisma)".
3. **"Un solo [strumento] per [tutta un'area]"** (Abdaal).
4. **"Se sei [identità] + fallo subito"** (Abdaal).
5. **Titolo breve e criptico con il punto** (Welsh): "Una scusa sbagliata." Funziona su newsletter e blog, meno su YouTube.
6. **Teoria o esperimento con un nome** (Mazzucchelli, Sutherland "cost of trying"): un episodio quotidiano e un concetto che si ricorda.
7. **Momento dell'anno come hook** (GaryVee): per dicembre, "Prima del cenone…", "Prima di chiudere l'anno…".
8. **"Come farei crescere [mestiere preciso]"** (Hormozi, variante della formula 8 "se ricominciassi").

### 2) Tre contenuti umani per Antonio questa settimana

> **In `storie-personali.json` non c'è nessun seme**: nessuno dei tre può essere scritto finché Antonio non risponde alla domanda indicata. Nessun episodio, età o cifra va inventato.

**A. Articolo: "Il periodo in cui non sapevo più cosa stavo facendo"**
- **Formato:** articolo blog (900–1.300 parole) + post LinkedIn/Facebook.
- **Famiglia:** 2. Mi sentivo perso (titolo 4 della mappa, non ancora usato).
- **Riferimento:** Bottoni, "Mi sentivo perso: come ho ritrovato un senso nella mia vita." (17/09/2026, 13.327 views) e "Siamo stati educati per perderci." (31/03/2026). Formula: confessione dello stato + "come ho…".
- **Prima frase:** "C'è stato un periodo in cui [TUA STORIA: dove eri, che anno era, cosa facevi la mattina appena sveglio]."
- **Domanda per Antonio:** *Raccontami un periodo vero in cui ti sei sentito perso o fermo nel lavoro: quando era, cosa facevi, cosa ti ha fatto ripartire (una persona, una scelta, un cliente)?* [TUA STORIA: …]
- **Seme esistente:** nessuno.

**B. Reel: "Il primo video in cui ho messo la faccia"**
- **Formato:** reel 30–45 secondi, girato col telefono, possibilmente mostrando 2 secondi del primo video vero.
- **Famiglia:** 8. Autostima, paura del giudizio (titolo 7 della mappa).
- **Riferimento:** Mel Robbins, "If You Get Anxious Around Other People, You Need to Hear This" (~22/11), formula "se ti senti X"; Marketers Podcast, "Come ho superato la paura di metterci la faccia…" (ep. 66).
- **Hook (3 secondi):** "Questo è il primo video in cui ho messo la faccia. Guarda le mani."
- **Domanda per Antonio:** *Com'è andata davvero la prima volta che ti sei registrato: quante volte l'hai rifatto, cosa ti faceva paura, chi l'ha visto per primo e cosa ti ha detto?* [TUA STORIA: …]
- **Seme esistente:** nessuno. Si lega al servizio `/short-video`: il ponte è "se ce l'ho fatta io, lo fai anche tu con il tuo negozio".

**C. Reel (frase-tesi) + post: "Ogni errore con un cliente è un provino"**
- **Formato:** reel da 20 secondi con una frase sola, poi post con la storia.
- **Famiglia:** 6. Fallimenti ed errori + 1. Lezioni (titolo 21 della mappa, "Il cliente che mi ha insegnato di più").
- **Riferimento:** Welsh, "Your hidden big break." (21/11), lezione "i momenti ordinari sono il provino"; Hormozi, frase-tesi come titolo. Formula nuova (frase-tesi), non copiata.
- **Hook:** "Il cliente non si ricorda l'errore. Si ricorda cosa hai fatto dopo."
- **Domanda per Antonio:** *Ricordi un errore tuo con un cliente (consegna sbagliata, scadenza saltata, messaggio frainteso)? Cosa hai fatto subito dopo e cosa è successo al rapporto?* [TUA STORIA: …] Il cliente resta anonimo salvo consenso.
- **Seme esistente:** nessuno.

---

## Piano blog

**Prossimo articolo: short video per aziende a Caserta.** È il gap più vecchio (proposto il 16/11 "a seguire") e l'unico servizio senza articoli. Giudizio editoriale, nessun dato di volume.

- **Keyword principale:** `short video per aziende Caserta`
- **Secondarie:** `video brevi per PMI Napoli`, `reel per negozi Caserta`, `come fare video per la propria attività`, `short video ristoranti Napoli`
- ⚠️ Volumi non verificati: controllare con Keyword Planner o Search Console prima di scegliere la principale.
- **Titolo:** *Short video per aziende a Caserta e Napoli: come iniziare col telefono, partendo dalle domande che i clienti fanno sempre*
- **Angolo:** non serve un balletto né una troupe. Il primo video di una PMI è la risposta alla domanda che il titolare sente dieci volte al giorno. Il video è un pezzo del brand, non una tattica.
- **Struttura H2:**
  1. Il video non è un trend: è la vetrina che il cliente guarda prima di entrare
  2. Da dove partire: le domande che ti fanno ogni giorno (esercizio da 10 minuti)
  3. Cosa serve davvero: telefono, luce, audio, e chi parla
  4. Tre scenari: ristorante, studio professionale, negozio (presentati come esempi ipotetici)
  5. La paura di metterci la faccia (e cosa fare se proprio non vuoi)
  6. Quanto pubblicare: ritmo sostenibile, non quotidiano (link all'articolo del 22/10)
  7. Cosa dicono i numeri, con cautela: i benchmark Angarum/Wyzowl/Metricool, specificando che sono internazionali e non PMI campane ([Angarum Media](https://angarummedia.com/research/2026-video-marketing-report/), dal report competitor, non riletto)
  8. L'AI nel montaggio: cosa delegare e cosa no
  9. Quando chiedere aiuto e quando fare da soli
- **Link interni:** `/short-video` (CTA), `cosa-pubblicare-social-qualita-vs-quantita-napoli-caserta`, `piano-editoriale-mensile-pmi-napoli-caserta`, `storytelling-pmi-caserta-napoli-come-raccontare-azienda`, `creare-contenuti-ai-senza-sembrare-robot`.
- **Prima di pubblicare:** nessun risultato di clienti di Antonio (non ce ne sono di documentati); i numeri di Angarum vanno riletti sulla fonte.
- **Azione necessaria:** lo short video non è in `topics.json` (che questo agent non tocca). Va aggiunto a mano o passato al blog agent come argomento "market".

**A seguire (proposta):** "Il divario AI tra Nord e Sud: cosa significa per una piccola impresa campana" (dato I-Com verificato, con il limite dei 10 addetti), poi l'aggiornamento dell'articolo personal brand del 27/08.

---

## Piano social

Hook da adattare. Nessun numero di risultati di Antonio: non ne ho. Contenuti su incentivi e costi chiudono con la fonte.

### 5 idee Reel/TikTok
1. **[Umano] "Il primo video in cui ho messo la faccia"** (contenuto umano B). Hook: *"Questo è il primo video in cui ho messo la faccia. Guarda le mani."* Serve la storia di Antonio.
2. **[Umano] "Il cliente non si ricorda l'errore"** (contenuto umano C). Reel da 20 secondi, frase-tesi, poi una domanda nei commenti: *"Qual è l'errore che hai rimediato meglio?"* Serve la storia per la versione lunga; la versione da una frase si può fare subito.
3. **Black Friday di vicinato.** Hook: *"Più di 3 italiani su 4 diranno di comprare almeno in parte in negozio questo Black Friday. Il tuo negozio cosa gli dice quando entrano?"* Dato Confcommercio/Format Research via ANSA (77,4%). Ponte all'articolo del 30/10.
4. **WhatsApp: ogni risposta ora ha un prezzo.** Hook: *"Da ottobre Meta fa pagare anche le risposte ai tuoi clienti su WhatsApp. Ecco cosa chiedere al tuo fornitore."* Citare la pagina Meta; niente cifre in euro finché non si legge il rate card ufficiale per l'Italia.
5. **"Come farei crescere una pizzeria a Caserta"** (formula nuova di Hormozi, mestiere preciso). Tre mosse di brand, presentate come scenario ipotetico, non come caso cliente.

### 3 caroselli
1. **"Il divario AI Nord-Sud in 5 slide"**: 8,2% → 16,4% in Italia; Nord-Ovest 19,3% contro Mezzogiorno 12,2%; 7,1 punti di distanza ([Lineaedp](https://www.lineaedp.it/featured/intelligenza-artificiale-nelle-imprese-litalia-accelera-ma-il-divario-digitale-cresce/)). Slide onesta: "riguarda solo le imprese da 10 addetti in su". Chiusura: un primo uso dell'AI da provare questa settimana.
2. **"Chatbot WhatsApp: cosa è cambiato a ottobre"**: servizio a pagamento per messaggio, tariffa uguale alla utility, agente Meta a token. Fonte Meta. Le tariffe Italia solo se lette sul rate card ufficiale.
3. **"Il test Feynman per il tuo messaggio di brand"** (spunto Skande, senza copiarlo): spiega cosa fai a un bambino di 10 anni, togli le parole che non capirebbe, guarda cosa resta.

### 2 post testo (LinkedIn / Facebook)
1. **[Personale] "Ho dovuto correggermi due volte."** La settimana scorsa avevo letto che i nuovi costi WhatsApp riguardavano solo l'India; la pagina ufficiale di Meta dice altro. Lezione: sui costi si legge la fonte, non il riassunto. Forma personale ma senza episodi inventati: si basa su un fatto vero di questo lavoro di ricerca. Da pubblicare solo se Antonio conferma che la versione "solo India" era arrivata ai suoi canali (newsletter o post).
2. **"Il voucher che è finito (quasi) in un giorno."** 90 milioni richiesti su 150 in poco più di 24 ore (MIMIT via CorCom). Tesi: per gli incentivi a sportello la preparazione si fa prima, non quando apre. Controllare la pagina Invitalia il giorno stesso.

---

## Piano email

**Newsletter personale: "La prima volta che ho messo la faccia (e perché te lo racconto)"**
- **Perché personale:** il canale "lettera" è il gap indicato nel creator report; questa settimana i contenuti umani dei big più vicini al pubblico di Antonio parlano di paura del giudizio (Robbins) e di errori (Welsh, Martell).
- **Struttura** (schema del creator report): scena → cosa è successo [TUA STORIA: il primo video] → l'idea con un nome → 3 consigli pratici per chi ha un negozio o uno studio → domanda finale: "E tu, cosa ti blocca davanti alla fotocamera? Rispondi a questa mail."
- **Box in fondo "Due cose utili della settimana":** (1) WhatsApp: da ottobre anche le risposte di servizio si pagano a messaggio (fonte Meta); (2) Black Friday: il 28,6% degli italiani vuole sostenere i negozi di vicinato (Confcommercio via ANSA).
- **CTA:** rispondere alla mail; link soft a `/short-video`.
- **Alternativa se Antonio non dà la storia entro mercoledì:** newsletter informativa "Tre cose cambiate per le PMI a novembre" (WhatsApp, voucher Cloud, divario AI Nord-Sud), senza parti personali.
- **Da verificare:** numero di iscritti e storico invii non visibili.

---

## Opportunità urgenti (entro 48h)

1. **Entro il 24/11: semi delle storie esauriti.** `.claude/storie-personali.json` ha **zero storie** (nessuna di tipo "umano" né "lavoro"). La routine del martedì e del venerdì non può produrre bozze e le tre bozze del 16/11 restano ferme. Tre domande dalla mappa ("Domande per raccogliere le storie"), da rispondere anche a voce:
   - *Quando ti sei sentito perso o indietro?* (serve al contenuto umano A)
   - *Com'è la tua giornata vera?* (titolo 10, la routine)
   - *Il cliente che ti ha insegnato di più?* (serve al contenuto umano C e al titolo 21)
   In più, per il reel B: *com'è andata la prima volta che hai messo la faccia in un video?*
2. **Entro il 24/11: ricontrollare l'articolo chatbot del 16/11.** Dice che da ottobre i messaggi di servizio sono a pagamento "oltre una soglia mensile gratuita". La pagina Meta letta oggi conferma il pagamento per messaggio ma **non** nomina la soglia gratuita (che compare solo su siti terzi). Se non si trova sul sito Meta, togliere l'inciso. Correzione da fare a mano o dal blog agent: questo agent non tocca il sito.
3. **Entro il 25/11: Reel Black Friday (idea 3).** Venerdì 27/11 è tra 4 giorni; il contenuto è nell'articolo del 30/10, il dato fresco è di sabato 21/11.
4. **Entro il 24/11: non pubblicare il Reel "voucher Cloud aperto"** del piano del 16/11. Con 90 M€ su 150 richiesti in un giorno, i fondi potrebbero essere finiti. Controllare la pagina [Invitalia](https://www.invitalia.it/incentivi-e-strumenti/voucher-cloud-e-cybersecurity) (non aperta da qui) e solo dopo usare il post testo 2.
5. **Da non fare:** contenuti sul voucher AI. Nessun emendamento votato; la Commissione Bilancio della Camera ha appena iniziato a valutare gli emendamenti.

---

*Fatti esterni linkati alla fonte. Quelli ripresi dal report competitor del 16/11 sono indicati come tali. Nessun dato di performance di Antonio disponibile. Nessun episodio, età o cifra di Antonio è stato inventato: dove serve c'è il segnaposto [TUA STORIA: …].*
