"use client";
import React from "react";
import Image from "next/image";
import personalImage from "@/public/ali-portrait.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";
export default function Intro() {
  const {ref} = useSectionInView("Home")
  const{activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
      <div className="flex items-center justify-center">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={personalImage}
              alt="Ali portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl sm:h-32 sm:w-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0 hidden sm:inline lg:text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              shiffness: 125,
              delay: 0.1,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl cursor-default"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ali.</span> I'm a passionate{" "}
        <span className="font-bold">Front End develpoer </span>with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building
        <span className="italic"> sites & apps. </span>
        Also have some exposure to backend development with{" "}
        <span className=" underline">Node Js and Flask</span>
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 transition active:scale-105"
          onClick={()=> {setActiveSection("Contact")
            setTimeOfLastClick(Date.now())}}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Ali Elbasuony's CV.pdf"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition active:scale-105 cursor-pointer border border-black/10 dark:bg-white/10"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/alielbasuony8/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15]  transition active:scale-105 cursor-pointer border border-black/10 hover:text-[#0a66c2] dark:bg-white/10 dark:text-white/70 dark:hover:text-[#0a66c2]"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/alielbasuony8"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15]  transition active:scale-105 cursor-pointer border border-black/10 hover:text-[#333] dark:bg-white/10 dark:text-white/70 dark:hover:text-white/80"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
