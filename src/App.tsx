import { PokemonContextProvider, UserGuessContextProvider } from "./context"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <>
      <PokemonContextProvider>
        <UserGuessContextProvider>
          <MainPage />
        </UserGuessContextProvider>
      </PokemonContextProvider>
    </>
  )
}

export default App
