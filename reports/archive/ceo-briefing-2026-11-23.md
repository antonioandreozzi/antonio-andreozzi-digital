# Briefing settimanale — 2026-11-23

## Le 3 cose più importanti questa settimana

1. **Entro domani mattina (martedì 24/11, prima delle 9:41): dammi almeno 2 storie vere, una umana e una di lavoro.** In `.claude/storie-personali.json` ci sono **0 semi**. Così la routine "Storia personale" del martedì e del venerdì non può scrivere niente: è la seconda settimana con **0 contenuti personali su 2**. Rispondi anche a voce, in disordine, a una o più delle 3 domande della sezione "Contenuti personali". Basta una risposta per sbloccare una bozza.
2. **Entro martedì 24/11: correggi una frase nell'articolo chatbot WhatsApp del 16/11.** Nella sezione sui costi c'è scritto: "secondo la documentazione ufficiale da ottobre 2026 anche i messaggi di servizio sono a pagamento **oltre una soglia mensile gratuita**". La pagina Meta letta dal Content Strategy Agent conferma il pagamento a messaggio ma **non parla di soglia gratuita**, che compare solo su siti di terzi. Togli l'inciso "oltre una soglia mensile gratuita" o verificalo tu sul sito Meta. File: `app/blog/chatbot-whatsapp-ristoranti-studi-negozi-napoli-caserta/page.tsx`.
3. **Entro mercoledì 25/11: pubblica il reel sul Black Friday (venerdì 27/11).** Prendi il contenuto dall'articolo del 30/10 e usa il dato fresco: il 28,6% degli italiani vuole sostenere i negozi di vicinato (Confcommercio, [ANSA 21/11](https://www.ansa.it/sito/notizie/economia/2026/11/21/black-friday-oltre-il-60-degli-italiani-pronto-agli-acquisti.-spesa-media_08d772bb-f4a5-4ee9-acba-b9dd8fab9c72.html)). Titolo possibile: il n. 9 qui sotto. **Non pubblicare** il reel "il voucher Cloud è aperto": il 12/11 erano già stati chiesti 90 milioni su 150, e i fondi potrebbero essere finiti.

## Stato del sito

✅ **Nessun errore nell'ultimo controllo, che però ha 7 giorni.** Fonte: `reports/stato-sito.md`, generato il 16/11 alle 14:10 (ora di Roma).
- Le 6 pagine chiave rispondono tutte 200. La più lenta è `/blog/` (424 ms). Sitemap: 33 URL, 0 in errore.
- ⏳ Il controllo di oggi alle 07:17 non c'è ancora. Non è un guasto: da 3 settimane la GitHub Action parte verso le 14 invece che alle 05:50 (ritardo della coda di GitHub). Se stasera manca, lanciala a mano da [Actions](https://github.com/antonioandreozzi/antonio-andreozzi-digital/actions).
- L'articolo sul piano editoriale (20/11) non è ancora passato da nessun controllo.
- Il curl da questo ambiente restituisce 000 su tutte le pagine. È la rete dell'ambiente bloccata, non un problema del sito.

## Contenuti personali

- **Bozza in attesa: no.** `reports/bozze/storia-in-attesa.md` non esiste.
- **Semi liberi: 0 in tutto** (0 umani, 0 di lavoro). ⚠️ Senza semi il sistema è fermo.
- **Pubblicati questa settimana: 0 su 2.** Non c'è la cartella `reports/storie-pubblicate/` e nel log del blog non ci sono voci "personale".
- **Routine Mar/Ven:** martedì 17 e venerdì 20 non ha lasciato tracce (nessun commit su `storia-in-attesa.md`). È coerente con le regole: senza semi deve fermarsi.
- Le 3 bozze d'opinione del 16/11 sono ancora ferme sui segnaposto `[TUA STORIA]`.

**3 domande per nuove storie** (dalla mappa, rispondi anche a voce):
1. Quando ti sei sentito perso o indietro? Che periodo era e cosa ti ha fatto ripartire?
2. Com'è la tua giornata vera, dalla sveglia a sera?
3. Qual è il cliente che ti ha insegnato di più, e cosa ti ha insegnato?

## Titoli della settimana

Solo titoli. Dove c'è [ ] va un dato vero tuo. Se il dato non c'è, scarta il titolo.

**Umani**
1. Caro me di [N] anni: tre cose che ancora non sapevi (reel)
2. Prima del pranzo di Natale: cosa rispondo quando mi chiedono "e il lavoro come va?" (post)
3. La teoria della serranda alzata: [abitudine] che non salto mai (reel)
4. Nessuno ti verrà a dare il permesso di cominciare (reel)
5. Un solo [strumento] per rimettere ordine nella mia settimana (carosello)

**Lavoro**
6. Se hai una bottega, comincia a filmarla questa settimana (reel)
7. Come farei crescere una pizzeria di [paese] partendo da zero follower (video)
8. Come un artigiano che odiava la telecamera ha iniziato a fare video (senza recitare) (articolo, solo con un caso vero e il consenso)
9. Al negozio sotto casa non servono sconti per farsi scegliere il Black Friday (reel)
10. Il messaggio delle 23. (post)

## Dal Content Strategy Agent

Il prossimo articolo del blog è sugli **short video per aziende a Caserta**: oggi gli articoli sul tema sono 0, eppure la pagina `/short-video` è online. Niente contenuti sul voucher AI: è ancora solo un'ipotesi.

## Dal Competitor Research Agent

Opportunità: in **Campania usa l'AI circa un'impresa su dieci, o meno** (I-Com, solo imprese con almeno 10 addetti) e nessun operatore locale lo commenta. Prima prendi il valore esatto dalle tavole Istat ICT 2025. Poi la novità: le risposte AI di Gemini sono ora dentro Google Search anche in italiano. Fai 3 ricerche a mano per un settore a Caserta e guarda chi viene citato.

## Dati che non riesco a vedere

Incollali in `reports/dati-settimana.md` (non esiste ancora) o rispondi a questa run:
- prenotazioni Diagnosi / Progetto / Sistema della settimana;
- traffico GA4 (sessioni, 5 pagine più viste) e Search Console (click, query principali);
- iscritti alla newsletter (totale e nuovi);
- views e reazioni dei contenuti social usciti la settimana scorsa.

## Una domanda per Antonio

Quando i semi finiscono, vuoi che la routine del martedì ti mandi **una sola domanda** e trasformi la tua risposta (anche vocale) in un seme, invece di fermarsi in silenzio?
