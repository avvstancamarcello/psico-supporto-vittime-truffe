/**
 * PsicoSupportoSection — Sezione principale con anchor su ogni sotto-sezione
 * Numerazione "Sezione N di 10" su ogni blocco
 * Banner libro slim inserito dopo "Perché è successo proprio a me"
 */

import { SectionLabel } from "@/components/SectionNav";
import { BookBannerSlim } from "@/components/BookBannerSlim";

export function PsicoSupportoSection() {
  return (
    <section id="psico-supporto" className="pt-4 pb-16 sm:pb-20 px-4 sm:px-5 relative overflow-hidden" aria-label="Psico-Supporto alle vittime di truffe finanziarie online">
      <div className="max-w-[1000px] mx-auto">

        {/* === SEZ 1: Titolo === */}
        <div id="sez-titolo" className="scroll-mt-24">
          <SectionLabel number={1} />
          <header className="text-center mb-5 animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-0 leading-tight">
              Psico-Supporto alle <span className="text-[#00d4ff]">Vittime di Truffe</span>
            </h1>
            <p className="text-sm text-white/30 mt-2">Assistenza gratuita per vittime di truffe finanziarie e trading online fraudolento</p>
          </header>

          {/* Immagine mani */}
          <div className="flex justify-center mb-6 animate-fadeInUp">
            <div className="w-full max-w-[600px] rounded-2xl overflow-hidden border border-[#00d4ff]/15">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663587145031/5yj3D9dfw7zdStNbdyMzWk/hands-reaching-cN3pQFt7yYdnix6UuNvKPL.webp"
                alt="Psico-supporto vittime truffe finanziarie online - due mani che si tendono in segno di aiuto e solidarietà"
                loading="eager"
                width="600"
                height="400"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Sottotitoli */}
          <div className="text-center mb-6 animate-fadeInUp">
            <p className="text-lg sm:text-xl text-white/60 italic font-bold max-w-[600px] mx-auto leading-relaxed">
              Capire il "perché"<br />
              è il primo passo per guarire
            </p>
          </div>

          {/* Frase chiave */}
          <div className="text-center mb-10 animate-fadeInUp">
            <span className="block text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent leading-snug">
              Non sei stato ingenuo. Sei stato manipolato da professionisti dell'inganno.
            </span>
          </div>
        </div>

        {/* === SEZ 2: Perché è successo === */}
        <div id="sez-perche" className="scroll-mt-24">
          <SectionLabel number={2} />
          <div className="bg-[#00d4ff]/[0.04] border border-[#00d4ff]/15 rounded-2xl p-8 mb-8 text-center animate-fadeInUp animation-delay-100">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl">🧠</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Perché è successo a te</h2>
            </div>
            <p className="text-base text-white/75 max-w-[800px] mx-auto">
              I truffatori finanziari non agiscono a caso. Sono <strong className="text-white">professionisti della manipolazione cognitiva</strong> che
              sfruttano vulnerabilità psicologiche universali — le stesse che colpiscono medici, avvocati, imprenditori e
              professori universitari. Sei stato vittima di una truffa finanziaria online e ti chiedi{" "}
              <span className="text-[#00d4ff] font-semibold">"perché è successo proprio a me?"</span>{" "}
              Non sei solo. Migliaia di persone intelligenti e capaci vengono manipolate ogni giorno
              da organizzazioni criminali che utilizzano tecniche psicologiche sofisticate,
              studiate per aggirare le difese razionali di chiunque.
            </p>
          </div>
        </div>

        {/* === BANNER LIBRO SLIM — dopo "Perché è successo" === */}
        <BookBannerSlim />

        {/* === SEZ 3: Tecniche di manipolazione === */}
        <div id="sez-tecniche" className="scroll-mt-24 mt-4">
          <SectionLabel number={3} color="gold" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            <TechniqueCard
              icon="🧠"
              title="Ipnosi Cognitiva"
              description="Come uno spettatore sul palco di un mentalista, sei stato guidato passo dopo passo in uno stato di suggestione. Il primo piccolo versamento ha aperto la porta: da quel momento, il truffatore è diventato il «coreografo» della tua volontà."
              delay={100}
            />
            <TechniqueCard
              icon="🌊"
              title="Sovraccarico Informativo"
              description="Un fiume incessante di chiamate, messaggi, grafici e dati ha saturato la tua mente cosciente. Quando il cervello è in overload, smette di filtrare criticamente le informazioni e accetta passivamente le intromissioni."
              delay={200}
            />
            <TechniqueCard
              icon="🎮"
              title="Gamification"
              description="Grafici colorati, candele monetarie, numeri che danzano sullo schermo: ti hanno fatto sentire protagonista di un videogioco. L'app sul tuo telefono era in realtà un «monitor del tuo stato di intossicazione da trading»."
              delay={300}
            />
            <TechniqueCard
              icon="🤝"
              title="Falsa Intimità"
              description="Il «consulente» ti chiamava per nome, ti dava del tu, telefonava ogni giorno alla stessa ora. Ha creato un imprinting quotidiano — un rapporto di fiducia artificiale che non avresti mai concesso a uno sconosciuto incontrato di persona."
              delay={400}
            />
            <TechniqueCard
              icon="🏦"
              title="Isolamento dalla Banca"
              description="Ti hanno convinto che la tua banca fosse incompetente o in malafede. Quando la banca ha bloccato un bonifico sospetto, tu ti sei arrabbiato con lei anziché sospettare la truffa. Un «veleno psicologico» somministrato con successo."
              delay={500}
            />
            <TechniqueCard
              icon="🎁"
              title="Trappola del Bonus"
              description="Il raddoppio del capitale (bonus 100%) ti ha fatto credere che l'azienda rischiasse insieme a te. In realtà, quei fondi erano fittizi: servivano solo a vincolarti, impedendoti di prelevare finché non avessi versato ancora di più."
              delay={500}
            />
          </div>
        </div>

        {/* === SEZ 4: Citazione === */}
        <div id="sez-citazione" className="scroll-mt-24">
          <SectionLabel number={4} />
          <div className="border-l-4 border-[#00d4ff] py-5 px-6 my-8 bg-[#00d4ff]/[0.04] rounded-r-xl animate-fadeInUp">
            <p className="text-lg italic text-white/90 mb-2">
              "Lo spettatore che è arrivato a questo punto dello spettacolo è in balia della suggestione.
              Non ragiona più con la sua testa. Non controlla più la sua volontà. Accetta il gioco..."
            </p>
            <cite className="text-sm text-[#00d4ff] not-italic">
              — Avv. Marcello Stanca, "Rischio Trading" (Bruno Editore)
            </cite>
          </div>
        </div>

        {/* === SEZ 5: Come ti aiutiamo === */}
        <div id="sez-aiuto" className="scroll-mt-24">
          <SectionLabel number={5} color="green" />
          <div className="mb-12 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">💜</span>
              <h2 className="text-2xl font-bold text-white">Come ti aiutiamo</h2>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <p className="text-base text-white/75 mb-6">
                Il nostro servizio di <strong className="text-white">Psico-Supporto</strong> è una chat di assistenza psicologica
                gestita da un assistente AI specificamente addestrato dall'Avv. Marcello Stanca,
                basato sui contenuti del suo Best Seller "Rischio Trading" (Amazon Kindle, Bruno Editore).
                Non sostituisce un terapeuta, ma ti offre un primo, fondamentale supporto.
              </p>
              <ul className="space-y-0">
                <HelpItem
                  icon="💡"
                  title="De-colpevolizzazione"
                  text="Smettila di crearti sensi di colpa. Non sei stato ingenuo: sei stato manipolato da professionisti dell'inganno che hanno studiato per anni come aggirare le difese psicologiche delle persone. Nessuno ti ha mai insegnato a difenderti da queste tecniche."
                />
                <HelpItem
                  icon="🔎"
                  title="Comprensione dei meccanismi"
                  text="Ti spieghiamo esattamente quali tecniche sono state usate contro di te: ipnosi cognitiva, sovraccarico informativo, gamification, creazione di falsa intimità, isolamento istituzionale. Capire il «come» dissolve la vergogna."
                />
                <HelpItem
                  icon="🫂"
                  title="Supporto emotivo"
                  text="Ti accompagniamo nel percorso di recupero: dalla rabbia iniziale alla trasformazione in azione costruttiva. La tua rabbia deve diventare astuzia per identificare il sistema dei truffatori e contrattaccare."
                />
                <HelpItem
                  icon="🛠"
                  title="Indicazioni per il recupero"
                  text="Ti forniamo consigli pratici per riprendere il controllo: regolare il sonno, gestire l'ansia, raccogliere prove per la denuncia, e trasformarti da vittima passiva a investigatore attivo della tua truffa."
                />
              </ul>
            </div>
          </div>
        </div>

        {/* === SEZ 6: Il Team === */}
        <div id="sez-team" className="scroll-mt-24">
          <SectionLabel number={6} color="green" />
          <div className="bg-gradient-to-br from-[#00d4ff]/[0.06] to-[#0064c8]/[0.04] border border-[#00d4ff]/20 rounded-2xl p-9 mb-12 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
              <span>👥</span> Il Team
            </h2>
            <p className="text-base text-white/75 mb-3">
              Il servizio di Psico-Supporto è sviluppato e supervisionato dall'<strong className="text-white">Avv. Marcello Stanca</strong>,
              giurista specializzato nella tutela delle vittime di truffe finanziarie online e autore del Best Seller{" "}
              <em>"Rischio Trading — La Truffa Informatica del Trading Online"</em> (Amazon Kindle, Bruno Editore).
            </p>
            <p className="text-base text-white/75 mb-6">
              L'assistente AI è stato addestrato sui contenuti del libro e sulla casistica reale
              seguita dallo Studio Legale, per offrire un supporto psicologico di primo livello
              che sia immediatamente accessibile, gratuito e riservato.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <TeamFeature icon="⚖️" text="Supervisione legale qualificata" />
              <TeamFeature icon="🔒" text="Riservatezza garantita" />
              <TeamFeature icon="🎁" text="Consulenza gratuita" />
              <TeamFeature icon="⏱" text="Disponibile 24/7" />
            </div>
          </div>
        </div>

        {/* === SEZ 7: Petizioni === */}
        <div id="sez-petizioni" className="scroll-mt-24">
          <SectionLabel number={7} color="gold" />
          <div className="bg-[#ffc800]/[0.04] border border-[#ffc800]/15 rounded-2xl p-7 mb-12 animate-fadeInUp">
            <h3 className="text-lg font-bold text-[#ffd700] mb-3 flex items-center gap-2">
              <span>🏛️</span> Petizioni al Parlamento Europeo
            </h3>
            <p className="text-[0.95rem] text-white/75 leading-relaxed">
              L'Avv. Marcello Stanca ha presentato al Parlamento Europeo le Petizioni
              n. <span className="inline-block bg-[#ffd700]/12 border border-[#ffd700]/30 rounded px-2 py-0.5 font-mono font-bold text-[#ffd700] text-sm">0888/2024</span> e
              n. <span className="inline-block bg-[#ffd700]/12 border border-[#ffd700]/30 rounded px-2 py-0.5 font-mono font-bold text-[#ffd700] text-sm">0645/2025</span>,
              chiedendo l'adozione di normative che obblighino le banche a proteggere attivamente i propri clienti
              dalle truffe finanziarie online. Le petizioni evidenziano come gli istituti di credito,
              pur disponendo degli strumenti per individuare operazioni sospette, spesso omettano
              di intervenire tempestivamente, lasciando i risparmiatori esposti alla manipolazione
              di organizzazioni criminali internazionali.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function TechniqueCard({ icon, title, description, delay }: { icon: string; title: string; description: string; delay: number }) {
  return (
    <div
      className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:border-[#00d4ff]/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,212,255,0.08)] animate-fadeInUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00d4ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="text-4xl block mb-3">{icon}</span>
      <h3 className="text-base font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}

function HelpItem({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <li className="flex items-start gap-3 py-4 border-b border-white/5 last:border-b-0 list-none">
      <span className="text-xl shrink-0 mt-0.5">{icon}</span>
      <div className="text-[0.95rem] text-white/75">
        <strong className="text-white block mb-1">{title}</strong>
        {text}
      </div>
    </li>
  );
}

function TeamFeature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 py-3 px-4 bg-black/20 rounded-lg">
      <span className="text-xl">{icon}</span>
      <span className="text-sm text-white/90 font-medium">{text}</span>
    </div>
  );
}
