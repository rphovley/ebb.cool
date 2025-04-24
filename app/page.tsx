import { FeaturesSection } from "@/components/home/FeaturesSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { PricingSection } from "@/components/home/PricingSection"
import { FAQSection } from "@/components/home/FAQSection"
import { CTASection } from "@/components/home/CTASection"
import { HeroSection } from "@/components/home/HeroSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
