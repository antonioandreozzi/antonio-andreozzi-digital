import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Piano editoriale mensile: un mese di contenuti in 3 ore',
  description: 'Come fare un piano editoriale mensile in 3 ore: temi, ritmo, tracce e revisione. Un sistema semplice per PMI e professionisti di Napoli e Caserta.',
  keywords: ['piano editoriale mensile', 'come fare un piano editoriale', 'piano editoriale social', 'calendario editoriale', 'pianificare contenuti social', 'piano editoriale PMI', 'content strategy Napoli Caserta'],
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
                Content Strategy
              </span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Piano editoriale mensile: come pianificare un mese di contenuti in 3 ore, senza diventare schiavo del calendario
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', letterSpacing: '0.06em' }}>
              20 Novembre 2026 · 9 min di lettura
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-surface)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site article-prose" style={{ maxWidth: '760px' }}>
            <p>
              Un piano editoriale mensile ben fatto ha tre piani, come una casa. Al piano terra ci sono le fondamenta: chi sei, a chi parli, cosa vuoi che le persone pensino di te. Al primo piano ci sono le stanze: i tre o quattro temi che occupi in modo stabile. Solo all&apos;ultimo piano, quello che si vede dalla strada, ci sono i singoli post. Quasi tutti partono dal tetto. Aprono un foglio, scrivono le date del mese e cominciano a chiedersi cosa pubblicare lunedì.
            </p>
            <p>
              È per questo che la maggior parte dei calendari editoriali muore entro la seconda settimana. Non per pigrizia, non per mancanza di tempo: perché un calendario senza struttura sotto è solo una lista di caselle da riempire, e le caselle vuote mettono ansia invece di dare direzione.
            </p>
            <p>
              In questo articolo ti propongo un sistema per costruire il piano editoriale di un mese intero in circa tre ore. Non tre ore di produzione, ma tre ore di pensiero ordinato, che poi rendono la produzione quasi meccanica. È pensato per chi non ha un ufficio marketing: titolari di PMI, professionisti, freelancer. E arriva in un momento preciso, la fine di novembre, quando pianificare dicembre e gennaio è l&apos;unico modo per non passare le feste a improvvisare.
            </p>

            <h2>Il piano editoriale non è un calendario: è un sistema</h2>
            <p>
              Se cerchi «come fare un piano editoriale» trovi soprattutto modelli da scaricare: tabelle colorate, template di Canva, fogli con le colonne data, canale, formato, stato. Sono utili, ma rispondono alla domanda sbagliata. Ti dicono <em>dove</em> scrivere le idee, non <em>da dove</em> devono venire.
            </p>
            <p>
              Un sistema editoriale è un insieme di decisioni prese una volta sola, che ti evitano di prenderle ogni giorno. Quali temi tratti. Con che ritmo. In quale formato ti esprimi meglio. Chi scrive, chi approva, quando si pubblica. Quando queste decisioni sono prese, il calendario si compila quasi da solo. Quando non lo sono, ogni post diventa una piccola crisi.
            </p>
            <p>
              Ecco la differenza che conta: un calendario ti dice cosa fare. Un sistema ti dice perché lo stai facendo. E solo il secondo resiste ai mesi pieni, alle influenze, ai clienti che chiamano tutti nello stesso giorno.
            </p>
            <blockquote>
              Non ti serve più disciplina. Ti servono meno decisioni da prendere a caldo.
            </blockquote>

            <h2>Prima delle 3 ore: le tre cose che devono già esistere</h2>
            <p>
              Le tre ore funzionano solo se alcune cose sono già al loro posto. Se mancano, il tempo va investito prima lì, altrimenti il piano sarà ordinato ma vuoto.
            </p>
            <h3>Una frase di posizionamento</h3>
            <p>
              Devi saper dire in una riga per chi lavori, che problema risolvi e in cosa sei diverso da chi fa il tuo stesso mestiere. Non serve uno slogan: serve un criterio. Ogni contenuto del mese verrà misurato contro quella frase. Se un&apos;idea non la rafforza, non entra nel piano, per quanto sia di moda.
            </p>
            <h3>Tre o quattro temi stabili</h3>
            <p>
              Sono le stanze della casa. Per uno studio di commercialisti potrebbero essere: scadenze spiegate senza ansia, errori che costano caro, come lavoriamo, il territorio e le imprese che lo animano. Per un ristorante: la materia prima, la cucina vista da dentro, le persone, i momenti dell&apos;anno. Pochi temi, sempre gli stessi, declinati in modi diversi. È così che il pubblico comincia ad associarti a qualcosa di preciso.
            </p>
            <h3>Una voce riconoscibile</h3>
            <p>
              Dai del tu o del lei? Sei ironico o asciutto? Quali parole non useresti mai? Se queste risposte non esistono, ogni contenuto suonerà come scritto da una persona diversa. Ne ho parlato in modo esteso nell&apos;articolo sul <a href="/blog/tone-of-voice-aziendale-napoli-caserta/">tone of voice aziendale</a>: la voce non è un documento, è un comportamento che si ripete.
            </p>
            <p>
              Con questi tre elementi in mano, puoi aprire l&apos;agenda e bloccare le tre ore.
            </p>

            <h2>Come fare un piano editoriale mensile in 3 ore, ora per ora</h2>
            <p>
              Le tre ore non vanno spezzettate in dieci minuti tra una telefonata e l&apos;altra. Vanno fatte in un blocco, possibilmente lontano dal telefono, perché il lavoro vero qui è il collegamento tra le idee, e il collegamento ha bisogno di continuità.
            </p>
            <h3>Prima ora: raccogliere, senza giudicare</h3>
            <p>
              Si parte dal materiale grezzo. Le domande che i clienti ti hanno fatto nell&apos;ultimo mese, al telefono, in negozio, su WhatsApp. Le obiezioni che senti più spesso. Le cose che hai spiegato tre volte alla stessa persona. I lavori finiti di cui sei orgoglioso. Le date del mese che contano per il tuo pubblico: festività, scadenze, stagioni, eventi in città.
            </p>
            <p>
              Scrivi tutto in una lista unica, senza ordinare e senza scartare. L&apos;obiettivo della prima ora è arrivare a trenta, quaranta spunti. Molti saranno deboli. Va bene così: si scrive largo per poi scegliere stretto.
            </p>
            <p>
              Una regola che aiuta: almeno metà degli spunti deve venire dalle conversazioni reali con i clienti, non da quello che pubblicano i concorrenti. Le domande dei clienti sono la mappa più onesta dei contenuti che il tuo pubblico sta già cercando.
            </p>
            <h3>Seconda ora: scegliere e assegnare</h3>
            <p>
              Adesso si prende ogni spunto e lo si mette in una delle stanze, cioè in uno dei tre o quattro temi. Quello che non entra in nessuna stanza esce dal piano. È il momento più duro e più utile: è qui che il piano editoriale diventa un atto di posizionamento e smette di essere una raccolta di idee.
            </p>
            <p>
              Poi si decide il ritmo. Non quello ideale, quello sostenibile. Se oggi riesci a pubblicare due volte a settimana con una qualità che ti rappresenta, il piano prevede due contenuti a settimana, non cinque. Sulla differenza tra costanza e compulsione ho scritto un articolo intero, su <a href="/blog/cosa-pubblicare-social-qualita-vs-quantita-napoli-caserta/">cosa pubblicare sui social tra qualità e quantità</a>: il punto è che il ritmo giusto è quello che puoi mantenere anche nel mese peggiore dell&apos;anno.
            </p>
            <p>
              Con il ritmo deciso, distribuisci gli spunti scelti sulle settimane, alternando i temi. Un mese da otto contenuti, con quattro temi, significa due contenuti per tema. Semplice da controllare a colpo d&apos;occhio: se un tema compare quattro volte e un altro nessuna, il piano è sbilanciato.
            </p>
            <h3>Terza ora: scrivere le tracce, non i post</h3>
            <p>
              L&apos;ultima ora non serve a scrivere i contenuti finiti. Serve a scrivere, per ciascuno, una traccia di tre righe: la frase d&apos;apertura, il punto che vuoi far passare, cosa vuoi che la persona faccia o pensi dopo. Più il formato: un carosello, un video breve, un post scritto, una newsletter.
            </p>
            <p>
              Con le tracce pronte, la produzione cambia natura. Non ti siedi più davanti a una pagina bianca chiedendoti cosa dire: ti siedi davanti a un&apos;idea già decisa, e devi solo darle forma. È qui che l&apos;intelligenza artificiale può dare una mano concreta, per esempio per sviluppare una prima bozza a partire dalla traccia, a patto che la traccia sia tua e che la revisione finale resti tua. Altrimenti il risultato suona come tutti gli altri, come spiego nell&apos;articolo su <a href="/blog/creare-contenuti-ai-senza-sembrare-robot/">come creare contenuti con l&apos;AI senza sembrare un robot</a>.
            </p>
            <p>
              Prima di chiudere le tre ore, fissa due cose in agenda: quando produci i contenuti (meglio due mezze giornate al mese che venti ritagli) e quando, a fine mese, rileggi cosa ha funzionato. Senza quel secondo appuntamento il sistema non impara.
            </p>

            <h2>Il piano editoriale per una PMI di Caserta, Napoli e della Campania</h2>
            <p>
              I modelli che si trovano online sono pensati quasi sempre per aziende digitali, con un pubblico distribuito ovunque e nessun legame con un luogo. Ma la maggior parte delle imprese tra Caserta e Napoli vive di un territorio preciso: clienti che passano davanti alla vetrina, che si conoscono tra loro, che scelgono anche in base al passaparola. Questo cambia il piano in tre modi.
            </p>
            <h3>Il calendario locale conta più di quello globale</h3>
            <p>
              Le giornate mondiali di qualcosa interessano poco a chi cerca un idraulico ad Aversa o una pasticceria a Caserta. Contano le feste patronali, le sagre, la riapertura delle scuole, le stagioni della campagna, il periodo delle comunioni, le partite. Un piano editoriale locale parte da quel calendario, e lo usa per raccontare l&apos;impresa dentro la vita della comunità, non accanto.
            </p>
            <h3>Le persone sono il contenuto più forte</h3>
            <p>
              In un mercato che funziona ancora molto sulla fiducia personale, mostrare chi lavora dietro il bancone o dietro la scrivania vale più di qualsiasi grafica curata. Pensa a una piccola impresa di Nola che in un mese presenta, una alla volta, le persone che ci lavorano: cosa fanno, da quanto tempo, cosa rispondono quando un cliente chiede un consiglio. Non è un contenuto spettacolare. È un contenuto che nessun concorrente può copiare.
            </p>
            <h3>Dicembre e gennaio vanno pianificati adesso</h3>
            <p>
              Per molte attività campane dicembre è il mese più denso dell&apos;anno, e gennaio quello in cui si riparte quasi da zero. Pensa a un negozio di abbigliamento del centro di Napoli: a dicembre ha bisogno di contenuti su regali, orari prolungati, servizi di confezione; a gennaio deve gestire saldi e cambi senza svendere la propria immagine. Se queste cose si pianificano a metà dicembre, si pubblicano di corsa e male. Se si pianificano ora, nelle tre ore di fine novembre, diventano una sequenza coerente.
            </p>

            <h2>Gli errori che rendono inutile un piano editoriale dopo due settimane</h2>
            <p>
              Un piano editoriale mensile può essere costruito bene e fallire comunque. Di solito per una di queste ragioni.
            </p>
            <h3>Pianificare l&apos;ideale invece del reale</h3>
            <p>
              Venti contenuti al mese scritti in un pomeriggio di entusiasmo, e poi la realtà del lavoro che si riprende tutto. Meglio un piano piccolo rispettato che un piano ambizioso abbandonato: il secondo non lascia solo un buco nel calendario, lascia la sensazione di aver fallito, che è peggio.
            </p>
            <h3>Copiare il piano di qualcun altro</h3>
            <p>
              Il concorrente pubblica reel tutti i giorni, quindi anche tu. Ma il concorrente ha un altro posizionamento, un altro pubblico, forse un&apos;altra persona che gestisce i social a tempo pieno. Un piano copiato produce contenuti che ti assomigliano poco, e quindi non costruiscono niente.
            </p>
            <h3>Non lasciare spazio all&apos;imprevisto</h3>
            <p>
              Un buon piano ha dei vuoti voluti. Uno o due spazi al mese lasciati liberi per ciò che succede: una notizia nel tuo settore, un lavoro particolare, una domanda di un cliente che merita una risposta pubblica. Il sistema serve a darti stabilità, non a toglierti la possibilità di reagire.
            </p>
            <h3>Non rileggere mai</h3>
            <p>
              Il piano del mese successivo dovrebbe nascere guardando quello precedente. Quali contenuti hanno generato conversazioni vere, messaggi, richieste di preventivo? Non quali hanno preso più like: quali hanno avvicinato qualcuno a diventare cliente. Bastano venti minuti a fine mese. Senza quei venti minuti, ogni mese ricomincia da zero.
            </p>

            <h2>Tre ore al mese per smettere di inseguire</h2>
            <p>
              Il piano editoriale mensile non è uno strumento di produttività. È uno strumento di identità. Ogni volta che scegli cosa entra e cosa resta fuori, stai dicendo al mercato chi sei. Ogni volta che rispetti un ritmo sostenibile, stai costruendo la cosa più rara nella comunicazione delle piccole imprese: la coerenza nel tempo.
            </p>
            <p>
              Tre ore al mese sono poche rispetto alle ore che si perdono ogni settimana a chiedersi cosa pubblicare. E rispetto a quelle ore, hanno un vantaggio che si accumula: il terzo mese è più facile del primo, il sesto più facile del terzo, perché i temi si consolidano, le tracce si somigliano, la voce si stabilizza.
            </p>
            <p>
              Se vuoi provarci, il momento è adesso. Blocca tre ore entro la fine di novembre, prepara le tre fondamenta, e costruisci il piano di dicembre con un occhio già a gennaio. Non sarà perfetto. Sarà tuo, e sarà un sistema. Che è esattamente quello che serve per arrivare al 2027 senza inseguire il calendario, ma lasciando che sia il calendario a lavorare per te.
            </p>

            <p style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
              Se non hai ancora chiari posizionamento, temi e voce, cioè le fondamenta su cui poggia ogni piano editoriale, il punto di partenza è la{' '}
              <a href="/diagnosi" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Diagnosi</a>
              .
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Vuoi un sistema editoriale che regga tutto l&apos;anno?
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '480px', margin: '0 auto 2rem' }}>
              Se hai un&apos;impresa a Caserta, Napoli o in Campania e vuoi lavorare sulla tua content strategy, scrivimi.
            </p>
            <a href="/lavora-con-me" className="cta-primary">Parliamo →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
