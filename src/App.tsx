import { PokemonContextProvider } from "../context/pokemonContext"
import MainPage from "../pages/MainPage"

function App() {
  return (
    <>
      <PokemonContextProvider>
        <MainPage />
      </PokemonContextProvider>
    </>
  )
}

export default App
