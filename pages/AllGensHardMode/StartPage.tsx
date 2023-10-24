import { useState } from "react"
import { usePokemon } from "../../context/pokemonContext"
import React from "react"

const AllGenHardStart = () => {
  const [currentPokemon, setCurrentPokemon] = useState<string>("")
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  return (
    <>
      <div className="flex-1 flex justify-center items-center">
        <h1 className="underline font-bold">PokeGuesser</h1>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="flex-col">
          <img src={pokemonSprite} />
          <div className="flex flex-row justify-center">
            <h3>{pokemonTitle != "" ? pokemonTitle : "loading..."}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllGenHardStart
