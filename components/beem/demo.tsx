"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import { twMerge } from "tailwind-merge";
// import { TracingBeam } from "./beem";

export function TracingBeamDemo() {
  return (
    <div className="max-w-2xl mx-auto antialiased pt-2 relative px-5">
      {dummyContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-10">
          <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
            {item.badge}
          </h2>

          <p className={twMerge("text-xl mb-4")}>{item.title}</p>

          <div className="text-sm  prose prose-sm dark:prose-invert">
            {item?.image && (
              <img
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
            )}
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}

const dummyContent = [
  {
    title: "We start with content creation:",
    description: (
      <>
        <p>Our team of professional videographer will do content for you.</p>
      </>
    ),
    badge: "First,",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "First,",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
