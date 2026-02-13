import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
};

export default function CookiePolicyPage() {
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
          Cookie Policy
        </h1>
        
        <p className="text-[#73799B] text-sm mb-12">
          Ultimo aggiornamento: 11 Febbraio 2026
        </p>

        <div>
          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            1. Cosa Sono i Cookie
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo terminale (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. Nel corso della navigazione su un sito, l'utente può ricevere sul suo terminale anche cookie di siti o di web server diversi (c.d. cookie di "terze parti"); ciò accade perché sul sito web visitato possono essere presenti elementi come, ad esempio, immagini, mappe, suoni, specifici link a pagine web di altri domini che risiedono su server diversi da quello sul quale si trova la pagina richiesta.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            2. Cookie Utilizzati da Questo Sito
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Questo sito utilizza <span className="font-medium text-white">SOLO cookie tecnici strettamente necessari</span>. Questi cookie sono indispensabili per il corretto funzionamento del sito e per permettere all'utente di navigare e utilizzare i servizi richiesti. <span className="font-medium text-white">NON utilizziamo</span> cookie di profilazione, analytics di terze parti o cookie pubblicitari.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            3. Tipologie di Cookie
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Di seguito sono elencate le tipologie di cookie presenti su questo sito:
          </p>
          <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
            <li>
              <span className="font-medium text-white">Cookie tecnici (necessari):</span> utilizzati per la gestione della sessione e per memorizzare le preferenze di navigazione dell'utente.
              <ul className="list-none pl-6 mt-1">
                <li>• <span className="font-medium text-white">Durata:</span> Sessione (vengono eliminati alla chiusura del browser).</li>
                <li>• <span className="font-medium text-white">Base giuridica:</span> Legittimo interesse del Titolare a garantire il corretto funzionamento del sito.</li>
              </ul>
            </li>
          </ul>
          <p className="text-[#73799B] leading-relaxed mb-4">
            <span className="font-medium text-white">NON utilizziamo:</span> cookie di profilazione, cookie analytics di terze parti, cookie pubblicitari, cookie di social media o tracker di alcun tipo.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            4. Cookie di Terze Parti
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Il sito non incorpora servizi di terze parti che installano cookie propri sul terminale dell'utente. Non sono presenti strumenti come Google Analytics, Facebook Pixel, Hotjar o tracker simili che potrebbero monitorare la tua attività di navigazione.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            5. Base Giuridica (GDPR)
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Ai sensi dell'Art. 5(3) della Direttiva ePrivacy e dell'Art. 6.1.f del GDPR (legittimo interesse), i cookie tecnici non richiedono il preventivo consenso dell'utente in quanto necessari alla fornitura del servizio. Per questo motivo, non mostriamo un banner cookie, poiché non utilizziamo cookie che richiedano il consenso esplicito dell'utente.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            6. Come Gestire i Cookie
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            L'utente può gestire, limitare o disabilitare i cookie modificando le impostazioni del proprio browser. Di seguito i link alle guide dei principali browser:
          </p>
          <ul className="list-disc list-inside text-[#73799B] space-y-2 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63491159-739d-b982-ad46-3b18b80623c0" target="_blank" rel="noopener noreferrer" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">Microsoft Edge</a></li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            7. Diritti dell'Utente
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            In conformità al GDPR, hai il diritto di accedere ai tuoi dati, richiederne la rettifica, la cancellazione o la portabilità. Poiché non raccogliamo dati personali tramite cookie, tali diritti si applicano principalmente ai dati forniti tramite altri canali (es. modulo di contatto). Per qualsiasi richiesta, puoi contattarci a <a href="mailto:info@fl1.cz" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">info@fl1.cz</a>.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            8. Aggiornamenti
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Questa policy può essere aggiornata periodicamente per riflettere modifiche tecniche o normative. Ti invitiamo a verificare regolarmente la data di ultimo aggiornamento indicata in alto.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">
            9. Contatti
          </h2>
          <p className="text-[#73799B] leading-relaxed mb-4">
            Il Titolare del trattamento è <span className="font-medium text-white">Persevida es</span>, con sede a Praga, Repubblica Ceca.
            <br />
            Email: <a href="mailto:info@fl1.cz" className="text-[#4F60FA] hover:text-[#DBE3FF] transition-colors underline">info@fl1.cz</a>
          </p>
        </div>
      </div>
    </section>
  );
}
