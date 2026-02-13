import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termini e Condizioni',
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          href="/" 
          className="text-[#4F60FA] hover:text-[#DBE3FF] text-sm transition-colors mb-8 inline-block"
        >
          ← Torna alla Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Termini e Condizioni
        </h1>
        
        <p className="text-[#73799B] text-sm mb-12">
          Ultimo aggiornamento: 11 Febbraio 2026
        </p>

        <div>
          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            1. Ambito di Applicazione
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            I presenti termini e condizioni regolano l'uso del sito web <span className="font-medium text-white">superchat.fl1.cz</span> e del software <span className="font-medium text-white">SuperChat per Odoo 18</span> fornito da <span className="font-medium text-white">Persevida es</span>. Accedendo al sito o utilizzando il software, l'utente accetta di essere vincolato dai presenti termini.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            2. Descrizione del Servizio
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            <span className="font-medium text-white">SuperChat</span> è un modulo open source per <span className="font-medium text-white">Odoo 18</span> che integra messaggistica multi-canale e automazione CRM. Il presente sito web ha scopo informativo e raccoglie richieste di demo o informazioni tramite il modulo di contatto dedicato.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            3. Licenza Software
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Il software SuperChat è distribuito sotto licenza <span className="font-medium text-white">LGPL-3</span>. Il codice sorgente è disponibile pubblicamente su GitHub. L'utente ha il diritto di utilizzare, modificare e ridistribuire il software nel pieno rispetto dei termini previsti dalla licenza LGPL-3.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            4. Utilizzo del Sito
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            L'utente si impegna a utilizzare il sito web in modo lecito e responsabile. In particolare, è vietato:
          </p>
          <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
            <li>Utilizzare il sito per scopi illeciti o dannosi.</li>
            <li>Inviare dati falsi, incompleti o fuorvianti tramite il modulo di contatto.</li>
            <li>Tentare di accedere in modo non autorizzato a aree riservate o sistemi informatici di <span className="font-medium text-white">Persevida es</span>.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            5. Proprietà Intellettuale
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Il marchio <span className="font-medium text-white">SuperChat</span>, il logo, i contenuti testuali, grafici e il design del sito web sono di proprietà esclusiva di <span className="font-medium text-white">Persevida es</span>. Sebbene il software sia open source, il branding e gli asset grafici del sito restano protetti dalle leggi sulla proprietà intellettuale.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            6. Limitazione di Responsabilità
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            <span className="font-medium text-white">Persevida es</span> fornisce il software "così com'è" (as is), senza alcuna garanzia esplicita o implicita. Non siamo responsabili per eventuali danni diretti o indiretti derivanti dall'uso improprio del software o del sito web. Il servizio web può essere temporaneamente interrotto per interventi di manutenzione o aggiornamento.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            7. Comunicazioni Commerciali
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Inviando il modulo di contatto, l'utente acconsente a essere ricontattato da <span className="font-medium text-white">Persevida es</span> per le finalità indicate nella richiesta (es. demo, preventivo). L'invio di comunicazioni di marketing o newsletter richiede un consenso separato e facoltativo.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            8. Link Esterni
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Il sito può contenere collegamenti a siti web di terze parti. <span className="font-medium text-white">Persevida es</span> non esercita alcun controllo su tali siti e non è responsabile del loro contenuto, delle loro pratiche in materia di privacy o dei termini di utilizzo.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            9. Legge Applicabile e Foro Competente
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            I presenti termini sono regolati e interpretati in conformità con le leggi della <span className="font-medium text-white">Repubblica Ceca</span>. Per qualsiasi controversia derivante dall'interpretazione o dall'esecuzione dei presenti termini, sarà competente in via esclusiva il foro di <span className="font-medium text-white">Praga</span>.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            10. Contatti
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Per qualsiasi domanda o chiarimento in merito ai presenti termini, puoi contattarci all'indirizzo email: <a href="mailto:info@fl1.cz" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">info@fl1.cz</a>.
          </p>
          <p className="text-[#73799B] leading-relaxed mb-4">
            <span className="font-medium text-white">Persevida es</span><br />
            Praga, Repubblica Ceca
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            11. Modifiche
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            <span className="font-medium text-white">Persevida es</span> si riserva il diritto di modificare i presenti termini in qualsiasi momento. Le eventuali modifiche saranno pubblicate su questa pagina e diventeranno effettive immediatamente dopo la pubblicazione. Si consiglia di consultare regolarmente questa sezione.
          </p>
        </div>
      </div>
    </section>
  );
}
