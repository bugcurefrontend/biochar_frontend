"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    // 1. Main container: Responsive height — shorter on mobile so it doesn't dominate the screen
    <div className="relative w-full overflow-hidden font-serif h-[65vh] md:h-[80vh] lg:h-screen">
      
      {/* 2. Video Layer: Stretches to fill the container and sits in the back. */}
      <video
        src="/HeroSection.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      ></video>

      {/* 3. Overlay Layer (Optional but Recommended): Adds a dark tint for better text readability. */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/50 z-10"></div>

      {/* 4. Content Layer: Sits on top of the video and overlay. */}
      <div className="relative z-20 flex h-full items-center px-4 md:px-8 lg:px-16">
        <div>
          <h1 className="w-[80%] text-[1.5rem] text-white md:w-[70%] md:text-[2.5rem] xl:text-[3.5rem]">
            Carbon to Community with Biochar
          </h1>
          <p className="py-1 text-[0.8rem] text-white md:w-[50%] md:text-base xl:text-[1.8rem]">
            As carbon emissions rise
          </p>
          <p className="text-[0.8rem] text-white md:w-[50%] md:text-base xl:text-[1.8rem]">
            rural livelihoods vanish
          </p>
          <p className="py-1 text-[0.8rem] text-white md:w-[50%] md:text-base xl:text-[1.8rem]">
            Two Crises. One Solution.
          </p>
          <div className="pt-5">
            <button className="flex items-center rounded-full bg-white px-3 py-1 text-black text-sm md:px-7 md:py-3 md:text-[1.2rem] gap-2 md:gap-3">
              <Link href="#formForId">Buy Carbon Credits </Link>
              <Image
                src={"/icon.svg"}
                alt={"icon"}
                width={20} // Standardized width for better scaling
                height={20} // Standardized height
                className="ml-2 h-auto w-auto scale-90 md:ml-3 md:scale-100"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;