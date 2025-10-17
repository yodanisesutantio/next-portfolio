"use client";

import React, { useEffect, useState } from "react";

export type ProjectFlippingCardProps = {
  backgroundImage?: string;
  year?: string;
  category?: string;
  title?: string;
  description?: string;
  initialDelay?: number;
  accentColor?: string;
  backgroundColor?: string;
  href?: string;
};

const FlippingCard = (props: ProjectFlippingCardProps) => {
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
    let initialDelayTimer: number | undefined;
    let intervalId: number | undefined;

    if (isSmallScreen) {
      // Initial flip with custom delay
      initialDelayTimer = window.setTimeout(() => {
        setIsFlipped(true);

        // Start the regular interval after the first flip
        intervalId = window.setInterval(() => {
          setIsFlipped((prev) => !prev);
        }, 4000);
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
    <a
      href={props.href ?? "#"}
      className="relative cursor-pointer xl:transition-[width] xl:hover:w-4/5 xl:group-hover/item:w-1/5 w-full xl:w-1/4 h-full perspective-[1000] duration-700"
      target="_blank"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full backface-hidden group/item flex flex-col justify-end   bg-cover xl:bg-auto bg-center overflow-hidden rounded-sm xl:saturate-0 xl:hover:saturate-100 duration-700"
          style={{
            backgroundImage: `url(${props.backgroundImage ?? ""})`,
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 p-2 xl:p-4 transition-transform duration-700 transform translate-y-full xl:group-hover/item:translate-y-0"
            style={{ backgroundColor: props.backgroundColor ?? "#57467B" }}
          >
            <div className="w-full h-full flex flex-col justify-end gap-0 xl:gap-1 2xl:gap-2">
              <p
                className="font-mclaren font-light text-base 2xl:text-lg"
                style={{ color: `${props.accentColor ?? "#CAFE48"}` }}
              >
                {props.year ?? "2025"},{" "}
                {props.category ?? "Software Development"}
              </p>
              <h2
                className="font-mclaren font-bold text-2xl 2xl:text-3xl"
                style={{ color: props.accentColor ?? "#CAFE48" }}
              >
                {props.title ?? "Project Name"}
              </h2>
              <p
                className="font-nunito font-light text-base 2xl:text-lg"
                style={{ color: `${props.accentColor ?? "#CAFE48"}` }}
              >
                {props.description ?? "Project Description"}
              </p>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180 rounded-sm"
          style={{ backgroundColor: props.backgroundColor ?? "#57467B" }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-0 md:gap-2 xl:gap-1 p-4">
            <p
              className="font-mclaren font-light text-center text-sm/snug md:text-2xl/snug lg:text-lg/snug xl:text-base/snug"
              style={{ color: `${props.accentColor ?? "#CAFE48"}` }}
            >
              {props.year ?? "2025"}, {props.category ?? "Software Development"}
            </p>
            <h2
              className="font-mclaren font-bold text-center text-lg md:text-3xl lg:text-2xl"
              style={{ color: props.accentColor ?? "#CAFE48" }}
            >
              {props.title ?? "Project Name"}
            </h2>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FlippingCard;
