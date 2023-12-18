import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

type projectProps = (typeof projectsData)[number];
type stateProp = React.Dispatch<React.SetStateAction<boolean>>;
type dataProps = {
  title: (typeof projectsData)[number]["title"];
  description: (typeof projectsData)[number]["description"];
  tags: (typeof projectsData)[number]["tags"];
  imageUrl: (typeof projectsData)[number]["imageUrl"];
  githubUrl: (typeof projectsData)[number]["githubUrl"];
  liveUrl: (typeof projectsData)[number]["liveUrl"];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProjectModal = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  setShowModal,
}: dataProps) => {
  return (
    <div className="bg-gray-950 bg-opacity-75 fixed inset-0 z-[20000] transition flex justify-center items-center">
      <div className=" w-[calc(100%-30px)] sm:max-w-[600px] sm:w-full max-h-[90vh] flex justify-center items-center flex-col ">
        <div className=" bg-white rounded-lg dark:bg-[#111827] overflow-y-auto no-scrollbar animate-[move_0.7s_ease-in-out_1] ">
          <header className=" border-[#ccc] border-b-[1px] px-[15px] py-[10px] sm:px-[25px] sm:py-[15px] flex justify-between items-center sticky top-0 bg-white dark:bg-[#111827]">
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
  );
};

export default ProjectModal;
