import * as React from "react";

function HeroSection() {
  return (
    <section className="flex relative flex-col items-center px-5 py-32 mx-auto my-0 text-center max-w-[1134px]">
      <h1 className="max-w-4xl text-center font-bold mb-5 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="text-white">Looking to </span>
        <span className="bg-clip-text text-white">Raise Capital?</span>
      </h1>
      <p className="max-w-3xl font-inter font-medium text-white text-base sm:text-lg md:text-xl text-center leading-relaxed sm:leading-[30px] md:leading-[33px] mb-10">
        At GrowtHive, we support exceptional founders from the idea stage
        through early traction. If you're building something bold, disruptive,
        and innovative, we want to partner with you and help turn your vision
        into reality.
      </p>
      <div className="flex gap-4 max-sm:flex-col max-sm:w-full">
        <button className="px-5 py-4 text-lg sm:text-xl font-semibold text-black bg-[#facc15] hover:bg-[#e6b20e] transition-all cursor-pointer border-[none] duration-[0.3s] rounded-[83.81px] max-sm:w-full">
          Apply Now
        </button>
        <button className="px-5 py-4 text-lg sm:text-xl font-semibold border border-solid transition-all cursor-pointer border-white border-opacity-80 duration-[0.3s] rounded-[83.81px] text-white hover:bg-[#ffffff1a] max-sm:w-full">
          Join Startup Community
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
