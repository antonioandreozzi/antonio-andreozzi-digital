import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Il tone of voice non è un documento, è un comportamento',
  description: 'Il tone of voice aziendale non si definisce in un PDF e si dimentica. È un comportamento coerente che costruisce fiducia nel tempo. Guida per PMI a Caserta e Napoli.',
}

export default function ArticoloBlog() {
  return (
    <>
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
                Voce
              </span>
            </div>
            <h1
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}
            >
              Il tone of voice non è un documento, è un comportamento
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', letterSpacing: '0.06em' }}>
              6 Ottobre 2026 · 8 min di lettura
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-surface)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site article-prose" style={{ maxWidth: '760px' }}>

            <p>
              Hai mai letto le linee guida sul tone of voice di un&rsquo;azienda e poi visitato il loro sito, i loro social, le loro email — e non trovato nessuna corrispondenza?
            </p>
            <p>
              Succede in continuazione. E succede perché c&rsquo;è un equivoco di fondo su cosa sia davvero il tone of voice: la maggior parte delle aziende lo tratta come un documento. Lo fa scrivere da un consulente, lo approva in riunione, lo archivia in una cartella Drive. E lì rimane.
            </p>
            <p>
              Il tone of voice non è un documento. È un comportamento. È il modo in cui il tuo brand si comporta ogni volta che produce una parola — in un post, in una risposta a un commento, in un&rsquo;email di follow-up, nel testo di un bottone su un sito. Se quel comportamento non è coerente, non hai un tone of voice. Hai solo un PDF.
            </p>

            <h2>Cos&rsquo;è davvero il tone of voice</h2>
            <p>
              Il tone of voice è la somma di tutte le scelte linguistiche che un brand fa ogni volta che comunica. Scelte su come si rivolge alle persone, su quali parole usa e quali evita, su quanto è formale o informale, su come gestisce le situazioni difficili, su cosa dice quando le cose vanno bene e su come risponde quando qualcosa non funziona.
            </p>
            <p>
              Non è solo &ldquo;il modo in cui scriviamo&rdquo;. È il modo in cui il brand si manifesta attraverso le parole. Ed è, dopo il design visivo, la seconda cosa che le persone riconoscono di un brand nel tempo — spesso senza saperlo.
            </p>
            <p>
              Pensa ai brand che riconosci immediatamente senza vedere il logo. Riesci a distinguere il tono di una loro email da quello di un competitor. Non perché usino parole magiche: perché hanno un comportamento linguistico coerente nel tempo. E quella coerenza crea familiarità. E la familiarità crea fiducia.
            </p>

            <h3>La differenza tra voce e tono</h3>
            <p>
              C&rsquo;è una distinzione tecnica che vale la pena fare, perché aiuta nella pratica. La <em>voce</em> è stabile: è la personalità del brand, i valori che porta avanti, il modo in cui guarda il mondo. Non cambia a seconda del contesto.
            </p>
            <p>
              Il <em>tono</em> invece varia. Il tono è come quella voce si adatta alla situazione: più caldo in un post di benvenuto, più preciso in una comunicazione legale, più diretto in una notifica di errore. Come una persona: la tua personalità rimane la stessa che tu stia parlando con un cliente, con un amico o con tuo figlio — ma il tono cambia.
            </p>
            <p>
              Molte PMI campane con cui lavoro confondono i due. Pensano che avere un tone of voice significhi scrivere sempre allo stesso modo, qualunque sia il contesto. Risultato: comunicazioni rigide che sembrano scritte da una macchina, oppure comunicazioni così informali da perdere credibilità quando serve autorevolezza.
            </p>

            <h2>Perché le PMI campane sbagliano il tone of voice</h2>
            <p>
              Nella mia esperienza con imprenditori e professionisti tra Caserta, Napoli e la Campania, ho identificato tre errori ricorrenti. Sono errori diversi, ma hanno tutti la stessa radice: il tone of voice viene pensato come qualcosa da definire una volta sola, invece che come qualcosa da praticare ogni giorno.
            </p>

            <h3>Errore 1: copiare il tono dei grandi brand</h3>
            <p>
              &ldquo;Voglio un tono giovane, dinamico, come Apple&rdquo; — oppure &ldquo;professionale e autorevole, come uno studio internazionale&rdquo;. È la prima cosa che sento da molti clienti. Il problema non è l&rsquo;ambizione. Il problema è che Apple parla ad Apple. Un consulente di Caserta o un&rsquo;azienda artigiana di Napoli non può — e non dovrebbe — suonare come Apple.
            </p>
            <p>
              Il tono giusto è quello che risuona con il tuo cliente specifico, nel tuo contesto specifico. Spesso, per le PMI locali, quello che funziona è qualcosa di più diretto, più umano, più concreto di quanto i grandi brand possano permettersi. La prossimità è un vantaggio competitivo. Usarla nel tono è una scelta strategica.
            </p>

            <h3>Errore 2: un tono diverso su ogni canale</h3>
            <p>
              Il sito scritto in modo formale e istituzionale. I social informali fino all&rsquo;esasperazione. Le email di vendita aggressive. Le risposte ai commenti casuali e senza cura. Il cliente che attraversa tutti questi touchpoint riceve messaggi contraddittori su chi sei. E una persona contraddittoria — o un brand contraddittorio — genera diffidenza, non fiducia.
            </p>
            <p>
              La coerenza di tono tra canali non significa dire le stesse cose ovunque. Significa che la personalità del brand rimane riconoscibile ovunque, anche se il formato cambia.
            </p>

            <h3>Errore 3: il tone of voice che nessuno applica</h3>
            <p>
              Questo è il più comune. Il documento esiste. Magari è anche ben fatto. Ma chi scrive i post lo fa a intuito. Chi risponde alle email si arrangia. Chi aggiorna il sito non l&rsquo;ha mai letto.
            </p>
            <p>
              Un tone of voice che non viene applicato è peggio di non averlo. Crea l&rsquo;illusione di avere una direzione, ma nei fatti la comunicazione rimane incoerente. Il problema non è chi scrive il documento — è che il documento non diventa mai un comportamento.
            </p>

            <h2>Come costruire un tone of voice che funziona davvero</h2>
            <p>
              Non parto mai dalla definizione di aggettivi. &ldquo;Il nostro tono è caldo, professionale, diretto&rdquo; — queste parole le scrive qualsiasi brand, e non dicono niente di utile a chi deve scrivere un testo domani mattina.
            </p>
            <p>
              Parto da esempi reali. Prendo comunicazioni che il brand ha già prodotto — email, post, risposte ai clienti — e le analizzo. Cosa funziona? Cosa suona falso? Dove si sente la personalità del fondatore e dove invece sembra un testo generico copiato dalla concorrenza?
            </p>
            <p>
              Poi costruisco un sistema in quattro livelli.
            </p>
            <p>
              <strong>Livello 1: i valori linguistici.</strong> Non aggettivi, ma princìpi. Ad esempio: &ldquo;diciamo le cose come stanno, anche quando è scomodo&rdquo;. Oppure: &ldquo;usiamo esempi concreti, mai astrazioni vuote&rdquo;. Oppure: &ldquo;parliamo da pari a pari, non dall&rsquo;alto in basso&rdquo;. Sono regole di comportamento, non descrizioni di un&rsquo;atmosfera.
            </p>
            <p>
              <strong>Livello 2: il vocabolario.</strong> Parole che il brand usa e parole che evita. Non per censura, ma per coerenza. Se il brand si posiziona su semplicità e concretezza, parole come &ldquo;sinergico&rdquo;, &ldquo;olistico&rdquo; o &ldquo;ecosistema&rdquo; stonano. Se il brand è rivolto a professionisti del settore, evitare il gergo tecnico è sbagliato quanto eccedere nella semplificazione.
            </p>
            <p>
              <strong>Livello 3: esempi di tono per contesto.</strong> Come scrive il brand in una situazione positiva? Come gestisce un problema? Come risponde a una critica pubblica? Come fa una comunicazione di servizio? Per ognuno di questi casi, una risposta scritta — non un principio astratto, ma un esempio concreto che chi scrive può usare come riferimento.
            </p>
            <p>
              <strong>Livello 4: il test di coerenza.</strong> Una checklist semplice che chiunque possa usare prima di pubblicare qualcosa. Tre o quattro domande: &ldquo;Questo testo suona come noi o come chiunque nel nostro settore?&rdquo;. &ldquo;Diremmo questa cosa anche di persona?&rdquo;. &ldquo;Se togli il logo, si capisce ancora che siamo noi?&rdquo;.
            </p>

            <h2>Tone of voice e contesto campano: quello che cambia</h2>
            <p>
              Lavorare sul tone of voice a Caserta e Napoli ha delle specificità che non trovi nei manuali di brand communication scritti per un mercato generico.
            </p>
            <p>
              La prima: la relazione viene prima della transazione. Nel mercato campano, il cliente vuole sentire che c&rsquo;è una persona dietro il brand prima di comprare qualcosa. Un tono troppo istituzionale, troppo distante, fa sentire il cliente come uno numero su un foglio Excel. Un tono umano, diretto, capace di parlare anche dei problemi e non solo dei successi, costruisce fiducia molto più velocemente.
            </p>
            <p>
              La seconda: l&rsquo;ironia funziona, ma va usata con intelligenza. C&rsquo;è una vena ironica nel modo di comunicare campano che, se coltivata nel tono del brand, può diventare un elemento di riconoscibilità forte. Ma l&rsquo;ironia che non conosce il confine diventa leggerezza percepita come superficialità. Il dosaggio è tutto.
            </p>
            <p>
              La terza: la specificità geografica è un asset, non un limite. Molti imprenditori della provincia di Caserta o di Napoli cercano di neutralizzare la loro identità locale nel tono — vogliono &ldquo;sembrare grandi&rdquo;, vogliono suonare come un&rsquo;azienda di Milano. Nella mia esperienza, è quasi sempre un errore. I clienti locali si fidano di chi parla la loro lingua. E i clienti nazionali che cercano competenza locale apprezzano chi la rivendica con orgoglio, non chi la nasconde.
            </p>

            <h2>Da dove iniziare, concretamente</h2>
            <p>
              Se vuoi iniziare a lavorare sul tone of voice del tuo brand, parti da un esercizio semplice ma potente.
            </p>
            <p>
              Prendi le ultime cinque comunicazioni che hai scritto — un post, un&rsquo;email, una risposta a un cliente, il testo di una pagina web. Leggile come se non sapessi di chi sono. Poi rispondi a queste tre domande:
            </p>
            <p>
              <strong>Una:</strong> si capisce da questa comunicazione che sei tu, o potrebbe averla scritta chiunque nel tuo settore? Se la risposta è &ldquo;chiunque&rdquo;, il tuo tono non ha ancora una personalità riconoscibile.
            </p>
            <p>
              <strong>Due:</strong> il tono di queste cinque comunicazioni è coerente tra loro, o cambia in modo significativo da una all&rsquo;altra? Se la risposta è &ldquo;cambia&rdquo;, il tuo brand manda segnali contraddittori al mercato.
            </p>
            <p>
              <strong>Tre:</strong> il modo in cui scrivi riflette il modo in cui parli di persona con i tuoi clienti migliori? Se la risposta è &ldquo;no, di persona sono molto più diretto e umano&rdquo;, hai trovato il gap da colmare.
            </p>
            <p>
              Queste tre domande bastano per capire a che punto sei. Da lì si costruisce — non un documento, ma un comportamento che diventa riconoscibile nel tempo.
            </p>

          </div>
        </section>

        <section style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Vuoi trovare la tua voce?
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Se hai un business nella provincia di Caserta o Napoli e vuoi lavorare sulla comunicazione del tuo brand, scrivimi.
            </p>
            <a href="/lavora-con-me" className="cta-primary">Parliamo →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
