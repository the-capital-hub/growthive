import * as React from "react";

function WelcomeSection() {
  return (
    <section className="flex relative justify-center items-center px-7 py-9 mx-auto my-0 border-yellow-400 border-solid bg-black bg-opacity-20 border-[7px] max-w-[1055px] rounded-[45.9px] shadow-[0px_4px_20px_rgba(83,133,239,0.3)]">
      <div className="flex flex-col gap-5 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc78f25a4b09b06369c531c94afaca7c1e3944fb"
          className="h-[109px] rounded-[47.5px] w-[95px]"
          alt="GrowtHive Logo"
        />
        <h2 className="text-4xl font-bold text-white">Welcome to GrowtHive</h2>
        <div className="flex justify-center items-center rounded-full transition-all cursor-pointer duration-[0.3s] h-[62px] w-[62px]">
          <i className="ti ti-player-play text-2xl text-white" />
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
