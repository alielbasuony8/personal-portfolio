import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import todolist from "@/public/to-do-list.png"
import keepnotes from "@/public/keep-notes.png"
import calculator from "@/public/calculator.png"
import forkresturant from "@/public/fork-resturant.png"
import musicplayer from "@/public/musicPlayer.png"
import virtualKeyboard from '@/public/virtual-keyboard.png'
import manageLandingPage from '@/public/manage-landing-page.png'
import acrylicPaintingGallery from '@/public/acrylic-painting-gallery.png'
import exploreAgency from '@/public/explore-agency.png'
import furnishverse from '@/public/furnishverse.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Bachelor of computers and information",
    description:
      "I graduated from Menoufia University with a GPA of 2.9",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Become a Software Developer",
    description:
      "I completed the LinkedIn Learning track that covers the essential skills and tools for software development, such as programming languages, data structures, algorithms, databases, web development, and software engineering.",
    icon: React.createElement(GrCertificate),
    date: "2022",
  },
  {
    title: "Egypt FWD",
    description:
      "I completed the web development challenger and professional tracks that cover the essential skills and tools for Web development, such as How the web works, HTML, CSS, and JS",
    icon: React.createElement(GrCertificate),
    date: "2022",
  },
  {
    title: "ITI training - 1 Month",
    description:
      "I learned how to design and develop dynamic and responsive websites using HTML, CSS, Bootstrap, and JavaScript",
    icon: React.createElement(GrCertificate),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: 'Virtual Keyboard EN/AR',
    description: "This is a simple web application but contains alot of logic. This app is a virtual keyboard or on-screen keyboard with English and Arabic characters. The app allows the user to type text in either language using the mouse. and switch between the languages using a toggle button. The app also has some features such as shift, backspace, clear, copy, local storage to save the keyboard mode, and session storage to save the input once you focus in the input field. All that remains is to add events to arrow keys that can enhance the user experience, which I will finish later.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: virtualKeyboard,
    githubUrl:'https://github.com/alielbasuony8/virtual-keyboard-app',
    liveUrl: 'https://alielbasuony8.github.io/virtual-keyboard-app/'
    
  },
  {
    title: "Fork",
    description:
      "Fork is a web app for Fork restaurant that lets you explore and order delicious food.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: forkresturant,
    githubUrl:'https://github.com/alielbasuony8/Fork',
    liveUrl: 'https://alielbasuony8.github.io/Fork/'
    
  },
  {
    title: "Furnishverse",
    description:
      "Furnishverse is a web app for a furniture company.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: furnishverse,
    githubUrl:'https://github.com/alielbasuony8/Furnishverse',
    liveUrl: 'https://alielbasuony8.github.io/Furnishverse/'
    
  },
  {
    title: 'Manage',
    description: 'Manage landing page is a front end mentor challenge.',
    tags: ["HTML","CSS", "JS"],
    imageUrl: manageLandingPage,
    githubUrl: "https://github.com/alielbasuony8/Manage-Landing-Page/tree/master",
    liveUrl: "https://alielbasuony8.github.io/Manage-Landing-Page/"
  },
  {
    title: 'Explore',
    description: 'Explore is a travelling agency',
    tags: ["HTML","CSS", "JS"],
    imageUrl: exploreAgency,
    githubUrl: "https://github.com/alielbasuony8/Explore-Agency",
    liveUrl: "https://alielbasuony8.github.io/Explore-Agency/"
  },
  {
    title: "Audio Player",
    description:
      "A web app that allows users to play, pause, skip, and shuffle songs from a playlist. The app has a sleek and modern UI that displays the song title and progress bar.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: musicplayer,
    githubUrl:'https://github.com/alielbasuony8/Music-player',
    liveUrl: 'https://alielbasuony8.github.io/Music-player/'
    
  },
  {
    title: "To-Do-List",
    description:
      "A web app that enables users to manage their tasks by adding and deleting them. The tasks are saved in the local storage of the browser.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: todolist,
    githubUrl:'https://github.com/alielbasuony8/To-Do-list',
    liveUrl: 'https://alielbasuony8.github.io/To-Do-list/'
    
  },
  {
    title: "Calculator",
    description:
      "A web app that allows users to perform basic arithmetic operations. The app has a toggle button that switches between light and dark mode, changing the color scheme of the UI.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: calculator,
    githubUrl:'https://github.com/alielbasuony8/Calculator',
    liveUrl: 'https://alielbasuony8.github.io/Calculator/'
    
  },
  {
    title: "Acrylic Painting Gallery",
    description:
      "A simple web application I built to practice what I learned about Animation on scroll library (AOS)",
    tags: ["HTML", "CSS", "AOS"],
    imageUrl: acrylicPaintingGallery,
    githubUrl:'https://github.com/alielbasuony8/Acrylic-painting',
    liveUrl: 'https://alielbasuony8.github.io/Acrylic-painting/'
    
  },
  {
    title: "Keep notes",
    description:
      "A web app that enables users to manage their notes by adding and deleting and editing them. The notes are saved in the local storage of the browser.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: keepnotes,
    githubUrl:'https://github.com/alielbasuony8/Keep-notes',
    liveUrl: 'https://alielbasuony8.github.io/Keep-notes/'
    
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Flask",
  "Git",
  "Tailwind",
  "Bootstrap",
  "SASS",
  "MongoDB",
  "Python",
  "Framer Motion",
] as const;