"use client";

import React, { useEffect } from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 cursor-default scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I obtained a Bachelor’s degree in{" "}
        <span className="font-medium">Computers and Information</span>,
        Department of Bioinformatics. but I am more interested in the{" "}
        <span className="font-medium">Software Engineering </span>industry.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I am always
        looking to learn new technologies and collaborating with other
        developers to deliver high-quality products. I believe that the
        strongest skill I possess is the{" "}
        <span className="font-medium">search </span>skill, which is required in
        general and in this field in particular. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
