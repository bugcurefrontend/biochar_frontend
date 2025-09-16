"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MdArrowLeft, MdHome } from "react-icons/md";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-6">
          <h1 className="text-8xl font-bold text-green-700 mb-2">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Oops! This path isn&apos;t growing
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
            It seems like this page has been composted into something better.
            Let&apos;s help you find the right path to continue your carbon
            journey.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <MdArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <MdHome className="w-5 h-5 mr-2" />
            Go To Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
