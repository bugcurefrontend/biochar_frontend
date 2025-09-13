"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { CONSTANTS } from "../constants";

const Hero = () => {
  const [initialBuffered, setInitialBuffered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ultra-fast loading - multiple strategies
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Load only metadata
      video.preload = "metadata";

      // Event listeners for fastest possible loading
      const handleLoadStart = () => {
        // Video started loading
      };

      const handleLoadedMetadata = () => {
        // Metadata loaded - show video immediately
        setInitialBuffered(true);
        video.play().catch(() => {});
      };

      const handleCanPlay = () => {
        // Can start playing - show video
        setInitialBuffered(true);
        video.play().catch(() => {});
      };

      const handleCanPlayThrough = () => {
        // Can play through without stopping
        // Video fully loaded
      };

      const handleError = () => {
        setVideoError(true);
      };

      // Add all event listeners for fastest response
      video.addEventListener("loadstart", handleLoadStart);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("canplaythrough", handleCanPlayThrough);
      video.addEventListener("error", handleError);

      // Force immediate load
      video.load();

      return () => {
        video.removeEventListener("loadstart", handleLoadStart);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("canplaythrough", handleCanPlayThrough);
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  // Simplified loading - remove preload element for better performance

  return (
    // 1. Main container: Responsive height — shorter on mobile so it doesn't dominate the screen
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden font-serif h-[65vh] md:h-[80vh] lg:h-screen"
    >
      {/* 2. Video Layer: Progressive loading with 30% buffer strategy */}
      <div className="absolute top-0 left-0 h-full w-full z-0">
        {/* Poster image - always present, hidden when video is ready */}
        <Image
          src="/hero_section_poster.webp"
          alt="Hero section"
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-150 ${
            initialBuffered ? "opacity-0" : "opacity-100"
          }`}
          priority
        />

        <video
          ref={videoRef}
          src={CONSTANTS.VIDEOS.HERO}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`h-full w-full object-cover transition-opacity duration-150 ${
            initialBuffered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Fallback if video fails */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />
        )}
      </div>

      {/* 3. Overlay Layer: Adds a dark tint for better text readability */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/40 z-10"></div>

      {/* 4. Content Layer: Sits on top of the video and overlay. */}
      <div className="relative z-20 flex h-full items-center px-4 md:px-8 lg:px-16">
        <div>
          <h1 className="w-full text-white">
            <span className="md:hidden text-[1.3rem] leading-tight">
              Carbon to Community <br /> with Biochar
            </span>
            <span className="hidden md:inline md:text-[2.5rem] xl:text-[3.5rem] leading-18">
              Carbon to Community <br /> with Biochar
            </span>
          </h1>
          <p className="mt-2 py-1 text-[0.8rem] text-white md:text-base xl:text-[1.8rem]">
            As carbon emissions rise.
          </p>
          <p className="text-[0.8rem] text-white md:text-base xl:text-[1.8rem]">
            Rural livelihoods vanish.
          </p>
          <p className="py-1 text-[0.8rem] text-white md:text-base xl:text-[1.8rem]">
            Two crises. One solution.
          </p>
          <div className="md:pt-5 pt-3">
            <button className="group flex items-center rounded-full bg-white px-3 py-1.5 text-black text-xs sm:px-3 sm:text-sm md:px-7 md:py-3 md:text-[1.2rem] gap-1 sm:gap-2 md:gap-3 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
              <Link href="#formForId">Buy Carbon Credits </Link>
              <Image
                src={CONSTANTS.ICONS.ARROW}
                alt={"icon"}
                width={20}
                height={20}
                className="ml-1 w-4 h-4 scale-75 sm:ml-2 sm:w-5 sm:h-5 sm:scale-90 md:ml-3 md:scale-100 group-hover:translate-x-1 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                style={{ width: "auto", height: "auto" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
