import { useEffect, useState } from "react"
import { usePokemon } from "../../context/pokemonContext"
import React from "react"
import usePokeFetcher from "../../hooks/pokeFetcher"
import TextInput from "./components/TextInput"

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
          <div className="flex flex-row justify-center">
            <img src={pokemonSprite} />
          </div>
          <div className="flex flex-row justify-center">
            <h3>{pokemonTitle != "" ? pokemonTitle : "loading..."}</h3>
          </div>
          <div className="flex flex-row justify-cente">
            <TextInput />
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <button
          onClick={() => usePokeFetcher(setPokemonTitle, setPokemonSprite)}
        >
          Refresh Pokemon
        </button>
      </div>
    </>
  )
}

export default AllGenHardStart
