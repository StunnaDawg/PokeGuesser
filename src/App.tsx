import { useEffect, useState } from "react"
import pokeFetcher from "../hooks/pokeFetcher"
import { PokemonContextProvider } from "../context/pokemonContext"
import { usePokemon} from "../context/pokemonContext"

function App() {
  const [currentPokemon, setCurrentPokemon] = useState<string>("")
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } = usePokemon();

//   useEffect(() => {
// setCurrentPokemon(randomPokemon)
//   }, [])
  return (
    <>
    <PokemonContextProvider>
      <div className="flex-1 flex justify-center items-center">
        <h1 className="underline font-bold">PokeGuesser</h1>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <h3>{pokemonTitle != '' ? pokemonTitle : 'loading...'}</h3>
      </div>
      </PokemonContextProvider>
    </>
  )
}

export default App
