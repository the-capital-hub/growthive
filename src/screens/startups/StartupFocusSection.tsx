import * as React from "react";
import FocusCard from "./FocusCard";

function StartupFocusSection() {
  const focusAreas = [
    {
      title: "Tech-Enabled Startups",
      description:
        "Startups Leveraging Technology To Innovate And Disrupt Traditional Industries.",
    },
    {
      title: "Strong Founding Teams",
      description:
        "Founders With The Resilience, Ambition, And Vision To Build The Next Big Thing.",
    },
    {
      title: "Early-Stage (Pre-Seed to Seed)",
      description:
        "We Focus On Startups From Pre-Seed To Seed Stages, Helping Them Secure Early Capital And Accelerate Their Growth.",
    },
    {
      title: "Scalable & Capital-Efficient Models",
      description:
        "Startups With A Clear Path To Scale And A Focus On Capital Efficiency.",
    },
  ];

  return (
    <section className="grid gap-8 px-5 py-0 mx-auto my-24 grid-cols-[repeat(2,1fr)] max-w-[1200px] max-md:grid-cols-[1fr]">
      {focusAreas.map((area, index) => (
        <FocusCard
          key={index}
          title={area.title}
          description={area.description}
        />
      ))}
    </section>
  );
}

export default StartupFocusSection;
