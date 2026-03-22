"use client";
import React, { useEffect } from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { NoiseBackground } from "@/components/ui/noise-background";
import Link from "next/link";
import projects from '@/data/projectsData.json';
import AOS from "aos";
import "aos/dist/aos.css"; 

const Project = () => {
  useEffect(() => {
      AOS.init({
        duration: 800, 
        once: true,
        easing: "ease-in-out"
      });
    }, []);
  return (
    <section id="project" className="relative w-full bg-slate-900 flex items-center justify-center overflow-hidden py-50">
      {/* Animated Boxes */}
      <Boxes />

      {/* Centered Content */}
      <div className="z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className={cn("md:text-4xl text-xl text-white")} data-aos="zoom-in">My Project</h1>
        <p className="text-center text-neutral-300 relative z-20 mt-2" data-aos="zoom-in-up">
          Recently Designed Work
        </p>

        {/* Projects Grid */}
        <div className="mt-15 z-20 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up"
     data-aos-duration="3000">
          {projects.map((project) => (
            <BackgroundGradient
              key={project.id}
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
            >
              <img
                src={project.image}
                alt={project.title}
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {project.title}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>

              <div className="flex justify-between mt-10">
                {/* Languages / Tech Tooltip */}
                <div className="flex flex-row items-center w-full">
                  <AnimatedTooltip
                    items={project.language.map((lang, index) => ({
                      ...lang,
                      key: `${project.id}-${lang.id}-${index}`, // ✅ Unique key
                    }))}
                  />
                </div>

                {/* Visit Button */}
                <div className="flex justify-center md:justify-end">
                  <NoiseBackground
                    containerClassName="w-fit p-2 rounded-full mx-auto mt-3"
                    gradientColors={[
                      "rgb(255, 100, 150)",
                      "rgb(100, 150, 255)",
                      "rgb(255, 200, 100)",
                    ]}
                  >
                    <Link
                      href={project.link}
                      className="h-full w-full flex items-center justify-center rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
                    >
                      Visit
                    </Link>
                  </NoiseBackground>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;