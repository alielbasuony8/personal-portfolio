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
import ProjectModal from "./projectModal";

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
        <ProjectModal title = {title} description= {description} tags= {tags} imageUrl = {imageUrl} githubUrl = {githubUrl} liveUrl = {liveUrl} setShowModal = {setShowModal}/>
      )}
    </motion.div>
  );
}
