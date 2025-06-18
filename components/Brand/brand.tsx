"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function TrustedBrands() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    // Duplicate the content for seamless scrolling
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });
  }, []);

  return (
    <section className=" bg-black w-full overflow-hidden pb-20">
      <div className="container mx-auto ">
        <div className="text-center text-md font-light md:text-4xl tracking-tight mb-5 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-200 px-2">
          TRUSTED BY CREDIBLE BUSINESSES
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex animate-scroll md:animate-scroll-md"
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-center min-w-[200px] px-8"
                )}
              >
                <BrandLogo name={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const brands = [
  "google",
  "microsoft",
  "amazon",
  "netflix",
  "spotify",
  "uber",
  "instagram",
  "youtube",
  "slack",
  "airbnb",
];

function BrandLogo({ name }: { name: string }) {
  return (
    <div className="h-8 flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105">
      {/* This would be replaced with actual brand logos */}
      <div className="text-xl font-medium text-gray-200 tracking-wide uppercase">
        {name}
      </div>
    </div>
  );
}
