import { PokemonClient } from "pokenode-ts"
import { usePokemon} from "../context/pokemonContext"

const pokeFetcher = async () => {
    // const { title, sprite, setTitle, setSprite } = usePokemon();
  try {
    const api = new PokemonClient().getPokemonByName("luxray")
    const randomPokemon: any =  ((await api))
    console.log(randomPokemon)
  } catch (err) {
    console.error(err)
  }
}

export default pokeFetcher
