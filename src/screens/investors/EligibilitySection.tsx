import * as React from "react";

const eligibilityCriteria = [
  "Experienced professionals",
  "Entrepreneurs",
  "HNIs & Family Offices",
  "Passionate startup supporters",
];

const EligibilitySection: React.FC = () => {
  return (
    <section className="px-5 py-20 mx-auto my-0 max-w-[1200px]">
      <h2 className="mb-10 text-4xl font-semibold text-center max-sm:text-3xl">
        Who Can Join?
      </h2>
      <div className="flex justify-between items-center">
        <ul className="text-xl">
          {eligibilityCriteria.map((criteria, index) => (
            <li key={index} className="gap-2.5 mb-5">
              {criteria}
            </li>
          ))}
        </ul>
        <div
          className="bg-yellow-400 bg-opacity-10 h-[200px] w-[200px]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default EligibilitySection;
