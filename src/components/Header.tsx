"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CONSTANTS } from "../constants";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollOrNavigate = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center py-2 bg-white px-4 lg:rounded-full lg:px-5 lg:w-[95%] lg:mx-auto">
        <div className="py-1">
          <Link href="/">
            <Image
              src={CONSTANTS.LOGOS.MAIN}
              alt={"logo"}
              width={120}
              height={70}
              className="object-contain w-auto h-auto max-w-[120px] max-h-[70px]"
            />
          </Link>
        </div>

        <div className="hidden lg:block">
          <ul className="flex font-bold">
            <li className="px-3">
              <button onClick={() => handleScrollOrNavigate("whyUs")}>
                WHY US
              </button>
            </li>
            <li className="px-3">
              <button onClick={() => handleScrollOrNavigate("ourImpact")}>
                OUR IMPACT
              </button>
            </li>
            <li className="px-3">
              <button onClick={() => handleScrollOrNavigate("formForId")}>
                CONTACT
              </button>
            </li>
            <li className="px-3">
              <button onClick={() => handleScrollOrNavigate("FAQs")}>
                FAQs
              </button>
            </li>
          </ul>
        </div>

        <div>
          <button
            className="bg-black text-white px-6 py-2 rounded-full text-sm"
            onClick={() => handleScrollOrNavigate("formForId")}
          >
            Buy Carbon Credits
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;