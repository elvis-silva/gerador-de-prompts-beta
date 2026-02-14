import HeroSection from "@/components/heroSection/HeroSection";
import ContextSection from "@/components/contextSection/ContextSection";
import InteractivePromptForm from "@/components/interactivePromptForm/InteractivePromptForm";
import BenefitsSection from "@/components/benefitsSection/BenefitsSection";
import ExamplesAndTestimonials from "@/components/examplesAndTestimonials/ExamplesAndTestimonials";
import FAQ from "@/components/faq/FAQ";
import '@/styles/globals.css'
import './styles.css'

export default function IAMarketingB2BPage() {
  return (
    <main className="page-container">
      <HeroSection />
      <ContextSection />
      <InteractivePromptForm />
      <BenefitsSection />
      <ExamplesAndTestimonials />
      <FAQ />
    </main>
  );
}
