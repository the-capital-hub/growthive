import React from "react";
import Rocket from "../../../../Images/rocket.png";

export const FooterSection = (): JSX.Element => {
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
        "Our support goes beyond funding. We offer personalized mentorship, guidance, and resources to help founders scale and thrive after the investment is made.",
      highlighted: false,
    },
  ];

  return (
    <section className="relative flex flex-col w-full items-start gap-16 py-16 px-6 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#fec00f22] rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-[#fec00f33] rounded-full blur-2xl opacity-20" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col w-full items-start gap-4">
        <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold leading-tight font-['Inter']">
          GrowtHive Perks
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl font-medium font-['Inter'] max-w-3xl">
          At GrowtHive, we go beyond just providing capital. Our mission is to
          support founders at every critical stage of their entrepreneurial journey.
        </p>
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-start justify-between gap-12 w-full">
        {/* Perks Cards */}
        <div className="flex flex-col gap-6 w-full md:w-[55%]">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className={`flex gap-4 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-[#ffffff0a] hover:shadow-lg ${
                perk.highlighted ? "bg-[#ffffff1a]" : "bg-transparent"
              }`}
            >
              {perk.highlighted && (
                <div className="w-[4px] bg-[#FEC00F] rounded-full" />
              )}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#FEC00F] font-extrabold text-lg sm:text-xl md:text-2xl font-['Inter'] leading-tight">
                  {perk.title}
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg font-['Inter'] leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rocket Image */}
        <div className="w-full md:w-[40%] relative z-10">
          <img
            src={Rocket}
            alt="GrowtHive rocket illustration"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
