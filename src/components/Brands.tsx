import React from "react";
import { CONSTANTS } from "../constants";

const logos = CONSTANTS.LOGOS.BRANDS.map((src, index) => ({
  src,
  url: CONSTANTS.BRAND_URLS[index],
}));

export default function Brands() {
  // Create three sets of logos for a seamless infinite loop
  const tripleLogos = [...logos, ...logos, ...logos];

  return <></>;
}
