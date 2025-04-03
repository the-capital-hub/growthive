import { Card, CardContent } from "../../../../components/ui/card";

export const GrowthCardsSection = (): JSX.Element => {
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

  return (
    <section className="flex flex-col items-center gap-16 py-16 w-full bg-black">
      <div className="flex flex-col items-center max-w-4xl px-4 text-center">
        <h2 className="font-['Urbanist'] font-extrabold text-[#ffffff1A] text-[100px] sm:text-[160px] md:text-[160px] leading-none">
          GROW
        </h2>
        <p className="font-['Inter'] font-medium text-white text-xl leading-[30px] mt-[20px]">
          At GrowtHive, our values drive the way we work with founders and
          investors, setting us apart
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-4">
        {growthCards.map((card, index) => (
          <Card
            key={index}
            className={`rounded-2xl overflow-hidden border-none px-8 py-10 min-h-[230px] flex flex-col justify-center ${
              card.variant === "gradient"
                ? "bg-gradient-to-r from-black to-[#FEB916]"
                : "bg-[#1a1a1a]"
            }`}
          >
        
            <CardContent className="p-0">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[#FEC808] font-extrabold text-6xl font-['Urbanist']">
                  {card.letter}
                </span>
                <h3 className="text-white font-bold text-2xl font-['Inter']">
                  {card.title}
                </h3>
              </div>
              <p className="text-white text-base font-['Outfit'] leading-relaxed">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
