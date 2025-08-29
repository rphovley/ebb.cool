import { Metadata } from 'next'
import { FeaturesSectionLoader } from "@/components/home/FeaturesSectionLoader"
import { TestimonialsSectionLoader } from "@/components/home/TestimonialsSectionLoader"
import { PricingSection } from "@/components/home/PricingSection"
import { FAQSection } from "@/components/home/FAQSection"
import { CTASection } from "@/components/home/CTASection"
import { HeroSection } from "@/components/home/HeroSection"
import { CommunitySection } from "@/components/home/CommunitySection"
import { JoschuaTestimonial } from "@/components/home/JoschuaTestimonial"

export const metadata: Metadata = {
  title: 'Ebb - macOS Focus App',
  description: 'Ebb is a macOS app designed to boost your focus with smart time tracking, app/website blocking, music integration, and more. Try it free!',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <HeroSection />
      <FeaturesSectionLoader />
      <CommunitySection />
      <TestimonialsSectionLoader />
      <JoschuaTestimonial />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
