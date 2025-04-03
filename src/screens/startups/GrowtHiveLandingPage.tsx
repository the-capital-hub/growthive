"use client";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import PartnersSection from "./PartnersSection";
import StartupFocusSection from "./StartupFocusSection";
import FundingApplicationSection from "./FundingApplicationSection";
import WhyGrowtHiveSection from "./WhyGrowtHiveSection";

function GrowtHiveLandingPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className="overflow-hidden relative mx-auto w-full max-w-none min-h-screen bg-zinc-950 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        
        <main>
          <HeroSection />
          <WelcomeSection />
          <PartnersSection />
          <StartupFocusSection />
          <FundingApplicationSection />
          <WhyGrowtHiveSection />
        </main>
      </div>
    </>
  );
}

export default GrowtHiveLandingPage;