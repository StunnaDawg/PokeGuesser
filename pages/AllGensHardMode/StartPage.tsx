import { useEffect, useState } from "react"
import { usePokemon } from "../../context/pokemonContext"
import React from "react"
import usePokeFetcher from '../../hooks/pokeFetcher'

const AllGenHardStart = () => {

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
          <button onClick={() => usePokeFetcher(setPokemonTitle, setPokemonSprite)}>Refresh Pokemon</button>
        </div>
      </div>
    </>
  )
}

export default AllGenHardStart
