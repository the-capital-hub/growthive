import * as React from "react";

interface BenefitCardProps {
  title: string;
  description: string;
}

function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="p-8 text-left rounded-3xl border border-solid bg-neutral-900 border-white border-opacity-10">
      <h3 className="mb-4 text-[22px] sm:text-[28px] md:text-[32px] lg:text-[26px] font-semibold text-white">{title}</h3>
      <p className="text-base sm:text-[16px] md:text-[18px] lg:text-[16px] leading-relaxed text-white">{description}</p>
    </div>
  );
}

export default BenefitCard;
