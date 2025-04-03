"use client";
import * as React from "react";
import PartnerLogos from "./PartnerLogos";

const HeroSection: React.FC = () => {
  return (
    <section className="overflow-hidden relative px-5 py-24 text-center max-md:px-5 max-md:py-16">
      <div>
        <p className="mb-2.5 text-2xl">JOIN OUR</p>
        <h2 className="mb-5 text-5xl font-bold max-md:text-4xl max-sm:text-3xl">
          Angel Network
        </h2>
        <p className="mx-auto mt-0 mb-8 text-lg leading-normal max-w-[800px] max-sm:text-base">
          At GrowtHive, we give accredited investors exclusive access to
          high-potential, early-stage startups. Join our community to get help
          navigating the complex industry journey.
        </p>
        <p className="mb-5 text-2xl">Ready to Shape the Future of Startups?</p>
        <button className="px-8 py-4 text-lg font-semibold text-black bg-yellow-400 rounded-xl cursor-pointer border-[none] max-sm:mb-2.5 max-sm:w-full">
          Join Investor Community
        </button>
        <p className="mt-10 text-xl">
          <span>More than </span>
          <span className="text-yellow-400">15k companies</span>
          <span> are with us</span>
        </p>
      </div>
      <PartnerLogos />
    </section>
  );
};

export default HeroSection;
