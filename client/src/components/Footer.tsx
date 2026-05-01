export function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-white/5">
      <div className="max-w-[1000px] mx-auto text-center">
        <div className="mb-4">
          <a
            href="https://avv-stanca-firenze.manus.space"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-lg">⚖️</span>
            <span className="font-semibold text-sm">Avv. Marcello Stanca — Studio Legale Firenze</span>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-sm text-white/50">
          <span>Via V. Bellini 63, Firenze</span>
          <span className="hidden sm:inline">·</span>
          <a href="tel:0554628901" className="hover:text-[#00d4ff] transition-colors">055 4628901</a>
          <span className="hidden sm:inline">·</span>
          <a href="mailto:avvocatostancamarcello@gmail.com" className="hover:text-[#00d4ff] transition-colors">
            avvocatostancamarcello@gmail.com
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm">
          <a
            href="https://avv-stanca-firenze.manus.space"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00d4ff]/70 hover:text-[#00d4ff] transition-colors"
          >
            Sito Principale
          </a>
          <a
            href="https://tutelatruffe.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00d4ff]/70 hover:text-[#00d4ff] transition-colors"
          >
            TutelaTruffe.it
          </a>
        </div>
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Studio Legale Avv. Marcello Stanca — Tutti i diritti riservati
        </p>
        <p className="text-xs text-white/20 mt-2">
          Il servizio di Psico-Supporto AI non sostituisce un percorso terapeutico professionale.
          Per emergenze psicologiche contattare il Telefono Amico (02 2327 2327) o il 112.
        </p>
      </div>
    </footer>
  );
}
