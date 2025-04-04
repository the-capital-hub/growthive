import { Card, CardContent } from "../../../../components/ui/card";

export const GrowthHivePerksSection = (): JSX.Element => {
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
    <section className="relative overflow-hidden flex flex-col items-center gap-20 w-full max-w-[1374px] mx-auto py-10">

      {/* ✨ Twinkling Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${1 + Math.random() * 3}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="pb-[26px] font-['Inter',Helvetica] font-bold text-[36px] sm:text-[48px] md:text-[68px] text-[#a9a9a9] animate-fadeInUp">
          What We Do
        </h2>
        <p className="px-4 max-w-[1250px] font-['Inter',Helvetica] font-medium text-[#a9a9a9] text-[16px] sm:text-[20px] md:text-[22px] leading-[30px] animate-fadeInUp">
          At GrowtHive, we connect visionary early-stage startups with a trusted network of angel investors. Our mission is to empower founders who are driven by bold ambitions and a vision to shape the future.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-7 md:gap-[27px] w-full px-4">
        {perks.map((perk, index) => (
          <Card
            key={perk.id}
            className="flex-1 min-w-[280px] sm:min-w-[320px] max-w-[651px] h-auto sm:h-[220px] bg-[#ffffff03] rounded-3xl border border-[#ffffff1a] shadow-[inset_0px_0px_0px_9px_#ffffff08] overflow-hidden animate-fadeInUp"
            style={{ animationDelay: `${0.2 * index}s` }}
          >
            <CardContent className="h-full p-4 sm:p-[10px]">
              <div className="w-full h-full flex flex-col items-start justify-start gap-3 sm:gap-4 rounded-2xl border border-[#ffffff1a] backdrop-blur-[17px] px-6 sm:px-8 pt-5 sm:pt-6 pb-5 sm:pb-6 [background:radial-gradient(50%_50%_at_50%_50%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(4,1,21,0.1)_0%,rgba(4,1,21,0.1)_100%)]">
                <h3 className="font-inter font-extrabold text-[#facc15] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[26px] leading-snug text-left">
                  {perk.title}
                </h3>
                <p className="font-outfit font-normal text-[#c5c5c5] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[16px] text-left leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    </section>
  );
};
