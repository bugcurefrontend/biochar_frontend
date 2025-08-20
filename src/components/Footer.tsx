import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Left - Copyright */}
        <div className="mb-4 md:mb-0">
          © 2024 Heartyculture Biochar. All rights reserved.
        </div>

        {/* Right - Links */}
        <div className="flex flex-col gap-2 md:flex-row md:gap-6 text-white underline underline-offset-2">
          <Link href="/termAndCondition" className="hover:text-gray-300">
            Terms of use
          </Link>
          {/* <a href="#" className="hover:text-gray-300">
            Cookie settings
          </a> */}
          <Link
            href="https://heartfulness.org/kanha"
            className="hover:text-gray-300"
          >
            Kanha Shantivanam
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
