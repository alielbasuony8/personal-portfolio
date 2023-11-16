"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="z-[900] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[3.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[35.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed items-center justify-end w-full sm:items-stretch top-[0.15rem] left-1/2 h-12 -translate-x-1/2 pt-1 sm:top-[1.7rem] sm:h-[initial] sm:py-0 sm:w-[initial]">
        <ul className="hidden sm:flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
        <IoMdMenu
          className=" ml-auto sm:hidden text-3xl mr-4"
          onClick={() => {
            setShowMenu(true);
          }}
        />
      </nav>
      {showMenu && (
        <div
          className="bg-gray-950 bg-opacity-75 fixed inset-0 flex z-[20000] justify-center items-start backdrop-blur-[0.5rem]  sm:hidden transition px-4"
        >
          <div className=" max-w-[450px] w-full flex justify-center items-center flex-col z-[20000] bg-white rounded-lg dark:bg-[#111827] mt-12 animate-[move_0.7s_ease-in-out_1] transition">
            <div className="flex items-center w-full justify-end border-[#ccc]  border-b-[1px] px-[15px] py-[15px]">
              <IoClose
                className="cursor-pointer text-2xl text-[#888] dark:text-white/80"
                onClick={() => {
                  setShowMenu(false);
                }}
              />
            </div>
            <ul className="flex w-full flex-col items-center justify-center gap-x-1 text-[1rem] font-medium text-gray-500 px-[25px] py-[15px]">
              {links.map((link) => (
                <li
                  className="flex items-center justify-center relative"
                  key={link.hash}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-6 py-2 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-100 ":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setShowMenu(false);
                    }}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <span
                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                       
                      ></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
