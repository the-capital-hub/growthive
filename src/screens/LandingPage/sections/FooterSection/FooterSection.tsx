import React from "react";
import BackgroundImage from "../../../../Images/beeBackground.png"; // Replace with your actual background image path

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
      highlighted: true,
    },
    {
      id: 3,
      title: "Hands-On Post-Investment Support",
      description:
        "Our support goes beyond funding. We offer personalized mentorship, guidance, and resources to help founders scale and thrive after the investment is made.",
      highlighted: true,
    },
  ];

  return (
    <section
      className="relative w-full py-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 bg-black bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Optional color overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-['Inter']">
            GrowtHive Perks
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl font-medium font-['Inter'] max-w-3xl">
            At GrowtHive, we go beyond just providing capital. Our mission is to
            support founders at every critical stage of their entrepreneurial journey.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className={`flex gap-4 rounded-2xl p-5 transition-all duration-300 hover:bg-[#ffffff0a] hover:shadow-lg ${
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
      </div>
    </section>
  );
};
