# Fonti di ispirazione per il Blog Agent

Materiale di Antonio Andreozzi per scegliere i temi e scrivere gli articoli del blog.
Le idee qui dentro sono **spunti, non fatti**. Contengono numeri, percentuali, sondaggi e casi di clienti scritti come esempi ("su 47 imprenditori intervistati, 41…", "la pasticceria di Caserta che ha venduto 213 caffè in più", "l'87% dei funnel…"). Non vanno MAI riportati come veri. Ogni dato pubblicato deve venire da una fonte verificata con WebSearch, altrimenti si toglie o si presenta come scenario ipotetico.

## Pool dei titoli (da dove si pesca il tema)

1. `../topics.json`: argomenti SEO locali (Caserta/Napoli) già pianificati. Hanno la priorità finché restano dei `pending`.
2. `articoli-1000.json`: **pool principale**, 1000 titoli articolo in 10 pillar da 100 (Emozioni, Psicologia, Stoicismo, Autostima & Identità, Procrastinazione & Azione, Crescita Personale, Mente/Futuro & Decisioni, Tempo & Abitudini, Relazioni & Scopi, Creatività/Conoscenza & Cultura). Ogni titolo ha una fase del funnel (AWARENESS, CONSIDERATION, DECISION, RETENTION). Testo originale in `fonti/1000-articoli-brand-strategist.txt`.
3. Sezioni "articoli" degli altri cataloghi, con outline già pronti (titolo SEO, hook, 4 sezioni, CTA):
   - `fonti/catalogo-andreozzi-800.txt` → sezione "2 · 100 ARTICOLI · NEWSLETTER". Brand Teardown di marchi italiani (Cucinelli, Ferrari, Lavazza…), Strategic Intelligence, Pensiero Lungo, Provocazioni & Manifesti.
   - `fonti/maieuta-800-contenuti.txt` → sezione "05 · ARTICOLI" (AR001–AR100).
   - `fonti/banca-contenuti-700-operatore-nudo.txt` → "PARTE II — 100 Articoli".

## Come scegliere dal pool

- Alterna il pillar: non usare lo stesso pillar dell'ultimo articolo preso dal pool (lo trovi in `../blog-agent-log.json`).
- Ogni 3-4 articoli dal pool, preferisci un titolo dalle sezioni articoli dei cataloghi (Catalogo, Maieuta, Banca), così il blog non diventa monotono.
- Preferisci titoli in fase AWARENESS o CONSIDERATION, quelli con più ricerca organica. DECISION e RETENTION vanno bene ogni tanto.
- Il titolo del pool è una base: riscrivilo per la SEO (keyword reale cercata in Italia), senza snaturarne il senso.
- Scarta e salta (segnandolo `done` con nota "scartato") i titoli che duplicano articoli già usciti o che sono fuori posizionamento per un blog di brand strategy per PMI.
- Brand Teardown (Cucinelli, Ferrari, ecc.): ottimi, ma ogni fatto sul brand (fatturato, storia, citazioni) va verificato su almeno 2 fonti affidabili.

## Come usare le altre fonti (stile, non temi)

- `fonti/500-ganci-reels-hormozi.txt`, `fonti/500-ganci-reels-danmartell.txt`: ganci brevi e contrarian. Usali come ispirazione per la **prima frase dell'articolo**, per i titoli H2 e per le frasi nette di chiusura sezione. Adattali alla voce di Antonio (riflessiva, non urlata). Non copiare le promesse numeriche ("ho guadagnato il doppio").
- `fonti/500-titoli-youtube-hormozi.txt`, `fonti/1000-titoli-youtube-brand-strategist.txt`, `fonti/100-video-youtube-danmartell.txt`: formule di titolo (numero + problema + promessa, contraddizione, curiosity gap). Usali per costruire il title H1 e il seoTitle, e come idee di angolo.
- `fonti/catalogo-andreozzi-800.txt` (capitolo 0): i **6 pilastri emotivi** (Riconoscimento, Sicurezza, Orgoglio, Sgomento, Curiosità, Calma) e i **9 pattern hook** (verità scomoda italiana, open loop strategico, targeting condizionale, architettura e sistema, dati e numeri concreti, citazione + contrasto, scena cinematografica, provocazione manifesto, curiosità domestica). Ogni articolo ha UN pilastro emotivo primario e apre con UNO di questi pattern.
- `fonti/banca-contenuti-700-operatore-nudo.txt` (pag. 1-2): l'angolo "Operatore Nudo". Documentazione, esecuzione reale nelle PMI italiane, critica sistemica (mai personale) al marketing tossico, vulnerabilità calibrata.
- `fonti/maieuta-800-contenuti.txt`: il Protocollo Maieuta (approccio maieutico: far emergere le risposte con le domande giuste).

## Voce

Il tono finale resta sempre quello degli articoli già pubblicati su antonioandreozzidigital.com/blog: prima persona, riflessivo, saggistico ma concreto, niente hype, niente gergo da agenzia. Le fonti in stile Hormozi, Dan Martell e Vignali servono per l'energia dei ganci, non per il registro.
