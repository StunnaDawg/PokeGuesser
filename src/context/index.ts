import { PokemonContextProvider } from "./pokemonContext"
import { UserGuessContextProvider, useUserNameGuess } from "./userGuessContext"
import {
  useAnswerStatus,
  AnswerStatusContextProvider,
} from "./answerStatusContext"
import { useUserScore, UserScoreContextProvider } from "./userScoreContext"
import { UserAuthContextProvider, useUserAuth } from "./AuthContext"
import {
  useClassicModeLife,
  ClassicModeLifeContextProvider,
} from "./classicModeLife"

export {
  PokemonContextProvider,
  UserGuessContextProvider,
  useUserNameGuess,
  useAnswerStatus,
  AnswerStatusContextProvider,
  useUserScore,
  UserScoreContextProvider,
  UserAuthContextProvider,
  useUserAuth,
  useClassicModeLife,
  ClassicModeLifeContextProvider,
}
