"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav className="flex justify-between items-center px-4 sm:px-10 lg:px-32 xl:px-44 2xl:px-56 py-4 lg:py-6 sticky top-0 w-full bg-[#010400] z-50 border-b border-[#0e0e0e]">
      <div className="flex items-center shrink-0">
        <Link href="/">
          <img
            src="/img/yodanisesutantio_logomark.webp"
            alt="Yodanis E. Sutantio | Home"
            className="h-9 md:h-10 2xl:h-12 rounded-lg lg:hover:shadow-xl lg:hover:shadow-neutral-800 duration-500"
          />
        </Link>
      </div>

      <ul className="flex space-x-8 sm:space-x-12 lg:space-x-12">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col font-nunito font-semibold text-sm md:text-base 2xl:text-base ${
                  isActive ? "text-[#fffbfc]" : "text-[#444]"
                } lg:hover:text-[#fffbfc] duration-500 group`}
              >
                {label}
                <span
                  className={`w-full h-[3px] bg-linear-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full lg:group-hover:scale-x-100`}
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
