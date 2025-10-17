"use client";

import React from "react";

const AnimatedText = ({ isVisible = false }) => {
  const words = [
    { text: "I", delay: 0 },
    { text: "do", delay: 100 },
    { text: "Design", delay: 200 },
    { text: "during", delay: 300 },
    { text: "the", delay: 400 },
    { text: "Day", delay: 500, className: "text-[#CAFE48]" },
    { text: "then", delay: 600 },
    { text: "Code", delay: 700 },
    { text: "at", delay: 800 },
    { text: "Night", delay: 900, className: "text-[#57467B]" },
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
