import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current vertical scroll position
      const documentHeight = document.documentElement.scrollHeight; // Total page height
      const windowHeight = window.innerHeight; // Viewport height
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      // Show button only if scroll is between desired range
      setShowButton(scrollPercentage >= 10 && scrollPercentage <= 92);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    showButton && (
      <div
        className="fixed bottom-6 right-6 hidden md:flex flex-col items-center justify-center gap-2 w-14 h-14 bg-[#fffbfc] rounded-full cursor-pointer hover:h-44 transition-all duration-700 group"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#010400] shrink-0 duration-700 group-hover:hidden"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            className="shrink-0"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M24 6v36M12 18L24 6l12 12"
          ></path>
        </svg>

        <span className="text-[#010400] font-medium rotate-90 w-fit group-hover:flex flex-row items-center justify-center gap-3 whitespace-nowrap shrink-0 hidden duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#010400] -rotate-90 shrink-0 duration-700"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              className="shrink-0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M24 6v36M12 18L24 6l12 12"
            ></path>
          </svg>
          Scroll To Top
        </span>
      </div>
    )
  );
};

export default ScrollToTopButton;
