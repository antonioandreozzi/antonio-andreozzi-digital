/**
 * Script per popolare Sanity con i contenuti esistenti del sito.
 * Esegui con: node scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'hcsw7wx5',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token: 'skmCpsi03SNHuTfz7zOKcGdPYYIo4RSS7ffRL808j1JDVOGNRTi8B2pF7nn627y8hZLitU8dfGDc1TOQQritUHqb3ozdGXZQaNV677j92KnbZFF7cRMA4m7nwRXDuFbaeoXZGy1E862hhQizqCnxzWY7t4YuxSzzYpFUzODKYpYlh3Pnqfcf',
  useCdn: false,
})

// ── FAQ ─────────────────────────────────────────────────────────
const faqs = [
  { domanda: 'Di cosa ti occupi, in poche parole?', risposta: 'Aiuto brand e professionisti a comunicare meglio, farsi notare di più e crescere con strategia.', ordine: 1 },
  { domanda: 'Posso contattarti anche se non ho le idee chiare?', risposta: 'Certo. Il mio lavoro è anche aiutarti a fare chiarezza, capire cosa ti serve davvero e da dove partire. Nessuna domanda è "troppo banale" — parliamone.', ordine: 2 },
  { domanda: 'Con quali settori lavori?', risposta: 'Lavoro con realtà molto diverse: professionisti, piccole imprese, brand in crescita e aziende strutturate. L\'importante è avere voglia di costruire qualcosa di autentico, strategico e sostenibile.', ordine: 3 },
  { domanda: 'Offri anche consulenze una tantum?', risposta: 'Sì. Se hai bisogno di una sessione mirata per chiarire dubbi, sistemare un contenuto, valutare una strategia, possiamo lavorare anche solo su un singolo progetto o problema.', ordine: 4 },
  { domanda: 'Se ho già una strategia, puoi solo revisionarla?', risposta: 'Certo. Posso analizzare, ottimizzare o rafforzare la tua comunicazione esistente, senza dover partire da zero. Ogni progetto può essere adattato a ciò che hai già.', ordine: 5 },
  { domanda: 'Quanto costa lavorare con te?', risposta: 'Dipende dal progetto. Il punto di partenza è la Diagnosi: 3 ore di lavoro insieme per capire dove sei e cosa fare. Da lì costruiamo una proposta su misura.', ordine: 6 },
  { domanda: 'Posso lavorare con te anche se ho un team interno?', risposta: 'Sì. Posso affiancare il tuo team, integrare processi già esistenti o coordinarmi con altri professionisti (designer, sviluppatori, social media manager, ecc.).', ordine: 7 },
  { domanda: 'Fai anche formazione?', risposta: 'Sì. Offro percorsi formativi e sessioni strategiche individuali o per team, su copywriting, SEO, content strategy, social media e posizionamento.', ordine: 8 },
  { domanda: 'Come iniziamo a lavorare insieme?', risposta: 'Parti dalla Diagnosi — il punto di ingresso naturale. 3 ore di lavoro insieme, un report scritto con le priorità chiare. Scrivimi a antonioandreozzidigital@gmail.com.', ordine: 9 },
]

// ── SERVIZI ─────────────────────────────────────────────────────
const servizi = [
  { codice: 'DIAGNOSI', prezzo: '€497', formato: 'Sessione unica 1:1 · 3 ore', tagline: 'Capisci dove sei e cosa fare subito.', descrizione: '3 ore per capire cosa non funziona nel tuo posizionamento e ricevere un piano scritto di priorità. Il punto di ingresso naturale.', postiDisponibili: '2 posti disponibili questo mese', ordine: 1 },
  { codice: 'PROGETTO', prezzo: '€3.500', formato: 'Percorso 1:1 · 8 settimane', tagline: 'Costruiamo il tuo brand da zero.', descrizione: '6 sessioni 1:1, posizionamento, voce, sistema editoriale. Tutto consegnato in un manuale operativo finale.', postiDisponibili: '3 posti disponibili questo mese', ordine: 2 },
  { codice: 'SISTEMA', prezzo: '€9.000', formato: 'Accompagnamento 1:1 · 6 mesi', tagline: 'Brand Architecture completa.', descrizione: '12 sessioni, revisioni continue, dashboard mensile. Identità, posizionamento, voce, contenuti, sistema commerciale.', postiDisponibili: 'Max 3 clienti in parallelo', ordine: 3 },
  { codice: 'CATTEDRALE', prezzo: 'Su misura', formato: 'Progetto annuale · 12 mesi', tagline: 'La trasformazione completa.', descrizione: 'Accompagnamento continuativo per 12 mesi. Identità, strategia, cultura, comunicazione, sistema commerciale. Max 2 clienti/anno.', postiDisponibili: 'Max 2 clienti/anno', ordine: 4 },
]

// ── HOMEPAGE ────────────────────────────────────────────────────
const homepage = {
  _type: 'homepage',
  _id: 'homepage',
  heroTitolo: 'Il Tuo Brand Vale Quanto Riesci a Farlo Capire.',
  heroSottotitolo: 'Costruiamo brand, sistemi e identità per imprenditori italiani, professionisti e freelancer che hanno scelto di non assomigliare a nessuno.',
  problemaTitolo1: 'Le imprese italiane non hanno un problema di visibilità.',
  problemaTitolo2: 'Hanno un problema di forma.',
  ctaTitolo: 'Inizia dalla Diagnosi.',
  ctaSottotitolo: 'Il punto di ingresso naturale. 3 ore insieme, un report scritto, le priorità chiare. Da lì decidi tu cosa fare.',
}

async function seed() {
  console.log('🌱 Popolo Sanity con i contenuti del sito...\n')

  // Homepage
  console.log('📄 Homepage...')
  await client.createOrReplace(homepage)
  console.log('   ✅ Homepage inserita\n')

  // FAQ
  console.log('❓ FAQ...')
  for (const faq of faqs) {
    await client.create({ _type: 'faq', ...faq })
    console.log(`   ✅ ${faq.domanda.substring(0, 50)}...`)
  }
  console.log()

  // Servizi
  console.log('🛠 Servizi...')
  for (const servizio of servizi) {
    await client.create({ _type: 'servizio', ...servizio })
    console.log(`   ✅ ${servizio.codice} — ${servizio.prezzo}`)
  }

  console.log('\n🎉 Tutti i contenuti sono stati importati in Sanity!')
  console.log('👉 Apri https://we-move-markets.sanity.studio per vederli')
}

seed().catch(console.error)
