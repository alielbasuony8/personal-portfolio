"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./sectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/themeContext";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.4);
  const {theme,toggleTheme} = useTheme()
  return (
    <section id="education" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My education</SectionHeading>
      <VerticalTimeline lineColor=''>
        {educationData.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView} = useInView({
            threshold: 0
          });
          return(
            <div key={index} ref={ref} className="vertical-timeline-element">
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                backgroundColor:
                theme === "light"? "#f3f4f6": "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "i.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                theme === "light"? "0.4rem solid #9ca3af ": "0.4rem solid rgba(255,255,255,0.5)"
              }}
              date={item.date}
              icon = {item.icon}
              iconStyle={{
                background:
                theme === "light"? "white": "rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
                stroke:"#fff"
              }}
              iconClassName={
                theme === "dark"? "icon": ""
              }
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
            </VerticalTimelineElement>
          </div>
          )
        })}
      </VerticalTimeline>
    </section>
  );
}
