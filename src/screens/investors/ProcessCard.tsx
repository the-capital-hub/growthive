import * as React from "react";

interface ProcessCardProps {
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, description }) => {
  return (
    <article className="p-8 text-center rounded-xl bg-white bg-opacity-10">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default ProcessCard;
