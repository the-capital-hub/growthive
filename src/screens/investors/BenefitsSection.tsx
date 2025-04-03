import * as React from "react";
import BenefitCard from "./BenefitCard";

interface BenefitItem {
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    title: "Curated Deal Flow",
    description:
      "Access A Pipeline Of Vetted, Scalable Startups In Tech-Enabled Sectors.",
  },
  {
    title: "Founder-First",
    description:
      "We Prioritize Founder Success With Transparent And Growth-Focused Processes.",
  },
  {
    title: "Hands-On Collaboration",
    description:
      "Engage With Founders And Offer Strategic Insights That Help Shape Their Future.",
  },
  {
    title: "Diverse Opportunities",
    description:
      "Invest In A Range Of Startups, Allowing For Portfolio Diversification.",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="px-5 py-20 mx-auto my-0 max-w-[1200px]">
      <h2 className="mb-10 text-4xl font-semibold text-center max-sm:text-3xl">
        <span>Why Invest with </span>
        <span className="text-yellow-400">GrowtHive</span>
        <span>?</span>
      </h2>
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
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
};

export default BenefitsSection;
