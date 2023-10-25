import React, { createContext, useContext, useState } from "react"
import { UserGuess, UserGuessAction } from "../@types/pokemon"

export type UserGuessContextType = UserGuess & UserGuessAction

type UserGuessContextProviderProps = {
  children: React.ReactNode
}

const UserGuessContext = createContext<UserGuessContextType | undefined>(undefined)

export const UserGuessContextProvider = ({
  children,
}: UserGuessContextProviderProps) => {
  const [pokemonNameGuess, setPokemonNameGuess] = useState<string>('')

  return (
    <>
    <UserGuessContext.Provider value={{ pokemonNameGuess, setPokemonNameGuess }}>
      {children}
    </UserGuessContext.Provider>
    </>
  )
}

export const useUserNameGuess = (): UserGuessContextType => {
  const context = useContext(UserGuessContext);
  if (!context) {
      throw new Error('usePokemon must be used within a PokemonContextProvider');
  }
  return context;
};
