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
    <section className="relative flex flex-col w-full min-h-screen items-center gap-12 sm:gap-8 py-12 px-4 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${RingFrame})` }}>
  
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

      <div className="flex flex-col items-center gap-10 w-full max-w-screen-xl z-10">
        {/* Trust banner */}
        <div className="relative w-full max-w-md">
          <Card className="flex justify-center bg-[#ffffff0d] rounded-3xl sm:rounded-[60px] backdrop-blur-[15px] border-none">
            <CardContent className="flex items-center px-4 py-2 h-full">
              {/* Avatars */}
              <div className="flex">
                {userAvatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className="w-10 h-10 sm:w-[44px] sm:h-[44px] rounded-full border-2 border-white ml-[-12px] first:ml-0 shadow-md"
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
              <div className="w-px h-8 sm:h-9 mx-4 bg-gradient-to-b from-[#FF6A3A] to-[#B8506F]" />

              {/* Text */}
              <div className="font-outfit text-white text-sm sm:text-base font-normal whitespace-nowrap">
                Trusted by <span className="font-semibold text-[#facc15]">30 Crores</span>{" "}
                User&apos;s
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Banner Text */}
        <h2 className="max-w-4xl text-center font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10">
          <span
            className="bg-clip-text text-transparent"
            style={{
              color: '#FACC15'
            }}
          >
            GrowtHive
          </span>{" "}
          <span className="text-white">Empowering Early-Stage</span>
          <br />
          <span className="text-white">Startups</span>
        </h2>

        {/* Description text */}
        <p className="max-w-3xl font-inter font-medium text-white text-base sm:text-lg md:text-xl text-center leading-relaxed sm:leading-[30px] md:leading-[33px] z-10">
          Where ambition meets opportunity. We connect visionary founders with
          angel investors to transform bold ideas into thriving ventures.
        </p>
      </div>

      {/* Call to action buttons */}
      <div className="flex flex-col sm:flex-row items-center mt-16 sm:mt-20 gap-4 z-10">
        <div className="w-full sm:w-[203px] h-[60px] sm:h-[66px] rounded-full border-[2px] border-[#ffffff63] p-[5px]">
          <Button className="w-full h-full bg-[#facc15] hover:bg-[#e6b20e] text-black rounded-full font-outfit font-semibold text-lg sm:text-xl">
            Apply for Funding
          </Button>
        </div>

        <div className="w-full sm:w-auto h-[60px] sm:h-[66px] p-[5px]">
          <Button
            variant="outline"
            className="w-full sm:w-auto h-full rounded-full border border-solid bg-[#ffffff1a] border-[#ffffffcc] font-outfit font-normal sm:font-semibold text-white text-lg sm:text-xl hover:bg-[#facc15] hover:text-black"
          >
            Explore Startups
          </Button>
        </div>
      </div>

      {/* Bottom banner texts */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-6 sm:mt-10 z-10 text-base sm:text-lg text-white">
        <span>More than</span>
        <span
          className="bg-clip-text text-transparent px-1"
          style={{
            color: `#facc15`
          }}
        >
          15k companies
        </span>
        <span>are with us!</span>
      </div>
    </section>

      );
    };
