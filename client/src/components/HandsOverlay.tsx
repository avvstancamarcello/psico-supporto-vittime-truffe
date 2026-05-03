/**
 * HandsOverlay — SVG overlay sull'immagine delle mani
 * 1. Cervello rosa (3x) sotto il punto di incontro delle dita
 * 2. Linea elettrica ciano dalla mano destra che avvolge il cervello come scudo (2 loop)
 * 3. Simboli valuta gialli/verdi intorno alla mano rossa (perdite finanziarie)
 */

import { useEffect, useRef, useState } from "react";

export function HandsOverlay() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    // L'animazione dello scudo si ripete 2 volte poi si ferma
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 6000); // 2 loop x 3s = 6s
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 400"
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Glow filter per effetto elettrico */}
        <filter id="electric-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow filter più intenso per lo scudo */}
        <filter id="shield-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow per simboli valuta */}
        <filter id="currency-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ========================================= */}
      {/* 1. CERVELLO ROSA — sotto il punto di incontro delle dita */}
      {/* Posizione: centro orizzontale (~300), sotto le dita (~310) */}
      {/* Dimensione 3x: circa 72x60 */}
      {/* ========================================= */}
      {/* Cervello emoji rosa piena 3x — stessa icona della sezione "Perché è successo a te" */}
      <text
        x="300"
        y="345"
        fontSize="72"
        textAnchor="middle"
        dominantBaseline="central"
        opacity="0.95"
        style={{ filter: "drop-shadow(0 0 8px rgba(255, 107, 157, 0.4))" }}
      >
        🧠
      </text>

      {/* ========================================= */}
      {/* 2. LINEA ELETTRICA CIANO + SCUDO dal dito destro al cervello */}
      {/* Parte dalla punta del dito indice destro (~380, 200) */}
      {/* Scende e avvolge il cervello formando uno scudo */}
      {/* ========================================= */}
      <g filter="url(#electric-glow)">
        {/* Linea elettrica dalla punta del dito al cervello */}
        <path
          d="M 380 195 
             C 370 210, 355 230, 340 260 
             C 330 275, 320 290, 310 305"
          fill="none"
          stroke="#00d4ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={animationDone ? 0.7 : 0}
          className={animationDone ? "" : "animate-none"}
        >
          {!animationDone && (
            <>
              <animate
                attributeName="opacity"
                values="0;0;0.8;0.9;0.7"
                dur="3s"
                repeatCount="2"
                fill="freeze"
              />
              <animate
                attributeName="stroke-dasharray"
                values="0 500;250 250;500 0"
                dur="3s"
                repeatCount="2"
                fill="freeze"
              />
            </>
          )}
        </path>

        {/* Effetto zigzag elettrico sulla linea */}
        <path
          d="M 375 200 L 370 208 L 378 212 L 365 225 L 373 228 L 358 245 L 366 248 L 350 265 L 355 270 L 340 285 L 345 290 L 325 305"
          fill="none"
          stroke="#00d4ff"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity={animationDone ? 0.4 : 0}
        >
          {!animationDone && (
            <animate
              attributeName="opacity"
              values="0;0.3;0.7;0.3;0.6;0.2;0.5"
              dur="3s"
              repeatCount="2"
              fill="freeze"
            />
          )}
        </path>
      </g>

      {/* Scudo protettivo intorno al cervello */}
      <g filter="url(#shield-glow)">
        {/* Arco scudo — forma a scudo che avvolge il cervello */}
        <path
          d="M 265 300 
             C 255 310, 252 325, 258 340 
             C 262 352, 275 362, 300 368 
             C 325 362, 338 352, 342 340 
             C 348 325, 345 310, 335 300
             C 328 293, 315 288, 300 286
             C 285 288, 272 293, 265 300 Z"
          fill="none"
          stroke="#00d4ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={animationDone ? 0.6 : 0}
        >
          {!animationDone && (
            <>
              <animate
                attributeName="opacity"
                values="0;0;0;0.3;0.7;0.9;0.6"
                dur="3s"
                repeatCount="2"
                fill="freeze"
              />
              <animate
                attributeName="stroke-dasharray"
                values="0 400;0 400;100 300;200 200;400 0"
                dur="3s"
                repeatCount="2"
                fill="freeze"
              />
            </>
          )}
        </path>

        {/* Scudo inner glow */}
        <path
          d="M 270 304 
             C 262 312, 259 324, 264 336 
             C 267 346, 278 354, 300 359 
             C 322 354, 333 346, 336 336 
             C 341 324, 338 312, 330 304
             C 324 298, 314 294, 300 292
             C 286 294, 276 298, 270 304 Z"
          fill="#00d4ff"
          opacity={animationDone ? 0.06 : 0}
        >
          {!animationDone && (
            <animate
              attributeName="opacity"
              values="0;0;0;0;0.04;0.08;0.06"
              dur="3s"
              repeatCount="2"
              fill="freeze"
            />
          )}
        </path>

        {/* Piccole scintille sullo scudo */}
        {[
          { cx: 260, cy: 315, delay: "0.5s" },
          { cx: 340, cy: 315, delay: "1s" },
          { cx: 300, cy: 370, delay: "1.5s" },
          { cx: 270, cy: 345, delay: "2s" },
          { cx: 330, cy: 345, delay: "2.5s" },
        ].map((spark, i) => (
          <circle
            key={`spark-${i}`}
            cx={spark.cx}
            cy={spark.cy}
            r="2"
            fill="#00d4ff"
            opacity={animationDone ? 0.3 : 0}
          >
            {!animationDone && (
              <animate
                attributeName="opacity"
                values="0;0;0.8;0;0.6;0"
                dur="1.5s"
                begin={spark.delay}
                repeatCount="4"
                fill="freeze"
              />
            )}
          </circle>
        ))}
      </g>

      {/* ========================================= */}
      {/* 3. SIMBOLI VALUTA intorno alla mano rossa (sinistra) */}
      {/* Piccoli €, $, £, ₿ gialli e verdi — evocano perdite */}
      {/* Posizionati sopra e sotto il polso sinistro */}
      {/* ========================================= */}
      <g filter="url(#currency-glow)">
        {/* Sopra il polso sinistro */}
        <text x="85" y="145" fontSize="14" fill="#ffd700" opacity="0.7" fontFamily="monospace" fontWeight="bold">€</text>
        <text x="55" y="170" fontSize="11" fill="#4ade80" opacity="0.6" fontFamily="monospace" fontWeight="bold">$</text>
        <text x="110" y="125" fontSize="10" fill="#ffd700" opacity="0.5" fontFamily="monospace" fontWeight="bold">£</text>
        <text x="130" y="155" fontSize="12" fill="#4ade80" opacity="0.65" fontFamily="monospace" fontWeight="bold">₿</text>
        <text x="65" y="130" fontSize="9" fill="#ffd700" opacity="0.45" fontFamily="monospace" fontWeight="bold">€</text>
        <text x="100" y="160" fontSize="10" fill="#4ade80" opacity="0.5" fontFamily="monospace" fontWeight="bold">$</text>

        {/* Sotto il polso sinistro */}
        <text x="60" y="280" fontSize="12" fill="#ffd700" opacity="0.6" fontFamily="monospace" fontWeight="bold">$</text>
        <text x="90" y="305" fontSize="14" fill="#4ade80" opacity="0.7" fontFamily="monospace" fontWeight="bold">€</text>
        <text x="40" y="260" fontSize="10" fill="#ffd700" opacity="0.5" fontFamily="monospace" fontWeight="bold">₿</text>
        <text x="115" y="285" fontSize="11" fill="#4ade80" opacity="0.55" fontFamily="monospace" fontWeight="bold">£</text>
        <text x="70" y="320" fontSize="9" fill="#ffd700" opacity="0.45" fontFamily="monospace" fontWeight="bold">$</text>
        <text x="45" y="295" fontSize="10" fill="#4ade80" opacity="0.5" fontFamily="monospace" fontWeight="bold">€</text>

        {/* Animazione di caduta lenta per evocare le perdite */}
        {[
          { symbol: "€", x: 80, y: 140, size: 13, color: "#ffd700", dur: "4s", delay: "0s" },
          { symbol: "$", x: 50, y: 180, size: 11, color: "#4ade80", dur: "5s", delay: "0.5s" },
          { symbol: "₿", x: 120, y: 150, size: 12, color: "#ffd700", dur: "4.5s", delay: "1s" },
          { symbol: "£", x: 95, y: 120, size: 10, color: "#4ade80", dur: "5.5s", delay: "1.5s" },
          { symbol: "€", x: 65, y: 250, size: 11, color: "#ffd700", dur: "4s", delay: "0.3s" },
          { symbol: "$", x: 100, y: 290, size: 13, color: "#4ade80", dur: "5s", delay: "0.8s" },
        ].map((item, i) => (
          <text
            key={`falling-${i}`}
            x={item.x}
            y={item.y}
            fontSize={item.size}
            fill={item.color}
            opacity="0"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {item.symbol}
            <animate
              attributeName="opacity"
              values="0;0.6;0.4;0.7;0.3;0"
              dur={item.dur}
              begin={item.delay}
              repeatCount="3"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;0 15;0 30"
              dur={item.dur}
              begin={item.delay}
              repeatCount="3"
              fill="freeze"
            />
          </text>
        ))}
      </g>
    </svg>
  );
}
