import { PokemonContextProvider, usePokemon } from "./pokemonContext"
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
import { useCategoryContext, CategoryContextProvider } from "./categoryContext"
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
  useCategoryContext,
  CategoryContextProvider,
  usePokemon
}
