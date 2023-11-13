import { PokemonClient } from "pokenode-ts"
import { Dispatch, SetStateAction } from "react"

const usePokeFetcher = async (setPokeName: Dispatch<SetStateAction<string>> , setPokeSprite: Dispatch<SetStateAction<string>>, generation: number) => {
  try {
    const randomNumber = Math.floor(Math.random() * generation) + 1;
    const api = new PokemonClient().getPokemonById(randomNumber)
    const randomPokemon: any =  ((await api))
    console.log(randomPokemon.name)
    setPokeName(randomPokemon.name)
    console.log(randomPokemon)
    setPokeSprite(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumber}.png`)
  } catch (err) {
    console.error(err)
  }
}

export default usePokeFetcher
