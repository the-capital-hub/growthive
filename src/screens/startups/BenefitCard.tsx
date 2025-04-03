import * as React from "react";

interface BenefitCardProps {
  title: string;
  description: string;
}

function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="p-8 text-left rounded-3xl border border-solid bg-neutral-900 border-white border-opacity-10">
      <h3 className="mb-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="text-base leading-relaxed text-white">{description}</p>
    </div>
  );
}

export default BenefitCard;
