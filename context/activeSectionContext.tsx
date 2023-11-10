"use client";

import type { sectionName } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react'



type activeSectioProviderProps = {
  children: React.ReactNode
}
type ActiveSectionContextType = {
  activeSection: sectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>,
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}
export const activeSectionContext = createContext<ActiveSectionContextType | null>(null)
export default function ActiveSectionProvider({children}: activeSectioProviderProps) {
  const [activeSection, setActiveSection] = useState<sectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  return (
    <activeSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick

    }}>{children}</activeSectionContext.Provider>
  )
}

export function useActiveSectionContext(){
  const context = useContext(activeSectionContext)
  if(context === null){
    throw new Error("useActiveSectionContext must be used within an activeSectionContextProvider")
  }

  return context
}