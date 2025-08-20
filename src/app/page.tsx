"use client";

import CookieBanner from "@/components/sections/cookie-banner";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import PromiseSection from "@/components/sections/promise";
import DistinctlyDifferentSection from "@/components/sections/distinctly-different";

import Services from "@/components/sections/services";
import FeaturedWork from "@/components/sections/featured-work";
import PurposeSection from "@/components/sections/purpose";
import ExperienceSection from "@/components/sections/experience";
import InsightsSection from "@/components/sections/insights";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import FaqTeaser from "@/components/sections/faq-teaser";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <HeroSection />
        <PromiseSection />
        <DistinctlyDifferentSection />
        <Services />
        <FeaturedWork />
        <PurposeSection />
        <ExperienceSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <FaqTeaser />
      <Footer />
      <CookieBanner />
    </div>
  );
}