"use client";
import React, { useEffect } from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";
import AOS from "aos";
import "aos/dist/aos.css"; 
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaBootstrap,
  FaGitAlt,
  FaNpm,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNetlify, SiTypescript  } from "react-icons/si";

const skillsData = [
  {
    title: "Languages",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />}
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
      { name: "Infinity", icon: <FaCode className="text-purple-500" /> }, // custom icon
      { name: "NPM", icon: <FaNpm className="text-red-500" /> },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
      easing: "ease-in-out"
    });
  }, []);
  return (
    <section id="skills" className="relative w-full bg-slate-900 flex items-center justify-center overflow-hidden py-20">
      {/* Optional Mask Layer */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated Boxes */}
      <Boxes />

      {/* Centered Content */}
      <div className="z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className={cn("md:text-4xl text-xl text-white mb-10")} data-aos="zoom-in">
          Skills & Technology
        </h1>
        <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 w-full max-w-6xl" data-aos="fade-up"
     data-aos-duration="3000">
        {skillsData.map((category, idx) => (
          <BackgroundGradient
            key={idx}
            className="rounded-[22px] p-6 flex flex-col items-center bg-white dark:bg-zinc-900"
          >
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-center text-black dark:text-white">
              {category.title}
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-1 w-20"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 text-2xl hover:scale-110 transition-transform duration-200 ">
                    {item.icon} {/* Direct React Icon */}
                  </div>
                  <span className="text-sm text-black dark:text-white text-center mt-1">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </BackgroundGradient>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;