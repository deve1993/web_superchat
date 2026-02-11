import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
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
          Informativa sulla Privacy
        </h1>
        
        <p className="text-[#73799B] text-sm mb-12">
          Ultimo aggiornamento: 11 Febbraio 2026
        </p>

        <div>
          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            1. Titolare del Trattamento
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Il Titolare del trattamento dei dati è <span className="font-medium text-white">Persevida sro</span>, con sede legale a Praga, Repubblica Ceca. Per qualsiasi domanda riguardante la presente informativa o il trattamento dei tuoi dati, puoi contattarci all'indirizzo email: <a href="mailto:info@fl1.cz" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">info@fl1.cz</a>.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            2. Tipologia di Dati Raccolti
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Attraverso questo sito web, raccogliamo le seguenti tipologie di dati:
          </p>
          <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
            <li><span className="font-medium text-white">Dati forniti volontariamente:</span> Nome, indirizzo email, numero di telefono, nome dell'azienda e messaggio inviato tramite il modulo di contatto.</li>
            <li><span className="font-medium text-white">Dati di navigazione:</span> Indirizzo IP, tipo di browser, pagine visitate, tempo di permanenza e altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            3. Finalità del Trattamento
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            I tuoi dati vengono trattati per le seguenti finalità:
          </p>
          <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
            <li>Rispondere alle richieste di informazioni inviate tramite il modulo di contatto.</li>
            <li>Inviare i dati raccolti al nostro sistema <span className="font-medium text-white">Odoo CRM</span> per la gestione dei lead e delle opportunità commerciali.</li>
            <li>Inviare comunicazioni commerciali o newsletter, solo previo tuo esplicito consenso.</li>
            <li>Garantire la sicurezza del sito e prevenire frodi o abusi.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            4. Base Giuridica del Trattamento
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Trattiamo i tuoi dati basandoci sulle seguenti basi giuridiche previste dal GDPR:
          </p>
          <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
            <li><span className="font-medium text-white">Consenso (Art. 6.1.a):</span> Per l'invio di comunicazioni di marketing.</li>
            <li><span className="font-medium text-white">Esecuzione di misure precontrattuali (Art. 6.1.b):</span> Per rispondere alle tue richieste di preventivo o informazioni.</li>
            <li><span className="font-medium text-white">Legittimo interesse (Art. 6.1.f):</span> Per il miglioramento dei nostri servizi e la sicurezza del sito web.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            5. Destinatari dei Dati
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            I tuoi dati personali non saranno venduti o ceduti a terzi. Potranno essere condivisi solo con:
          </p>
          <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
            <li>Personale autorizzato di <span className="font-medium text-white">Persevida sro</span>.</li>
            <li>Fornitori di servizi tecnologici necessari al funzionamento del sito e del CRM (es. Odoo).</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            6. Trasferimento dei Dati Extra-UE
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            I dati sono conservati su server situati all'interno dell'Unione Europea. Non effettuiamo trasferimenti di dati personali verso paesi al di fuori dello Spazio Economico Europeo (SEE).
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            7. Periodo di Conservazione
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Conserviamo i dati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:
          </p>
          <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
            <li><span className="font-medium text-white">Dati del modulo di contatto:</span> 24 mesi dalla raccolta, salvo instaurazione di un rapporto contrattuale.</li>
            <li><span className="font-medium text-white">Dati di navigazione:</span> 12 mesi.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            8. Diritti dell'Interessato
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            In conformità al GDPR, hai il diritto di:
          </p>
          <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
            <li>Accedere ai tuoi dati personali.</li>
            <li>Chiedere la rettifica o la cancellazione dei dati.</li>
            <li>Richiedere la limitazione del trattamento.</li>
            <li>Opporti al trattamento per motivi legittimi.</li>
            <li>Richiedere la portabilità dei dati.</li>
          </ul>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Per esercitare questi diritti, puoi inviare una richiesta a <a href="mailto:info@fl1.cz" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">info@fl1.cz</a>.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            9. Cookie Policy
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Questo sito utilizza esclusivamente <span className="font-medium text-white">cookie tecnici</span> necessari al corretto funzionamento delle pagine. Non utilizziamo cookie di profilazione o di tracciamento di terze parti per finalità pubblicitarie.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            10. Modifiche alla presente Informativa
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Il Titolare si riserva il diritto di apportare modifiche alla presente informativa in qualunque momento. Si prega di consultare regolarmente questa pagina, facendo riferimento alla data di ultimo aggiornamento indicata in alto.
          </p>
        </div>
      </div>
    </section>
  );
}
