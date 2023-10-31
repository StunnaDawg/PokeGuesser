import {
  AnswerStatusContextProvider,
  PokemonContextProvider,
  UserGuessContextProvider,
  UserScoreContextProvider,
} from "./context"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <>
      <PokemonContextProvider>
        <UserScoreContextProvider>
          <AnswerStatusContextProvider>
            <UserGuessContextProvider>
              <MainPage />
            </UserGuessContextProvider>
          </AnswerStatusContextProvider>
        </UserScoreContextProvider>
      </PokemonContextProvider>
    </>
  )
}

export default App
