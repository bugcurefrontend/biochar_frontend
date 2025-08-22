import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TransformationPart from "../components/TransformationPart";
import Brands from "../components/Brands";
import FormAndFaq from "../components/FormAndFaq";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <TransformationPart />
      <Brands />
      <FormAndFaq />
      <Footer />
    </>
  );
}