import { BackgroundLines } from "@/components/background/background";
import React from "react";
import NavbarComp from "@/components/navbar/navBarComp";
import { TracingBeamDemo } from "@/components/beem/demo";
import { InfiniteMovingCardsDemo } from "@/components/testimonials/demo";
import FeaturesSection from "@/components/description/descript";
export default function Page() {
  return (
    <div>
      <BackgroundLines className="flex flex-col w-full min-h-screen px-4">
        {/* Navbar stays at the top */}
        <div className="py-5">
          <NavbarComp />
        </div>

        {/* Center Part */}
        <div className="flex-1 flex flex-col items-center justify-center md:gap-45 lg:gap-45">
          <div className="text-center">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white  md:text-4xl lg:text-7xl font-sans md:py-5 relative z-20 font-bold tracking-tight text-6xl pb-3">
              Admed Ali, <br /> Digital Orbit.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
              Full service digital branding for your business.
            </p>
          </div>
          <FeaturesSection />
        </div>
      </BackgroundLines>
      <TracingBeamDemo />
    </div>
  );
}

// Get the best advices from our experts, including expert artists,
// painters, marathon enthusiasts and RDX, totally free.
