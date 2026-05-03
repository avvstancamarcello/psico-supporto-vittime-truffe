/**
 * SectionNav — Menu navigazione a pallini stile tastiera Olivetti
 * Pallini colorati (gialli, verdi, rossi) numerati, senza titoli
 * Posizionato fisso sul lato destro dello schermo
 */

import { useState, useEffect } from "react";

interface Section {
  id: string;
  number: number;
  color: "yellow" | "green" | "red";
  label: string; // tooltip solo
}

const SECTIONS: Section[] = [
  { id: "sez-titolo", number: 1, color: "yellow", label: "Titolo" },
  { id: "sez-perche", number: 2, color: "yellow", label: "Perché è successo" },
  { id: "sez-tecniche", number: 3, color: "red", label: "Tecniche di manipolazione" },
  { id: "sez-citazione", number: 4, color: "yellow", label: "Citazione" },
  { id: "sez-aiuto", number: 5, color: "green", label: "Come ti aiutiamo" },
  { id: "sez-team", number: 6, color: "green", label: "Il Team" },
  { id: "sez-petizioni", number: 7, color: "yellow", label: "Petizioni UE" },
  { id: "sez-buone-notizie", number: 8, color: "green", label: "Buone Notizie" },
  { id: "sez-statistiche", number: 9, color: "green", label: "Statistiche" },
  { id: "sez-cta", number: 10, color: "red", label: "Avvia Psico-Supporto" },
];

const TOTAL = SECTIONS.length;

const COLOR_MAP = {
  yellow: {
    bg: "#ffd700",
    border: "#b8960a",
    shadow: "rgba(255,215,0,0.4)",
    text: "#1a1a00",
  },
  green: {
    bg: "#00c853",
    border: "#009640",
    shadow: "rgba(0,200,83,0.4)",
    text: "#001a0a",
  },
  red: {
    bg: "#ff4444",
    border: "#cc2222",
    shadow: "rgba(255,68,68,0.4)",
    text: "#1a0000",
  },
};

export function SectionNav() {
  const [activeId, setActiveId] = useState<string>("sez-titolo");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeSection = SECTIONS.find((s) => s.id === activeId);
  const currentNum = activeSection?.number ?? 1;

  return (
    <nav
      className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-1.5"
      aria-label="Navigazione sezioni"
    >
      {/* Indicatore pagina corrente */}
      <div className="mb-2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2 py-1 text-center">
        <span className="text-[10px] font-mono font-bold text-white/80 tabular-nums">
          {currentNum}/{TOTAL}
        </span>
      </div>

      {SECTIONS.map((section) => {
        const colors = COLOR_MAP[section.color];
        const isActive = section.id === activeId;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            title={`${section.number}. ${section.label}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group relative flex items-center justify-center transition-all duration-200"
            style={{
              width: isActive ? 28 : 22,
              height: isActive ? 28 : 22,
            }}
          >
            {/* Tasto Olivetti — cerchio con bordo rialzato e numero */}
            <span
              className="flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                width: "100%",
                height: "100%",
                background: isActive
                  ? colors.bg
                  : `${colors.bg}33`,
                border: `2px solid ${isActive ? colors.border : `${colors.bg}55`}`,
                boxShadow: isActive
                  ? `0 2px 8px ${colors.shadow}, inset 0 1px 2px rgba(255,255,255,0.3)`
                  : `inset 0 1px 2px rgba(255,255,255,0.1)`,
                fontSize: isActive ? 11 : 9,
                fontWeight: 800,
                color: isActive ? colors.text : `${colors.bg}`,
                fontFamily: "'Courier New', Courier, monospace",
                letterSpacing: "-0.5px",
              }}
            >
              {section.number}
            </span>

            {/* Tooltip on hover */}
            <span className="absolute right-full mr-2 px-2 py-1 bg-black/80 backdrop-blur-sm text-white text-[10px] font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {section.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

/**
 * SectionLabel — Indicatore "Sezione N di M" per ogni sezione
 */
export function SectionLabel({ number, color = "cyan" }: { number: number; color?: string }) {
  const colorClass =
    color === "green" ? "text-[#00c853] border-[#00c853]/20" :
    color === "gold" ? "text-[#ffd700] border-[#ffd700]/20" :
    "text-[#00d4ff] border-[#00d4ff]/20";

  return (
    <div className={`flex items-center gap-2 mb-3 ${colorClass}`}>
      <span className={`text-[10px] font-mono font-bold uppercase tracking-[2px] opacity-60 border rounded-full px-2.5 py-0.5`}>
        Sezione {number} di {TOTAL}
      </span>
    </div>
  );
}
