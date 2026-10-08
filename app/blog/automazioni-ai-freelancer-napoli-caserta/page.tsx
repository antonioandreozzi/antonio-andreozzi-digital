import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Automazioni per freelancer a Napoli e Caserta: cosa delegare all\'AI e cosa no',
  description: 'Guida pratica alle automazioni AI per freelancer e PMI a Napoli e Caserta. Cosa delegare all\'intelligenza artificiale e cosa tenere per sé.',
}

export default function ArticoloBlog() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section
          style={{
            paddingTop: 'clamp(120px, 14vw, 180px)',
            paddingBottom: 'clamp(40px, 6vw, 70px)',
            background: 'var(--bg-void)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div className="container-site" style={{ maxWidth: '760px' }}>
            <div className="flex items-center gap-3 mb-6">
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: 'var(--font-inter)' }}>
                AI
              </span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                fontFamily: 'var(--font-space-grotesk)',
                marginBottom: '1.5rem',
              }}
            >
              Automazioni per freelancer: cosa delegare all&apos;AI e cosa no
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Non tutto quello che puoi automatizzare vale la pena automatizzarlo. E alcune cose che sembrano automatizzabili non lo sono. La guida concreta per chi lavora in proprio a Napoli e Caserta.
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
              <span>Antonio Andreozzi</span>
              <span>·</span>
              <span>28 settembre 2026</span>
              <span>·</span>
              <span>9 min di lettura</span>
            </div>
          </div>
        </section>

        <article
          style={{
            paddingTop: 'clamp(40px, 6vw, 70px)',
            paddingBottom: 'clamp(60px, 8vw, 100px)',
          }}
        >
          <div className="container-site" style={{ maxWidth: '760px' }}>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Quando si parla di automazioni AI con freelancer e titolari di PMI, la domanda che mi viene fatta più spesso è: &quot;Ma quindi cosa posso smettere di fare io?&quot;
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              È la domanda sbagliata. O meglio, è incompleta. Perché l&apos;AI non è solo una lista di task da togliersi dalle mani. È uno strumento con una logica precisa su dove funziona bene e dove invece peggiora le cose se lo usi senza criterio.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              In questo articolo ti do il framework che uso con i miei clienti — freelancer, consulenti, piccoli imprenditori a Napoli e Caserta — per decidere cosa delegare all&apos;AI e cosa tenere per sé. Non è teoria. È quello che ho visto funzionare e non funzionare nella pratica.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              La distinzione di partenza: ripetitivo vs. relazionale
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Esiste una linea abbastanza netta tra i task che si automatizzano bene e quelli che non si automatizzano affatto. La linea passa qui: <strong>tutto ciò che è ripetitivo e strutturato può essere delegato all&apos;AI. Tutto ciò che è relazionale e contestuale deve restare a te.</strong>
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              &quot;Ripetitivo e strutturato&quot; significa: ha sempre gli stessi input, produce sempre lo stesso tipo di output, non richiede giudizio su sfumature umane. Rispondere a una domanda ricorrente via email, generare una bozza di contratto standard, riassumere un documento lungo, formattare dati: tutto questo si automatizza bene.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              &quot;Relazionale e contestuale&quot; significa: richiede di capire chi hai davanti, di leggere il tono di una conversazione, di prendere una decisione che ha conseguenze sulla fiducia. La prima chiamata con un nuovo cliente. La gestione di un conflitto. Una proposta commerciale per qualcuno che conosci da anni. Queste cose non si delegano — o si delegano a rischio di perdersi qualcosa di importante.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Cosa delegare: la lista concreta
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Queste sono le automazioni che ho visto funzionare meglio per chi lavora in proprio nel Sud Italia. Non sono ipotetiche — sono cose che uso io stesso o che ho aiutato a implementare per clienti di Napoli e Caserta:
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              <strong>Gestione email ricorrente.</strong> Le email che ricevi ogni settimana con le stesse domande possono avere risposte bozza generate automaticamente. Non risposte inviate in automatico — bozze che tu controlli in 30 secondi e invii. Il risparmio di tempo è reale, il controllo resta tuo.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1rem' }}>
              <strong>Prima bozza di qualsiasi documento scritto.</strong> Contratti standard, preventivi, proposte per clienti nuovi, newsletter, post social. Non il testo finale — la struttura e una prima versione da cui parti. Dimezza il tempo di scrittura senza toglierti la revisione finale.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1rem' }}>
              <strong>Riassunti e sintesi.</strong> Riunioni registrate, documenti lunghi, email thread complesse: l&apos;AI può estrarre i punti chiave in minuti. Per chi gestisce molte relazioni e molti progetti in parallelo, è uno dei recuperi di tempo più immediati.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1rem' }}>
              <strong>Ricerca e raccolta di informazioni.</strong> Analisi di un settore prima di una proposta, ricerca su un potenziale cliente, rassegna stampa su un tema specifico. Quello che richiedeva ore si riduce a minuti con le istruzioni giuste.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1rem' }}>
              <strong>Gestione dei contenuti social e blog.</strong> Non la creazione ex novo — la strutturazione di idee che hai già, l&apos;adattamento di un testo da un formato a un altro, la generazione di varianti. Se hai già un punto di partenza, l&apos;AI lo trasforma in prodotto finito molto più velocemente di quanto lo faresti tu da solo.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem', marginTop: '1rem' }}>
              <strong>Organizzazione e categorizzazione dei dati.</strong> Fatture, spese, contatti, lead: qualsiasi cosa che richieda di leggere-classificare-inserire da qualche parte. L&apos;AI fa questo lavoro con precisione e senza distrazioni.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Cosa non delegare: i rischi che vedo ogni settimana
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Ho visto freelancer e piccoli imprenditori del territorio fare questi errori con regolarità. Li elenco perché ogni volta che si verificano il costo — in termini di tempo perso o di fiducia danneggiata — è molto più alto del tempo che pensavano di risparmiare.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              <strong>Il primo contatto con un cliente nuovo.</strong> Il messaggio di risposta a una richiesta di preventivo, la mail a qualcuno che ti ha scritto per la prima volta. Queste comunicazioni formano la prima impressione. Un testo AI non personalizzato lo si sente. E nel mercato locale campano, dove la relazione personale conta ancora molto, è un errore che si paga.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1rem' }}>
              <strong>La gestione di un disservizio o di un problema.</strong> Un cliente insoddisfatto, un ritardo, una situazione delicata. Queste comunicazioni richiedono empatia reale, non simulata. L&apos;AI può aiutarti a strutturare una risposta, ma la risposta finale deve avere il tuo peso specifico.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1rem' }}>
              <strong>Le decisioni strategiche sulla tua offerta.</strong> Alzare i prezzi, aggiungere un servizio, cambiare il posizionamento: queste scelte richiedono una comprensione del tuo mercato locale che l&apos;AI non ha. Può darti dati e scenari, ma la decisione finale deve venire da te.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.75rem', marginTop: '1rem' }}>
              <strong>La tua voce nei contenuti ad alto valore.</strong> Un articolo come questo, un post su LinkedIn che ti posiziona come esperto, una newsletter dove stai costruendo fiducia nel tempo: qui la voce deve essere pienamente tua. L&apos;AI può aiutarti a scrivere meglio, ma il punto di vista deve partire da te.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem', marginTop: '1rem' }}>
              <strong>I processi che non hai ancora capito tu stesso.</strong> Automatizzare qualcosa che non hai ancora ottimizzato manualmente significa scalare un problema. Prima capisci come funziona una cosa fatta bene, poi — e solo poi — la automatizzi.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Il test pratico per decidere
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Quando un freelancer mi chiede se può automatizzare qualcosa di specifico, uso sempre questo test in tre domande:
            </p>

            <ol style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><strong>Se un cliente capisse che l&apos;ha fatto l&apos;AI, come si sentirebbe?</strong> Se la risposta è &quot;probabilmente non gli importerebbe&quot;, automatizza. Se la risposta è &quot;potrebbe sentirsi trattato come un numero&quot;, non automatizzare.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Questo task si ripete più di 3 volte a settimana in forma identica?</strong> Se sì, è un candidato forte per l&apos;automazione. Se è sempre diverso, l&apos;AI ti aiuta ma non sostituisce il tuo giudizio.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Un errore in questo task ha conseguenze sulla fiducia del cliente?</strong> Se sì, il controllo umano finale è non negoziabile. L&apos;AI può preparare, tu devi approvare.</li>
            </ol>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              Non è un sistema infallibile, ma in un anno di lavoro con clienti campani non ho mai visto questo test dare una risposta sbagliata.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Da dove iniziare se sei nuovo alle automazioni
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Se non hai ancora automatizzato niente nella tua attività, non partire cercando il sistema perfetto. Parti da un&apos;automazione sola, quella che ti costa più tempo ogni settimana tra quelle nella lista &quot;delegabili&quot;.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Per la maggior parte dei freelancer con cui lavoro a Napoli e Caserta, questa è la gestione delle email ricorrenti o la prima bozza dei preventivi. Non è glamour. Ma è concreta, è misurabile, e ti mostra subito quanto tempo recuperi.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Una volta che hai capito come funziona un&apos;automazione nella pratica, aggiungerne una seconda è molto più semplice. La curva di apprendimento è ripida solo la prima volta.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              L&apos;obiettivo finale non è automatizzare il massimo possibile. È liberare il tuo tempo per le cose che solo tu puoi fare: le relazioni con i clienti, le decisioni strategiche, il lavoro che ti distingue. L&apos;AI è il mezzo. Il tuo valore è lo scopo.
            </p>

            <div
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '2.5rem',
                marginTop: '1rem',
              }}
            >
              <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Antonio Andreozzi</strong> — Consulente di brand e comunicazione per PMI e professionisti a Caserta, Napoli e Campania.
                Aiuto chi ha qualcosa da dire a dirlo in modo che venga ricordato.
              </p>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
