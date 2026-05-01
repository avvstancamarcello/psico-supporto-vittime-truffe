export function BuoneNotizieSection() {
  return (
    <section id="buone-notizie" className="py-16 sm:py-20 px-4 sm:px-5 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto">

        {/* Header */}
        <header className="text-center mb-10 animate-fadeInUp">
          <div className="inline-block bg-[#00c853]/10 border border-[#00c853]/30 rounded-full px-5 py-2 text-xs text-[#00c853] uppercase tracking-[2px] mb-4">
            Giustizia in Azione
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
            I Truffatori Vengono <span className="text-[#00c853]">Catturati</span>
          </h2>
          <p className="text-lg text-white/60 italic max-w-[650px] mx-auto">
            La giustizia funziona. Le Forze dell'Ordine combattono ogni giorno per proteggere le vittime e recuperare i fondi sottratti.
          </p>
        </header>

        {/* Intro */}
        <div className="text-center mb-8 p-5 bg-[#00c853]/[0.04] border border-[#00c853]/12 rounded-2xl animate-fadeInUp">
          <p className="text-base text-white/75 max-w-[750px] mx-auto">
            Polizia Postale, Carabinieri, Guardia di Finanza ed Europol stanno ottenendo{" "}
            <strong className="text-[#00c853]">risultati straordinari</strong> nella lotta contro le truffe finanziarie online.
            Ecco alcuni dei casi più recenti e significativi.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <NewsCard
            icon="🕵"
            operation='Operazione "Trade Scam"'
            title="Smantellata rete di falso trading online"
            date="Dicembre 2024"
            authority="Polizia Postale di Torino"
            description="Indagine durata oltre 2 anni: la Polizia Postale ha smantellato un'organizzazione criminale che attirava vittime con banner pubblicitari di società di investimento inesistenti. I fondi venivano trasferiti su conti esteri e convertiti in criptovalute."
            results={["2 arresti a Tirana", "4 milioni € sequestrati", "Coordinamento Eurojust"]}
            delay={100}
          />
          <NewsCard
            icon="🏦"
            operation='Operazione "Cagliostro"'
            title="Maxi-sequestro di criptovalute: record italiano"
            date="Aprile 2026"
            authority="Polizia di Stato + Guardia di Finanza"
            description="Il più grande sequestro di criptovalute mai effettuato in Italia. Indagini congiunte di Polizia Postale e GdF di Bologna hanno smantellato lo Schema Ponzi «Voltaiko» che aveva coinvolto circa 6.000 risparmiatori con false promesse di investimenti nel fotovoltaico."
            results={["7,5 milioni $ in crypto", "95 conti congelati", "2 ville + lingotti d'oro"]}
            delay={200}
          />
          <NewsCard
            icon="🌐"
            operation="Europol – Call Centre Albania"
            title="Smantellati call centre fraudolenti da 50 milioni"
            date="Aprile 2026"
            authority="Europol + Eurojust + Austria + Albania"
            description="Operazione internazionale ha smantellato una rete con fino a 450 dipendenti in call centre a Tirana. I falsi broker operavano in italiano, tedesco, inglese, greco e spagnolo, causando danni per almeno 50 milioni di euro alle vittime in tutta Europa."
            results={["10 arresti", "891.735 € in contanti", "443 computer + 238 telefoni"]}
            delay={300}
          />
          <NewsCard
            icon="⚗️"
            operation="Europol – Crypto Fraud Network"
            title="Rete di frode crypto da 700 milioni smantellata"
            date="Ottobre-Novembre 2025"
            authority="Europol + 8 Paesi europei + Israele"
            description="Operazione internazionale su larga scala ha smantellato una rete che aveva riciclato oltre 700 milioni di euro tramite piattaforme fraudolente di investimento in criptovalute. La seconda fase ha colpito anche l'infrastruttura di marketing con deepfake."
            results={["9 arresti in 3 Paesi", "1,5 milioni € sequestrati", "700M € di flussi illeciti"]}
            delay={400}
          />
          <NewsCard
            icon="🔍"
            operation="Europol – Investment Scam"
            title="Piattaforma di trading fraudolenta chiusa"
            date="Maggio 2025"
            authority="Europol + Germania + Cipro + Albania + Israele"
            description="Smantellato gruppo criminale che aveva truffato oltre 100 vittime per più di 3 milioni di euro con una piattaforma di trading online fasulla. I falsi broker usavano grafici manipolati e pressione psicologica per estorcere investimenti sempre più consistenti."
            results={["1 arresto a Cipro", "8 perquisizioni simultanee", "3 milioni € di danni accertati"]}
            delay={500}
          />
          <NewsCard
            icon="📊"
            operation="Report Polizia Postale 2025"
            title="Un anno di lotta al cybercrime finanziario"
            date="Anno 2025 (report gennaio 2026)"
            authority="Polizia Postale – Dati nazionali"
            description="Il Report annuale 2025 della Polizia Postale conferma un impegno senza precedenti: oltre 27.000 casi di cybercrime economico-finanziario trattati, con migliaia di persone indagate e centinaia di arresti. L'uso dell'AI e dei deepfake da parte dei truffatori ha reso necessarie nuove strategie investigative."
            results={["293 arresti totali", "7.590 denunciati", "27.085 casi finanziari"]}
            delay={500}
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 animate-fadeInUp">
          <StatBlock number="293" label="Arresti nel 2025" />
          <StatBlock number="7.590" label="Persone denunciate" />
          <StatBlock number="700M+" label="Euro di flussi illeciti intercettati" />
          <StatBlock number="51.560" label="Casi trattati nel 2025" />
        </div>

        {/* Final Message */}
        <div className="text-center p-7 bg-gradient-to-br from-[#00c853]/[0.06] to-[#009640]/[0.04] border border-[#00c853]/20 rounded-2xl animate-fadeInUp">
          <p className="text-lg text-white/90 mb-3 leading-relaxed">
            I truffatori non sono invincibili. Vengono <strong className="text-[#00c853]">identificati</strong>,{" "}
            <strong className="text-[#00c853]">arrestati</strong> e i loro beni vengono <strong className="text-[#00c853]">sequestrati</strong>.
            Ogni denuncia fornisce alle Forze dell'Ordine informazioni preziose per ricostruire
            le reti criminali e colpirle al cuore.
          </p>
          <p className="text-lg text-white/90 mb-3 leading-relaxed">
            Non restare in silenzio. La tua testimonianza può essere il tassello mancante
            di un'indagine già in corso.
          </p>
          <span className="block mt-3 text-xl font-bold bg-gradient-to-r from-[#00c853] to-[#00e676] bg-clip-text text-transparent">
            Ogni denuncia conta. La tua denuncia potrebbe essere quella decisiva.
          </span>
        </div>

      </div>
    </section>
  );
}

function NewsCard({
  icon,
  operation,
  title,
  date,
  authority,
  description,
  results,
  delay,
}: {
  icon: string;
  operation: string;
  title: string;
  date: string;
  authority: string;
  description: string;
  results: string[];
  delay: number;
}) {
  return (
    <div
      className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-[#00c853]/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,200,83,0.08)] animate-fadeInUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00c853] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="text-3xl block mb-2">{icon}</span>
      <div className="text-xs text-[#00c853] uppercase tracking-[1.5px] mb-1 font-semibold">{operation}</div>
      <h3 className="text-base font-bold text-white mb-2">{title}</h3>
      <div className="text-xs text-white/40 mb-2 flex flex-wrap gap-2">
        <span className="flex items-center gap-1">📅 {date}</span>
        <span className="flex items-center gap-1">🚔 {authority}</span>
      </div>
      <p className="text-sm text-white/60 leading-relaxed mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {results.map((result, i) => (
          <span
            key={i}
            className="inline-block bg-[#00c853]/[0.08] border border-[#00c853]/20 rounded px-2.5 py-1 text-xs text-[#00c853] font-semibold"
          >
            {result}
          </span>
        ))}
      </div>
    </div>
  );
}

function StatBlock({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center py-5 px-4 bg-[#00c853]/[0.04] border border-[#00c853]/15 rounded-xl">
      <span className="block text-2xl sm:text-3xl font-extrabold text-[#00c853] mb-1">{number}</span>
      <span className="text-xs text-white/60 uppercase tracking-wide">{label}</span>
    </div>
  );
}
