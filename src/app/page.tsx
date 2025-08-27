import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarketingOpener from "@/components/MarketingOpener";
import CampaignGrid from "@/components/CampaignGrid";
import Timeline from "@/components/Timeline";
import PackagesSection from "@/components/PackagesSection";
import ROISection from "@/components/ROISection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Preloader />
      <Navigation />
      <Hero />
      <MarketingOpener />
      <CampaignGrid />
      <Timeline />
      <PackagesSection />
      <ROISection />
      
      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gradient">
            The Result
          </h2>
          <p className="text-lg md:text-xl opacity-80 mb-8 leading-relaxed">
            Together, we won&apos;t just celebrate 160 years—we&apos;ll define the next 160. Position Plasencia where it belongs: not as another premium option, but as the standard by which premium is measured.
          </p>
          <p className="text-base md:text-lg opacity-70 mb-12 leading-relaxed">
            This isn&apos;t about choosing an advertising partner. It&apos;s about choosing the only platform with the authority, reach, and credibility to transform your 160-year truth into market dominance.
          </p>
          
          {/* Contact Information */}
          <div className="border-t border-gold/20 pt-12">
            <div className="bg-gradient-to-br from-gold/5 to-tobacco/5 p-8 rounded-2xl border border-gold/20 backdrop-blur-sm">
              <p className="text-lg font-semibold mb-4 text-gold">Jake Cohen</p>
              <p className="text-base opacity-80 mb-2">Account Executive</p>
              <p className="text-base opacity-80 mb-2">203-561-3977</p>
              <p className="text-base opacity-80">jcohen@mshanken.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
