import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { AboutSection } from "@/components/about-section"
import { SafetySection } from "@/components/safety-section"
import { FAQSection } from "@/components/faq-section"
import { StatsSection } from "@/components/stats-section"
import { CprTimer } from "@/components/cpr-timer"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero3D />
        <StatsSection />
        <FeaturesSection />
        <section id="technology">
          <TechnologySection />
        </section>
        <ApplicationsTimeline />
        <CprTimer />
        <AboutSection />
        <section id="safety">
          <SafetySection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}