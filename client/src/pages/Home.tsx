/**
 * Design: Cyber-Forensic Noir
 * Dark theme with cyan (#00d4ff) and green (#00c853) accents
 * Matching the style of avv-stanca-firenze.manus.space
 */

import { PsicoSupportoSection } from "@/components/PsicoSupportoSection";
import { BuoneNotizieSection } from "@/components/BuoneNotizieSection";
import { CTASection } from "@/components/CTASection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatAccessPopup } from "@/components/ChatAccessPopup";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #16162a 50%, #0f0f1a 100%)" }}>
      <Header />
      <ChatAccessPopup />
      {/* AdSense Advertisement Box */}
      <div className="px-4 py-3 flex justify-center">
        <div className="w-full max-w-[728px] min-h-[90px] bg-[#0d0d1f] border border-white/[0.06] rounded-lg flex items-center justify-center overflow-hidden relative">
          {/* Google AdSense - Sostituire data-ad-client e data-ad-slot con i propri valori */}
          <ins
            className="adsbygoogle block w-full h-full"
            style={{ display: 'block', minHeight: '90px' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          {/* Placeholder visibile finché AdSense non è attivo */}
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-wider uppercase pointer-events-none">
            Advertisement
          </div>
        </div>
      </div>
      <main>
        <PsicoSupportoSection />
        <BuoneNotizieSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
