import * as React from "react";

interface OfferingCardProps {
  title: string;
  description: string;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description }) => {
  return (
    <article className="p-8 rounded-xl border border-solid border-white border-opacity-10">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-base leading-normal opacity-80">{description}</p>
    </article>
  );
};

export default OfferingCard;
