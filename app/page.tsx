"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedText from "@/public/components/HomeComponent/AnimatedText";
import FlippingCard from "@/public/components/HomeComponent/FlippingCard";
import Quotes from "@/public/components/HomeComponent/Quotes";
import TimelineContainer from "@/public/components/HomeComponent/TimelineContainer";
import TimelineEntry from "@/public/components/HomeComponent/TimelineEntry";
import ScrollToTopButton from "@/public/components/ScrollToTopButton";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBottom = (duration: number) => {
    const start = window.scrollY;
    const end = document.body.scrollHeight;
    const distance = end - start;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Cap at 1
      const easing = easeInOutQuad(progress);
      const scrollY = start + distance * easing;

      window.scrollTo(0, scrollY);

      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <section className="py-4 md:py-6 px-4 sm:px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-44 flex flex-col grow items-center justify-center">
      <ScrollToTopButton />

      <h1 className="text-4xl/snug md:text-5xl/snug lg:text-7xl/snug font-mclaren font-bold text-[#fffbfc] text-center">
        <AnimatedText isVisible={isVisible} />
      </h1>

      {/* Animated Introduction Text */}
      <div
        className={`mt-3 md:mt-5 lg:mt-3 font-nunito font-light text-xs/snug sm:text-sm/snug md:text-xl/tight lg:text-lg/tight xl:text-base/tight 2xl:text-lg/tight text-[#aaa6a7] text-center transform transition-all duration-700 delay-[1000ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <p>Hi, I&rsquo;m Yodanis, an IT Enthusiast with a diverse skill set.</p>
        <p>
          Currently working on to figure out what to do in the tech world{" "}
          <span className="text-[#fffbfc]">🤭</span>
        </p>
      </div>

      {/* Animated Buttons */}
      <div
        className={`flex flex-col-reverse sm:flex-row gap-4 md:gap-6 w-full items-center justify-center mt-6 md:mt-10 lg:mt-6 px-4 transform transition-all duration-700 delay-[1200ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <button
          className="font-nunito font-medium text-sm/snug md:text-xl/tight lg:text-lg/tight text-center cursor-pointer text-[#444] w-full md:w-fit md:px-10 py-3 md:py-5 hover:bg-[#0e0e0e] duration-500"
          onClick={() => scrollToBottom(1500)}
        >
          Connect with me
        </button>
        <Link
          href="/projects"
          className="font-nunito font-extrabold text-sm/snug md:text-xl/tight lg:text-lg/tight text-center cursor-pointer text-[#010400] hover:text-[#CAFE48] bg-[#fffbfc] hover:bg-[#57467B] w-full md:w-fit md:px-10 py-3 md:py-5 duration-500"
        >
          View Projects
        </Link>
      </div>

      <h1
        className={`w-full mt-12 md:mt-18 xl:mt-24 text-2xl/snug md:text-4xl/snug xl:text-4xl/snug font-mclaren font-bold text-[#fffbfc] text-center transform transition-all duration-700 delay-[1400ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        What I really want to do?
      </h1>

      <p
        className={`mt-1.5 md:mt-2 w-full xl:w-96 2xl:w-[32rem] font-nunito font-light text-xs/snug sm:text-sm/snug md:text-xl/tight lg:text-lg/tight xl:text-base/tight 2xl:text-lg/tight text-[#aaa6a7] text-center transform transition-all duration-700 delay-[1600ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        I haven&rsquo;t decided yet, since I love both of them equally. (Oh, do
        please hover over the image below!)
      </p>

      <div
        className={`w-full mt-6 md:mt-8 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-2 md:gap-4 transform transition-all duration-700 delay-[1800ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        {/* UI Design Card */}
        <FlippingCard
          backgroundImage="/img/si-logo-thumb.webp"
          title="User Interface Design"
          description="Why only UI? While I admire the world of UX Design, I
                haven&rsquo;t yet had the opportunity to practice it or work on
                a project that truly immerses me in that space. UI Design feels
                like a natural starting point, and I&rsquo;m excited to build a
                strong foundation before diving deeper into UX."
          initialDelay={5000}
        />

        {/* Web Development Card */}
        <FlippingCard
          backgroundImage="/img/webdev.webp"
          title="Web Development"
          description="It&rsquo;s a field that excites me because the possibilities
                feel endless. I&rsquo;ve recently started exploring frameworks
                like Tailwind CSS and Laravel. The ability to build something
                tangible—not just daydream about it, but see it come to life
                right in front of my eyes—is truly indescribable."
          initialDelay={5200}
        />
      </div>

      <h1
        className={`w-full mt-12 md:mt-18 xl:mt-24 text-2xl/snug md:text-4xl/snug font-mclaren font-bold text-[#fffbfc] text-center transform transition-all duration-700 delay-[2000ms]`}
      >
        My Journey so far
      </h1>
      <p
        className={`mt-1.5 md:mt-2 w-full xl:w-96 2xl:w-[32rem] font-nunito font-light text-xs/snug sm:text-sm/snug md:text-xl/tight lg:text-lg/tight xl:text-base/tight 2xl:text-lg/tight text-[#aaa6a7] text-center transform transition-all duration-700 delay-[2200ms]`}
      >
        Come along as I share the steps that brought me here, one chapter at a
        time.
      </p>

      <TimelineContainer>
        <TimelineEntry
          date="July, 2002"
          content="I was born in July 2002, a curious child eager to explore the world around me."
          imageSrc="/img/july-2002.webp"
          imageAlt="a recreated image of the moment when I was born, July 2002"
        />

        <TimelineEntry
          date="January, 2007"
          content="I moved from Surabaya to the neighboring town of Sidoarjo. I
              didn’t fully understand my feelings about the change, but I
              learned to adapt and make do with my new surroundings."
          imageSrc="/img/january-2007.webp"
          imageAlt="a recreated image of the day I was moved to a new house, January 2007"
        />

        <TimelineEntry
          date="July, 2017"
          content="My high school years began in July 2017. By my second year, I
              focused on my Multimedia major, sharpening my video production
              skills and discovering my passion for UI/UX Design."
          imageSrc="/img/july-2017.webp"
          imageAlt="a recreation image of myself alone in a computer laboratory learning more about my major"
        />

        <TimelineEntry
          date="September, 2020"
          content="Despite the global pandemic, September 2020 marked the start of my
              college journey as an Information Systems student."
          imageSrc="/img/september-2020.webp"
          imageAlt="a recreation image of my bedroom with my laptop currently in an online meeting class in the midst of 2020 pandemic"
          additionalContent="I honed my UI/UX knowledge and, along the way, stumbled upon Web
              Development—a discovery that opened up exciting new possibilities."
        />

        <TimelineEntry
          date="December, 2024"
          content="This marked the end of my educational journey with the submission
              of my final assignment—a web-based app for a driving school using
              the incremental model."
          imageSrc="/img/december-2024.webp"
          imageAlt="a recreation image of me completing my final assignment of college"
          additionalContent={
            <>
              You can find more details on this project on my{" "}
              <Link
                href="/projects"
                className="underline hover:no-underline font-semibold"
              >
                Projects
              </Link>{" "}
              page. While this was a milestone, my journey is far from over, as
              I continue exploring what’s next.
            </>
          }
        />

        <TimelineEntry
          date="Today"
          content="As of today, I’m open to new opportunities and challenges, with a
              dream of working abroad—perhaps Germany? The chance to grow my
              skills while exploring new cultures excites me, and I’m ready for
              whatever comes next."
          imageSrc="/img/today.webp"
          imageAlt="a recreation image of what I do right now"
        />

        <TimelineEntry
          date="May, 2025"
          content="I’ll be attending my graduation and officially earning my
              bachelor’s degree. It’s a proud milestone that closes one chapter
              while opening doors to new adventures."
          imageSrc="/img/may-2025.webp"
          imageAlt="a recreation image of my graduation day"
        />
      </TimelineContainer>

      <div className="mt-6 sm:mt-10 md:mt-20 px-0 lg:px-24 w-full">
        <Quotes />
      </div>

      <div className="mt-6 sm:mt-8 md:mt-18 xl:mt-20 w-full">
        <h1 className="text-2xl/snug md:text-4xl/snug font-mclaren font-bold text-[#fffbfc] text-center">
          Meet me in digital space!
        </h1>
        <p className="mt-1.5 md:mt-2 font-nunito font-light text-xs/snug sm:text-sm/snug md:text-xl/tight lg:text-lg/tight xl:text-base/tight 2xl:text-lg/tight text-[#aaa6a7] text-center">
          Find me on my social accounts below - I&rsquo;m always happy to chat
          and share ideas.
        </p>

        <div className="mt-6 md:mt-8 px-4 xl:px-60 flex flex-col sm:flex-row items-center justify-center xl:justify-between gap-6 sm:gap-16 w-full">
          {/* Github */}
          <a
            href="https://github.com/yodanisesutantio"
            className="w-fit h-fit cursor-pointer bg-none flex flex-col items-center justify-center gap-4 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 sm:w-14 md:w-24 h-20 sm:h-14 md:h-24 shrink-0 transform transition-all duration-700 group-hover:rotate-y-360"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fffbfc"
                className="group-hover:fill-[#CAFE48] duration-700"
                d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>

            <p className="font-nunito text-sm/snug sm:text-base/snug md:text-lg/tight font-normal text-[#fffbfc] whitespace-nowrap">
              /yodanisesutantio
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yodanisesutantio"
            className="w-fit h-fit cursor-pointer bg-none flex flex-col items-center justify-center gap-4 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 sm:w-14 md:w-24 h-20 sm:h-14 md:h-24 shrink-0 transform transition-all duration-700 group-hover:rotate-y-360"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fffbfc"
                className="group-hover:fill-[#CAFE48] duration-700"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
              />
            </svg>

            <p className="font-nunito text-sm/snug sm:text-base/snug md:text-lg/tight font-normal text-[#fffbfc] whitespace-nowrap">
              /in/yodanisesutantio
            </p>
          </a>

          {/* Behance */}
          <a
            href="https://www.behance.net/yodanisesutantio"
            className="w-fit h-fit cursor-pointer bg-none flex flex-col items-center justify-center gap-4 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 sm:w-14 md:w-24 h-20 sm:h-14 md:h-24 shrink-0 transform transition-all duration-700 group-hover:rotate-y-360"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fffbfc"
                className="group-hover:fill-[#CAFE48] duration-700"
                d="M16.969 16.927a2.56 2.56 0 0 0 1.901.677a2.5 2.5 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.1 5.1 0 0 1-1.9 2.896a5.3 5.3 0 0 1-3.091.88a5.8 5.8 0 0 1-2.284-.433a4.9 4.9 0 0 1-1.723-1.211a5.7 5.7 0 0 1-1.08-1.874a7 7 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.31 5.31 0 0 1 5.088-3.604a4.9 4.9 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187M6.947 4.084a8 8 0 0 1 1.928.198a4.3 4.3 0 0 1 1.49.638c.418.303.748.711.958 1.182c.241.579.357 1.203.341 1.83a3.5 3.5 0 0 1-.506 1.961a3.7 3.7 0 0 1-1.503 1.287a3.6 3.6 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.6 4.6 0 0 1-.423 2.032a3.95 3.95 0 0 1-1.163 1.413a5.1 5.1 0 0 1-1.683.807a7 7 0 0 1-1.928.259H0V4.084zm-.235 12.9q.464.006.916-.099a2.2 2.2 0 0 0 .766-.332c.228-.158.411-.371.534-.619c.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715a2.62 2.62 0 0 0-1.696-.505h-3.54v4.279zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619a2.34 2.34 0 0 0-1.163.259a2.5 2.5 0 0 0-.738.62a2.4 2.4 0 0 0-.396.792q-.111.36-.137.734h4.769a3.24 3.24 0 0 0-.679-1.785zm-13.813-.648a2.25 2.25 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.9 1.9 0 0 0-.178-.891a1.3 1.3 0 0 0-.495-.533a1.85 1.85 0 0 0-.711-.274a4 4 0 0 0-.835-.073H3.241v3.631h3.293zM21.62 5.122h-5.976v1.527h5.976z"
              />
            </svg>

            <p className="font-nunito text-sm/snug sm:text-base/snug md:text-lg/tight font-normal text-[#fffbfc] whitespace-nowrap">
              /yodanisesutantio
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
