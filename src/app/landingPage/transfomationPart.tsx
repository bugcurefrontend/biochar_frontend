"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { useState } from "react";

const TransfomationPart = () => {
  const videoList = [
    { src: "/Kanha.mp4", poster: "/poster1.jpg" },
    { src: "/shivgarh_video.mp4", poster: "/poster1.jpg" },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videoList[0]);
  const topCards = [
    {
      count: 3000,
      label: "Farmers Engaged",
      description: "Farmer trials underway with 460 farmers across 8 districts",
    },
    {
      count: 10200,
      label: "Hectares Restored",
      description:
        "Degraded land improved using biochar-based soil regeneration",
    },
    {
      count: 3216,
      label: "Carbon Credits Issued",
      description: "Verified through rigorous standards and audits",
      sub: "By 2030",
    },
  ];
  const bottomCards = [
    {
      count: 18,
      label: "Million Farmers Empowered",
      description: "Scalable model for regenerative agriculture across India",
      sub: "2030 Vision",
    },
    {
      count: 100000,
      label: "Villages Reached",
      description: "Decentralized biochar units catalyzing rural livelihoods",
    },
    {
      count: 2,
      label: "Million+ Carbon Credits",
      description: "Projected long-term carbon drawdown",
    },
  ];
  return (
    <>
      <section id="ourImpact" className="bg-[#e9edf2] py-6 md:px-7">
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
        {/* ─────────────── Testimonial card – mobile (≤ md) ─────────────── */}
        <article className="bg-gray-900 text-white rounded-xl mt-8 p-6 mx-6 overflow-hidden md:hidden">
          {/* Image + “Before” tag */}
          <div className="relative">
            <Image
              src="/girl.png" // replace with actual path
              alt="Girl before transformation"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 right-2 bg-black/80 text-xs px-3 py-1 rounded">
              Before
            </span>
          </div>

          {/* Quote */}
          <div className=" py-6">
            <p className="font-serif text-lg leading-relaxed">
              “Vision, ingenuity, and labor have transformed what was once harsh
              and depleted land into a lush green campus, with rainforest full
              of thriving, endemic, and endangered species, medicinal and edible
              plants, and organic farms. Kanha Shanti Vanam has become a
              testament to harmony with nature.”
            </p>

            <div className="text-lg py-4 text-gray-300">
              <p className="">Patricia Scotland</p>
              <p className="">Secretary General, Commonwealth</p>
            </div>
          </div>
        </article>
        {/* ─────────────── Testimonial Card – Desktop (≥ md) ─────────────── */}
        <div className="hidden md:flex mt-16 bg-gray-900 text-white rounded-xl overflow-hidden">
          {/* Left – Before image */}
          <div className="md:w-1/2 flex flex-col">
            {/* After image */}
            <div className="relative">
              <Image
                src="/testimonile/video.jpg"
                alt="Girl after transformation"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right – After image + Content */}
          <div className="md:w-1/2 flex flex-col relative ">
            <div className="p-8 space-y-4">
              <p className="font-serif text-lg leading-relaxed">
                “Vision, ingenuity, and labor have transformed what was once
                harsh and depleted land into a lush green campus, with
                rainforest full of thriving, endemic, and endangered species,
                medicinal and edible plants, and organic farms. Kanha Shanti
                Vanam has become a testament to harmony with nature.”
              </p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
              <div className="text-sm font-normal text-gray-300">
                <p className="">Patricia Scotland</p>
                <p className="text-gray-300">Secretary General, Commonwealth</p>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed pt-4">
                Water table has increased from 1,200 feet below ground to 300
                feet below ground. Over 150,000 trees have been grown on barren
                land, in a period of 6 years. Multiple rainforests grown on poor
                soil in a semi-arid land with low annual rainfall, considered
                impossible by experts.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-[#e9edf2] py-10 px-4">
          {/* First Row – 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {topCards.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow px-6 py-10 flex flex-col justify-between h-full"
              >
                <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
                  <CountUp end={item.count} duration={2} />
                  {item.count >= 1000 ? "+" : ""} <br />
                  {item.label}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.sub && (
                  <p className="text-sm text-gray-600 mt-1">{item.sub}</p>
                )}
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="max-w-6xl mx-auto my-10">
            {/* Main Video */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video mb-4">
              <video
                key={selectedVideo.src}
                src={selectedVideo.src}
                autoPlay
                loop
                muted
                playsInline
                poster={selectedVideo.poster}
                className="w-full h-full object-cover"
              />
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
                  <video
                    src={vid.src}
                    muted
                    playsInline
                    controls={false}
                    className="w-full h-full object-cover"
                  ></video>

                  {/* Optional: Play icon overlay */}
                  {/* <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-10 h-10 border-l-8 border-t-transparent border-b-transparent border-white transform rotate-45"></div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Last Row – 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {bottomCards.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow px-6 py-10 flex flex-col justify-between h-full"
              >
                <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
                  <CountUp end={item.count} duration={2} />
                  {item.count >= 1000 ? "+" : ""} <br />
                  {item.label}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.sub && (
                  <p className="text-sm text-gray-600 mt-1">{item.sub}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default TransfomationPart;
