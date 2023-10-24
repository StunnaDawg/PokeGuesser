import { PokemonClient } from "pokenode-ts"
import { Dispatch, SetStateAction } from "react"

const usePokeFetcher = async (setPokeName: Dispatch<SetStateAction<string>> , setPokeSprite: Dispatch<SetStateAction<string>>) => {
  try {
    const randomNumber = Math.floor(Math.random() * 1015) + 1;
    const api = new PokemonClient().getPokemonById(randomNumber)
    const randomPokemon: any =  ((await api))
    console.log(randomPokemon.name)
    setPokeName(randomPokemon.name)
    console.log(randomPokemon)
    setPokeSprite(randomPokemon.sprites.front_default)
  } catch (err) {
    console.error(err)
  }
}

export default usePokeFetcher
