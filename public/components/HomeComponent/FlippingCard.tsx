"use client";

import React, { useEffect, useState } from "react";

export type HomeFlippingCardProps = {
  backgroundImage?: string;
  title?: string;
  description?: string;
  initialDelay?: number;
};

const FlippingCard = (props: HomeFlippingCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    // Use explicit timer IDs so we can clear them on cleanup
    let initialDelayTimer: number | undefined;
    let intervalId: number | undefined;

    if (isSmallScreen) {
      // Initial flip with custom delay
      initialDelayTimer = window.setTimeout(() => {
        setIsFlipped(true);

        // Start the regular interval after the first flip
        intervalId = window.setInterval(() => {
          setIsFlipped((prev) => !prev);
        }, 7000); // 6s display + 1s transition
      }, props.initialDelay ?? 0);
    } else {
      setIsFlipped(false);
    }

    return () => {
      if (initialDelayTimer !== undefined) {
        window.clearTimeout(initialDelayTimer);
      }
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [isSmallScreen, props.initialDelay ?? 0]);

  return (
    <div className="relative cursor-pointer w-full h-full perspective-[1000] duration-700">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front side */}
        <div
          className="group/item flex flex-col justify-end w-full h-52 md:h-96 lg:h-72 xl:h-[22rem] backface-hidden overflow-hidden bg-cover xl:bg-auto bg-center xl:bg-bottom cursor-pointer rounded-sm xl:saturate-0 xl:hover:saturate-100 duration-700 relative"
          style={{
            backgroundImage: `url(${props.backgroundImage ?? ""})`,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-700 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <h2 className="font-mclaren font-bold xl:text-2xl text-[#CAFE48]">
                {props.title ?? ""}
              </h2>
              <p className="font-nunito font-light xl:text-base text-[#CAFE48]/85">
                {props.description ?? ""}
              </p>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute top-0 w-full h-52 md:h-96 lg:h-72 xl:h-[22rem] backface-hidden rotate-y-180 rounded-sm bg-[#57467B]">
          <div className="w-full h-full flex flex-col justify-center items-center gap-1 md:gap-4 p-4 md:py-5 md:px-10 lg:px-6">
            <h2 className="font-mclaren font-bold text-lg md:text-4xl lg:text-2xl text-[#CAFE48]">
              {props.title ?? ""}
            </h2>
            <p className="font-nunito font-light text-sm/snug md:text-2xl/snug lg:text-lg/snug xl:text-base/snug text-[#CAFE48]/85">
              {props.description ?? ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
