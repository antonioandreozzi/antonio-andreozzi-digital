import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Farsi citare da ChatGPT e AI Mode: conta il brand',
  description: 'Farsi citare da ChatGPT e dall\'AI di Google non è un trucco tecnico. Cosa dicono i dati, cosa resta incerto e il sistema di brand per le PMI campane.',
  keywords: ['farsi citare da ChatGPT', 'Google AI Mode', 'AI Overview PMI', 'GEO per piccole imprese', 'visibilità brand intelligenza artificiale', 'farsi trovare da ChatGPT Napoli', 'marketing AI Caserta'],
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
                AI
              </span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Farsi citare da ChatGPT: quando il cliente chiede all&apos;AI, cosa sa dire di te?
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', letterSpacing: '0.06em' }}>
              6 Novembre 2026 · 9 min di lettura
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-surface)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site article-prose" style={{ maxWidth: '760px' }}>
            <p>
              Stasera, finito il lavoro, fai una prova da due minuti. Apri ChatGPT, oppure la modalità AI di Google, e scrivi la domanda che farebbe il tuo cliente ideale. Non il nome della tua impresa: la sua domanda. “Cerco un commercialista a Caserta che conosca le aziende agricole, chi mi consigli e perché?” Poi leggi. Se ci sei, guarda con quali parole ti descrive. Se non ci sei, guarda chi c&apos;è al posto tuo. Farsi citare da ChatGPT e dalle risposte di Google è già diventato un prodotto in vendita, con le sue sigle, le sue checklist e i suoi pacchetti mensili.
            </p>
            <p>
              Io credo che la prova di stasera ti dirà qualcosa di più utile di tutte quelle checklist. Una risposta singola non è una classifica, certo: può cambiare domani, e cambia da una persona all&apos;altra. Però ti mette davanti a una domanda che nel marketing italiano si evita da sempre, e che ora una macchina pone in modo brutale: <em>esiste, là fuori, una descrizione chiara di quello che fai e di per chi lo fai?</em>
            </p>
            <p>
              In questo articolo voglio separare tre cose che di solito arrivano mescolate: quello che i dati dicono, quello che nessuno sa ancora, e il lavoro che conviene fare comunque.
            </p>

            <h2>Cosa è cambiato davvero nella ricerca</h2>
            <p>
              Partiamo dalle date, che sono la parte facile. In Italia le AI Overview, i riassunti generati in cima ai risultati di Google, sono arrivate il 26 marzo 2025. AI Mode, la modalità di ricerca conversazionale, l&apos;8 ottobre dello stesso anno. A maggio 2026 Google ha annunciato che le due cose confluiscono in un&apos;unica esperienza e ha dichiarato di aver superato il miliardo di utenti mensili su AI Mode. Il numero è dell&apos;azienda, quindi va letto come tale.
            </p>
            <p>
              Sui clic i dati esistono, ma vanno maneggiati con cura. Lo studio più citato è del Pew Research Center: ha osservato le ricerche reali di 900 adulti statunitensi nel marzo 2025. Quando compariva un riassunto AI, le persone cliccavano su un risultato tradizionale nell&apos;8% delle visite, contro il 15% di quando il riassunto non c&apos;era. Sui link dentro il riassunto cliccava circa l&apos;1%. Ahrefs, una società di software SEO, ha confrontato 300.000 keyword tra dicembre 2023 e dicembre 2025 e riporta un clickthrough medio da desktop più basso del 58% per le pagine in prima posizione, sulle ricerche con AI Overview.
            </p>
            <p>
              Ora le cautele. Sono dati americani o globali, non italiani. Ahrefs vende strumenti a chi si occupa di questi temi. Sono perlopiù correlazioni, e quanto del calo dipenda davvero dai riassunti resta discusso. Google, dal canto suo, sostiene che il traffico verso il web resti stabile nel complesso e che i clic arrivati da queste funzioni siano di qualità migliore, senza però pubblicare numeri che permettano di controllarlo.
            </p>
            <p>
              E l&apos;Italia? Un dato attribuito ad ANSA e ripreso a fine ottobre colloca al 22% la presenza delle sintesi AI nelle ricerche osservate nel nostro Paese. Non ho trovato campione e metodo, quindi lo prendo come un ordine di grandezza e nulla più. Più solido il dato Eurostat: nel 2025 ha usato strumenti di intelligenza artificiale generativa il 19,9% degli italiani tra i 16 e i 74 anni, contro il 32,7% della media europea.
            </p>
            <p>
              La sintesi onesta è questa: la direzione è chiara, le proporzioni no. Chi ti dice di sapere esattamente quanto traffico perderai il prossimo anno, ti sta vendendo qualcosa. Chi ti dice che non cambierà nulla, anche.
            </p>

            <h2>Farsi citare da ChatGPT non è un trucco tecnico</h2>
            <p>
              Qui arriva la parte che molte offerte commerciali lasciano in fondo. Per le proprie funzioni AI, Google scrive nella documentazione ufficiale che non esistono requisiti aggiuntivi né ottimizzazioni speciali: la pagina deve essere indicizzata e idonea a comparire con uno snippet. Nessun dato strutturato dedicato, nessun file magico. Lo stesso vale per llms.txt, il file di cui si è parlato molto: secondo quanto riportato da Search Engine Journal, a giugno 2026 John Mueller di Google ha detto che nessun sistema AI lo usa.
            </p>
            <p>
              Questo non significa che la GEO, l&apos;ottimizzazione per i motori generativi, sia tutta fumo. Esiste un lavoro accademico serio, firmato da Aggarwal e colleghi e presentato alla conferenza KDD nel 2024, secondo cui i testi che citano fonti autorevoli e riportano dati verificabili ottengono più visibilità nelle risposte generate, mentre riempire le pagine di parole chiave serve a poco o nulla. Sono risultati di laboratorio, da non prendere come una ricetta. Ma guarda cosa premiano: fonti, sostanza, precisione. Le stesse cose che servivano già prima.
            </p>
            <p>
              Ci sono anche studi che si contraddicono. La quota di pagine citate che compaiono anche tra i primi dieci risultati di Google, per esempio, va dal 17% al 76% circa a seconda di chi misura e di come misura. Quando le ricerche divergono così tanto, comprare un pacchetto che promette una formula è un atto di fede.
            </p>
            <blockquote>
              Non puoi ottimizzare per farti raccomandare se prima nessuno sa spiegare perché dovrebbe raccomandarti.
            </blockquote>

            <h2>Un&apos;AI può raccomandare solo ciò che sa descrivere</h2>
            <p>
              Secondo me il punto vero sta nel modo in cui le persone fanno le domande. Google racconta che i primi utenti di AI Mode scrivevano richieste da due a tre volte più lunghe di una ricerca classica, e che il sistema le spezza in tante ricerche collegate su sottotemi diversi, una tecnica che chiama <em>query fan-out</em>. Tradotto: nessuno scrive più soltanto “avvocato Napoli”. Scrive “ho una piccola impresa, un fornitore non mi paga da sei mesi, chi mi può aiutare a Napoli senza spendere una fortuna?”.
            </p>
            <p>
              Davanti a una domanda così, una frase come “professionalità e competenza al servizio del cliente” non contiene niente da usare. Non dice a chi serve, né in quale situazione, né cosa succede dopo. Per anni un testo generico sul sito è costato poco, perché bastava il nome sull&apos;insegna e il passaparola. In una risposta generata, invece, il testo generico equivale a non esserci.
            </p>
            <p>
              Ecco perché considero questa una questione di <a href="/blog/posizionamento-di-marca-caserta-napoli/">posizionamento di marca</a> prima che di tecnologia. Se hai scelto per chi lavori, cosa fai di diverso e cosa non fai, le parole per descriverti esistono già, e chiunque può ripeterle: un cliente, un giornalista locale, un assistente. Se quella scelta non l&apos;hai mai fatta, nessuna ottimizzazione può inventarla al posto tuo.
            </p>
            <p>
              C&apos;è un dato che va in questa direzione, anche se da prendere con le pinze. Seer Interactive, agenzia che ha analizzato 3.119 ricerche di 42 aziende clienti, riporta che i brand citati nelle AI Overview ricevono il 35% di clic organici in più rispetto a quelli non citati. Il campione è piccolo e non dimostra che sia la citazione a generare i clic: può darsi benissimo che vengano citati i brand già forti. Ma anche questa lettura dice la stessa cosa. Il brand viene prima.
            </p>

            <h2>Il sistema, dall&apos;interno verso l&apos;esterno</h2>
            <p>
              Se vuoi lavorare su questo tema senza inseguire la tattica del mese, io lo vedo come quattro strati, da costruire in quest&apos;ordine.
            </p>
            <h3>La frase che ti descrive</h3>
            <p>
              Una frase sola, abbastanza precisa da escludere qualcuno: per chi lavori, su quale problema, con quale differenza. Se non riesci a scriverla tu, non la scriverà nessun modello. Tutto il resto dipende da questa, ed è anche la parte che costa meno in denaro e di più in coraggio.
            </p>
            <h3>Le pagine che rispondono a domande vere</h3>
            <p>
              Prendi le dieci domande che ti fanno più spesso al telefono e rispondi per iscritto, con le parole che usi davvero: quanto dura, quanto può costare e da cosa dipende, quando non conviene rivolgersi a te. Sono pagine utili ai clienti prima ancora che alle macchine. E sono materiale che un assistente può leggere e riassumere, a differenza di un claim.
            </p>
            <h3>Quello che gli altri dicono di te</h3>
            <p>
              Le risposte generate non pescano solo dal tuo sito. Un&apos;analisi di Peec AI riportata da Search Engine Land, su circa 30 milioni di fonti citate dai principali assistenti, indica Reddit, YouTube e LinkedIn tra i domini più ricorrenti. Il che non vuol dire aprire un profilo Reddit domani. Vuol dire che contano recensioni autentiche e specifiche, articoli sulla stampa locale, interventi in associazioni di categoria, collaborazioni che lasciano una traccia pubblica. Il passaparola esisteva già: adesso conviene che una parte resti scritta da qualche parte.
            </p>
            <h3>L&apos;igiene tecnica</h3>
            <p>
              Solo a questo punto si passa alla tecnica, che è breve. Il sito deve essere indicizzato e leggibile. Nome, indirizzo, orari e servizi devono coincidere ovunque compaiano. Il tuo file robots.txt non deve bloccare i crawler che ti interessano: OpenAI, per esempio, distingue OAI-SearchBot, usato per la ricerca di ChatGPT, da GPTBot, legato all&apos;addestramento dei modelli. Sono due scelte diverse e puoi farle separatamente. Se non sai cosa è impostato oggi, chiedilo a chi ti segue il sito: è una verifica rapida.
            </p>

            <h2>Caserta, Napoli e la Campania: un vantaggio che dura poco</h2>
            <p>
              Il dato Eurostat ha due letture, e per chi ha un&apos;impresa da noi conta la seconda. La prima è che l&apos;Italia è indietro. La seconda è che c&apos;è ancora tempo per fare le cose con calma, prima che i tuoi clienti cambino abitudine in massa. Anche sul lato delle aziende il quadro è simile: secondo l&apos;Osservatorio Innovazione Digitale nelle PMI del Politecnico di Milano, solo l&apos;8% delle PMI ha progetti di intelligenza artificiale attivi o in sperimentazione, e il 46% ritiene che l&apos;AI non avrà impatti significativi nel breve periodo.
            </p>
            <p>
              Può darsi che abbiano ragione sui loro processi interni. Ma il modo in cui il cliente cerca un fornitore non lo decide il fornitore. Può benissimo capitare che tu non abbia mai aperto un assistente e che il tuo prossimo cliente gli abbia già chiesto un nome.
            </p>
            <p>
              Pensa a un&apos;officina di Aversa che negli ultimi anni si è specializzata sulle auto ibride. Se il suo sito dice “riparazioni auto di ogni marca”, per chi cerca aiuto con una batteria ibrida è una delle tante, anche se di quel lavoro sa più di tutti. Se invece spiega cosa fa su quei veicoli, quali problemi vede più spesso, e le recensioni dei clienti raccontano quel lavoro specifico, allora esiste una descrizione che qualcuno può riprendere. O pensa a una cantina dell&apos;Alto Casertano che spedisce fuori regione: “vini del territorio” lo dicono tutti, mentre il Pallagrello raccontato vigna per vigna, con chi lo produce e cosa abbinarci, è qualcosa che si può citare.
            </p>
            <p>
              Sono scenari, non casi reali. La mia impressione, che non ha un numero dietro, è che in molti mercati locali chi scrive in modo specifico sia ancora in minoranza: tanti siti si fermano a due righe e a un numero di telefono. Se è così anche nel tuo settore, chi documenta bene il proprio lavoro non ha bisogno di essere il più grande. Ne ho parlato anche guardando all&apos;altro lato del problema, cioè a <a href="/blog/ai-trovare-clienti-caserta-napoli/">come usare l&apos;AI per trovare clienti nella tua provincia</a>.
            </p>

            <h2>Come misurare senza raccontarsi storie</h2>
            <p>
              Qui serve un po&apos; di umiltà, perché gli strumenti sono ancora acerbi. Non esiste una “posizione” su ChatGPT come esisteva una posizione su Google. Search Console, secondo quanto riportato da Search Engine Journal, ha esteso quest&apos;anno a tutti i siti un rapporto sulle prestazioni dell&apos;AI generativa, che però mostra le impressioni e non i clic. Chi ti promette un cruscotto preciso sulla tua presenza nelle risposte, quindi, va ascoltato con qualche domanda in più.
            </p>
            <p>
              Tre abitudini semplici, però, ti danno già un quadro:
            </p>
            <ul>
              <li>una volta al mese fai le stesse dieci domande agli assistenti che usi, e annota se compari e soprattutto con quali parole ti descrivono;</li>
              <li>guarda nei dati del sito se arriva traffico con <em>utm_source=chatgpt.com</em>, il parametro che ChatGPT aggiunge ai suoi link;</li>
              <li>chiedi a ogni nuovo cliente come ti ha trovato, e scrivi la risposta. È il metodo più vecchio del mondo, e resta il migliore.</li>
            </ul>
            <p>
              La prima abitudine ha un valore che va oltre la misura. Leggere come una macchina ti riassume è uno specchio scomodo: se la descrizione è vaga o sbagliata, spesso sta solo restituendo la confusione che trova in giro su di te. Vale la pena leggerla così, come una diagnosi gratuita e imperfetta.
            </p>
            <p>
              Farsi citare da ChatGPT e da Google, alla fine, è la conseguenza di un lavoro che un&apos;impresa avrebbe dovuto fare comunque: decidere chi è, dirlo con precisione, farlo confermare da chi l&apos;ha provata. Se le risposte generate cresceranno quanto dicono, sarai pronto. Se cresceranno meno, avrai comunque un brand più chiaro, un sito più utile e clienti che sanno spiegare perché hanno scelto te. È una delle poche scommesse in cui si vince in entrambi i casi.
            </p>

            <p style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
              Se vuoi capire cosa dice davvero di te quello che hai pubblicato finora, e da dove partire per renderlo chiaro, il punto di partenza è la{' '}
              <a href="/diagnosi" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Diagnosi</a>
              .
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Sai in una frase perché qualcuno dovrebbe consigliarti?
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '480px', margin: '0 auto 2rem' }}>
              Se hai un&apos;impresa a Caserta, Napoli o in Campania e vuoi lavorare su come il tuo brand viene descritto e raccomandato, scrivimi.
            </p>
            <a href="/lavora-con-me" className="cta-primary">Parliamo →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
