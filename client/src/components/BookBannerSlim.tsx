/**
 * BookBannerSlim — Banner orizzontale ridotto formato AdSense (728x90)
 * Copertina libro a sinistra, rivenditori a destra
 * "Gratis su Kindle eBook" in evidenza
 */

import { Download, ExternalLink } from "lucide-react";

export function BookBannerSlim() {
  return (
    <div className="px-4 py-4 flex justify-center">
      <div className="w-full max-w-[728px] h-auto rounded-lg overflow-hidden border border-[#00d4ff]/15 bg-gradient-to-r from-[#0a1628] to-[#0d1a30] shadow-[0_2px_15px_rgba(0,0,0,0.3)] hover:border-[#00d4ff]/30 transition-all duration-300">
        <div className="flex items-center gap-3 p-2.5 sm:p-3">

          {/* Copertina libro — sinistra */}
          <a
            href="https://www.amazon.it/Rischio-Trading-Attraverso-Strumenti-Recupero-ebook/dp/B0DQRB8VQY"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663587145031/5yj3D9dfw7zdStNbdyMzWk/banner-rischio-trading-real-ZThgApEsBx5xM2ymvWyhvf.webp"
              alt="Rischio Trading"
              className="w-[60px] sm:w-[72px] h-auto rounded shadow-md"
            />
          </a>

          {/* Contenuto centrale + destra */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0 flex-1">

            {/* Titolo + badge gratis */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs sm:text-sm font-extrabold text-white leading-tight truncate">
                  RISCHIO TRADING
                </span>
                <span className="inline-flex items-center gap-0.5 bg-[#00c853] text-white text-[9px] sm:text-[10px] font-bold uppercase px-1.5 py-0.5 rounded whitespace-nowrap">
                  <Download className="w-2.5 h-2.5" />
                  Gratis Kindle eBook
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-white/40 mt-0.5 truncate">
                Avv. Marcello Stanca · Bruno Editore · ★★★★ (28)
              </p>
            </div>

            {/* Rivenditori — destra */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap shrink-0">
              <StoreLink name="Kindle" url="https://www.amazon.it/Rischio-Trading-Attraverso-Strumenti-Recupero-ebook/dp/B0DQRB8VQY" highlight />
              <StoreLink name="Amazon" url="https://www.amazon.it/Rischio-Trading-Attraverso-Strumenti-Recupero/dp/B0DXPBJR73" />
              <StoreLink name="Mondadori" url="https://www.mondadoristore.it/rischio-trading-kebook-italiano-marcello-stanca/p/9791255181576" />
              <StoreLink name="Feltrinelli" url="https://www.lafeltrinelli.it/rischio-trading-manuale-di-attacco-ebook-marcello-stanca/e/9791255181576" />
              <StoreLink name="Libraccio" url="https://www.libraccio.it/cerca?query=rischio+trading+stanca" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreLink({ name, url, highlight = false }: { name: string; url: string; highlight?: boolean }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-0.5 text-[10px] sm:text-[11px] font-semibold transition-colors duration-200 ${
        highlight
          ? "text-[#00c853] hover:text-[#00e676]"
          : "text-[#00d4ff]/60 hover:text-[#00d4ff]"
      }`}
    >
      {name}
      <ExternalLink className="w-2 h-2 opacity-50" />
    </a>
  );
}
