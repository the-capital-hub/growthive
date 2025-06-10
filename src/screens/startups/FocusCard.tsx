import * as React from "react";

interface FocusCardProps {
  title: string;
  description: string;
}

function FocusCard({ title, description }: FocusCardProps) {
  return (
    <article className="p-8 rounded-xl bg-white bg-opacity-10">
      <h3 className="mb-4 text-[22px] sm:text-[28px] md:text-[32px] lg:text-[26px] text-white font-bold">
        {title}
      </h3>
      <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[16px] text-white opacity-80">
        {description}
      </p>
    </article>
  );
}

export default FocusCard;
