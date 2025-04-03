"use client";

import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import OfferingsSection from "./OfferingsSection";
import EligibilitySection from "./EligibilitySection";
import ProcessSection from "./ProcessSection";
import CommunitySection from "./CommunitySection";
import CtaSection from "./CtaSection";

function GrowtHiveInvestorNetwork() {
  return (
    <main className="mx-auto max-w-none text-white bg-zinc-950 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <HeroSection />
      <BenefitsSection />
      <OfferingsSection />
      <EligibilitySection />
      <ProcessSection />
      <CommunitySection />
      <CtaSection />
    </main>
  );
}

export default GrowtHiveInvestorNetwork;
