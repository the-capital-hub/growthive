import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GrowthHivePerksSection = (): JSX.Element => {
  // Data for perk cards to enable mapping
  const perks = [
    {
      id: 1,
      title: "Founder Friendly",
      description:
        "We Prioritize Founders With A Transparent, Efficient, And Supportive Process Designed For Their Success.",
    },
    {
      id: 2,
      title: "Smart Capital",
      description:
        "More Than Just Investment—we Offer Strategic Guidance, Mentorship, And Access To Key Industry Connections.",
    },
    {
      id: 3,
      title: "Community-Driven",
      description:
        "We Foster A Dynamic Community Of Investors And Peers, Working Together To Accelerate Growth And Success.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 w-full max-w-[1374px] mx-auto py-10">
      <div className="flex flex-col items-center">
        <h2 className="pb-[26px] [text-shadow:0px_1px_0px_#00000012] [background:linear-gradient(168deg,rgba(255,255,255,1)_65%,rgba(255,255,255,0.43)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Inter',Helvetica] font-bold text-transparent text-[68px] text-center tracking-[-0.20px] leading-[64px]">
          What We Do
        </h2>

        <div className="px-1.5 w-full">
          <p className="w-full max-w-[1250px] mx-auto font-['Inter',Helvetica] font-medium text-[#a9a9a9] text-lg text-center leading-[30px]">
            At GrowtHive, we connect visionary early-stage startups with a
            trusted network of angel investors. Our mission is to empower
            founders who are driven by bold ambitions and a vision to shape the
            future.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-20 w-full">
        <div className="flex flex-wrap items-center justify-center gap-[27px] w-full">
          {perks.slice(0, 2).map((perk) => (
            <Card
              key={perk.id}
              className="flex-1 min-w-[651px] h-[186px] bg-[#ffffff03] rounded-3xl border border-solid border-[#ffffff1a] shadow-[inset_0px_0px_0px_9px_#ffffff08] overflow-hidden"
            >
              <CardContent className="h-[166px] p-[9px]">
                <div className="w-full h-full rounded-2xl border border-solid border-[#ffffff1a] backdrop-blur-[17px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(4,1,21,0.1)_0%,rgba(4,1,21,0.1)_100%)] relative px-8 pt-6">
                  <h3 className="font-['Inter',Helvetica] font-extrabold text-[#feb514] text-2xl leading-6">
                    {perk.title}
                  </h3>

                  <div className="flex items-center gap-4 absolute top-[73px] left-8">
                    <div className="self-stretch w-1 bg-[#ffffff3d] rounded-sm h-auto" />
                    <p className="font-['Outfit',Helvetica] font-normal text-[#c5c5c5] text-2xl leading-10 max-w-[621px]">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <Card className="w-[696px] h-[186px] bg-[#ffffff03] rounded-3xl border border-solid border-[#ffffff1a] shadow-[inset_0px_0px_0px_9px_#ffffff08] overflow-hidden">
            <CardContent className="h-[166px] p-[9px]">
              <div className="w-full h-full rounded-2xl border border-solid border-[#ffffff1a] backdrop-blur-[17px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(4,1,21,0.1)_0%,rgba(4,1,21,0.1)_100%)] relative px-8 pt-6">
                <h3 className="font-['Inter',Helvetica] font-extrabold text-[#feb514] text-2xl leading-6">
                  {perks[2].title}
                </h3>

                <div className="flex items-center gap-4 absolute top-[73px] left-8">
                  <div className="self-stretch w-1 bg-[#ffffff3d] rounded-sm h-auto" />
                  <p className="font-['Outfit',Helvetica] font-normal text-[#c5c5c5] text-2xl leading-10 max-w-[621px]">
                    {perks[2].description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
