"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { CONSTANTS } from "../constants";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < 10) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  const handleScrollOrNavigate = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="w-full flex justify-between items-center py-2 bg-white px-4 lg:px-5 lg:w-[100%] lg:mx-auto">
        <div className="py-1">
          <Link href="/">
            <Image
              src={CONSTANTS.LOGOS.MAIN}
              alt={"logo"}
              width={120}
              height={70}
              priority={true}
              className="object-contain w-auto h-auto max-w-[120px] max-h-[70px]"
            />
          </Link>
        </div>

        <div className="hidden lg:block">
          <ul className="flex font-bold">
            <li className="px-3">
              <button 
                onClick={() => handleScrollOrNavigate("whyUs")}
                className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              >
                WHY US
              </button>
            </li>
            <li className="px-3">
              <button 
                onClick={() => handleScrollOrNavigate("ourImpact")}
                className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              >
                OUR IMPACT
              </button>
            </li>
            <li className="px-3">
              <button 
                onClick={() => handleScrollOrNavigate("formForId")}
                className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              >
                CONTACT
              </button>
            </li>
            <li className="px-3">
              <button 
                onClick={() => handleScrollOrNavigate("FAQs")}
                className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              >
                FAQs
              </button>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}></span>
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}></span>
          </button>

          {/* Desktop Buy Button */}
          <button
            className="hidden lg:block bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
            onClick={() => handleScrollOrNavigate("formForId")}
          >
            Buy Carbon Credits
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden bg-white shadow-lg border-t transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <ul className="py-4 px-4 space-y-2">
          <li>
            <button 
              onClick={() => handleScrollOrNavigate("whyUs")}
              className="w-full text-left py-3 px-2 font-bold hover:bg-gray-100 rounded transition-colors duration-200"
            >
              WHY US
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScrollOrNavigate("ourImpact")}
              className="w-full text-left py-3 px-2 font-bold hover:bg-gray-100 rounded transition-colors duration-200"
            >
              OUR IMPACT
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScrollOrNavigate("formForId")}
              className="w-full text-left py-3 px-2 font-bold hover:bg-gray-100 rounded transition-colors duration-200"
            >
              CONTACT
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScrollOrNavigate("FAQs")}
              className="w-full text-left py-3 px-2 font-bold hover:bg-gray-100 rounded transition-colors duration-200"
            >
              FAQs
            </button>
          </li>
          <li className="pt-2">
            <button
              className="w-full bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-all duration-300 cursor-pointer shadow-lg"
              onClick={() => handleScrollOrNavigate("formForId")}
            >
              Buy Carbon Credits
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;