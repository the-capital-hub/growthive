import * as React from "react";

interface ApplicationStepProps {
  number: string;
  title: string;
  description: string;
}

function ApplicationStep({ number, title, description }: ApplicationStepProps) {
  return (
    <div className="flex gap-5 items-start p-8 rounded-3xl border border-solid bg-neutral-900 border-white border-opacity-10 max-sm:flex-col">
      <div className="text-9xl font-extrabold bg-clip-text max-sm:text-7xl">
        {number}
      </div>
      <h3 className="font-bold tracking-normal text-white leading-[64px] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[26px] max-sm:leading-tight">
        {title}
      </h3>
      <p className="text-lg text-[14px] sm:text-[16px] md:text-[18px] text-white lg:text-[16px] leading-8">{description}</p>
    </div>
  );
}

export default ApplicationStep;
