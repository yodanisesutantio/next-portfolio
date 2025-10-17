"use client";

import FlippingCard from "@/public/components/ProjectsComponent/FlippingCard";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-[calc(100vh-(--spacing(16)))] py-4 md:py-6 px-4 sm:px-10 lg:px-32 xl:px-44 2xl:px-56 flex flex-col grow gap-4 md:gap-5 xl:gap-6 items-center justify-center">
      {/* Page Header */}
      <h1
        className={`text-2xl md:text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        Recent Projects
      </h1>

      <div
        className={`flex-1 w-full min-h-0 grid grid-cols-2 sm:flex sm:flex-row md:grid md:grid-cols-2 xl:flex xl:flex-row gap-2 md:gap-3 xl:gap-2 items-center justify-center transform transition-all duration-700 delay-150 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        {/* Kemudi */}
        <FlippingCard
          backgroundImage="/img/kemudi-thumb.webp"
          year="2024"
          category="Web Development"
          title="KEMUDI"
          description="A web-based platform transforming driver education by connecting learners with schools through interactive lessons, smart quizzes, and seamless scheduling."
          initialDelay={1000}
          href="https://sisenep.com/kemudi2/"
        />

        {/* 70 RAD */}
        <FlippingCard
          backgroundImage="/img/70rad-thumb.webp"
          year="2024"
          category="UI Design"
          title="70RAD Design Challenge"
          description="A self-driven design exploration challenging my creative boundaries through daily UI recreations and focused 10-day design projects, documenting my skill progression."
          initialDelay={1200}
          href="https://www.behance.net/gallery/220395869/70RAD-Design-Challenge-Design-Contemplation"
        />

        {/* Logo SI */}
        <FlippingCard
          backgroundImage="/img/si-logo-thumb.webp"
          year="2023"
          category="Logo Design"
          title="Information Systems of ITATS"
          description="Navigating a design challenge with minimal experience, I created a winning logo that became the official emblem for my college department."
          initialDelay={1400}
          href="https://drive.google.com/drive/folders/1V-PsNOiJ4G4AZTL9mWJZpJz1tQ_r7WFm"
        />

        {/* Archdaily UX Case Study */}
        <FlippingCard
          backgroundImage="/img/archdaily-thumb.webp"
          year="2023"
          category="Case Study"
          title="Archdaily UX Case Study"
          description="Crafting a comprehensive UX case study with permission from Archdaily, diving deep into design principles and gaining valuable industry insights."
          initialDelay={1600}
          href="https://www.behance.net/gallery/181193573/UX-Case-Study-Archdaily"
        />
      </div>
    </section>
  );
};

export default Projects;
