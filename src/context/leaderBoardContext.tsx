import React, { createContext, useContext, useState } from "react"
import { LeaderBoardId, LeaderBoardIdAction } from "../@types/pokemon"

export type LeaderBoardIdContextType = LeaderBoardId & LeaderBoardIdAction

type LeaderBoardIdContextProviderProps = {
  children: React.ReactNode
}

const LeaderBoardIdContext = createContext<
  LeaderBoardIdContextType | undefined
>(undefined)

export const LeaderBoardIdContextProvider = ({
  children,
}: LeaderBoardIdContextProviderProps) => {
  const [boardId, setBoardId] = useState<string>("")

  return (
    <>
      <LeaderBoardIdContext.Provider value={{ boardId, setBoardId }}>
        {children}
      </LeaderBoardIdContext.Provider>
    </>
  )
}

export const useLeaderBoardId = (): LeaderBoardIdContextType => {
  const context = useContext(LeaderBoardIdContext)
  if (!context) {
    throw new Error(
      "useLeaderBoardId must be used within a LeaderBoardIdContextProvider"
    )
  }
  return context
}
