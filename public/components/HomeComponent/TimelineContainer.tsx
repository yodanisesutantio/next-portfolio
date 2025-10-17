"use client";

import React, { useRef } from "react";

const TimelineContainer = ({ children }: { children: React.ReactNode }) => {
  const gradientLineRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <div className="relative flex flex-col gap-4 sm:gap-8 md:gap-10 xl:md-16 justify-start sm:justify-center sm:items-center w-full mt-6 md:mt-8">
      <div
        className="absolute top-2 left-[15px] sm:left-auto w-[2px] h-full -z-10"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 97%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 97%)",
          backgroundColor: "#2c2c2c",
        }}
      >
        <div className="fixed w-[2px] h-[50vh] bottom-[50vh] bg-[#fffbfc] transition-all duration-300" />
      </div>

      {children}
    </div>
  );
};

export default TimelineContainer;
