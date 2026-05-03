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
import { SectionNav } from "@/components/SectionNav";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #16162a 50%, #0f0f1a 100%)" }}>
      <Header />
      <ChatAccessPopup />
      <SectionNav />
      <main>
        <PsicoSupportoSection />
        <BuoneNotizieSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
