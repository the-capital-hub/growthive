import * as React from "react";
import CommunityCard from "./CommunityCard";

interface CommunityBenefit {
  title: string;
  description: string;
}

const communityBenefits: CommunityBenefit[] = [
  {
    title: "Engage with Fellow Angels",
    description: "Join a network of like-minded investors.",
  },
  {
    title: "Exclusive Events",
    description: "Participate in exclusive networking opportunities.",
  },
  {
    title: "Peer Insights",
    description: "Help each other on startup evaluation and workshops.",
  },
];

const CommunitySection: React.FC = () => {
  return (
    <section className="px-5 py-20">
      <h2 className="mb-10 text-4xl font-semibold text-center max-sm:text-3xl">
        Our Community
      </h2>
      <div className="grid gap-8 mx-auto my-0 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-[1200px] max-md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {communityBenefits.map((benefit, index) => (
          <CommunityCard
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;
