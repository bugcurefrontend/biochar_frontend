"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const [initialBuffered, setInitialBuffered] = useState(false);
  const [fullyLoaded, setFullyLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ultra-fast loading - multiple strategies
  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Aggressive preloading
      video.preload = 'auto';
      
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
        setFullyLoaded(true);
      };

      const handleError = () => {
        setVideoError(true);
      };

      // Add all event listeners for fastest response
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('canplaythrough', handleCanPlayThrough);
      video.addEventListener('error', handleError);

      // Force immediate load
      video.load();

      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  // Preload video in background for even faster loading
  useEffect(() => {
    // Create invisible video element to start downloading immediately
    const preloadVideo = document.createElement('video');
    preloadVideo.src = '/HeroSection.mp4';
    preloadVideo.preload = 'auto';
    preloadVideo.muted = true;
    preloadVideo.style.display = 'none';
    document.body.appendChild(preloadVideo);
    preloadVideo.load();

    return () => {
      document.body.removeChild(preloadVideo);
    };
  }, []);

  return (
    // 1. Main container: Responsive height — shorter on mobile so it doesn't dominate the screen
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden font-serif h-[65vh] md:h-[80vh] lg:h-screen"
    >
      
      {/* 2. Video Layer: Progressive loading with 30% buffer strategy */}
      <div className="absolute top-0 left-0 h-full w-full z-0">
        <video
          ref={videoRef}
          src="/HeroSection.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`h-full w-full object-cover transition-opacity duration-150 ${
            initialBuffered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Minimal loading state - only shows for very brief moment */}
        {!initialBuffered && !videoError && (
          <div className="absolute inset-0 bg-gray-900" />
        )}

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