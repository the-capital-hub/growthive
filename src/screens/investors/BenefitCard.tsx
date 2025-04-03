import * as React from "react";

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <article className="p-8 rounded-xl bg-white bg-opacity-10">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="text-base leading-normal opacity-80">{description}</p>
    </article>
  );
};

export default BenefitCard;
