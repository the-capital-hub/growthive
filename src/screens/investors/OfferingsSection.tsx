import * as React from "react";
import OfferingCard from "./OfferingCard";

interface OfferingItem {
  title: string;
  description: string;
}

const offerings: OfferingItem[] = [
  {
    title: "Pre-Seed to Seed Investments",
    description: "Focused On Early Stage, High-Growth Companies.",
  },
  {
    title: "Co-Investment & Syndication",
    description: "Join Others In Co-investment Deals To Maximize Reach.",
  },
  {
    title: "Strategic Involvement",
    description:
      "Go Beyond Capital And Mentor Founders On Their Growth Journey.",
  },
];

const OfferingsSection: React.FC = () => {
  return (
    <section className="px-5 py-20 bg-white bg-opacity-0">
      <h2 className="mb-10 text-4xl font-semibold text-center max-sm:text-3xl">
        What We Offer
      </h2>
      <div className="grid gap-8 mx-auto my-0 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-[1200px] max-md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {offerings.map((offering, index) => (
          <OfferingCard
            key={index}
            title={offering.title}
            description={offering.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;
