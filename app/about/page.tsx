"use client";

import React, { useEffect, useState } from "react";

const About = () => {
  // A function to create a fade in motion from bottom to top, you'll see "isVisible" function every so often in the className
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    // The h-[calc...] is to make sure that the section doesn't exceed its height more than the total combined height of navbar and footer, making the page fit into a small device without scrolling up and down
    <section className="h-[calc(100vh-(--spacing(16)))] py-4 md:py-6 px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-44 flex flex-col grow gap-4 md:gap-5 xl:gap-6 items-center justify-center">
      <h1
        className={`text-2xl md:text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        Hi, it&rsquo;s me!
      </h1>

      <div className="flex-1 w-full min-h-0 flex flex-col lg:grid lg:grid-cols-3 gap-6">
        {/* Mugshot wrapper, hidden in a screen with less width than 1024px */}
        <div
          className={`hidden lg:flex rounded bg-[#0e0e0e] p-4 h-full transform transition-all duration-700 delay-[100ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <img
            src="img/yodanisesutantio_mugshot.webp"
            alt="Yodanis E. Sutantio | Mugshot"
            className="w-full h-full object-cover rounded-xs"
          />
        </div>

        <div
          className={`rounded col-span-2 flex flex-col gap-6 justify-between overflow-y-auto h-full bg-[#0e0e0e] p-4 transform transition-all duration-700 delay-[200ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-xs sm:text-sm md:text-base 2xl:text-lg text-[#aaa6a7]">
              Hello! I’m Yodanis, a curious explorer of the tech world. I’m
              navigating the boundless opportunities in this field, still
              figuring out my path. Some days I feel like a curious explorer;
              other days, I’m just hitting random buttons to see what works!
            </p>

            <p className="font-nunito font-light text-xs sm:text-sm md:text-base 2xl:text-lg text-[#aaa6a7]">
              I’ve always been inspired by a quote from Arthur Schopenhauer:{" "}
            </p>

            <p className="font-nunito font-extralight text-lg/tight sm:text-xl/tight md:text-2xl/snug 2xl:text-3xl/snug italic text-[#aaa6a7]">
              &ldquo;Talent hits a target no one else can hit; Genius hits a
              target no one else can see.&rdquo;
            </p>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <p className="font-nunito font-light text-xs sm:text-sm md:text-base 2xl:text-lg text-[#aaa6a7]">
              Here’s to aiming for targets yet unseen.
            </p>
            <img
              src="/img/yodanisesutantio_signature.webp"
              alt="Yodanis E. Sutantio | Signature"
              className="h-14 md:h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
