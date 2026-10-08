import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Come creare contenuti con l\'AI senza sembrare un robot | Antonio Andreozzi',
  description: 'Come usare l\'AI per creare contenuti autentici a Napoli e Caserta senza perdere la tua voce. Metodi pratici per PMI e freelancer campani.',
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
              Come creare contenuti con l&apos;AI senza sembrare un robot
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              L&apos;AI può fare molto. Ma se la usi male, i tuoi contenuti sembrano scritti da chiunque — e quindi da nessuno. Ecco come evitarlo.
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
              <span>Antonio Andreozzi</span>
              <span>·</span>
              <span>24 settembre 2026</span>
              <span>·</span>
              <span>8 min di lettura</span>
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
              Aprire uno strumento AI e chiedere &quot;scrivi un post per Instagram sulla mia attività&quot; è la cosa più semplice che si possa fare. È anche la cosa che produce contenuti più anonima, piatta e interscambiabile che esista.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Se stai cercando di costruire un brand riconoscibile a Caserta, a Napoli, o in qualsiasi altra città del Sud Italia, il problema non è se usare l&apos;AI. Il problema è <em>come</em> usarla senza che si veda che è lei a parlare.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              Lavoro con PMI e professionisti locali da anni. Ho visto cosa succede quando si delega tutto all&apos;AI senza criterio: si perde la voce, si perdono i clienti, si perde la fiducia. Ma ho anche visto cosa succede quando si usa l&apos;AI con intelligenza: si scala la produzione senza sacrificare l&apos;identità.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Il problema reale con l&apos;AI nei contenuti
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Il problema non è l&apos;AI in sé. È che la maggior parte delle persone la usa come se fosse uno <strong>stampino</strong>: inserisce un input generico e si aspetta un output autentico. Non funziona così.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              L&apos;AI lavora con quello che gli dai. Se le dai poco, ti restituisce poco — ma in forma elegante, il che è ancora peggio. Un contenuto brutto è ignorato. Un contenuto anonimo ma ben scritto viene pubblicato, e trasforma piano piano il tuo brand in qualcosa che tutti i tuoi concorrenti potrebbero firmare.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              Ho visto titolari di piccole imprese di Caserta pubblicare per sei mesi contenuti AI che sembravano usciti da un manuale di marketing americano anni &apos;90. Ottimizzati, corretti grammaticalmente, totalmente irriconoscibili. Nessuna traccia della persona dietro il business.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              La distinzione che cambia tutto: input vs output
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Esiste una regola semplice che uso con tutti i clienti: <strong>più sei specifico nell&apos;input, più sei tu nell&apos;output</strong>.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Non chiedere &quot;scrivi un post sull&apos;importanza del brand&quot;. Dì all&apos;AI: &quot;Scrivi un post partendo da questa storia che mi è capitata questa settimana con un cliente di Caserta [racconta la storia]. Il mio tono è diretto ma caldo, senza inglesismi. Il mio pubblico sono titolari di PMI che non vogliono sentirsi vendere qualcosa.&quot;
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              La differenza tra questi due approcci non è tecnica. È strategica. Nel primo caso stai chiedendo all&apos;AI di inventare qualcosa per te. Nel secondo le stai chiedendo di aiutarti a dire meglio qualcosa che hai già vissuto.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              Il contenuto di valore non nasce dall&apos;AI. Nasce dalla tua esperienza, dai tuoi clienti, dai problemi che risolvi ogni giorno. L&apos;AI è lo strumento con cui lo trasformi in qualcosa di pubblicabile.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Il metodo che uso: materia prima umana, forma AI
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Il modo in cui lavoro — sia per me che per i clienti — si basa su una distinzione precisa: io fornisco la materia prima, l&apos;AI si occupa della forma.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              La materia prima sono cose che solo tu puoi dare:
            </p>

            <ul style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Una storia vera capitata questa settimana</li>
              <li style={{ marginBottom: '0.5rem' }}>Un&apos;opinione non ovvia su un tema del tuo settore</li>
              <li style={{ marginBottom: '0.5rem' }}>Una domanda che ti fa un cliente in modo ricorrente</li>
              <li style={{ marginBottom: '0.5rem' }}>Un errore che hai fatto e da cui hai imparato</li>
              <li style={{ marginBottom: '0.5rem' }}>Un punto di vista che contraddice il pensiero comune nel tuo campo</li>
            </ul>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              Quando parti da qui, l&apos;AI non può renderti generico. Stai già partendo da qualcosa di specifico. Il suo lavoro è strutturarlo, renderlo leggibile, adattarlo al canale. Il tuo lavoro è non delegarle la parte più importante: l&apos;idea.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Tre errori comuni che vedo a Napoli e Caserta
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Lavorando con professionisti e PMI del territorio, questi sono gli errori che vedo ripetere con più frequenza:
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              <strong>1. Pubblicare senza rileggere.</strong> L&apos;AI produce testo fluido. Quella fluidità può mascherare frasi che tu non diresti mai. Il passaggio finale deve essere sempre tuo: leggi ad alta voce, senti se ti riconosci. Se qualcosa suona strano, cambialo. L&apos;AI suggerisce, tu decidi.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1rem' }}>
              <strong>2. Usare prompt identici ogni settimana.</strong> Se il prompt è sempre lo stesso, il risultato sarà sempre lo stesso. Porta ogni volta qualcosa di nuovo: una notizia recente, un caso cliente specifico, una domanda che ti sei fatto. L&apos;AI lavora meglio con materiale fresco.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem', marginTop: '1rem' }}>
              <strong>3. Non istruire mai l&apos;AI sul tuo tono.</strong> Se non le spieghi come parli, inventa. Dai un documento con 5-10 esempi di testi tuoi. Descrivi il tuo pubblico. Indica cosa non dici mai. Questo &quot;briefing&quot; iniziale vale per tutto il tempo che userai quello strumento.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Cosa l&apos;AI non può fare al posto tuo
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Esiste una categoria di contenuti che l&apos;AI non può produrre efficacemente: i contenuti che derivano dalla tua presenza fisica nel territorio. Se sei un commercialista di Caserta che segue aziende locali, le storie che conosci, i problemi specifici del tessuto imprenditoriale campano, la relazione con certi settori produttivi — nessun modello AI ha accesso a questo.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Questo è il tuo vantaggio competitivo. Non la capacità di scrivere meglio di ChatGPT. Quello non puoi vincerlo. Ma la conoscenza del contesto locale, del cliente specifico, del problema reale — quello è irriproducibile.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              I professionisti che usano l&apos;AI meglio che conosco non sono quelli che la usano di più. Sono quelli che capiscono dove finisce la macchina e dove cominciano loro.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Un sistema pratico per chi vuole iniziare
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Se vuoi iniziare a usare l&apos;AI per i contenuti senza perdere la tua voce, ti suggerisco questo schema semplice:
            </p>

            <ol style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><strong>Raccogli materia prima ogni settimana.</strong> Tieni un note con storie, osservazioni, domande dei clienti. 5 minuti al giorno. Questo è il tuo giacimento.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Scrivi un briefing del tuo tono.</strong> Un documento di una pagina: come parli, cosa non dici mai, chi legge i tuoi contenuti. Condividilo con l&apos;AI ogni volta che apri una sessione nuova.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Usa l&apos;AI per strutturare, non per inventare.</strong> Porta il tuo punto di partenza, chiedi aiuto con la forma. Non il contrario.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Riléggi sempre ad alta voce.</strong> Se non ti riconosci in una frase, toglila. Non importa quanto suoni bene.</li>
            </ol>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '2rem' }}>
              Non è un sistema complicato. Ma è la differenza tra usare l&apos;AI per scalare la tua voce e usarla per sostituirla.
            </p>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'var(--font-space-grotesk)', marginBottom: '1rem', marginTop: '2.5rem' }}>
              Cosa succede se lo fai bene
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Se applichi questo approccio, succede qualcosa di interessante: produci di più, ma i tuoi contenuti sembrano più tuoi di prima. Perché ti costringi a estrarre osservazioni reali, a formulare punti di vista, a raccontare storie vere. L&apos;AI diventa una specie di editor veloce che ti aiuta a non sprecare quelle osservazioni.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Ho clienti a Napoli e Caserta che in sei mesi hanno triplicato la produzione di contenuti senza assumere nessuno e senza perdere il riconoscimento del pubblico che si erano costruiti. Non perché abbiano trovato un trucco. Perché hanno capito la distinzione tra strumento e voce.
            </p>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '3rem' }}>
              L&apos;AI non ti renderà robotico se non la usi come se fossi un robot. Se la usi come un professionista — portando la tua esperienza, il tuo territorio, le tue storie — resterà sempre chiaro chi c&apos;è dietro quelle parole.
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
