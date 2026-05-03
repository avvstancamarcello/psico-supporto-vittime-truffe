# Specifica Tecnica — HandsOverlay Design
## Documentazione per Tutela Copyright

**Progetto:** Psico-Supporto alle Vittime di Truffe
**Autore:** Avv. Marcello Stanca — Studio Legale, Firenze
**Data creazione:** 3 Maggio 2026
**Versione progetto:** a77f3387
**File sorgente:** `client/src/components/HandsOverlay.tsx`
**Dominio pubblicazione:** psicosupprt-5yj3d9df.manus.space / chatblog.secret.psicosupport.org

---

## 1. Descrizione Generale dell'Opera

L'opera consiste in un **overlay animato SVG** sovrapposto a un'immagine generata raffigurante due mani che si tendono l'una verso l'altra: una **mano rossa pixelata** (a sinistra, rappresentante lo scammer/truffatore) e una **mano ciano luminosa** (a destra, rappresentante la difesa legale). L'animazione racconta visivamente la **vittoria della difesa finanziaria contro il truffatore**.

L'overlay è composto da 6 layer sovrapposti, ciascuno con proprietà grafiche e comportamenti animati specifici, documentati di seguito.

---

## 2. Canvas e Coordinate

| Proprietà | Valore |
|---|---|
| ViewBox SVG | 0 0 600 400 |
| Larghezza rendering | 100% del contenitore |
| Altezza rendering | 100% del contenitore |
| Posizionamento | `position: absolute; inset: 0` |
| Interazione | `pointer-events: none` (non intercetta click) |
| Sfondo immagine | Sfondo scuro #0a1628 con immagine generata delle due mani |

---

## 3. Layer 1 — Cervello Rosa Emoji

Il cervello rappresenta la mente della vittima, posizionato al centro-basso dell'immagine, nel punto di incontro simbolico tra le due mani.

| Proprietà | Valore |
|---|---|
| Tipo | Emoji SVG `<text>` |
| Contenuto | 🧠 |
| Posizione (x, y) | 300, 315 (centro-basso del viewBox) |
| Dimensione font | 72px (3x la dimensione standard di 24px) |
| Ancoraggio testo | `middle` (centrato orizzontalmente) |
| Baseline | `central` (centrato verticalmente) |
| Opacità | 0.95 |
| Drop-shadow | `0 0 8px rgba(255, 107, 157, 0.4)` — alone rosa |
| Animazione | Nessuna (statico) |

---

## 4. Layer 2 — Linea Elettrica Ciano

Una scarica elettrica che parte dalla punta del dito indice della mano destra (ciano) e scende verso il cervello, simboleggiando la protezione attiva.

### 4.1 Curva Principale

| Proprietà | Valore |
|---|---|
| Tipo | SVG `<path>` curva di Bézier |
| Path | `M 380 195 C 370 210, 360 225, 350 245 C 340 260, 330 270, 320 280` |
| Colore stroke | `#00d4ff` (ciano) |
| Larghezza stroke | 1.5px |
| Stroke-linecap | `round` |
| Filtro | `electric-glow` — feGaussianBlur stdDeviation 2.5 con doppio merge |

### 4.2 Zigzag Secondario

| Proprietà | Valore |
|---|---|
| Tipo | SVG `<path>` linea spezzata |
| Path | `M 375 200 L 370 208 L 378 212 L 365 225 L 373 228 L 358 245 L 366 248 L 350 260 L 345 268 L 330 278` |
| Colore stroke | `#00d4ff` |
| Larghezza stroke | 0.8px |
| Stroke-linecap | `round` |

### 4.3 Animazione Linea Elettrica

| Proprietà | Valore |
|---|---|
| Tipo animazione | SVG `<animate>` su opacity e stroke-dasharray |
| Durata ciclo | 3 secondi |
| Ripetizioni | 2 (totale 6 secondi) |
| Fill | `freeze` (mantiene stato finale) |
| Opacity values (curva) | `0 → 0 → 0.8 → 0.9 → 0.7` |
| Opacity values (zigzag) | `0 → 0.3 → 0.7 → 0.3 → 0.6 → 0.2 → 0.5` |
| Stroke-dasharray values | `0 400 → 200 200 → 400 0` (effetto disegno progressivo) |

---

## 5. Layer 3 — Scudo Protettivo SVG Ciano

Forma organica che avvolge il cervello, simboleggiando la protezione legale e psicologica.

### 5.1 Bordo Scudo

| Proprietà | Valore |
|---|---|
| Tipo | SVG `<path>` curva chiusa |
| Path | `M 245 270 C 230 285, 225 305, 232 325 C 238 342, 255 358, 300 365 C 345 358, 362 342, 368 325 C 375 305, 370 285, 355 270 C 345 260, 325 254, 300 252 C 275 254, 255 260, 245 270 Z` |
| Colore stroke | `#00d4ff` |
| Larghezza stroke | 2px |
| Fill | `none` |
| Opacità finale | 0.6 |
| Trasformazione | `translate(300, 310) scale(0.9) translate(-300, -310)` — ridotto 10% centrato |
| Filtro | `shield-glow` — feGaussianBlur stdDeviation 4 con triplo merge |

### 5.2 Riempimento Scudo

| Proprietà | Valore |
|---|---|
| Path | Forma interna leggermente più piccola del bordo |
| Fill | `#00d4ff` |
| Opacità finale | 0.06 (quasi trasparente) |

### 5.3 Scintille sullo Scudo

| Posizione (cx, cy) | Delay animazione |
|---|---|
| 240, 290 | 0.5s |
| 360, 290 | 1.0s |
| 300, 368 | 1.5s |
| 250, 335 | 2.0s |
| 350, 335 | 2.5s |

Ogni scintilla è un cerchio di raggio 2, colore `#00d4ff`, con animazione opacity pulsante (durata 1.5s, 4 ripetizioni).

### 5.4 Animazione Scudo

| Proprietà | Valore |
|---|---|
| Durata ciclo | 3 secondi |
| Ripetizioni | 2 (totale 6 secondi) |
| Opacity bordo | `0 → 0 → 0 → 0.3 → 0.7 → 0.9 → 0.6` |
| Stroke-dasharray | `0 500 → 0 500 → 150 350 → 300 200 → 500 0` (disegno progressivo) |
| Opacity riempimento | `0 → 0 → 0 → 0 → 0.04 → 0.08 → 0.06` |

---

## 6. Layer 4 — Simboli Valuta (Perdite Finanziarie)

Simboli di valuta sparsi intorno alla mano rossa sinistra, evocanti le perdite finanziarie delle vittime.

### 6.1 Simboli Statici

| Simbolo | Posizione (x, y) | Dimensione | Colore | Opacità | Area |
|---|---|---|---|---|---|
| € | 85, 145 | 14px | #ffd700 (oro) | 0.70 | Sopra polso |
| $ | 55, 170 | 11px | #4ade80 (verde) | 0.60 | Sopra polso |
| £ | 110, 125 | 10px | #ffd700 | 0.50 | Sopra polso |
| ₿ | 130, 155 | 12px | #4ade80 | 0.65 | Sopra polso |
| € | 65, 130 | 9px | #ffd700 | 0.45 | Sopra polso |
| $ | 100, 160 | 10px | #4ade80 | 0.50 | Sopra polso |
| $ | 60, 280 | 12px | #ffd700 | 0.60 | Sotto polso |
| € | 90, 305 | 14px | #4ade80 | 0.70 | Sotto polso |
| ₿ | 40, 260 | 10px | #ffd700 | 0.50 | Sotto polso |
| £ | 115, 285 | 11px | #4ade80 | 0.55 | Sotto polso |
| $ | 70, 320 | 9px | #ffd700 | 0.45 | Sotto polso |
| € | 45, 295 | 10px | #4ade80 | 0.50 | Sotto polso |

Font: `monospace`, `bold`. Filtro: `currency-glow` (Gaussian blur 1.5).

### 6.2 Simboli Animati (Caduta)

| Simbolo | Posizione | Dimensione | Colore | Durata | Delay | Ripetizioni |
|---|---|---|---|---|---|---|
| € | 80, 140 | 13px | #ffd700 | 4s | 0s | 3 |
| $ | 50, 180 | 11px | #4ade80 | 5s | 0.5s | 3 |
| ₿ | 120, 150 | 12px | #ffd700 | 4.5s | 1s | 3 |
| £ | 95, 120 | 10px | #4ade80 | 5.5s | 1.5s | 3 |
| € | 65, 250 | 11px | #ffd700 | 4s | 0.3s | 3 |
| $ | 100, 290 | 13px | #4ade80 | 5s | 0.8s | 3 |

Animazione: opacity pulsante (`0 → 0.6 → 0.4 → 0.7 → 0.3 → 0`) + translate verticale (`0 → 15px → 30px`).

---

## 7. Layer 5 — Scudo MS Financial Defense (Immagine)

Immagine del logo "MS Financial Defense" posizionata nell'angolo inferiore destro.

| Proprietà | Valore |
|---|---|
| Tipo | Elemento HTML `<img>` con `<picture>` responsive |
| Immagine desktop | `shield-desktop_b8780f63.webp` (formato WebP ottimizzato) |
| Immagine mobile | `shield-mobile_9a3188a9.webp` (formato WebP ottimizzato) |
| Posizione CSS | `bottom: 8%; right: 5%` (sm: `bottom: 10%; right: 6%`) |
| Dimensioni | `w-50px` (sm: 65px, md: 75px) |
| Border-radius | `rounded-md` (6px) |
| Drop-shadow | `0 0 12px rgba(0, 100, 255, 0.6)` |
| Loading | `eager` (caricamento prioritario) |

### 7.1 Animazione Espansione

| Proprietà | Valore |
|---|---|
| Trigger | 8 secondi dopo il caricamento |
| Transizione | `transform 2s ease-out` |
| Scala iniziale | `scale(1)` |
| Scala finale | `scale(1.25)` — espansione 25% |

### 7.2 Animazione Hover Pulsante

| Proprietà | Valore |
|---|---|
| Nome keyframe | `shieldPulse` |
| Trigger | Dopo l'espansione a 125% |
| Durata ciclo | 4 secondi |
| Ripetizioni | Infinite |
| Timing | `ease-in-out` |
| Scala 0%/100% | `scale(1)` + `drop-shadow 0 0 12px rgba(0,100,255,0.6)` |
| Scala 50% | `scale(1.06)` + `drop-shadow 0 0 18px rgba(0,150,255,0.8)` |

---

## 8. Layer 6 — Frammentazione Mano Rossa Grande

Effetto di disgregazione applicato alla mano rossa grande di sinistra nell'immagine principale, simboleggiante la vittoria della difesa contro lo scammer.

### 8.1 Frammenti Piccoli

| Proprietà | Valore |
|---|---|
| Quantità | 32 frammenti |
| Area di origine | 5-40% larghezza, 20-75% altezza (area mano rossa sinistra) |
| Dimensioni | 6-14px larghezza, 4-10px altezza |
| Colori | `#ff3333` (25%), `#ff5522` (25%), `#cc2200` (25%), `#ff7744` (25%) |
| Box-shadow | `0 0 6px {colore}88, 0 0 12px {colore}44` |
| Border-radius | 0px o 1px (casuale) |

### 8.2 Frammenti Grandi (Pezzi di Polso/Mano)

| Proprietà | Valore |
|---|---|
| Quantità | 12 frammenti |
| Area di origine | 8-38% larghezza, 25-75% altezza |
| Dimensioni | 10-22px larghezza, 8-18px altezza |
| Colori | `#ff2222` (33%), `#ff5533` (33%), `#dd1100` (33%) |
| Box-shadow | `0 0 8px {colore}99, 0 0 16px {colore}55` |
| Forma | `clip-path: polygon()` con vertici casuali (forme irregolari) |

### 8.3 Animazione Frammentazione

| Proprietà | Valore |
|---|---|
| Trigger | 9 secondi dopo il caricamento |
| Durata | 2 secondi |
| Timing function | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Delay per frammento | 0-0.5s (casuale) |
| Direzione dispersione | Prevalentemente verso sinistra (bias -0.7 su asse X) |
| Rotazione | -360° a +360° (casuale) |
| Scala finale | 0.2 - 0.8 (casuale) |
| Opacità finale | 0 (scomparsa completa) |

### 8.4 Flash Esplosivo

| Proprietà | Valore |
|---|---|
| Tipo | `<div>` con `radial-gradient` |
| Area | `left: 0; top: 15%; width: 45%; height: 65%` |
| Gradiente | `radial-gradient(ellipse at 50% 50%, rgba(255,50,30,0.25) 0%, transparent 70%)` |
| Animazione | `explosionFlash` — 0.6s ease-out forwards |
| Keyframes | `0%: opacity 0, scale 0.5` → `30%: opacity 1, scale 1.1` → `100%: opacity 0, scale 1.3` |

---

## 9. Timeline Completa dell'Animazione

| Tempo | Evento |
|---|---|
| 0s | Inizio: cervello visibile, simboli valuta iniziano caduta animata |
| 0s-6s | Linea elettrica ciano si disegna + scudo SVG si forma (2 loop da 3s) |
| 0s-6s | Scintille sullo scudo lampeggiano |
| 0s-12s | Simboli valuta cadono e pulsano (3 loop) |
| 6s | Fine loop animazione SVG — stati finali congelati |
| 8s | Scudo MS Financial Defense inizia espansione a 125% (2s ease-out) |
| 8s+ | Scudo inizia hover pulsante lento (4s infinite) |
| 9s | Mano rossa grande di sinistra inizia frammentazione |
| 9s-11s | 32+12 frammenti si disperdono + flash esplosivo rosso |
| 11s+ | Stato finale: cervello + scudo SVG + scudo Financial Defense pulsante. Mano rossa frammentata. |

---

## 10. Filtri SVG Utilizzati

| Nome filtro | Tipo | Parametri | Applicato a |
|---|---|---|---|
| `electric-glow` | feGaussianBlur + feMerge | stdDeviation: 2.5, doppio merge | Linea elettrica ciano |
| `shield-glow` | feGaussianBlur + feMerge | stdDeviation: 4, triplo merge | Scudo protettivo SVG |
| `currency-glow` | feGaussianBlur + feMerge | stdDeviation: 1.5, singolo merge | Simboli valuta |

---

## 11. Palette Colori Completa

| Colore | Codice HEX | RGB | Utilizzo |
|---|---|---|---|
| Ciano difesa | `#00d4ff` | 0, 212, 255 | Linea elettrica, scudo SVG, scintille |
| Rosa cervello | `#ff6b9d` | 255, 107, 157 | Drop-shadow cervello |
| Rosso scammer 1 | `#ff3333` | 255, 51, 51 | Frammenti mano rossa |
| Rosso scammer 2 | `#ff5522` | 255, 85, 34 | Frammenti mano rossa |
| Rosso scammer 3 | `#cc2200` | 204, 34, 0 | Frammenti mano rossa |
| Arancio scammer | `#ff7744` | 255, 119, 68 | Frammenti mano rossa |
| Rosso grande 1 | `#ff2222` | 255, 34, 34 | Frammenti grandi |
| Rosso grande 2 | `#ff5533` | 255, 85, 51 | Frammenti grandi |
| Rosso grande 3 | `#dd1100` | 221, 17, 0 | Frammenti grandi |
| Oro valuta | `#ffd700` | 255, 215, 0 | Simboli € £ |
| Verde valuta | `#4ade80` | 74, 222, 128 | Simboli $ ₿ |
| Sfondo scuro | `#0a1628` | 10, 22, 40 | Background |
| Blu scudo FD | `#2244aa` | 34, 68, 170 | Scudo Financial Defense |
| Blu chiaro FD | `#6699ff` | 102, 153, 255 | Bordo scudo Financial Defense |
| Oro orbita | `#daa520` | 218, 165, 32 | Orbite scudo Financial Defense |

---

## 12. Note sulla Proprietà Intellettuale

Questa documentazione descrive un'opera originale di design interattivo creata per il progetto "Psico-Supporto alle Vittime di Truffe" dell'Avv. Marcello Stanca. L'opera comprende la composizione grafica, la disposizione degli elementi, la scelta dei colori, le animazioni e la narrativa visiva (vittoria della difesa contro lo scammer). Tutti i diritti sono riservati.

Il file SVG allegato (`hands-overlay-design.svg`) è importabile in Figma, Adobe Illustrator, Sketch e Inkscape per la verifica e la documentazione della disposizione degli oggetti.

---

*Documento generato il 3 Maggio 2026 — Versione progetto: a77f3387*
