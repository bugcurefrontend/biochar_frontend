"use client";
import React from "react";
import Header from "./header";
import Hero from "./hero";
// import CardsPart from "./cardsPart";
import TransfomationPart from "./transfomationPart";
import Brands from "./brands";
import FormAndFaq from "./formAndFaq";
import Footer from "./footer";
import WhyUs from "../whyUs/page";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <TransfomationPart />
      <Brands />
      <FormAndFaq />
      <Footer />
    </>
  );
};

export default LandingPage;
