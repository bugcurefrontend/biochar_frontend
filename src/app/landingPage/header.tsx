"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-between items-center py-2 bg-white lg:rounded-full lg:px-5 lg:w-[95%] lg:mx-auto">
          <div className="py-1">
            <Link href="#">
              <Image
                src={"/Logos/logo.png"}
                alt={"logo"}
                width={120}
                height={70}
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex font-bold">
              {/* <li className="px-3">Home</li> */}
              <li className="px-3">
                <Link href="#whyUs">WHY US</Link>
              </li>
              <li className="px-3">
                <Link href="#ourImpact">OUR IMPACT</Link>
              </li>
              <li className="px-3">
                <Link href="#formForId">CONTACT</Link>
              </li>
              <li className="px-3">
                <Link href="#FAQs">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
              <Link href="#formForId">Buy Carbon Credits </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
