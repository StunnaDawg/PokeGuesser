import React, { createContext, useContext, useState } from "react"
import { PokemonState, PokemonActions } from "../@types/pokemon"

export type PokemonContextType = PokemonState & PokemonActions

type PokemonContextProviderProps = {
  children: React.ReactNode
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined)

export const PokemonContextProvider = ({
  children,
}: PokemonContextProviderProps) => {
  const [title, setTitle] = useState<string>("luxray")
  const [sprite, setSprite] = useState<string>(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/405.png"
  )

  return (
    <>
    <PokemonContext.Provider value={{ title, setTitle, sprite, setSprite }}>
      {children}
    </PokemonContext.Provider>
    </>
  )
}

export const usePokemon = (): PokemonContextType => {
  const context = useContext(PokemonContext);
  if (!context) {
      throw new Error('usePokemon must be used within a PokemonContextProvider');
  }
  return context;
};
