import * as React from "react";
import BenefitCard from "./BenefitCard";

function WhyGrowtHiveSection() {
  const benefits = [
    {
      title: "Founder-First Capital",
      description:
        "Our approach prioritizes the needs of founders, offering transparent, supportive, and efficient processes.",
    },
    {
      title: "Fast Decision-Making",
      description:
        "We know time is of the essence. Our streamlined process enables quick decision-making, so you can focus on what matters.",
    },
    {
      title: "Strategic Angel Network",
      description:
        "Access our extensive network of experienced angel investors who provide both funding and hands-on strategic support.",
    },
    {
      title: "Support Beyond Funding",
      description:
        "At GrowtHive, we aren't just a source of capital. Our post-investment support includes mentorship, strategic guidance, and industry connections to help you grow.",
    },
  ];

  return (
    <section className="px-5 py-0 mx-auto my-24 text-center max-w-[1200px]">
      <h2 className="mb-16 text-7xl font-bold text-white max-md:text-5xl">
        <span>Why </span>
        <span className="text-yellow-400">GrowtHive?</span>
      </h2>
      <div className="grid gap-8 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyGrowtHiveSection;
