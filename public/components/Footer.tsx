import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center sm:justify-between items-center p-2">
      <p className="text-xs md:text-sm 2xl:text-base font-normal font-nunito text-[#444]">
        © {currentYear} Portfolio by Yodanis E. Sutantio
      </p>

      <ul className="sm:flex space-x-6 hidden">
        <li>
          <Link
            href="/about"
            className="flex flex-col font-nunito font-normal text-[#444] text-xs md:text-sm 2xl:text-base lg:hover:text-[#fffbfc] duration-500 group"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="flex flex-col font-nunito font-normal text-[#444] text-xs md:text-sm 2xl:text-base lg:hover:text-[#fffbfc] duration-500 group"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className="flex flex-col font-nunito font-normal text-[#444] text-xs md:text-sm 2xl:text-base lg:hover:text-[#fffbfc] duration-500 group"
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
