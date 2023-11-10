import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { sectionName } from "./types";



export function useSectionInView(
    sectionName: sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick,sectionName]);
  return{
    ref,
  }
}
