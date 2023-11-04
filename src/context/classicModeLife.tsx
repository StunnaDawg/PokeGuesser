import React, { createContext, useContext, useState } from "react"
import { ClassicModeLife, ClassicModeLifeAction } from "../@types/pokemon"

export type ClassicModeLifeContextType = ClassicModeLife & ClassicModeLifeAction

type ClassicModeLifeContextProviderProps = {
  children: React.ReactNode
}

const ClassicModeLifeContext = createContext<ClassicModeLifeContextType | undefined>(undefined)

export const ClassicModeLifeContextProvider = ({
  children,
}: ClassicModeLifeContextProviderProps) => {
  const [lives, setLives] = useState<number[]>([1,2,3])


  return (
    <>
    <ClassicModeLifeContext.Provider value={{ lives, setLives }}>
      {children}
    </ClassicModeLifeContext.Provider>
    </>
  )
}

export const useClassicModeLife = (): ClassicModeLifeContextType => {
  const context = useContext(ClassicModeLifeContext);
  if (!context) {
      throw new Error('classicModeLife must be used within a ClassicModeLifeProvider');
  }
  return context;
};
