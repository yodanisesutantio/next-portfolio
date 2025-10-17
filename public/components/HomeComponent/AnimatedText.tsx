"use client";

import React from "react";

const AnimatedText = ({ isVisible = false }) => {
  const words = [
    { text: "I", delay: 0 },
    { text: "Code", delay: 100 },
    { text: "during", delay: 200 },
    { text: "the", delay: 300 },
    { text: "Day", delay: 400, className: "text-[#CAFE48]" },
    { text: "then", delay: 500 },
    { text: "Design", delay: 600 },
    { text: "at", delay: 700 },
    { text: "Night", delay: 800, className: "text-[#57467B]" },
  ];

  return (
    <>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transform transition-all duration-700 ${
            word.className || ""
          } ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
          style={{ transitionDelay: `${word.delay}ms` }}
        >
          {word.text}&nbsp;
        </span>
      ))}
    </>
  );
};

export default AnimatedText;
