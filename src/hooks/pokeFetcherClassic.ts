import { PokemonClient } from "pokenode-ts"
import { Dispatch, SetStateAction } from "react"

const usePokeFetcherClassic = async (
  setPokeName: Dispatch<SetStateAction<string>>,
  setPokeSprite: Dispatch<SetStateAction<string>>,
  pokemonArray: number[],
  setPokemonArray: Dispatch<SetStateAction<number[]>>
) => {
  try {
    console.log(pokemonArray[0])
    console.log(pokemonArray.length)
    const api = new PokemonClient().getPokemonById(pokemonArray[0])
    const randomPokemon: any = await api

    setPokeName(randomPokemon.name)

    setPokeSprite(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonArray[0]}.png`
    )
    setPokemonArray((prev) => {
      const newArray = [...prev]
      newArray.shift()
      return newArray
    })
  } catch (err) {
    console.error(err)
  }
}

export default usePokeFetcherClassic
