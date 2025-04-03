import * as React from "react";
import ProcessCard from "./ProcessCard";

interface ProcessStep {
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "Join Our Network",
    description: "Be an esteemed part of our angel investor community.",
  },
  {
    title: "Access Vetted Deals",
    description: "Review high-potential startups.",
  },
  {
    title: "Choose Where to Invest",
    description: "Select startups that align with your interests.",
  },
  {
    title: "Stay Updated",
    description: "Receive regular updates on performance and portfolio.",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="px-5 py-20 bg-white bg-opacity-0">
      <h2 className="mb-10 text-4xl font-semibold text-center max-sm:text-3xl">
        How It Works
      </h2>
      <div className="grid gap-8 mx-auto my-0 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-[1200px] max-md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {processSteps.map((step, index) => (
          <ProcessCard
            key={index}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
