import * as React from "react";

function ApplicationStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-[#ffffff0a] border border-[#ffffff14] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
      {/* Shooting star border animation - only on hover */}
      <div className="absolute inset-0 rounded-2xl z-0 pointer-events-none">
        {/* Top border */}
        <span className="absolute left-0 top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FEC00F] to-transparent opacity-0 group-hover:opacity-100 animate-border-top" />
        {/* Right border */}
        <span className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#FEC00F] to-transparent opacity-0 group-hover:opacity-100 animate-border-right" />
        {/* Bottom border */}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-transparent via-[#FEC00F] to-transparent opacity-0 group-hover:opacity-100 animate-border-bottom" />
        {/* Left border */}
        <span className="absolute left-0 bottom-0 h-full w-[2px] bg-gradient-to-t from-transparent via-[#FEC00F] to-transparent opacity-0 group-hover:opacity-100 animate-border-left" />
      </div>

      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="text-[#FEC00F] text-3xl font-extrabold font-['Inter'] drop-shadow-sm">
            {number}
          </div>
          <h3 className="text-white text-xl sm:text-2xl font-bold font-['Inter']">
            {title}
          </h3>
        </div>
        <p className="text-white text-base sm:text-lg font-['Inter'] leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
}


function FundingApplicationSection() {
  const steps = [
    {
      number: "1",
      title: "Submit Your Application",
      description: "Share your startup details with us through our platform.",
    },
    {
      number: "2",
      title: "Get Shortlisted",
      description:
        "If your vision aligns with our values, we will reach out to discuss potential opportunities.",
    },
    {
      number: "3",
      title: "Connect with Investors",
      description:
        "Once shortlisted, you'll have the chance to present your startup to our network of angel investors.",
    },
  ];

  return (
    <section className="px-5 py-0 mx-auto my-24 max-w-[1200px]">
      <div className="mb-16 text-center">
        <h2 className="mb-5 text-6xl md:text-7xl font-bold tracking-tight text-white leading-[64px] font-['Inter']">
          <span>How to </span>
          <span className="text-[#facc15]">
            Apply for Funding
          </span>
        </h2>
        <p className="text-xl font-medium leading-8 text-white font-['Inter'] opacity-90 max-w-2xl mx-auto">
          We're always on the lookout for visionary founders and innovative
          ideas. Applying for funding at GrowtHive is simple and efficient.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <ApplicationStep
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FundingApplicationSection;
