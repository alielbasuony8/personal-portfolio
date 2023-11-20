"use client";
import React, { useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";

type projectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
}: projectProps) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgreess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgreess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className=""
      ref={ref}
      style={{
        scale: scaleProgreess,
        opacity: opacityProgreess,
      }}
    >
      <section className="flex items-center justify-center flex-col shadow-sm bg-gray-100 max-w-[350px] border border-black/5 overflow-hidden relative   hover:bg-gray-200 transition rounded-lg dark:bg-white/10 hover:dark:bg-white/20 hover:border hover:border-white/75">
        <Image
          onClick={() => {
            setShowModal(true);
          }}
          src={imageUrl}
          alt="Project I worked on"
          quality={90}
          className="max-w-full rounded-t-lg transition sm:hover:scale-[1.04] cursor-pointer"
        />
        <div className="p-4 text-left sm:pr-2 sm:pt-6 w-full">
          <h3
            onClick={() => {
              setShowModal(true);
            }}
            className="text-base sm:text-2xl font-semibold cursor-pointer hover:underline "
          >
            {title}
          </h3>

          <ul className=" flex flex-wrap gap-2 mt-4 sm:mt-8 justify-center">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] text-[0.7rem] uppercase tracking-wider text-white rounded-full px-3 py-1 dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showModal && (
        <div className="bg-gray-950 bg-opacity-75 fixed inset-0 z-[20000] transition flex justify-center items-center">
          <div className=" w-[calc(100%-30px)] sm:max-w-[600px] sm:w-full max-h-[90vh] flex justify-center items-center flex-col ">
            <div className=" bg-white rounded-lg dark:bg-[#111827] overflow-y-auto no-scrollbar animate-[move_0.7s_ease-in-out_1] ">
              <header className=" border-[#ccc] border-b-[1px] px-[15px] py-[10px] sm:px-[25px] sm:py-[15px] flex justify-between items-center">
                <p className="font-medium text-xl">{title}</p>
                <IoClose
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className=" cursor-pointer text-2xl text-[#888] dark:text-white/80"
                />
              </header>
              <div className="px-[15px] py-[10px] sm:px-[25px] sm:py-[15px]">
                <Image
                  src={imageUrl}
                  alt="Project I worked on"
                  quality={90}
                  className=" rounded-lg border border-black/10"
                />
                <p className="my-4 leading-relaxed text-gray-800 dark:text-white/70 font-normal">
                  {description}
                </p>
                <span className=" font-semibold">Tools:</span>
                <ul className=" flex flex-wrap gap-2 mt-2 mb-2 sm:mt-4 justify-center items-center">
                  {tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.7] text-[0.7rem] sm:text-[0.9rem] uppercase tracking-wider text-white rounded-full px-3 py-1 sm:px-4 sm:py-2 dark:text-white/70"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className=" font-semibold">Links:</span>
                <div className="flex justify-center items-center gap-4 p-4 sm:p-6">
                  <a
                    href={githubUrl}
                    target="_blank"
                    className="bg-white p-2 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15]  transition active:scale-105 cursor-pointer border border-black/10 hover:text-[#333] dark:bg-white/10 dark:text-white/70 dark:hover:text-white/80"
                  >
                    <BsGithub />
                    Code
                  </a>
                  <a
                    href={liveUrl}
                    target="_blank"
                    className="bg-white p-2 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15]  transition active:scale-105 cursor-pointer border border-black/10 hover:text-[#333] dark:bg-white/10 dark:text-white/70 dark:hover:text-white/80"
                  >
                    <FiGlobe />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
