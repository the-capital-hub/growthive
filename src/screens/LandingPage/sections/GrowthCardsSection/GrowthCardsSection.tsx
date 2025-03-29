import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GrowthCardsSection = (): JSX.Element => {
  // Data for the growth cards
  const growthCards = [
    {
      letter: "G",
      title: "for Guidance",
      description:
        "We provide hands-on mentorship, helping founders navigate challenges with tailored support.",
      variant: "dark",
    },
    {
      letter: "R",
      title: "for Resilience",
      description:
        "We back founders with bold visions and the drive to persist through every challenge.",
      variant: "gradient",
    },
    {
      letter: "O",
      title: "for Openness",
      description:
        "Transparent, honest communication and processes that foster trust and fairness.",
      variant: "gradient",
    },
    {
      letter: "W",
      title: "for Wisdom",
      description:
        "We bring experience, insights, and smart capital to empower startups for long-term success.",
      variant: "dark",
    },
  ];

  // Orbital background images
  const orbitalImages = [
    "/6408d31fe77edc25e03ef3ee-orbit-01-svg.svg",
    "/6408d3e0d8cc0c3841f4610c-orbit-02-svg.svg",
    "/6408d3e07780a743800ce785-orbit-03-svg.svg",
    "/6408d37b37c774cb70ce6165-orbit-04-svg.svg",
    "/6408d37bde5aefd9e3e2fb40-orbit-05-svg.svg",
  ];

  return (
    <section className="flex flex-col items-center gap-16 py-16 w-full">
      <div className="flex flex-col items-center max-w-4xl">
        <h2 className="relative self-stretch font-['Urbanist',Helvetica] font-extrabold text-[#ffffff4c] text-[230px] text-center leading-normal">
          GROW
        </h2>
        <p className="relative self-stretch font-['Inter',Helvetica] font-medium text-white text-xl text-center leading-[30px]">
          At GrowtHive, our values drive the way we work with founders and
          investors, setting us apart
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-x-16 md:gap-y-14 w-full max-w-6xl">
        {growthCards.map((card, index) => (
          <Card
            key={index}
            className={`relative h-[271px] overflow-hidden border border-solid border-[#ffffff14] ${
              card.variant === "gradient"
                ? "[background:linear-gradient(317deg,rgba(254,185,22,1)_0%,rgba(0,0,0,1)_100%)]"
                : "bg-[#151515]"
            }`}
          >
            <div className="relative h-[297px] -top-[37px] left-px">
              {/* Orbital background */}
              <div className="absolute w-full h-full top-0 left-0">
                <div className="relative w-[535px] h-[545px] -top-[79px] left-1">
                  {/* Orbital elements */}
                  <div className="absolute w-[170px] h-[170px] top-32 left-[204px] opacity-30">
                    <div className="relative h-[172px] -top-0.5">
                      <img
                        className="absolute w-[170px] h-[171px] top-px left-0"
                        alt="Orbital graphic"
                        src={orbitalImages[0]}
                      />
                    </div>
                  </div>

                  <div className="flex w-[260px] h-[260px] items-start justify-center absolute top-[83px] left-[159px] opacity-20">
                    <img
                      className="relative w-[260px] h-[227px]"
                      alt="Orbital graphic"
                      src={orbitalImages[1]}
                    />
                  </div>

                  <div className="absolute w-[350px] h-[350px] top-[38px] left-[114px] opacity-15">
                    <img
                      className="absolute w-[350px] h-[271px] top-[78px] left-0"
                      alt="Orbital graphic"
                      src={orbitalImages[2]}
                    />
                  </div>

                  <div className="flex w-[440px] h-[440px] items-center justify-center absolute top-0 left-12 opacity-10">
                    <img
                      className="relative w-[440px] h-[271px]"
                      alt="Orbital graphic"
                      src={orbitalImages[3]}
                    />
                  </div>

                  <div className="flex w-[535px] h-[535px] items-start justify-center absolute top-2.5 left-0 opacity-10">
                    <img
                      className="relative w-[535px] h-[271px]"
                      alt="Orbital graphic"
                      src={orbitalImages[4]}
                    />
                  </div>
                </div>
              </div>

              <CardContent className="flex flex-col items-center justify-center pt-[57px] px-10">
                <div className="flex items-center gap-4 w-full">
                  <span className="relative mt-[-1px] [background:linear-gradient(180deg,rgba(255,200,8,1)_0%,rgba(253,177,30,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Urbanist',Helvetica] font-extrabold text-transparent text-9xl text-center leading-normal">
                    {card.letter}
                  </span>
                  <h3 className="relative font-['Inter',Helvetica] font-bold text-white text-5xl text-center tracking-[-0.20px] leading-[64px] whitespace-nowrap">
                    {card.title}
                  </h3>
                </div>
                <p className="relative self-stretch font-['Outfit',Helvetica] font-normal text-white text-lg leading-[30px]">
                  {card.description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
