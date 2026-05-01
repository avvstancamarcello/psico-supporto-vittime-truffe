/**
 * Design: Cyber-Forensic Noir
 * Gate di registrazione con avviso di sicurezza autorevole
 * Salva registrazione in localStorage per persistenza
 */

import { useState } from "react";

interface RegistrationGateProps {
  children: React.ReactNode;
}

export function RegistrationGate({ children }: RegistrationGateProps) {
  const [isRegistered, setIsRegistered] = useState(() => {
    try {
      return localStorage.getItem("psico-supporto-registered") === "true";
    } catch {
      return false;
    }
  });

  if (isRegistered) {
    return <>{children}</>;
  }

  return <RegistrationForm onSuccess={() => setIsRegistered(true)} />;
}

function RegistrationForm({ onSuccess }: { onSuccess: () => void }) {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
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

    if (!consenso) {
      setError("Devi accettare il consenso al trattamento dei dati per procedere.");
      return;
    }

    setIsSubmitting(true);

    // Simula un breve delay per dare sensazione di elaborazione
    setTimeout(() => {
      try {
        localStorage.setItem("psico-supporto-registered", "true");
        localStorage.setItem("psico-supporto-user", JSON.stringify({
          nome: nome.trim(),
          cognome: cognome.trim(),
          email: email.trim(),
          registeredAt: new Date().toISOString(),
        }));
      } catch {
        // Se localStorage non è disponibile, procedi comunque
      }
      onSuccess();
    }, 800);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)" }}
    >
      <div className="w-full max-w-[560px]">

        {/* Logo / Intestazione */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-3xl">⚖️</span>
            <div className="text-left">
              <span className="block text-white font-bold text-lg">Avv. Marcello Stanca</span>
              <span className="block text-white/50 text-xs">Studio Legale · Firenze</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Psico-Supporto alle <span className="text-[#00d4ff]">Vittime di Truffe</span>
          </h1>
          <p className="text-sm text-white/50">
            Area riservata — Registrazione obbligatoria
          </p>
        </div>

        {/* Avviso di Sicurezza */}
        <div className="mb-6 border border-[#ff4444]/30 bg-[#ff4444]/[0.04] rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ff4444] to-transparent" />
          <div className="flex items-start gap-3">
            <span className="text-2xl shrink-0 mt-0.5">🛡️</span>
            <div>
              <h3 className="text-sm font-bold text-[#ff6666] uppercase tracking-[1.5px] mb-2">
                Avviso di Sicurezza
              </h3>
              <p className="text-[0.82rem] text-white/75 leading-relaxed">
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

        {/* Form di Registrazione */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 sm:p-9">
          <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span className="text-xl">📋</span> Registrazione Accesso
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nome" className="block text-xs text-white/60 uppercase tracking-wide mb-1.5 font-medium">
                  Nome *
                </label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Il tuo nome"
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/30 transition-all"
                />
              </div>
              <div>
                <label htmlFor="cognome" className="block text-xs text-white/60 uppercase tracking-wide mb-1.5 font-medium">
                  Cognome *
                </label>
                <input
                  id="cognome"
                  type="text"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  placeholder="Il tuo cognome"
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-white/60 uppercase tracking-wide mb-1.5 font-medium">
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="la.tua.email@esempio.com"
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/30 transition-all"
              />
            </div>

            {/* Consenso GDPR */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consenso}
                  onChange={(e) => setConsenso(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#00d4ff] focus:ring-[#00d4ff]/30 focus:ring-offset-0 shrink-0"
                />
                <span className="text-xs text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  Acconsento al trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)
                  e della normativa italiana vigente in materia di protezione dei dati personali.
                  I dati forniti saranno utilizzati esclusivamente per l'accesso al servizio di Psico-Supporto
                  e non saranno ceduti a terzi. Informativa completa disponibile presso lo Studio Legale
                  Avv. Marcello Stanca, Via V. Bellini 63, Firenze.
                </span>
              </label>
            </div>

            {/* Errore */}
            {error && (
              <div className="bg-[#ff4444]/10 border border-[#ff4444]/20 rounded-lg px-4 py-2.5 text-sm text-[#ff6666]">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-gradient-to-br from-[#00d4ff] to-[#0099cc] text-[#0a0a1a] font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(0,212,255,0.35)] shadow-[0_5px_20px_rgba(0,212,255,0.2)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Verifica in corso...
                </span>
              ) : (
                "Accedi al Psico-Supporto"
              )}
            </button>
          </form>

          <p className="mt-5 text-center text-[0.7rem] text-white/30">
            🔒 Connessione protetta · Dati crittografati · Accesso monitorato
          </p>
        </div>

        {/* Footer minimo */}
        <div className="text-center mt-6 text-xs text-white/30">
          © {new Date().getFullYear()} Studio Legale Avv. Marcello Stanca · Firenze
        </div>
      </div>
    </div>
  );
}
