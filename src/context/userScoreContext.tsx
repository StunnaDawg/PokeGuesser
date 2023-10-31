import React, { createContext, useContext, useState } from "react"
import { UserScore, UserScoreAction } from "../@types/pokemon"

export type UserScoreContextType = UserScore & UserScoreAction

type UserScoreContextProviderProps = {
  children: React.ReactNode
}

const UserScoreContext = createContext<UserScoreContextType | undefined>(undefined)

export const UserScoreContextProvider = ({
  children,
}: UserScoreContextProviderProps) => {
  const [userScore, setUserScore] = useState<number>(0)


  return (
    <>
    <UserScoreContext.Provider value={{ userScore, setUserScore }}>
      {children}
    </UserScoreContext.Provider>
    </>
  )
}

export const useUserScore = (): UserScoreContextType => {
  const context = useContext(UserScoreContext);
  if (!context) {
      throw new Error('useUserScore must be used within a UserScoreProvider');
  }
  return context;
};
