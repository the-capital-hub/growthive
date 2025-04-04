import { Card } from "../../../../components/ui/card";
import C1 from "../../../../Images/c1.png";
import C2 from "../../../../Images/c2.png";

const logos = [
  { src: C1, alt: "Rudderstack" },
  { src: C2, alt: "Atlassian" },
  { src: C1, alt: "Zapier" },
  { src: C2, alt: "Quantum Metric" },
  { src: C1, alt: "Sentry" },
  { src: C2, alt: "Appfire" },
  { src: C1, alt: "Mux" },
  { src: C2, alt: "Pennylane" },
  { src: C1, alt: "Hack The Box" },
];

export const GrowthHiveTrendSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-6 sm:gap-[26px] relative px-4">
      <Card className="overflow-hidden relative w-full h-[70px] sm:h-[80px] md:h-[91px] bg-[#00000005] border-[#ffffff03] shadow-[0px_10px_20px_#ead01321] backdrop-blur-[3.5px]">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-4 sm:h-5 md:h-6 object-contain"
            />
          ))}
        </div>
      </Card>
    </section>

  );
};
