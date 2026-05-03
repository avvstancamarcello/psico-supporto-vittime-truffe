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
      {/* Banner Libro Rischio Trading - Amazon */}
      <div className="px-4 py-3 flex justify-center">
        <a
          href="https://www.amazon.it/Rischio-Trading-Attraverso-Strumenti-Recupero-ebook/dp/B0DQRB8VQY"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-[728px] rounded-lg overflow-hidden border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,212,255,0.15)] hover:-translate-y-0.5"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663587145031/5yj3D9dfw7zdStNbdyMzWk/banner-rischio-trading-real-ZThgApEsBx5xM2ymvWyhvf.webp"
            alt="Rischio Trading - Il Manuale di Attacco e Difesa - Bestseller Amazon di Avv. Marcello Stanca - Acquista su Amazon"
            className="w-full h-auto object-cover"
          />
        </a>
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
