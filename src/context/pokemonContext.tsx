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
  const [pokemonTitle, setPokemonTitle] = useState<string>("")
  const [pokemonSprite, setPokemonSprite] = useState<string>(""
  )

  return (
    <>
    <PokemonContext.Provider value={{ pokemonTitle, setPokemonTitle, pokemonSprite, setPokemonSprite }}>
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
