import React, { useEffect, useState } from "react";

const quotes = [
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  {
    text: "Dedication is not what others expect of you; it is what you can give to others.",
    author: "Anonymous",
  },
  {
    text: "The greatest weapon against stress is our ability to choose one thought over another.",
    author: "William James",
  },
  {
    text: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
  },
  {
    text: "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.",
    author: "Colin Powell",
  },
  { text: "Creativity takes courage.", author: "Henri Matisse" },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh",
  },
  {
    text: "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
    author: "Scott Adams",
  },
  {
    text: "The mind is like a parachute. It doesn't work if it is not open.",
    author: "Frank Zappa",
  },
  {
    text: "The mind is a powerful thing. It can take you to places you never thought you could go.",
    author: "Anonymous",
  },
  {
    text: "The only thing worse than being blind is having sight but no vision.",
    author: "Helen Keller",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Plutarch",
  },
  {
    text: "The greatest accomplishment is not in never falling, but in rising again after you fall.",
    author: "Vince Lombardi",
  },
];

const Quotes = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    // Randomly select a quote from the array
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-sm bg-[#0e0e0e] py-5 px-4 lg:px-10">
      <h2 className="font-mclaren font-medium text-center text-[#fffbfc] text-lg/snug md:text-3xl">
        &quot;{quote.text}&quot;
      </h2>
      <p className="font-nunito font-light italic text-xs/snug sm:text-sm/snug md:text-lg/tight xl:text-base/tight 2xl:text-lg/tight text-[#fffbfc]">
        ~ {quote.author} ~
      </p>
    </div>
  );
};

export default Quotes;
