"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ReactTyped } from "react-typed";
import { NoiseBackground } from "@/components/ui/noise-background";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const words = `I am a passionate Web Developer and UI Designer with a strong foundation in HTML, CSS, Bootstrap, Tailwind CSS, React JS, and Next.js. I enjoy building responsive and user-friendly websites with elegant UI/UX design and continuously learning new technologies, including Aceternity, to improve my skills and create modern web experiences.`;

const About = () => {
  return (
    <section id="about" className="">
      <LampContainer className="pt-50">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" pt-60 mt-16 md:mt-24 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Yash Kumar
        </motion.h1>

        <div className="mt-6 text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-medium">
            I am a{" "}
            <span className="text-green-500">
              <ReactTyped
                strings={["BCA Student", "Frontend Developer", "UI Designer"]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </span>
          </h3>

          <div className="mt-10 ">
            <TextGenerateEffect words={words} className="w-[80%] ml-[10%]" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">
          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start">
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
            <Link href={'https://github.com/yash-kumar2828'}>

              <FaGithub className="text-4xl text-white" />
            </Link>
            </div>
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
            <Link href={'https://www.linkedin.com/in/Yash-kumar2804/'}>
            
              <FaLinkedinIn className="text-4xl text-white" />
            </Link>
            </div>
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
            <Link href={''}>
            
              <FaWhatsapp className="text-4xl text-white" />
            </Link>
            </div>
          </div>

          {/* Resume Button */}
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
                href="/resume.pdf"
                className="h-full w-full flex items-center justify-center rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
              >
                Resume &rarr;
              </Link>
            </NoiseBackground>
          </div>
        </div>

        {/* Image outside the grid */}
        <div className="flex justify-center mt-15">
          <div className="w-50 h-50 rounded-full overflow-hidden shadow-lg shadow-blue-500/50 flex justify-center items-center ">
            <img
              src="/images/boy.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </LampContainer>
    </section>
  );
};

export default About;
