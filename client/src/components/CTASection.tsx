export function CTASection() {
  return (
    <section className="py-12 px-4 sm:px-5">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center py-12 px-5 rounded-3xl border border-[#00d4ff]/12 animate-fadeInUp" style={{ background: "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.08) 0%, transparent 70%)" }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Inizia il tuo percorso di guarigione
          </h2>
          <p className="text-base text-white/60 mb-8 max-w-[500px] mx-auto">
            Parla con il nostro assistente AI. È gratuito, riservato, e disponibile adesso.
          </p>
          <a
            href="https://manus.space/share/tutelatruffe.it?replay=false"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-br from-[#00d4ff] to-[#0099cc] text-[#0a0a1a] text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_45px_rgba(0,212,255,0.45)] shadow-[0_8px_30px_rgba(0,212,255,0.3)]"
          >
            <span className="text-xl">💬</span>
            Avvia Psico-Supporto
          </a>
          <p className="mt-5 text-sm text-white/40">
            Chat di supporto psicologico AI &bull; Non sostituisce un percorso terapeutico professionale
          </p>
          <div className="inline-flex items-center gap-2 mt-3 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white/60">
            📖 Basato su: <strong className="text-white">&nbsp;"Rischio Trading"&nbsp;</strong> — Avv. M. Stanca (Bruno Editore)
          </div>
        </div>
      </div>
    </section>
  );
}
