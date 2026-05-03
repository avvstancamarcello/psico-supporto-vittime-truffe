/**
 * HandsOverlay — SVG overlay sull'immagine delle mani
 * 1. Cervello rosa emoji 3x — spostato 30px in alto
 * 2. Linea elettrica ciano + scudo SVG (senza contatto col cervello) — 2 loop
 * 3. Simboli valuta gialli/verdi intorno alla mano rossa (perdite finanziarie)
 * 4. Scudo "MS Financial Defense" — angolo inferiore destro, diagonale 45%,
 *    lontano dalla mano/dita/polso destro. Espansione lenta a 125% + hover pulsante.
 * 5. Frammentazione della MANO ROSSA GRANDE DI SINISTRA (nell'immagine principale):
 *    il polso e la mano si frammentano in pezzi rossi, evocando l'attacco di autodifesa
 *    della mano destra ciano e dello scudo contro lo scammer.
 */

import { useEffect, useState, useRef } from "react";

export function HandsOverlay() {
  const [animationDone, setAnimationDone] = useState(false);
  const [shieldExpanded, setShieldExpanded] = useState(false);
  const [fragmenting, setFragmenting] = useState(false);

  // Genera particelle per la frammentazione della mano rossa grande (sinistra)
  // Posizionate nell'area della mano rossa: lato sinistro dell'immagine
  const fragmentsRef = useRef<Array<{
    originX: number; originY: number;
    destX: number; destY: number;
    rot: number; scale: number; delay: number;
    color: string;
  }>>([]);

  if (fragmentsRef.current.length === 0) {
    fragmentsRef.current = Array.from({ length: 32 }, (_, i) => {
      // Frammenti sparsi nell'area della mano rossa sinistra (0-40% larghezza, 20-80% altezza)
      const originX = 5 + Math.random() * 35; // % dalla sinistra
      const originY = 20 + Math.random() * 55; // % dall'alto
      return {
        originX,
        originY,
        destX: originX + (Math.random() - 0.7) * 40, // si disperdono verso sinistra e in tutte le direzioni
        destY: originY + (Math.random() - 0.5) * 50,
        rot: Math.random() * 720 - 360,
        scale: 0.2 + Math.random() * 0.6,
        delay: Math.random() * 0.5,
        color: i % 4 === 0 ? "#ff3333" : i % 4 === 1 ? "#ff5522" : i % 4 === 2 ? "#cc2200" : "#ff7744",
      };
    });
  }

  useEffect(() => {
    // Dopo 6s (fine loop animazione): segna fine animazione
    const timerDone = setTimeout(() => {
      setAnimationDone(true);
    }, 6000);

    // Dopo 8s: scudo inizia espansione lenta a 125%
    const timerExpand = setTimeout(() => {
      setShieldExpanded(true);
    }, 8000);

    // Dopo 9s: mano rossa grande inizia a frammentarsi
    const timerFragment = setTimeout(() => {
      setFragmenting(true);
    }, 9000);

    return () => {
      clearTimeout(timerDone);
      clearTimeout(timerExpand);
      clearTimeout(timerFragment);
    };
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
        {/* 1. CERVELLO ROSA EMOJI 3x */}
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
        {/* 2. LINEA ELETTRICA CIANO + SCUDO SVG */}
        {/* ========================================= */}
        <g filter="url(#electric-glow)">
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

        {/* Scudo protettivo SVG — ridotto 10% */}
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
      {/* 4. SCUDO MS Financial Defense — angolo inferiore destro */}
      {/* Spostato sulla diagonale 45% verso l'angolo, lontano da mano/dita/polso */}
      {/* Espansione lenta a 125% + hover pulsante lento */}
      {/* ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-[8%] right-[5%] sm:bottom-[10%] sm:right-[6%]"
          style={{
            transition: "transform 2s ease-out, opacity 1s ease-out",
            transform: shieldExpanded ? "scale(1.25)" : "scale(1)",
            opacity: 1,
          }}
        >
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/manus-storage/shield-mobile_9a3188a9.webp"
            />
            <img
              src="/manus-storage/shield-desktop_b8780f63.webp"
              alt="Scudo MS Financial Defense - protezione finanziaria"
              className="w-[50px] sm:w-[65px] md:w-[75px] rounded-md drop-shadow-[0_0_12px_rgba(0,100,255,0.6)]"
              style={{
                animation: shieldExpanded ? "shieldPulse 4s ease-in-out infinite" : "none",
              }}
              loading="eager"
              width="75"
              height="80"
            />
          </picture>
        </div>
      </div>

      {/* ========================================= */}
      {/* 5. FRAMMENTAZIONE MANO ROSSA GRANDE DI SINISTRA */}
      {/* Frammenti rossi sovrapposti all'area della mano rossa nell'immagine */}
      {/* Si disperdono in 2 secondi evocando l'attacco di autodifesa */}
      {/* ========================================= */}
      {fragmenting && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {fragmentsRef.current.map((f, i) => (
            <div
              key={`frag-${i}`}
              className="absolute"
              style={{
                left: `${f.originX}%`,
                top: `${f.originY}%`,
                width: `${6 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 6}px`,
                backgroundColor: f.color,
                boxShadow: `0 0 6px ${f.color}88, 0 0 12px ${f.color}44`,
                borderRadius: Math.random() > 0.5 ? "1px" : "0px",
                transition: `all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${f.delay}s`,
                transform: `translate(${f.destX - f.originX}vw, ${f.destY - f.originY}vh) rotate(${f.rot}deg) scale(${f.scale})`,
                opacity: 0,
              }}
            />
          ))}

          {/* Frammenti più grandi — pezzi di polso/mano */}
          {Array.from({ length: 12 }, (_, i) => {
            const originX = 8 + Math.random() * 30;
            const originY = 25 + Math.random() * 50;
            const destX = originX - 15 - Math.random() * 25;
            const destY = originY + (Math.random() - 0.4) * 40;
            const delay = 0.1 + Math.random() * 0.4;
            const color = i % 3 === 0 ? "#ff2222" : i % 3 === 1 ? "#ff5533" : "#dd1100";
            return (
              <div
                key={`bigfrag-${i}`}
                className="absolute"
                style={{
                  left: `${originX}%`,
                  top: `${originY}%`,
                  width: `${10 + Math.random() * 12}px`,
                  height: `${8 + Math.random() * 10}px`,
                  backgroundColor: color,
                  boxShadow: `0 0 8px ${color}99, 0 0 16px ${color}55`,
                  clipPath: `polygon(${Math.random() * 30}% 0%, 100% ${Math.random() * 40}%, ${70 + Math.random() * 30}% 100%, 0% ${60 + Math.random() * 40}%)`,
                  transition: `all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
                  transform: `translate(${(destX - originX) * 3}px, ${(destY - originY) * 3}px) rotate(${Math.random() * 540 - 270}deg) scale(${0.3 + Math.random() * 0.5})`,
                  opacity: 0,
                }}
              />
            );
          })}

          {/* Flash rosso sull'area della mano — effetto esplosione iniziale */}
          <div
            className="absolute left-0 top-[15%] w-[45%] h-[65%]"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(255,50,30,0.25) 0%, transparent 70%)",
              animation: "explosionFlash 0.6s ease-out forwards",
            }}
          />
        </div>
      )}

      {/* CSS Keyframes */}
      <style>{`
        @keyframes shieldPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 12px rgba(0, 100, 255, 0.6)); }
          50% { transform: scale(1.06); filter: drop-shadow(0 0 18px rgba(0, 150, 255, 0.8)); }
        }
        @keyframes explosionFlash {
          0% { opacity: 0; transform: scale(0.5); }
          30% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
