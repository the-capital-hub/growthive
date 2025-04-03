import * as React from "react";

function HeroSection() {
  return (
    <section className="flex relative flex-col items-center px-5 py-32 mx-auto my-0 text-center max-w-[1134px]">
      <h1 className="mb-5 text-8xl font-bold tracking-normal text-white leading-[86.4px] max-md:text-6xl max-md:leading-tight max-sm:text-3xl">
        <span>Looking to </span>
        <span className="bg-clip-text">Raise Capital?</span>
      </h1>
      <p className="mb-10 text-xl leading-8 text-white max-w-[800px] max-sm:text-base">
        At GrowtHive, we support exceptional founders from the idea stage
        through early traction. If you're building something bold, disruptive,
        and innovative, we want to partner with you and help turn your vision
        into reality.
      </p>
      <div className="flex gap-4 max-sm:flex-col max-sm:w-full">
        <button className="px-5 py-4 text-xl font-semibold text-black bg-yellow-400 transition-all cursor-pointer border-[none] duration-[0.3s] rounded-[83.81px] max-sm:w-full">
          Apply Now
        </button>
        <button className="px-5 py-4 text-xl border border-solid transition-all cursor-pointer border-white border-opacity-80 duration-[0.3s] rounded-[83.81px] text-white text-opacity-80 max-sm:w-full">
          Join Startup Community
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
