import * as React from "react";

const CtaSection: React.FC = () => {
  return (
    <section className="px-5 py-20 text-center">
      <p className="mx-auto mt-0 mb-8 text-2xl max-w-[800px]">
        Join our exclusive investor network and start backing the next wave of
        disruptive startups.
      </p>
      <div className="flex gap-5 justify-center max-sm:flex-col">
        <button className="px-8 py-4 text-lg font-semibold text-black bg-yellow-400 rounded-xl cursor-pointer border-[none] max-sm:mb-2.5 max-sm:w-full">
          Join Now
        </button>
        <button className="px-8 py-4 text-lg font-semibold text-yellow-400 rounded-xl border border-yellow-400 border-solid cursor-pointer max-sm:mb-2.5 max-sm:w-full">
          Explore Opportunities
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
