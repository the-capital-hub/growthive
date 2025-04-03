import * as React from "react";

interface CommunityCardProps {
  title: string;
  description: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  description,
}) => {
  return (
    <article className="p-8 text-center">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="text-base leading-normal opacity-80">{description}</p>
    </article>
  );
};

export default CommunityCard;
