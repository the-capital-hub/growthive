import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import RingFrame from "../../../../Images/ringFrame.png"
import User1 from "../../../../Images/Chirag.jpeg"
import User2 from "../../../../Images/harshShah.jpeg"
import User3 from "../../../../Images/varunsadna.jpeg"
import User4 from "../../../../Images/vitiAatrey.jpeg"

export const WhatWeDoSection = (): JSX.Element => {
  // User avatars data for the trust banner
  const userAvatars = [
    { src: User1, alt: "User avatar 1" },
    { src: User2, alt: "User avatar 2" },
    { src: User3, alt: "User avatar 3" },
    { src: User4, alt: "User avatar 4" },
  ];

  return (
    <section className="flex flex-col w-full h-[100vh] items-center gap-[54px] py-12 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${RingFrame})` }}>
      
      {/* ✨ Twinkling Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${1 + Math.random() * 3}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-10 w-full">
        {/* Trust banner */}
        <div className="relative" >
          <Card className="flex justify-center bg-[#ffffff0d] rounded-[80px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] border-none">
          <CardContent className="flex items-center px-4 py-2 h-full">
            {/* Avatars */}
            <div className="flex">
              {userAvatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  className="w-[44px] h-[44px] rounded-full border-2 border-white ml-[-12px] first:ml-0 shadow-md"
                  style={{ zIndex: userAvatars.length - index }}
                >
                  <AvatarImage
                    src={avatar.src}
                    alt={avatar.alt}
                    className="object-cover"
                  />
                </Avatar>
              ))}
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[36px] mx-4 bg-gradient-to-b from-[#FF6A3A] to-[#B8506F]" />

            {/* Text */}
            <div className="[font-family:'Outfit',Helvetica] text-white text-sm sm:text-base font-normal whitespace-nowrap">
              Trusted by <span className="font-semibold text-[#fcb513]">30 Crores</span>{" "}
              User&apos;s
            </div>
          </CardContent>

          </Card>
        </div>

        {/* Banner Text*/}
        <h2 className="max-w-[954px] text-center font-bold leading-tight text-7xl sm:text-4xl md:text-5xl">
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, #FFC610 60%, #ffffff 100%)`
          }}
        >
          GrowtHive
        </span>{" "}
          <span className="text-white">Empowering Early-Stage</span>
          <br />
          <span className="text-white">Startups</span>
        </h2>


        {/* Description text */}
        <p className="max-w-[954px] [font-family:'Inter',Helvetica] font-medium text-white text-xl text-center leading-[33px]">
          Where ambition meets opportunity. We connect visionary founders with
          angel investors to transform bold ideas into thriving ventures.
        </p>
      </div>


      

      {/* Call to action buttons */}
      <div className="flex items-center mt-[20vh] gap-4">
        <div className="flex w-[203px] h-[66px] rounded-[146.29px] border-[2.29px] border-solid border-[#ffffff63] p-[5.33px]">
          <Button className="w-full h-full bg-[#ffc610] hover:bg-[#e6b20e] text-black rounded-[83.81px] [font-family:'Outfit',Helvetica] font-semibold text-xl">
            Apply for Funding
          </Button>
        </div>

        <div className="h-[66px] p-[5.33px]">
          <Button
            variant="outline"
            className="h-full rounded-[83.81px] border border-solid bg-[#ffffff1a] border-[#ffffffcc] [font-family:'Outfit',Helvetica] hover:font-semibold text-[white] text-xl hover:bg-[#ffc610] hover:text-black"
          >
            Explore Startups
          </Button>
        </div>
      </div>

      {/* Bottom banner texts */}
      <div className="flex">
        <span className="text-white">More than </span>{" "}
        <span
          className="bg-clip-text px-2 text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, #FFC610 60%, #ffffff 100%)`
          }}
        >
          15k companies
        </span>{" "}
        <span className="text-white">are with us!</span>
      </div>
      
    </section>
  );
};
