import { PokemonClient } from "pokenode-ts"
import { Dispatch, SetStateAction } from "react"

const usePokeFetcher = async (
  setPokeName: Dispatch<SetStateAction<string>>,
  setPokeSprite: Dispatch<SetStateAction<string>>,
  generationStart: number,
  generationEnd: number
) => {
  try {
    const min = generationStart
    const max = generationEnd
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    const api = new PokemonClient().getPokemonById(randomNumber)
    const randomPokemon: any = await api
    setPokeName(randomPokemon.name)

    setPokeSprite(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumber}.png`
    )
  } catch (err) {
    console.error(err)
  }
}

export default usePokeFetcher
