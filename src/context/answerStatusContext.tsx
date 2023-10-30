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
  const [answerCorrectStatus, setCorrectAnswerStatus] = useState<boolean>(false)
  const [answerWrongStatus, setWrongAnswerStatus] = useState<boolean>(false)


  return (
    <>
    <AnswerStatusContext.Provider value={{ answerCorrectStatus, setCorrectAnswerStatus, answerWrongStatus, setWrongAnswerStatus }}>
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
