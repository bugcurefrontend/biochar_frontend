"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* <div className="relative w-full  border-2"> */}
      <div></div>

      <video src="/HeroSection.mp4" autoPlay loop muted playsInline></video>
      {/* </div> */}
      {/* for mobile view */}
      <div className="bg-black px-4 py-10 font-serif md:hidden">
        <h1 className="text-[1.5rem] text-white w-[50%]">
          Carbon to Community with Biochar
        </h1>
        <p className="text-[0.8rem] text-white w-[50%] py-1">
          As carbon emissions rise
        </p>
        <p className="text-[0.8rem] text-white w-[50%] ">
          rural livelihoods vanish
        </p>
        <p className="text-[0.8rem] text-white w-[50%] py-1">
          Two Crises. One Solution.
        </p>
        <div className="pt-5">
          <button className="bg-white flex justify-between items-center text-black px-3 py-1 rounded-full text-sm">
            Buy Carbon Credits
            <Image src={"/icon.svg"} alt={"icon"} width={10} height={10}  className="mx-2" />
          </button>
        </div>
      </div>

      {/* for website view */}
      <div className="hidden font-serif px-4 py-10 md:block absolute top-14 left-4 lg:top-[17%] lg:left-[6%] xl:top-[24%]">
        <h1 className="text-[2.5rem] text-white w-[70%] xl:text-[3.5rem]">
          Carbon to Community with Biochar
        </h1>
        <p className="text-[0.8rem] text-white w-[50%] py-1 xl:text-[1.8rem]">
          As carbon emissions rise
        </p>
        <p className="text-[0.8rem] text-white w-[50%] py- xl:text-[1.8rem]">
          rural livelihoods vanish
        </p>
        <p className="text-[0.8rem] text-white w-[50%] py-1 xl:text-[1.8rem]">
          Two Crises. One Solution.
        </p>
        <div className="pt-5">
         <button className="bg-white flex justify-between items-center  text-black px-3 py-1 rounded-full text-sm lg:text-[1.2rem] md:px-7 md:py-3">
            <Link href="#formForId">Buy Carbon Credits </Link>
            <Image
              src={"/icon.svg"}
              alt={"icon"}
              width={20}
              height={10}
              className="mx-3"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
