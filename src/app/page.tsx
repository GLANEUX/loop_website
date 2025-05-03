"use client";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import CommunitySection from "@/components/CommunitySection";
import PremiumSection from "@/components/PremiumSection";
import NewsletterSection from "@/components/NewsletterSection";
export default function Home() {
  return (
    <div className="px-8">
      <HeroSection />
      <IntroSection />
      <CommunitySection />
      <PremiumSection />
      <NewsletterSection />
    </div>
  );
}
