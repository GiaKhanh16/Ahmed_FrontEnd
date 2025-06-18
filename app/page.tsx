import { BackgroundLines } from "@/components/background/background";
import React from "react";
import NavbarComp from "@/components/navbar/navBarComp";
// import { TracingBeamDemo } from "@/components/beem/demo";
// import { InfiniteMovingCardsDemo } from "@/components/testimonials/demo";
import FeaturesSection from "@/components/description/descript";
import TrustedBrands from "@/components/Brand/brand";
import KanbanBoard from "@/components/Kanban/page";
import QASection from "@/components/QA/qa";
// import Testimonial06 from "@/components/testimonial-06/testimonial-06";
import ContactPage from "./Contact/page";
export default function Page() {
  return (
    <div>
      <BackgroundLines className="flex flex-col w-full min-h-screen px-4">
        <div className="py-5">
          <NavbarComp />
        </div>

        <div className="flex flex-col items-center pt-15 pb-10 sm:pb-0 sm:gap-45">
          <div className="TextSection text-center sm:pt-20">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b  from-neutral-600 to-white  md:text-4xl lg:text-7xl font-sans md:py-5 relative z-20 font-bold tracking-tight text-5xl pb-3 ">
              Admed Ali, <br /> Content Creato.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
              Full service digital branding for your business.
            </p>
          </div>

          <div className="w-full flex flex-col gap-10 sm:gap-18">
            <FeaturesSection />
            <TrustedBrands />
          </div>
        </div>
      </BackgroundLines>
      <KanbanBoard />
      <ContactPage />
      <QASection />
    </div>
  );
}
