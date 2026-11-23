import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Sentirsi perso nel lavoro: il periodo in cui mi sono fermato',
  description: 'Dopo il mio primo progetto fallito mi sono sentito perso nel lavoro per mesi. Cosa mi ha fatto ripartire, e perché fermarsi fa parte del lavoro.',
  keywords: ['sentirsi perso nel lavoro', 'ripartire dopo un fallimento', 'imprenditore fallimento', 'Seneca tempo', 'blocco imprenditore', 'personal brand imprenditore'],
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
                Brand
              </span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Il periodo in cui non sapevo più cosa stavo facendo
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', letterSpacing: '0.06em' }}>
              23 Novembre 2026 · 5 min di lettura
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-surface)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site article-prose" style={{ maxWidth: '760px' }}>
            <p>
              C&apos;è stato un periodo in cui, la mattina, la sveglia suonava, io la spegnevo e restavo a letto a fissare il soffitto, con una domanda che mi girava in testa e a cui ogni giorno rimandavo la risposta: per fare cosa, esattamente?
            </p>
            <p>
              Era il periodo venuto subito dopo il mio primo progetto fallito, un progetto in cui avevo messo entusiasmo, idee, soldi e tanto tempo, e che a un certo punto si è scontrato con la realtà ed è finito. Mi aspettavo la delusione della chiusura; quello che mi ha sorpreso è stato tutto ciò che è arrivato dopo, quei mesi in cui mi sentivo perso nel lavoro proprio mentre un lavoro in cui perdermi mancava del tutto.
            </p>
            <p>
              Te lo racconto perché credo che sia una fase che tantissimi imprenditori e professionisti attraversano in silenzio, soprattutto qui al Sud, dove di un progetto chiuso si parla a bassa voce, al bar, cambiando argomento appena possibile.
            </p>

            <h2>Quella che chiamavo pausa era un rinvio</h2>
            <p>
              Se ripenso a quei mesi, mi tornano in mente sempre le stesse immagini: la sveglia, la promessa che mi facevo ogni mattina di pensarci più tardi, e il pomeriggio che arrivava portandosi via anche quella promessa. Rimandavo le decisioni, rimandavo perfino il momento di capire cosa fosse andato storto, e intanto i giorni scivolavano uno sull&apos;altro.
            </p>
            <p>
              A me stesso dicevo che mi stavo prendendo una pausa, ed era una bugia gentile, di quelle che ci raccontiamo per tirare avanti. Una pausa vera ha una data di fine e uno scopo preciso, che è recuperare energie per ripartire; la mia era un rinvio senza scadenza, e il rinvio ha una caratteristica crudele: invece di restituirti forze, te le toglie un po&apos; alla volta, così ogni mattina passata a letto rende più pesante quella successiva.
            </p>
            <p>
              Se in queste righe ti stai riconoscendo, lascia che ti dica subito la cosa più importante: quello che stai vivendo ha poco a che fare con la pigrizia o con un difetto di carattere. È quello che succede quando l&apos;identità che ti eri costruito attorno a un progetto si rompe e quella nuova deve ancora prendere forma. Sei senza direzione, che è un problema completamente diverso, e chiede una cura diversa.
            </p>

            <h2>Quando sono tornato a Seneca</h2>
            <p>
              A rimettermi in piedi è stato Seneca, un autore che leggevo già da ragazzo, negli anni in cui i miei coetanei leggevano altro e io sfogliavo filosofi e psicologi cercando strumenti più che informazioni. In quei mesi ci sono tornato quasi per abitudine, e mi sono ritrovato davanti a un&apos;idea che conoscevo bene, ma che stavolta mi ha toccato esattamente nel punto in cui ne avevo bisogno.
            </p>
            <p>
              Nel <em>De brevitate vitae</em> Seneca scrive, più o meno, che il tempo che abbiamo a disposizione è abbastanza, e che il vero problema è quanto ne lasciamo scivolare via.
            </p>
            <blockquote>
              Abbiamo tempo a sufficienza. È che ne perdiamo moltissimo.
            </blockquote>
            <p>
              Letta in quel momento, quella frase descriveva esattamente quello che stavo facendo io: lasciavo passare le settimane aspettando di sentirmi pronto, come se la direzione dovesse bussare alla porta una mattina qualunque, mentre ero ancora sotto le coperte.
            </p>
            <p>
              Seneca mi ha lasciato il compito più importante, quello di decidere, e mi ha ricordato che ogni giorno rimandato era un giorno in cui qualcun altro, o semplicemente il caso, decideva al posto mio. Ho ricominciato ad alzarmi da lì, con passi piccoli e lenti, che all&apos;inizio sembravano poca cosa e che invece mi hanno rimesso in movimento.
            </p>

            <h2>Sentirsi perso nel lavoro fa parte del lavoro</h2>
            <p>
              C&apos;è una cosa che ho capito solo molto tempo dopo, ed è il motivo per cui oggi scrivo di quei mesi invece di saltarli quando racconto la mia storia: fermarsi fa parte del lavoro.
            </p>
            <p>
              Parlo dello stallo in sé, della distanza dal fare, e lascio fuori il modo in cui l&apos;ho vissuto io, a letto, rinviando, che sconsiglio a chiunque. Quella distanza, però, mi ha permesso di vedere una cosa che con la testa dentro al progetto restava invisibile, e cioè l&apos;elenco di tutto quello che volevo smettere di fare.
            </p>
            <p>
              Volevo smettere di partire da un&apos;idea sperando che l&apos;entusiasmo bastasse a sostenerla, volevo smettere di improvvisare, e volevo smettere di costruire cose che dipendessero dall&apos;umore con cui mi svegliavo la mattina. Quel periodo che vivevo come un buco era in realtà il momento in cui stavo togliendo le cose sbagliate, e togliere, a volte, è la parte più faticosa del costruire.
            </p>
            <p>
              Più tardi, lavorando con i brand, mi sono accorto che è esattamente lo stesso esercizio che propongo a chi si siede al tavolo con me: prima di decidere cosa dire, decidere cosa smettere di dire; prima di aggiungere, togliere. Il posizionamento di un&apos;impresa nasce quasi sempre da una rinuncia coraggiosa, e lo stesso vale per le persone. Ne ho parlato anche a proposito del <a href="/blog/personal-brand-napoli-imprenditori/">personal brand per imprenditori</a>: la tua storia è fatta anche delle cadute, e spesso sono proprio quelle a renderla credibile.
            </p>

            <h2>Tre cose che avrei voluto sentirmi dire</h2>
            <p>
              Le ricette universali, in questi casi, esistono soprattutto nei post motivazionali, e io diffido di chi le vende. Quello che posso darti sono tre cose che avrei voluto sentirmi dire allora, quando ero io quello che spegneva la sveglia e tornava sotto le coperte.
            </p>
            <h3>Dai un nome a quello che ti sta succedendo</h3>
            <p>
              Dire a te stesso «sono fermo perché ho perso la direzione» è molto diverso dal dirti «sono un incapace»: la prima frase apre una domanda su cui puoi lavorare, la seconda chiude la conversazione prima ancora che cominci.
            </p>
            <h3>Trasforma il rinvio in una pausa vera</h3>
            <p>
              Datti una scadenza, due settimane o un mese, e in quel tempo concediti di produrre zero, a patto di osservare con onestà cosa ti è mancato, cosa ti ha pesato e cosa eviteresti di rifare. Scrivilo, anche in disordine, perché il vuoto messo su carta smette di essere vuoto e diventa materiale da cui ripartire.
            </p>
            <h3>Cerca una voce fuori dalla tua testa</h3>
            <p>
              Nel mio caso è stato un filosofo vissuto quasi duemila anni fa; nel tuo potrebbe essere una persona di cui ti fidi, un libro, una conversazione arrivata al momento giusto. Quando ti senti perso, la tua mente continua a ripeterti le stesse frasi in loop, e quello che ti serve è proprio una frase nuova, che arrivi da fuori.
            </p>

            <h2>Il punto in cui sei adesso è un punto di passaggio</h2>
            <p>
              Oggi il mio modo di lavorare si riassume in una frase: costruisco sistemi, invece di vendere servizi. E un sistema, a pensarci bene, è proprio questo: qualcosa che ti porta avanti anche nelle mattine in cui alzarti ti costa fatica, perché la direzione è già scritta e a te tocca soltanto fare il passo successivo.
            </p>
            <p>
              Se in questo momento sei dentro uno di quei periodi, prenditi il tempo che ti serve, senza fretta. Ti chiedo solo una cosa: chiama le cose con il loro nome. Se è un rinvio, chiamalo rinvio; se è una fase, chiamala fase, e smetti di chiamarla fallimento. Le parole che scegli per raccontarti quello che vivi decidono quanto a lungo ci resterai dentro, e sentirsi perso nel lavoro, il più delle volte, è il primo segnale che stai cercando la tua strada con più serietà di prima.
            </p>

            <p style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
              Se senti che la tua impresa ha perso la direzione e vuoi capire cosa togliere prima di cosa aggiungere, il punto di partenza è la{' '}
              <a href="/diagnosi" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Diagnosi</a>
              .
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Vuoi ritrovare la direzione del tuo brand?
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '480px', margin: '0 auto 2rem' }}>
              Se hai un&apos;impresa a Caserta, Napoli o in Campania e vuoi lavorare sulla direzione del tuo brand, scrivimi.
            </p>
            <a href="/lavora-con-me" className="cta-primary">Parliamo →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
