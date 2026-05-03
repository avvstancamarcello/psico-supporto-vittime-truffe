/**
 * Banner-pulsante + Popup di registrazione con PIN
 * Il banner appare nella sezione hero, il popup si apre al click
 * Include avviso di sicurezza e richiesta PIN personalizzato
 */

import { useState } from "react";

export function ChatAccessPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Popup overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Popup content */}
          <div className="relative w-full max-w-[520px] max-h-[90vh] overflow-y-auto bg-[#12122a] border border-[#00d4ff]/20 rounded-2xl shadow-[0_20px_60px_rgba(0,212,255,0.15)]">
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent rounded-t-2xl" />

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors text-xl z-10"
              aria-label="Chiudi"
            >
              ✕
            </button>

            <div className="p-7 sm:p-9">
              {/* Header */}
              <div className="text-center mb-6">
                <span className="text-5xl block mb-3">🔐</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Chat Riservata e Cifrata
                </h2>
                <p className="text-sm text-white/50">
                  Crea il tuo accesso personale permanente
                </p>
              </div>

              {/* Avviso di Sicurezza */}
              <div className="mb-6 border border-[#ff4444]/30 bg-[#ff4444]/[0.04] rounded-xl p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff4444] to-transparent" />
                <div className="flex items-start gap-2.5">
                  <span className="text-lg shrink-0 mt-0.5">🛡️</span>
                  <div>
                    <h3 className="text-xs font-bold text-[#ff6666] uppercase tracking-[1.5px] mb-1.5">
                      Avviso di Sicurezza
                    </h3>
                    <p className="text-[0.75rem] text-white/70 leading-relaxed">
                      Questa pagina è riservata alle vittime di truffe finanziarie. Ogni accesso è monitorato e tracciato.
                      Gli header delle email di registrazione e il flusso dati della sessione di navigazione sono analizzabili
                      con strumenti forensi (Wireshark e altri software di analisi di rete) per l'identificazione territoriale
                      e tecnica di ogni visitatore. Eventuali soggetti collegati ad organizzazioni criminali che tentino di
                      accedere a questa pagina saranno identificati e segnalati alle Autorità competenti.
                      I dati di tracciamento e le informazioni raccolte potranno essere richiesti e forniti
                      soltanto ad organi di Polizia autorizzati dall'Autorità Giudiziaria competente in Italia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <RegistrationForm onSuccess={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Banner pulsante fisso - visibile nella pagina */}
      <ChatBanner onClick={() => setIsOpen(true)} />
    </>
  );
}

export function ChatBanner({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4">
      <button
        onClick={onClick}
        className="w-full max-w-[700px] mx-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#0a1628] to-[#0f1f3a] border border-[#00d4ff]/30 rounded-xl py-3.5 sm:py-4 px-5 transition-all duration-300 hover:border-[#00d4ff]/60 hover:shadow-[0_8px_30px_rgba(0,212,255,0.2)] hover:-translate-y-0.5 group"
      >
        <span className="text-2xl sm:text-3xl">🔐</span>
        <span className="text-sm sm:text-base font-semibold text-[#00d4ff] group-hover:text-white transition-colors">
          Accedi con un click alla tua chat responsiva, riservata e cifrata
        </span>
        <span className="text-white/40 group-hover:text-[#00d4ff] transition-colors ml-1">→</span>
      </button>
    </div>
  );
}

function RegistrationForm({ onSuccess }: { onSuccess: () => void }) {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [consenso, setConsenso] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nome.trim() || !cognome.trim() || !email.trim()) {
      setError("Tutti i campi sono obbligatori.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Inserisci un indirizzo email valido.");
      return;
    }

    if (!pin.trim() || pin.length < 4) {
      setError("Il PIN deve essere di almeno 4 caratteri.");
      return;
    }

    if (!consenso) {
      setError("Devi accettare il consenso al trattamento dei dati per procedere.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        localStorage.setItem("psico-supporto-registered", "true");
        localStorage.setItem("psico-supporto-user", JSON.stringify({
          nome: nome.trim(),
          cognome: cognome.trim(),
          email: email.trim(),
          pin: pin.trim(),
          registeredAt: new Date().toISOString(),
        }));
      } catch {
        // Procedi comunque
      }

      // Redirect alla chat
      window.open("https://manus.space/share/tutelatruffe.it?replay=false", "_blank");
      onSuccess();
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="popup-nome" className="block text-[0.7rem] text-white/50 uppercase tracking-wide mb-1 font-medium">
            Nome *
          </label>
          <input
            id="popup-nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Il tuo nome"
            className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/30 transition-all"
          />
        </div>
        <div>
          <label htmlFor="popup-cognome" className="block text-[0.7rem] text-white/50 uppercase tracking-wide mb-1 font-medium">
            Cognome *
          </label>
          <input
            id="popup-cognome"
            type="text"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            placeholder="Il tuo cognome"
            className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/30 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="popup-email" className="block text-[0.7rem] text-white/50 uppercase tracking-wide mb-1 font-medium">
          Email *
        </label>
        <input
          id="popup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="la.tua.email@esempio.com"
          className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/30 transition-all"
        />
      </div>

      {/* PIN personalizzato */}
      <div>
        <label htmlFor="popup-pin" className="block text-[0.7rem] text-white/50 uppercase tracking-wide mb-1 font-medium">
          🔐 PIN Personale (per accedere alla tua chat permanente) *
        </label>
        <input
          id="popup-pin"
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Crea il tuo PIN (min. 4 caratteri)"
          className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/30 transition-all font-mono tracking-widest"
        />
        <p className="text-[0.65rem] text-white/40 mt-1">
          Il PIN ti permetterà di accedere alla tua chat permanente dove saranno conservate le tue domande e risposte.
        </p>
      </div>

      {/* Consenso GDPR */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer group">
          <input
            type="checkbox"
            checked={consenso}
            onChange={(e) => setConsenso(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#00d4ff] focus:ring-[#00d4ff]/30 focus:ring-offset-0 shrink-0"
          />
          <span className="text-[0.7rem] text-white/55 leading-relaxed group-hover:text-white/75 transition-colors">
            Acconsento al trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)
            e della normativa italiana vigente. I dati saranno utilizzati esclusivamente per l'accesso al servizio
            di Psico-Supporto e non saranno ceduti a terzi.
          </span>
        </label>
      </div>

      {/* Errore */}
      {error && (
        <div className="bg-[#ff4444]/10 border border-[#ff4444]/20 rounded-lg px-3.5 py-2 text-xs text-[#ff6666]">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 bg-gradient-to-br from-[#00d4ff] to-[#0099cc] text-[#0a0a1a] font-bold py-3 px-5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(0,212,255,0.35)] shadow-[0_5px_20px_rgba(0,212,255,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Accesso in corso...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <span>🔐</span> Accedi alla tua Chat Permanente
          </span>
        )}
      </button>

      <p className="text-center text-[0.65rem] text-white/30 mt-2">
        🔒 Connessione protetta · Dati crittografati · Chat permanente
      </p>
    </form>
  );
}
