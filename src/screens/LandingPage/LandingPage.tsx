import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection/ClientTestimonialsSection";
import { FooterSection } from "./sections/FooterSection";
import { GrowthCardsSection } from "./sections/GrowthCardsSection";
import { GrowthHivePerksSection } from "./sections/GrowthHivePerksSection";
import { GrowthHiveTrendSection } from "./sections/GrowthHiveTrendSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { WhatWeDoSection } from "./sections/WhatWeDoSection";
import FillLight from "../../Images/fillLight.png";

export const LandingPage = (): JSX.Element => {
  // Background stars data for reuse
  const starElements = Array(20)
    .fill(null)
    .map((_, index) => ({
      id: index,
      top: Math.floor(Math.random() * 300),
      left: Math.floor(Math.random() * 350),
    }));

  return (
    <div className="bg-[black] flex flex-col items-center w-full">
      <div className="bg-[black] overflow-hidden w-full relative">
        {/* Background decorative elements */}
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
          {/* Conic gradients */}
          <div className="absolute w-full h-full top-[597px] left-0">
            <div className="relative h-full w-full">
              <div className="absolute w-full h-full [background:conic-gradient(from_180deg_at_50%_50%,rgba(7,7,7,0.04)_49%,rgba(255,198,16,0.04)_100%,rgba(0,0,0,0.04)_100%)]" />
            </div>
          </div>

          {/* Decorative stars/dots */}
          <div className="absolute w-[378px] h-[334px] top-0 right-0">
            {starElements.map((star) => (
              <div
                key={star.id}
                className={`absolute w-[9px] h-[9px] top-[${star.top}px] left-[${star.left}px] bg-black`}
              >
                <div className="h-[9px] rounded-[4.31px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.8)_15%,rgba(245,245,245,0)_100%)]" />
              </div>
            ))}
          </div>

          {/* Blurred elements */}
          <div className="absolute w-[200px] h-[253px] top-[278px] left-[228px] rotate-[-25.48deg] blur-[97px] [background:linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.3)_100%)]" />

          {/* Ellipse decorations */}
          <div className="absolute w-[1010px] h-[1010px] top-[764px] left-[655px] rotate-[142.88deg] blur-[5.5px]">
            <div className="relative w-[1001px] h-[1001px] top-[5px] left-1">
              <img
                className="absolute w-[715px] h-[715px] top-[143px] left-[143px] rotate-[-142.88deg]"
                alt="Ellipse"
                src="/ellipse-2939.svg"
              />
              <img
                className="absolute w-[715px] h-[715px] top-[143px] left-[143px] rotate-[-142.88deg]"
                alt="Ellipse"
                src="/ellipse-2940.svg"
              />
            </div>
          </div>
        </div>

        {/* Main content sections */}
        <section className="relative w-full">
          <ClientTestimonialsSection />
        </section>

        <section className="relative w-full">
          <WhatWeDoSection />
        </section>

        <section className="relative w-full">
          <GrowthHiveTrendSection />
        </section>

        <section className="relative w-full">
          <GrowthHivePerksSection />
        </section>

        <section className="relative w-full">
          <GrowthCardsSection />
        </section>

        <section className="relative w-full">
          <FooterSection />
        </section>

        <section className="relative w-full">
          <HeroSection />
        </section>

        <section className="relative w-full">
          <CallToActionSection />
        </section>

        {/* Decorative elements */}
        <img
          className="absolute w-[539px] h-[539px] top-[1398px] right-[0]"
          alt="Sketch annotation"
          src={FillLight}
        />
      </div>
    </div>
  );
};
