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
      <h3 className="text-5xl font-bold tracking-normal text-white leading-[64px] max-sm:text-3xl max-sm:leading-tight">
        {title}
      </h3>
      <p className="text-lg leading-8 text-white">{description}</p>
    </div>
  );
}

export default ApplicationStep;
