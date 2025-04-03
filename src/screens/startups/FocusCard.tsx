import * as React from "react";

interface FocusCardProps {
  title: string;
  description: string;
}

function FocusCard({ title, description }: FocusCardProps) {
  return (
    <div className="p-8 rounded-3xl border border-solid bg-neutral-900 border-white border-opacity-10">
      <h3 className="mb-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="text-base leading-relaxed text-white">{description}</p>
    </div>
  );
}

export default FocusCard;
