import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  // Data for perks cards to enable mapping
  const perks = [
    {
      id: 1,
      title: "Scouting Visionary Startups",
      description:
        "We seek out high-potential early-stage startups with bold, transformative visions, partnering with founders who are ready to shape the future.",
      highlighted: true,
    },
    {
      id: 2,
      title: "Syndicating Investment Opportunities",
      description:
        "We carefully curate and syndicate investment opportunities, connecting our network of angel investors with founders committed to growth.",
      highlighted: false,
    },
    {
      id: 3,
      title: "Hands-On Post-Investment Support",
      description:
        "Our support goes beyond funding. We offer personalized mentorship, guidance, and resources to help founders scale and thrive after the investment is made",
      highlighted: false,
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[86px] py-16">
      <div className="flex flex-col w-full items-start gap-[30px]">
        <h2 className="w-full font-['Inter',Helvetica] font-bold text-white text-[68px] tracking-[-0.20px] leading-[64px]">
          GrowtHive Perks
        </h2>

        <p className="w-full font-['Inter',Helvetica] font-medium text-white text-xl text-center tracking-[0] leading-[30px]">
          At GrowtHive, we go beyond just providing capital. Our mission is to
          support founders at every critical stage of their entrepreneurial
          journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[217px] w-full">
        <div className="flex flex-col w-full md:w-[630px] items-start gap-10">
          {perks.map((perk) => (
            <Card
              key={perk.id}
              className={`w-full ${perk.highlighted ? "bg-[#ffffff1a]" : "bg-transparent"} rounded-[10px] border-0`}
            >
              <CardContent className="flex items-start gap-2.5 p-5">
                {perk.highlighted && (
                  <div className="relative w-[7px] h-[131px] bg-[#ead013] rounded-[10px]" />
                )}
                <div className="flex flex-col w-full items-start gap-5">
                  <h3 className="w-full font-['Inter',Helvetica] font-extrabold text-[#fec00f] text-[32px] tracking-[0] leading-6">
                    {perk.title}
                  </h3>
                  <p className="w-full font-['Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[30px]">
                    {perk.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <img
          className="w-full md:w-[500px] h-auto md:h-[500px] object-cover"
          alt="GrowtHive illustration"
          src="/image-4.png"
        />
      </div>
    </section>
  );
};
