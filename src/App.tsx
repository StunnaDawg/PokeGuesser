import { AnswerStatusContextProvider, PokemonContextProvider, UserGuessContextProvider } from "./context"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <>
      <PokemonContextProvider>
        <AnswerStatusContextProvider>
        <UserGuessContextProvider>
          <MainPage />
        </UserGuessContextProvider>
        </AnswerStatusContextProvider>
      </PokemonContextProvider>
    </>
  )
}

export default App
