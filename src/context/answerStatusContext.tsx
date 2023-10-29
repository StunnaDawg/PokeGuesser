import React, { createContext, useContext, useState } from "react"
import { AnswerStatus, AnswerStatusAction } from "../@types/pokemon"

export type AnswerStatusContextType = AnswerStatus & AnswerStatusAction

type AnswerStatusContextProviderProps = {
  children: React.ReactNode
}

const AnswerStatusContext = createContext<AnswerStatusContextType | undefined>(undefined)

export const AnswerStatusContextProvider = ({
  children,
}: AnswerStatusContextProviderProps) => {
  const [answerStatus, setAnswerStatus] = useState<boolean>(false)

  return (
    <>
    <AnswerStatusContext.Provider value={{ answerStatus, setAnswerStatus }}>
      {children}
    </AnswerStatusContext.Provider>
    </>
  )
}

export const useAnswerStatus = (): AnswerStatusContextType => {
  const context = useContext(AnswerStatusContext);
  if (!context) {
      throw new Error('usePokemon must be used within a PokemonContextProvider');
  }
  return context;
};
