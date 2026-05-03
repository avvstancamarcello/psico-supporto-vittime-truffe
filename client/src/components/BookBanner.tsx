/**
 * BookBanner — Banner promozionale per il libro "Rischio Trading"
 * Design: Cyber-Forensic Noir — sfondo scuro, accenti cyan/oro
 * Include copertina, testo, badge Kindle gratis, link a 4 librerie
 */

import { BookOpen, Download, ExternalLink } from "lucide-react";

const STORES = [
  {
    name: "Amazon Kindle",
    label: "GRATIS",
    url: "https://www.amazon.it/Rischio-Trading-Attraverso-Strumenti-Recupero-ebook/dp/B0DQRB8VQY",
    highlight: true,
  },
  {
    name: "Amazon Cartaceo",
    label: "Cartaceo",
    url: "https://www.amazon.it/Rischio-Trading-Attraverso-Strumenti-Recupero/dp/B0DXPBJR73",
    highlight: false,
  },
  {
    name: "Mondadori",
    label: "eBook",
    url: "https://www.mondadoristore.it/rischio-trading-kebook-italiano-marcello-stanca/p/9791255181576",
    highlight: false,
  },
  {
    name: "Feltrinelli",
    label: "eBook",
    url: "https://www.lafeltrinelli.it/rischio-trading-manuale-di-attacco-ebook-marcello-stanca/e/9791255181576",
    highlight: false,
  },
  {
    name: "Libraccio",
    label: "Cerca",
    url: "https://www.libraccio.it/cerca?query=rischio+trading+stanca",
    highlight: false,
  },
];

export function BookBanner() {
  return (
    <div className="px-4 py-3 flex justify-center">
      <div className="w-full max-w-[780px] rounded-xl overflow-hidden border border-[#00d4ff]/20 bg-gradient-to-br from-[#0a1628] via-[#0d1a30] to-[#0a1225] shadow-[0_4px_30px_rgba(0,0,0,0.4)]">

        {/* Contenuto principale: copertina + testo */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5">

          {/* Copertina libro */}
          <a
            href="https://www.amazon.it/Rischio-Trading-Attraverso-Strumenti-Recupero-ebook/dp/B0DQRB8VQY"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 self-center sm:self-start group"
          >
            <div className="relative w-[140px] sm:w-[160px]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663587145031/5yj3D9dfw7zdStNbdyMzWk/banner-rischio-trading-real-ZThgApEsBx5xM2ymvWyhvf.webp"
                alt="Copertina Rischio Trading di Avv. Marcello Stanca"
                className="w-full h-auto rounded-lg shadow-[0_8px_25px_rgba(0,0,0,0.5)] group-hover:shadow-[0_8px_30px_rgba(0,212,255,0.2)] transition-shadow duration-300"
              />
              {/* Badge Kindle Gratis */}
              <div className="absolute -top-2 -right-2 bg-[#00c853] text-white text-[10px] font-extrabold uppercase px-2 py-1 rounded-md shadow-lg flex items-center gap-1 tracking-wide">
                <Download className="w-3 h-3" />
                Kindle Gratis
              </div>
            </div>
          </a>

          {/* Testo e CTA */}
          <div className="flex flex-col justify-center text-center sm:text-left min-w-0">
            {/* Badge bestseller */}
            <div className="flex items-center gap-1.5 justify-center sm:justify-start mb-2">
              <span className="text-[#ffd700] text-xs font-bold tracking-wide">#1 BESTSELLER AMAZON</span>
              <span className="text-[#ffd700]">★★★★</span>
              <span className="text-white/40 text-xs">(28)</span>
            </div>

            {/* Titolo */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-1.5">
              RISCHIO TRADING
            </h3>

            {/* Sottotitolo */}
            <p className="text-[#00d4ff] text-sm sm:text-base font-semibold italic leading-snug mb-2">
              Il Manuale di Attacco e Difesa Contro le Truffe del Trading Online
            </p>

            {/* Autore */}
            <p className="text-white/50 text-xs mb-3">
              di <span className="text-white/70 font-medium">Avv. Marcello Stanca</span> — Bruno Editore
            </p>

            {/* Descrizione breve */}
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 max-w-[420px] mx-auto sm:mx-0">
              Strumenti pratici per la tua tutela e per il recupero delle somme versate.
              <span className="text-[#00c853] font-semibold"> Download gratuito su Kindle.</span>
            </p>

            {/* Pulsante principale */}
            <a
              href="https://www.amazon.it/Rischio-Trading-Attraverso-Strumenti-Recupero-ebook/dp/B0DQRB8VQY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#00c853] hover:bg-[#00e676] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,200,83,0.3)] mb-1 w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Scarica GRATIS su Kindle
            </a>
          </div>
        </div>

        {/* Barra librerie */}
        <div className="border-t border-white/[0.06] bg-[#080e1a] px-4 py-2.5">
          <div className="flex items-center justify-center gap-1 flex-wrap">
            <BookOpen className="w-3.5 h-3.5 text-white/30 mr-1 shrink-0" />
            <span className="text-white/30 text-[11px] mr-1.5 shrink-0">Disponibile su:</span>
            {STORES.map((store, i) => (
              <span key={store.name} className="flex items-center">
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[11px] sm:text-xs font-medium transition-colors duration-200 flex items-center gap-0.5 ${
                    store.highlight
                      ? "text-[#00c853] hover:text-[#00e676]"
                      : "text-[#00d4ff]/70 hover:text-[#00d4ff]"
                  }`}
                >
                  {store.name}
                  {store.highlight && (
                    <span className="bg-[#00c853]/20 text-[#00c853] text-[9px] font-bold px-1 py-0.5 rounded ml-0.5">
                      {store.label}
                    </span>
                  )}
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
                {i < STORES.length - 1 && (
                  <span className="text-white/15 mx-1.5">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
