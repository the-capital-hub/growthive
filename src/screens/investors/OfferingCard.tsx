import * as React from "react";

interface OfferingCardProps {
  title: string;
  description: string;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description }) => {
  return (
    <article className="p-8 rounded-xl border border-solid border-white border-opacity-10">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default OfferingCard;
