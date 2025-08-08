"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { useState, useRef, useEffect, useMemo } from "react";

const TransfomationPart = () => {
  const videoList = useMemo(() => [
    { src: "/Kanha.mp4", poster: "/poster1.jpg" },
    { src: "/shivgarh_video.mp4", poster: "/poster1.jpg" },
  ], []);

  const [selectedVideo, setSelectedVideo] = useState(videoList[0]);
  const [imagesVisible, setImagesVisible] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const topCards = [
    {
      count: 3000,
      label: "Farmers\nEngaged",
      description: "Trials Active with 460 Farmers in 8 Districts",
    },
    {
      count: 10200,
      label: "Hectares\nRestored",
      description: "with Biochar-Based Soil Regeneration Practices",
    },
    {
      count: 3920,
      label: "Carbon Credits\nIssued",
      description: "Verified via Leading Standards",
    },
  ];
  const bottomCards = [
    {
      count: 18,
      label: "18+ Million\nFarmers\nEmpowered",
      description: "Scalable model for regenerative agriculture across India",
      showCountSeparately: false,
    },
    {
      count: 100000,
      label: "Villages\nReached",
      description: "Decentralized biochar units catalyzing rural livelihoods",
      showCountSeparately: true,
    },
    {
      count: 2,
      label: "2+ Million\nCarbon\nCredits",
      description: "Projected long-term carbon drawdown",
      showCountSeparately: false,
    },
  ];

  // Intersection Observer for lazy loading
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImagesVisible(true);
          setVideosLoaded(true);
        }
      },
      { threshold: 0.2 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Load video sources when videos become visible
  useEffect(() => {
    if (videosLoaded && mainVideoRef.current) {
      mainVideoRef.current.src = selectedVideo.src;
      mainVideoRef.current.load();
    }
  }, [videosLoaded, selectedVideo]);

  // Load thumbnail video sources when videos become visible
  useEffect(() => {
    if (videosLoaded) {
      thumbnailRefs.current.forEach((videoRef, index) => {
        if (videoRef && videoList[index]) {
          videoRef.src = videoList[index].src;
          videoRef.load();
        }
      });
    }
  }, [videosLoaded, videoList]);

  return (
    <>
      <section id="ourImpact" className="bg-[#e9edf2] py-6 md:px-7" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-5 py-10 lg:py-24">
          {/* <div className="grid md:grid-cols-12 md:gap-16"> */}
          <div className="md:flex md:justify-between w-full">
            {/* LEFT – headline */}
            <div className="md:w-1/2">
              <p className="text-sm font-light tracking-wide text-gray-600 mb-6">
                Impact
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
                Transformation at scale
                <br className="hidden sm:block" />
                with Biochar
              </h2>
            </div>

            {/* RIGHT – copy, list, button */}
            <div className="md:w-1/2">
              <p>
                Biochar&apos;s potential to regenerate soil at scale is
                evidenced by these three large case studies in restoring barren
                land, afforestation and agriculture.
              </p>

              <p>
                Carbon finance enables us to set&nbsp;up biochar sites, which:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>Creates local entrepreneurs and jobs</li>
                <li>Drives measurable soil improvement and higher yields</li>
                <li>Delivers rising rural incomes</li>
              </ul>

              <button className="inline-block mt-5 px-6 py-3 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-900 hover:text-white transition">
                <Link href="#formForId">Turn carbon into community</Link>
              </button>
            </div>
          </div>
        </div>
        {/* ─────────────── Responsive Testimonial Card – All Screens ─────────────── */}
        <div className="mt-8 mx-4 sm:mx-6 lg:mt-16 bg-gray-900 text-white rounded-xl overflow-hidden">
          {/* Mobile and Tablet Layout (< lg) */}
          <div className="lg:hidden">
            {/* Video iframe */}
            <div className="relative aspect-video">
              <iframe
                src="https://drive.google.com/file/d/1gsOvFSHl7EGPbqV0VzO8D7Mod1hV_-N5/preview"
                className="w-full h-full border-0"
                allow="autoplay"
                allowFullScreen
                loading="eager"
              />
            </div>

            {/* Content below video */}
            <div className="p-4 sm:p-6 lg:p-8">
              <p className="font-serif text-base sm:text-lg leading-relaxed mb-4">
                &ldquo;Vision, ingenuity, and labor have transformed what was once harsh
                and depleted land into a lush green campus, with rainforest full
                of thriving, endemic, and endangered species, medicinal and edible
                plants, and organic farms. Kanha Shanti Vanam has become a
                testament to harmony with nature.&rdquo;
              </p>

              <div className="text-sm text-gray-300 mb-4">
                <p>Patricia Scotland</p>
                <p>Secretary General, Commonwealth</p>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Water table has increased from 1,200 feet below ground to 300
                feet below ground. Over 150,000 trees have been grown on barren
                land, in a period of 6 years. Multiple rainforests grown on poor
                soil in a semi-arid land with low annual rainfall, considered
                impossible by experts.
              </p>
            </div>
          </div>

          {/* Desktop Layout (≥ lg) */}
          <div className="hidden lg:flex h-96">
            {/* Left – Video */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1gsOvFSHl7EGPbqV0VzO8D7Mod1hV_-N5/preview"
                className="absolute inset-0 w-full h-full border-0"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                allow="autoplay"
                allowFullScreen
                loading="eager"
              />
            </div>

            {/* Right – Content */}
            <div className="lg:w-1/2 flex flex-col justify-center h-full">
              <div className="p-6 xl:p-8 space-y-6">
                <p className="font-serif text-lg xl:text-xl leading-relaxed">
                  &ldquo;Vision, ingenuity, and labor have transformed what was once
                  harsh and depleted land into a lush green campus, with
                  rainforest full of thriving, endemic, and endangered species,
                  medicinal and edible plants, and organic farms. Kanha Shanti
                  Vanam has become a testament to harmony with nature.&rdquo;
                </p>

                <div className="text-sm font-normal text-gray-300">
                  <p>Patricia Scotland</p>
                  <p className="text-gray-300">Secretary General, Commonwealth</p>
                </div>

                <p className="text-xs xl:text-sm text-gray-400 leading-relaxed">
                  Water table has increased from 1,200 feet below ground to 300
                  feet below ground. Over 150,000 trees have been grown on barren
                  land, in a period of 6 years. Multiple rainforests grown on poor
                  soil in a semi-arid land with low annual rainfall, considered
                  impossible by experts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#e9edf2] py-10 px-4 mt-16">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800">
              Where we are currently standing
            </h2>
          </div>

          {/* First Row – 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {topCards.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow px-6 py-10 flex flex-col justify-between h-full"
              >
                {/* <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
                  <CountUp end={item.count} duration={2} />
                  {item.count >= 1000 ? "+" : ""} <br />
                  {item.label}
                </h3> */}
                <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
  {item.label.includes("Million") ? (
    <>
      <CountUp end={item.count} duration={2} separator="," />+ Million
      <br />
      {item.label.replace("Million+", "").trim()}
    </>
  ) : (
    <>
      <CountUp end={item.count} duration={2} separator="," />
      {item.count >= 1000 ? "+" : ""} <br />
      {item.label.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < item.label.split('\n').length - 1 && <br />}
        </span>
      ))}
    </>
  )}
</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Section Title for Video */}
          <div className="text-center mb-10 mt-16">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800">
              Touching Lives
            </h2>
          </div>

          {/* Video Section */}
          <div className="max-w-6xl mx-auto my-10">
            {/* Main Video */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video mb-4">
              {imagesVisible ? (
                <video
                  ref={mainVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={selectedVideo.poster}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  {/* Placeholder while video not loaded */}
                  <span>Loading video...</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto mt-6 pb-4">
              {videoList.map((vid, idx) => (
                <div
                  key={idx}
                  className={`relative w-[220px] h-[130px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border ${
                    selectedVideo.src === vid.src
                      ? "border-blue-500 border-2"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedVideo(vid)}
                >
                  {imagesVisible ? (
                    <video
                      ref={(el) => {
                        thumbnailRefs.current[idx] = el;
                      }}
                      muted
                      playsInline
                      controls={false}
                      className="w-full h-full object-cover"
                    ></video>
                  ) : (
                    <Image
                      src={vid.poster}
                      alt="Video thumbnail"
                      width={220}
                      height={130}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section Title for Bottom Cards */}
          <div className="text-center mb-10 mt-16">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800">
              Our 2030 Vision
            </h2>
          </div>

          {/* Last Row – 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {bottomCards.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow px-6 py-10 flex flex-col justify-between h-full"
              >
                {/* <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
                  <CountUp end={item.count} duration={2} />
                  {item.count >= 1000 ? "+" : ""} <br />
                  {item.label}
                </h3> */}
                <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
  {item.showCountSeparately ? (
    <>
      <CountUp end={item.count} duration={2} separator="," />
      {item.count >= 1000 ? "+" : ""} <br />
      {item.label.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < item.label.split('\n').length - 1 && <br />}
        </span>
      ))}
    </>
  ) : (
    <>
      {item.label.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < item.label.split('\n').length - 1 && <br />}
        </span>
      ))}
    </>
  )}
</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default TransfomationPart;
