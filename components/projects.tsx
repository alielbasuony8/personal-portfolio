"use client";
import React from "react";

import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./project";

import { useSectionInView } from "@/lib/hooks";


export default function Projects() {
  
  const {ref} = useSectionInView("Projects", 0.25)
  return (
    <section className="mb-28 scroll-mt-28" id="projects" ref= {ref}>
      <SectionHeading>My projects</SectionHeading>
    
      <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}


