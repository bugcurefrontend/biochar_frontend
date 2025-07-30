import React from "react";
import Header from "../landingPage/header";
import Footer from "../landingPage/footer";

const TermAndCondition = () => {
  return (
    <>
      <Header />
      <section className="bg-[#e4e6e7] py-12">
        <div className="max-w-3xl mx-auto text-center pt-16">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-600 mb-4">Privacy policy</p>

          {/* Title */}
          <h1 className="text-3xl font-serif font-semibold mb-6">
            Terms of Use
          </h1>

          {/* Intro text */}
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>

        {/* White content card */}
        <div className="mt-10 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
          {/* Section 1 */}
          <h2 className="text-xl font-semibold font-serif mb-4">
            Scalable Carbon Sequestration
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Permanently sequesters carbon for 1,000+ years, creating an
            immediate and lasting climate solution. Has the potential to remove
            1 Gigaton of CO2 by 2050* Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
            nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in
            eros
          </p>
          <p className="text-sm text-gray-700 mb-4">
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
            interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse varius enim in eros elementum tristique. Duis
            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
            interdum nulla.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold font-serif mt-8 mb-4">
            Scalable Carbon Sequestration
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Permanently sequesters carbon for 1,000+ years, creating an
            immediate and lasting climate solution.
          </p>

          {/* Section 3 */}
          <h3 className="text-md font-semibold mt-8 mb-2">
            Section 3: Lorem ipsum dolor
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>

          {/* Section 4 */}
          <h2 className="text-xl font-semibold font-serif mt-8 mb-4">
            Scalable Carbon Sequestration
          </h2>
          <p className="text-sm text-gray-700">
            Permanently sequesters carbon for 1,000+ years, creating an
            immediate and lasting climate solution.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermAndCondition;
