import { BackgroundLines } from "@/components/background/background";
import React from "react";
import NavbarComp from "./nav/page";
import { TracingBeamDemo } from "@/components/beem/demo";

export default function Page() {
  return (
    <div>
      <BackgroundLines className="flex flex-col w-full min-h-screen px-4">
        {/* Navbar stays at the top */}
        <div className="py-5">
          <NavbarComp />
        </div>

        {/* Center this part in the remaining space */}
        <div className="flex-grow flex items-center justify-center pb-50">
          <div className="text-center">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Admed Ali, <br /> Digital Orbit.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
              Get the best advices from our experts, including expert artists,
              painters, marathon enthusiasts and RDX, totally free.
            </p>
          </div>
        </div>
      </BackgroundLines>
      <TracingBeamDemo/>
    </div>
  );
}
