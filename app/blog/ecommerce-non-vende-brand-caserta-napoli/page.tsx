import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'E-commerce non vende? Il problema è il brand, non il sito',
  description: 'Se il tuo e-commerce non vende, rifare il sito può non bastare. Come capire se il problema è tecnico o di brand, con un metodo per le PMI campane.',
  keywords: ['e-commerce non vende', 'brand e-commerce', 'identità e-commerce', 'posizionamento e-commerce PMI', 'vendere online PMI', 'e-commerce Napoli', 'e-commerce Caserta'],
}

export default function ArticoloBlog() {
  return (
    <>
      <main id="main-content">
        <section style={{ paddingTop: 'clamp(120px, 14vw, 180px)', paddingBottom: 'clamp(40px, 6vw, 70px)', background: 'var(--bg-void)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-site" style={{ maxWidth: '760px' }}>
            <div className="flex items-center gap-3 mb-6">
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: 'var(--font-inter)' }}>
                E-commerce
              </span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Il tuo e-commerce non vende. Forse il sito non c&apos;entra.
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', letterSpacing: '0.06em' }}>
              2 Novembre 2026 · 8 min di lettura
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-surface)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site article-prose" style={{ maxWidth: '760px' }}>
            <p>
              Sono le undici di sera. Una persona è sul divano con il telefono in mano e sta cercando un regalo. Arriva sul tuo shop, guarda una foto, scorre la pagina, legge due righe di descrizione. Dieci secondi dopo apre un&apos;altra scheda, cerca lo stesso tipo di prodotto altrove e non torna più. Tu, il mattino dopo, vedi soltanto una visita in più e nessun ordine. Se il tuo e-commerce non vende, è probabile che tu conosca bene questa statistica muta. E che tu abbia già pensato alla soluzione più ovvia: rifare il sito.
            </p>
            <p>
              A volte è la scelta giusta. Spesso è il modo più costoso di evitare la domanda vera. Quella persona sul divano non se n&apos;è andata perché il pulsante era del colore sbagliato. Se n&apos;è andata perché, in quei dieci secondi, non ha trovato una ragione per scegliere te invece di chiunque altro.
            </p>
            <p>
              In questo articolo voglio fare una cosa precisa: aiutarti a distinguere un problema di sito da un problema di brand. Sono due malattie con gli stessi sintomi, e si curano in modo opposto.
            </p>

            <h2>Perché un e-commerce non vende: la diagnosi che costa di più</h2>
            <p>
              Il ciclo è quasi sempre lo stesso. Lo shop non rende, quindi si cambia il tema grafico. Non basta, quindi si passa a un&apos;altra piattaforma. Poi si investe in pubblicità, si aggiunge un popup con il dieci per cento di sconto, si installa un&apos;app per le recensioni. Ogni intervento ha una sua logica. Nessuno tocca il punto.
            </p>
            <p>
              Il motivo per cui si finisce lì è comprensibile: il sito è l&apos;unica cosa che si può toccare. Ha un preventivo, una data di consegna, un prima e un dopo da mostrare. L&apos;identità di un&apos;impresa, invece, non ha un pulsante. Per lavorarci devi rispondere a domande scomode: chi serviamo davvero, a chi rinunciamo, cosa facciamo che gli altri non fanno. È più facile cambiare il template.
            </p>
            <p>
              Il risultato è uno shop nuovo che dice le stesse cose di prima, solo con un carattere più moderno. Un brand vago su un sito veloce resta un brand vago. Arriva prima, tutto qui.
            </p>

            <h2>Il mercato cresce. Il tuo problema anche.</h2>
            <p>
              Guardiamo i numeri, quelli verificabili. Secondo l&apos;Osservatorio eCommerce B2c di Netcomm e del Politecnico di Milano, nel 2026 gli acquisti online di prodotto in Italia raggiungono 42,6 miliardi di euro, con una crescita del 6% sul 2025; con i servizi si arriva a 66,6 miliardi. Le persone che comprano online quindi ci sono, e spendono.
            </p>
            <p>
              Ma c&apos;è un dettaglio che conta di più, per chi ha una piccola impresa. Lo stesso filone di analisi, secondo quanto riporta ItaliaOggi, descrive un e-commerce italiano entrato in una nuova fase di maturità, con una selezione tra le aziende che restano attive nel settore, in calo del 4,4%. Tradotto: il mercato si allarga, ma non per tutti. Non basta più esserci.
            </p>
            <p>
              Aprire uno shop oggi è diventato relativamente semplice, e proprio per questo avere uno shop non è più un vantaggio. Quando tutti possono avere un sito ben fatto, il sito ben fatto smette di distinguere. Resta da capire cosa distingue.
            </p>
            <p>
              Poi c&apos;è il modo in cui si arriva all&apos;acquisto. Secondo uno studio di Adyen, società olandese di pagamenti digitali, citato da Milano Finanza a gennaio 2026, il 32% degli italiani usa l&apos;intelligenza artificiale come supporto agli acquisti, soprattutto per cercare ispirazione e scoprire nuovi brand. Il dato va preso con la cautela dovuta, perché l&apos;articolo non riporta campione né metodo. La direzione però è chiara: una parte crescente delle persone chiede consiglio prima di arrivare al tuo sito. E un assistente, come un amico, può consigliare solo ciò che sa descrivere. Un&apos;impresa che non sa dire in una frase cosa fa di diverso è difficile da raccomandare, da chiunque.
            </p>

            <h2>In negozio il brand sei tu. Online chi lo fa?</h2>
            <p>
              Qui sta, secondo me, il vero nodo per chi arriva dal commercio fisico o dall&apos;artigianato. Se hai un negozio, una bottega, un laboratorio, una parte enorme del tuo brand la fai senza accorgertene. Accogli le persone. Capisci cosa cercano. Racconti da dove viene quel prodotto, sconsigli quello sbagliato, ricordi cosa ha comprato la signora l&apos;anno scorso. Il cliente non compra solo l&apos;oggetto: compra il tuo giudizio.
            </p>
            <p>
              Poi apri uno shop online e tutto questo sparisce. Restano una foto, un prezzo, la descrizione del fornitore e un pulsante. Hai tolto dalla vendita la cosa per cui le persone venivano da te, e hai lasciato l&apos;unica su cui i grandi ti battono sempre: il confronto tra prodotto e prezzo.
            </p>
            <blockquote>
              Un e-commerce senza identità è un negozio in cui il titolare è uscito e ha lasciato sul bancone il listino.
            </blockquote>
            <p>
              Costruire un brand per l&apos;e-commerce significa rimettere il titolare dentro la pagina. Non la sua foto in posa: il suo modo di ragionare. Ed è un lavoro che si vede in tre punti molto concreti.
            </p>
            <h3>La promessa</h3>
            <p>
              Chi arriva sulla home deve capire in pochi secondi per chi è questo shop e perché dovrebbe comprare qui. “Qualità e passione dal 1985” non è una risposta, perché può dirlo chiunque. Una promessa utile esclude qualcuno, ed è proprio per questo che chi resta si sente chiamato.
            </p>
            <h3>La scheda prodotto</h3>
            <p>
              È il tuo commesso. Se copia la descrizione del fornitore, dice le stesse parole di tutti gli altri rivenditori e ti spinge dritto nel confronto sul prezzo. Se invece spiega per chi è quel prodotto, per chi non è, come si usa e perché l&apos;hai scelto, sta facendo quello che faresti tu al banco. Il modo in cui si scrive tutto questo non si improvvisa pagina per pagina: è il lavoro che ho raccontato parlando di <a href="/blog/identita-verbale-brand-come-progettarla/">identità verbale</a>.
            </p>
            <h3>Le prove</h3>
            <p>
              Chi non ti conosce ha un dubbio legittimo: chi c&apos;è dietro questo sito? Un indirizzo vero, persone con un nome, le condizioni di reso scritte come le spiegheresti a voce, recensioni autentiche. Non sono decorazioni. Sono il sostituto della stretta di mano che online non puoi dare.
            </p>

            <h2>Prima però, onestà: a volte è davvero il sito</h2>
            <p>
              Sarebbe comodo dirti che è sempre colpa del brand, visto che è il mio mestiere. Non è così. Esistono shop con un&apos;identità fortissima che perdono ordini per motivi banali. Per questo la diagnosi va fatta in ordine, dal livello più semplice a quello più profondo, senza saltare passaggi.
            </p>
            <p>
              <strong>Primo: arrivano le persone giuste?</strong> Se le visite sono poche, o arrivano da ricerche che non c&apos;entrano con ciò che vendi, il problema è a monte. Nessuna pagina converte chi non doveva essere lì.
            </p>
            <p>
              <strong>Secondo: comprare è facile?</strong> Fai un ordine vero dal telefono, come farebbe un cliente, e cronometrati. Se scopri le spese di spedizione solo alla fine, se devi creare un account per forza, se il pagamento che useresti non c&apos;è, hai trovato un problema tecnico. Risolvilo: costa poco e non serve nessuna strategia.
            </p>
            <p>
              <strong>Terzo: le persone guardano, aggiungono al carrello e poi spariscono verso altri siti?</strong> Qui il sospetto si sposta. Fai questo test: copri il tuo logo e metti la tua home accanto a quelle di tre concorrenti. Riconosceresti la tua? Se togliessi il nome dai testi, qualcuno capirebbe che sei tu?
            </p>
            <p>
              <strong>Quarto: vendi solo quando sconti?</strong> Questo è il segnale più netto. Se gli ordini arrivano con il codice promo e si fermano appena lo togli, le persone non stanno scegliendo te: stanno scegliendo l&apos;occasione. Ne ho scritto a proposito del <a href="/blog/black-friday-piccole-imprese-caserta-napoli/">Black Friday per le piccole imprese</a>, e vale ogni giorno dell&apos;anno.
            </p>
            <p>
              Se ti fermi ai primi due livelli, chiama chi ti ha fatto il sito. Se arrivi al terzo o al quarto, un nuovo sito non ti salverà.
            </p>

            <h2>Caserta, Napoli, Campania: la provenienza non è un posizionamento</h2>
            <p>
              Nelle nostre province c&apos;è una tentazione particolare, e la capisco. Abbiamo prodotti e saperi che il mondo conosce, e viene naturale pensare che basti dirlo. Così molti shop campani si assomigliano tutti: il Vesuvio o la reggia in testata, “tradizione” nel primo titolo, “artigianale” nel secondo.
            </p>
            <p>
              Pensa a un caseificio dell&apos;Agro aversano che decide di spedire in tutta Italia. Se la sua promessa è “la vera mozzarella campana”, sta dicendo quello che dicono tutti i suoi vicini, e il cliente di Milano non ha modo di distinguere. Ma se quel caseificio prova a dire qualcosa di più specifico, per esempio a chi si rivolge, come organizza la spedizione perché il prodotto arrivi bene, cosa ti suggerisce di farne appena aperta la scatola, allora la provenienza smette di essere uno slogan e diventa una prova. La stessa logica vale per una sartoria napoletana che vende online: “fatto a Napoli” apre la porta, ma è il suo punto di vista sul vestire a far entrare qualcuno.
            </p>
            <p>
              Il territorio è un punto di partenza potente. Però da solo non ti rende diverso da chi ha il tuo stesso codice di avviamento postale. Devi rispondere anche alla domanda successiva: tra tutti quelli che fanno questa cosa qui, perché proprio tu?
            </p>
            <p>
              C&apos;è poi un vantaggio che le piccole imprese locali sottovalutano. Chi ha anche un punto vendita può far parlare il negozio e lo shop tra loro: ritiro in sede, un numero WhatsApp a cui risponde una persona vera, il cliente di quartiere che diventa il primo a recensire e a raccontare. Il marketplace non può fare nulla di tutto questo. Il suo vantaggio è la scala. Il tuo è la relazione, ma funziona solo se qualcuno la progetta.
            </p>

            <h2>Natale è vicino: cosa fare, e cosa non fare</h2>
            <p>
              Mancano meno di otto settimane a Natale e il Black Friday cade il 27 novembre. Se stai pensando a un rifacimento completo adesso, il mio consiglio è di fermarti. Rifare un sito sotto stagione è il modo migliore per arrivare ai giorni più importanti con qualcosa che non hai avuto tempo di provare.
            </p>
            <p>
              In queste settimane puoi fare tre cose piccole che lavorano già sul brand:
            </p>
            <ul>
              <li>scrivi in una frase per chi è il tuo shop, e mettila in cima alla home;</li>
              <li>riscrivi le schede dei dieci prodotti che vendi di più, con le parole che useresti al banco;</li>
              <li>fai l&apos;ordine di prova dal telefono e sistema ciò che ti ha fatto perdere tempo.</li>
            </ul>
            <p>
              Il lavoro vero viene a gennaio, quando la stagione si calma e puoi guardare i dati di queste settimane con lucidità. Cosa si è venduto senza sconto? Chi è tornato? Quali domande ti hanno fatto in chat? Lì dentro c&apos;è già buona parte della risposta su chi sei per i tuoi clienti, e sarà il materiale da cui partire.
            </p>
            <p>
              Se il tuo e-commerce non vende, quindi, non partire dal preventivo per il sito. Parti da una domanda: se domani il tuo shop sparisse, a chi mancherebbe, e perché? Se la risposta è chiara, il sito è un problema che si risolve in fretta. Se non lo è, nessun sito lo risolverà al posto tuo.
            </p>

            <p style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
              Se vuoi capire se il tuo shop ha un problema di sito o di brand prima di spendere altri soldi, il punto di partenza è la{' '}
              <a href="/diagnosi" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Diagnosi</a>
              .
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Il tuo shop dice davvero chi sei?
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '480px', margin: '0 auto 2rem' }}>
              Se hai un&apos;impresa a Caserta, Napoli o in Campania e vuoi lavorare sul brand del tuo e-commerce, scrivimi.
            </p>
            <a href="/lavora-con-me" className="cta-primary">Parliamo →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
