"use client";

import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    // Redirect to the PDF file
    window.open("/docs/ATS-en.pdf", "_blank"); // Adjust the filename as needed
  }, []);

  return (
    <section className="pt-6 pb-16 px-4 sm:px-10 lg:px-32 xxl:px-44 2xl:px-56 flex flex-col gap-5 grow items-center justify-center">
      <div className="font-nunito font-normal text-base md:text-lg 2xl:text-xl text-[#aaa6a7] text-center leading-tight">
        <p>
          You have opened Yodanis&#39; Resume, you can return by{" "}
          <a href="/" className="underline xl:hover:no-underline">
            click here
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Resume;
