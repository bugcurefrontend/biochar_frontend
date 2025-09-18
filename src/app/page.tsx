import React from "react";
import Hero from "../components/Hero";
import TransformationPart from "../components/TransformationPart";
import Brands from "../components/Brands";
import FormAndFaq from "../components/FormAndFaq";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <TransformationPart />
      <Brands />
      <FormAndFaq />
    </>
  );
}
