export function Header() {
  return (
    <header className="relative py-6 px-4">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />
      <div className="max-w-[1000px] mx-auto flex items-center justify-between">
        <a
          href="https://avv-stanca-firenze.manus.space"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
        >
          <span className="text-2xl">⚖️</span>
          <div>
            <span className="font-bold text-sm tracking-wide">Avv. Marcello Stanca</span>
            <span className="block text-xs text-white/50">Studio Legale · Firenze</span>
          </div>
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          <a href="#psico-supporto" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
            Psico-Supporto
          </a>
          <a href="#buone-notizie" className="text-sm text-white/60 hover:text-[#00c853] transition-colors">
            Buone Notizie
          </a>
          <a
            href="https://avv-stanca-firenze.manus.space"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-full border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all"
          >
            Sito Principale
          </a>
        </nav>
      </div>
    </header>
  );
}
