import * as React from "react";
import ApplicationStep from "./ApplicationStep";

function FundingApplicationSection() {
  const steps = [
    {
      number: "1",
      title: "Submit Your Application",
      description: "Share your startup details with us through our platform.",
    },
    {
      number: "2",
      title: "Get Shortlisted",
      description:
        "If your vision aligns with our values, we will reach out to discuss potential opportunities.",
    },
    {
      number: "3",
      title: "Connect with Investors",
      description:
        "Once shortlisted, you'll have the chance to present your startup to our network of angel investors.",
    },
  ];

  return (
    <section className="px-5 py-0 mx-auto my-24 max-w-[1200px]">
      <div className="mb-16 text-center">
        <h2 className="mb-5 text-7xl font-bold tracking-normal text-white leading-[64px] max-md:text-5xl">
          <span>How to </span>
          <span className="bg-clip-text">Apply for Funding</span>
        </h2>
        <p className="text-xl font-medium leading-8 text-white">
          We're always on the lookout for visionary founders and innovative
          ideas. Applying for funding at GrowtHive is simple and efficient
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {steps.map((step, index) => (
          <ApplicationStep
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FundingApplicationSection;
