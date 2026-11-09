import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Diagnosi di brand: perché la tua PMI non cresce',
  description: 'Prima del budget 2027, una diagnosi di brand: cinque domande per capire se il blocco della tua PMI sta nel posizionamento, nel messaggio o nel sistema.',
  keywords: ['diagnosi di brand', 'audit brand Napoli', 'analisi marketing PMI Campania', 'perché la mia azienda non cresce', 'problemi crescita business locale', 'budget marketing 2027 PMI', 'diagnosi brand Caserta'],
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
                Posizionamento
              </span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Diagnosi di brand: prima di decidere il budget del 2027, scopri cosa ti sta fermando
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', letterSpacing: '0.06em' }}>
              9 Novembre 2026 · 8 min di lettura
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-surface)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site article-prose" style={{ maxWidth: '760px' }}>
            <p>
              Se quest&apos;anno hai rifatto il sito, pagato qualcuno per i social, provato le sponsorizzate, e a novembre non sai dire con certezza cosa ha funzionato, questo articolo è per te. Non ti serve un&apos;altra idea per il 2027. Ti serve una diagnosi di brand: capire dove si blocca davvero la tua impresa, prima di scegliere dove mettere i soldi.
            </p>
            <p>
              Lo so che a fine anno la tentazione è un&apos;altra. Si apre il foglio del budget, si guarda la cifra dell&apos;anno scorso, si aggiunge o si toglie qualcosa, e si decide per voci: tanto al sito, tanto ai social, tanto alla pubblicità. È un modo ordinato di ripetere gli stessi errori con cifre diverse. Perché un budget risponde alla domanda “quanto?”, e la domanda che manca è un&apos;altra: “per curare cosa?”.
            </p>
            <p>
              In questo articolo ti propongo cinque domande da farti prima di firmare qualsiasi preventivo, e un modo per leggere le risposte. Non ti serve un software. Ti servono un pomeriggio, i dati che hai già e la disponibilità a sentirti dire qualcosa che non ti piace.
            </p>

            <h2>Perché la tua impresa non cresce: il sintomo non è la causa</h2>
            <p>
              Quasi tutti gli imprenditori descrivono il problema con la stessa frase: “mi mancano i clienti”. È una frase vera e quasi inutile, come dire al medico “non sto bene”. Dietro la stessa frase possono esserci problemi che non hanno niente in comune.
            </p>
            <p>
              Può darsi che le persone non ti conoscano. Può darsi che ti conoscano e non capiscano perché dovrebbero scegliere te. Può darsi che ti scelgano le persone sbagliate, quelle che tirano sul prezzo e spariscono. Può darsi che i contatti arrivino e si perdano perché nessuno li richiama entro sera. Quattro situazioni diverse, una sola lamentela. E ognuna, curata con la medicina di un&apos;altra, peggiora.
            </p>
            <p>
              Più pubblicità su un messaggio confuso porta più persone a non capirti. Un sito nuovo su un&apos;offerta uguale a quella di tutti è un modo elegante di restare uguale a tutti. Ne ho scritto guardando un caso specifico, quello di <a href="/blog/ecommerce-non-vende-brand-caserta-napoli/">un e-commerce che non vende</a>: il sito è spesso il colpevole più comodo, perché è l&apos;unica cosa che ha un preventivo.
            </p>
            <blockquote>
              Comprare una soluzione prima di avere una diagnosi è il modo più costoso di evitare una domanda.
            </blockquote>

            <h2>Spendere di più non significa sapere dove</h2>
            <p>
              I numeri sulle piccole imprese italiane raccontano bene questa distanza tra il fare e il capire. Secondo l&apos;Osservatorio Innovazione Digitale nelle PMI del Politecnico di Milano, in un&apos;analisi pubblicata su Agenda Digitale a luglio 2026, nel 2025 una PMI su due ha aumentato la spesa per la trasformazione digitale rispetto all&apos;anno prima. Solo il 24%, però, dice di investire intensamente nel digitale, e il 22% lo considera marginale per il proprio settore. L&apos;articolo non riporta campione e metodo, quindi li prendo come indicazioni e non come misure esatte.
            </p>
            <p>
              Il dato che a me colpisce di più è un altro. Sempre secondo l&apos;Osservatorio, il 90% delle PMI analizza i propri dati, ma in modo discontinuo e non formalizzato, spesso con un foglio Excel. Tradotto: i numeri esistono, ma quasi nessuno li interroga con una domanda precisa e con regolarità. Si guardano quando le cose vanno male, cioè quando è più difficile leggerli con lucidità.
            </p>
            <p>
              Attenzione: questi dati parlano di digitale in senso ampio, non di brand né di marketing. Non dimostrano che le PMI sbaglino a investire. Mostrano però un&apos;abitudine, quella di spendere prima di aver stabilito come si capirà se è servito, e ho l&apos;impressione, che non ha un numero dietro, che valga anche per le scelte di comunicazione.
            </p>

            <h2>Diagnosi di brand: le cinque domande da farti prima del budget</h2>
            <p>
              Un audit di brand, nei manuali, è un documento lungo. Per un&apos;impresa piccola il cuore sta in cinque domande. Rispondi per iscritto: quello che resta nella testa si aggiusta da solo.
            </p>
            <h3>Chi ti ha scelto quest&apos;anno, e perché proprio te?</h3>
            <p>
              Prendi gli ultimi dieci clienti che ti hanno dato soddisfazione e margine. Telefona a tre o quattro di loro e chiedi: “Cosa cercavi quando mi hai trovato? Chi altro avevi considerato? Cosa ti ha convinto?”. Ascolta le parole esatte. Spesso scoprirai che ti scelgono per una ragione che sul tuo sito non compare.
            </p>
            <h3>Saprebbero spiegarti a un amico in una frase?</h3>
            <p>
              Chiedi ai clienti, ai collaboratori, a tuo cognato. Se ognuno dice una cosa diversa, il problema non è la visibilità. Non puoi aspettarti che ti ricordino se nemmeno chi ti conosce bene sa riassumerti. È il tema di <a href="/blog/perche-brand-non-viene-ricordato-caserta-napoli/">perché un brand non viene ricordato</a>, e di solito è il primo nodo che viene fuori.
            </p>
            <h3>Se copri il tuo nome, si capisce che sei tu?</h3>
            <p>
              Apri il tuo sito e quello di due concorrenti. Copri i loghi. Leggi le prime righe. Se sono intercambiabili, stai competendo sul prezzo anche se non lo hai deciso, perché quando tutto il resto sembra uguale il prezzo è l&apos;unica differenza rimasta da guardare.
            </p>
            <h3>A chi hai detto di no?</h3>
            <p>
              È la domanda che misura il posizionamento con più onestà. Se quest&apos;anno hai accettato qualsiasi lavoro da chiunque, probabilmente non hai una posizione: hai una disponibilità. Non è un giudizio morale, a volte serve per pagare gli stipendi. Però va chiamata col suo nome.
            </p>
            <h3>Dove si perdono le persone?</h3>
            <p>
              Disegna il percorso reale, dal primo contatto alla fattura. Quante richieste sono arrivate, quante hanno avuto risposta in giornata, quante sono diventate un preventivo, quante un incasso. Se non riesci a ricostruirlo nemmeno a spanne, hai già trovato una cosa da sistemare. E chiediti da dove arrivano i clienti migliori: chiederlo a ognuno, e scriverlo, costa zero e vale più di molti cruscotti.
            </p>

            <h2>Come si leggono le risposte: quattro problemi, quattro cure</h2>
            <p>
              Le risposte, messe in fila, di solito indicano in modo abbastanza chiaro uno di questi blocchi. Può essercene più di uno. Conta capire qual è il primo, perché gli altri spesso dipendono da lui.
            </p>
            <ul>
              <li><strong>Problema di posizionamento.</strong> Fai un buon lavoro, ma per tutti e per nessuno in particolare. I clienti ti confrontano sul prezzo. La cura è una scelta: per chi lavori, su quale problema, con quale differenza. Non si compra, si decide.</li>
              <li><strong>Problema di messaggio.</strong> La scelta c&apos;è, ma non si sente. I clienti scoprono il tuo valore solo dopo averti provato. Qui si lavora su parole, tono, pagine.</li>
              <li><strong>Problema di offerta.</strong> Ti capiscono, ma quello che proponi è difficile da comprare: troppe opzioni, prezzo opaco, nessun punto d&apos;ingresso chiaro.</li>
              <li><strong>Problema di sistema.</strong> Il messaggio funziona e i contatti arrivano, ma dipende tutto da te. Si perdono richieste, non si richiama, si pubblica solo quando c&apos;è tempo.</li>
            </ul>
            <p>
              Solo quando tutto questo regge ha senso porsi il problema della visibilità, cioè più pubblicità e più contenuti. Il <a href="/blog/posizionamento-di-marca-caserta-napoli/">posizionamento di marca</a> sta in cima alla lista per una ragione semplice: è la decisione da cui dipendono tutte le altre. Una spesa in pubblicità amplifica quello che sei già. Se sei confuso, amplifica la confusione.
            </p>

            <h2>Caserta, Napoli e la Campania: quando il passaparola nasconde il problema</h2>
            <p>
              Da noi c&apos;è una complicazione in più, e secondo me è anche una fortuna. Molte imprese campane sono cresciute con il passaparola, e il passaparola è un brand che nessuno ha mai scritto. Finché funziona, non hai alcun motivo di chiederti perché funziona.
            </p>
            <p>
              Il guaio arriva quando rallenta, per ragioni che magari non dipendono da te: il cliente storico che chiude, il figlio che prende il posto del padre e cerca fornitori su Google, un concorrente nuovo che apre sulla Nazionale. A quel punto cerchi di tradurre online qualcosa che non hai mai messo in parole, e finisci per scrivere “qualità, esperienza, professionalità”, che è quello che scrivono tutti gli altri.
            </p>
            <p>
              Pensa a una falegnameria dell&apos;Agro aversano che lavora da trent&apos;anni con gli stessi architetti. Ai loro occhi è quella che risolve i lavori impossibili sui centri storici, dove niente è in squadra. Sul suo sito c&apos;è scritto “arredamenti su misura”. Una diagnosi, in questo scenario, non scoprirebbe nulla di nuovo: tirerebbe fuori quello che gli architetti già sanno e che nessuno ha mai scritto. O pensa a uno studio di consulenza del lavoro a Napoli con clienti soprattutto nella ristorazione: finché lo dice solo a voce, resta uno studio tra i tanti del quartiere. Sono esempi immaginari, ma il meccanismo lo puoi verificare sulla tua impresa in un pomeriggio.
            </p>
            <p>
              Ecco perché qui l&apos;analisi di marketing di una PMI ha spesso meno a che fare con gli strumenti e più con l&apos;archeologia. C&apos;è già qualcosa di valore, sepolto sotto anni di abitudini. Il lavoro è portarlo alla luce e dargli un nome, prima che chi lo custodiva nella memoria smetta di parlarne in giro.
            </p>

            <h2>Dalla diagnosi al budget: tre decisioni per il 2027</h2>
            <p>
              Una diagnosi che finisce in un cassetto è solo un modo più sofisticato di rimandare. Deve produrre decisioni, e per una piccola impresa bastano tre.
            </p>
            <p>
              <strong>Una priorità sola.</strong> Scegli il blocco che viene prima di tutti gli altri e dagli i primi mesi dell&apos;anno. Se il problema è di posizionamento, la campagna può aspettare. So che aspettare sembra perdere tempo: è il contrario, perché ogni euro speso prima di quella scelta va ricomprato dopo.
            </p>
            <p>
              <strong>Una cosa da smettere.</strong> Ogni budget è pieno di voci che esistono perché esistevano l&apos;anno scorso. Trovane una che non sai difendere e toglila. Il servizio social che nessuno controlla, il gestionale che nessuno apre, la sponsorizzazione fatta per dire di sì a un amico. Fare spazio è già una strategia.
            </p>
            <p>
              <strong>Un numero da guardare ogni mese.</strong> Uno solo, scelto ora: richieste qualificate, preventivi accettati, clienti arrivati su consiglio. Non serve una dashboard. Serve una riga scritta il primo del mese, sempre uguale, così che a novembre dell&apos;anno prossimo tu non debba di nuovo tirare a indovinare.
            </p>
            <p>
              È questo che intendo quando dico che non si vendono servizi ma si costruiscono sistemi. La diagnosi di brand non è un evento da fare una volta: è l&apos;abitudine di chiedersi cosa stia succedendo davvero, prima di reagire. Le imprese che durano non sono necessariamente quelle che spendono di più. Sono quelle che sanno perché spendono.
            </p>
            <p>
              Hai ancora qualche settimana prima che il 2027 cominci a decidere al posto tuo. Un pomeriggio, cinque domande, tre telefonate. È poco, rispetto a un altro anno passato a curare il sintomo sbagliato.
            </p>

            <p style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
              Se preferisci fare questo lavoro con uno sguardo esterno, in tre ore insieme e con un report scritto che mette in ordine le priorità, il punto di partenza è la{' '}
              <a href="/diagnosi" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Diagnosi</a>
              .
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--bg-void)', borderTop: '1px solid var(--border)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="container-site" style={{ maxWidth: '760px', textAlign: 'center' }}>
            <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Sai qual è il primo problema da risolvere nel 2027?
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '480px', margin: '0 auto 2rem' }}>
              Se hai un&apos;impresa a Caserta, Napoli o in Campania e vuoi capire cosa sta fermando la sua crescita, scrivimi.
            </p>
            <a href="/lavora-con-me" className="cta-primary">Parliamo →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
