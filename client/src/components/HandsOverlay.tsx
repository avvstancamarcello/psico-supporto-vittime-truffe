/**
 * HandsOverlay — SVG overlay sull'immagine delle mani
 * 1. Cervello rosa emoji 3x — spostato 30px in alto rispetto alla versione precedente
 * 2. Linea elettrica ciano + scudo allargato (senza contatto col cervello) — 2 loop
 * 3. Simboli valuta gialli/verdi intorno alla mano rossa (perdite finanziarie)
 * 4. Post-loop: scudo "MS Financial Defense" a destra + mano rossa a sinistra
 *
 * Le immagini post-loop sono WebP ottimizzate (5-7KB) e non degradano la velocità.
 * Su mobile usano versioni ancora più piccole (2-3KB).
 */

import { useEffect, useState } from "react";

export function HandsOverlay() {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 6000); // 2 loop x 3s = 6s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* SVG Layer — animazioni */}
      <svg
        viewBox="0 0 600 400"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="electric-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="shield-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="currency-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ========================================= */}
        {/* 1. CERVELLO ROSA EMOJI 3x — spostato 30px in alto (y: 345 → 315) */}
        {/* ========================================= */}
        <text
          x="300"
          y="315"
          fontSize="72"
          textAnchor="middle"
          dominantBaseline="central"
          opacity="0.95"
          style={{ filter: "drop-shadow(0 0 8px rgba(255, 107, 157, 0.4))" }}
        >
          🧠
        </text>

        {/* ========================================= */}
        {/* 2. LINEA ELETTRICA CIANO + SCUDO (allargato, senza contatto col cervello) */}
        {/* ========================================= */}
        <g filter="url(#electric-glow)">
          {/* Linea elettrica dalla punta del dito — termina più in alto */}
          <path
            d="M 380 195 
               C 370 210, 360 225, 350 245 
               C 340 260, 330 270, 320 280"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={animationDone ? 0.7 : 0}
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
                  values="0 400;200 200;400 0"
                  dur="3s"
                  repeatCount="2"
                  fill="freeze"
                />
              </>
            )}
          </path>

          {/* Effetto zigzag elettrico */}
          <path
            d="M 375 200 L 370 208 L 378 212 L 365 225 L 373 228 L 358 245 L 366 248 L 350 260 L 345 268 L 330 278"
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

        {/* Scudo protettivo — ridotto del 10% (scale 0.9 centrato su 300,310) */}
        <g filter="url(#shield-glow)" transform="translate(300, 310) scale(0.9) translate(-300, -310)">
          <path
            d="M 245 270 
               C 230 285, 225 305, 232 325 
               C 238 342, 255 358, 300 365 
               C 345 358, 362 342, 368 325 
               C 375 305, 370 285, 355 270
               C 345 260, 325 254, 300 252
               C 275 254, 255 260, 245 270 Z"
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
                  values="0 500;0 500;150 350;300 200;500 0"
                  dur="3s"
                  repeatCount="2"
                  fill="freeze"
                />
              </>
            )}
          </path>

          {/* Scudo inner glow — ridotto 10% */}
          <path
            d="M 252 275 
               C 238 288, 234 306, 240 322 
               C 245 336, 260 350, 300 356 
               C 340 350, 355 336, 360 322 
               C 366 306, 362 288, 348 275
               C 340 266, 322 261, 300 259
               C 278 261, 260 266, 252 275 Z"
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

          {/* Scintille */}
          {[
            { cx: 240, cy: 290, delay: "0.5s" },
            { cx: 360, cy: 290, delay: "1s" },
            { cx: 300, cy: 368, delay: "1.5s" },
            { cx: 250, cy: 335, delay: "2s" },
            { cx: 350, cy: 335, delay: "2.5s" },
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
        {/* 3. SIMBOLI VALUTA intorno alla mano rossa */}
        {/* ========================================= */}
        <g filter="url(#currency-glow)">
          <text x="85" y="145" fontSize="14" fill="#ffd700" opacity="0.7" fontFamily="monospace" fontWeight="bold">€</text>
          <text x="55" y="170" fontSize="11" fill="#4ade80" opacity="0.6" fontFamily="monospace" fontWeight="bold">$</text>
          <text x="110" y="125" fontSize="10" fill="#ffd700" opacity="0.5" fontFamily="monospace" fontWeight="bold">£</text>
          <text x="130" y="155" fontSize="12" fill="#4ade80" opacity="0.65" fontFamily="monospace" fontWeight="bold">₿</text>
          <text x="65" y="130" fontSize="9" fill="#ffd700" opacity="0.45" fontFamily="monospace" fontWeight="bold">€</text>
          <text x="100" y="160" fontSize="10" fill="#4ade80" opacity="0.5" fontFamily="monospace" fontWeight="bold">$</text>

          <text x="60" y="280" fontSize="12" fill="#ffd700" opacity="0.6" fontFamily="monospace" fontWeight="bold">$</text>
          <text x="90" y="305" fontSize="14" fill="#4ade80" opacity="0.7" fontFamily="monospace" fontWeight="bold">€</text>
          <text x="40" y="260" fontSize="10" fill="#ffd700" opacity="0.5" fontFamily="monospace" fontWeight="bold">₿</text>
          <text x="115" y="285" fontSize="11" fill="#4ade80" opacity="0.55" fontFamily="monospace" fontWeight="bold">£</text>
          <text x="70" y="320" fontSize="9" fill="#ffd700" opacity="0.45" fontFamily="monospace" fontWeight="bold">$</text>
          <text x="45" y="295" fontSize="10" fill="#4ade80" opacity="0.5" fontFamily="monospace" fontWeight="bold">€</text>

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

      {/* ========================================= */}
      {/* 4. IMMAGINI POST-LOOP — compaiono dopo la fine dell'animazione */}
      {/* Scudo "MS Financial Defense" a destra, mano rossa a sinistra */}
      {/* WebP ottimizzate, responsive con srcSet */}
      {/* ========================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          animationDone ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Mano rossa che si ferma — area centrale superiore, a destra dello scudo */}
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/manus-storage/redhand-mobile_fb50b80a.webp"
          />
          <img
            src="/manus-storage/redhand-desktop_01cd5e23.webp"
            alt="Mano rossa criminale che si ferma davanti allo scudo"
            className="absolute top-[8%] left-[50%] -translate-x-1/2 w-[30%] sm:w-[26%] rounded-lg opacity-85 drop-shadow-[0_0_12px_rgba(255,50,50,0.5)]"
            loading="lazy"
            width="170"
            height="150"
          />
        </picture>

        {/* Scudo MS Financial Defense — posizionato a destra */}
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/manus-storage/shield-mobile_9a3188a9.webp"
          />
          <img
            src="/manus-storage/shield-desktop_b8780f63.webp"
            alt="Scudo MS Financial Defense - protezione finanziaria"
            className="absolute bottom-[8%] right-[5%] w-[25%] sm:w-[22%] rounded-lg opacity-90 drop-shadow-[0_0_12px_rgba(0,100,255,0.5)]"
            loading="lazy"
            width="170"
            height="180"
          />
        </picture>
      </div>
    </div>
  );
}
