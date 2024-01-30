import { Dispatch, SetStateAction } from "react"
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard"

export type PokemonState = {
  pokemonTitle: string
  pokemonSprite: string
}
export type PokemonActions = {
  setPokemonTitle: Dispatch<SetStateAction<string>>
  setPokemonSprite: Dispatch<SetStateAction<string>>
}

export type UserGuess = {
  pokemonNameGuess: string
}

export type UserGuessAction = {
  setPokemonNameGuess: Dispatch<SetStateAction<string>>
}

export type AnswerStatus = {
  answerCorrectStatus: boolean
  answerWrongStatus: boolean
}

export type AnswerStatusAction = {
  setCorrectAnswerStatus: Dispatch<SetStateAction<boolean>>
  setWrongAnswerStatus: Dispatch<SetStateAction<boolean>>
}

export type UserScore = {
  userScore: number
}

export type UserScoreAction = {
  setUserScore: Dispatch<SetStateAction<number>>
}

export type UserAuth = {
  isSignedIn: boolean
}

export type UserAuthAction = {
  setIsSignedIn: Dispatch<SetStateAction<boolean>>
}

export type ClassicModeLife = {
  lives: number[]
}

export type ClassicModeLifeAction = {
  setLives: Dispatch<SetStateAction<number[]>>
}

export type Username = {
  username: string
}

export type UsernameAction = {
  setUsername: Dispatch<SetStateAction<string>>
}

export type CategoryType = {
  categoryStart: number
  categoryEnd: number
}

export type CategoryContextAction = {
  setCategoryStart: Dispatch<SetStateAction<number>>
  setCategoryEnd: Dispatch<SetStateAction<number>>
}

export type LeaderBoardId = {
  boardId: string
}

export type LeaderBoardIdAction = {
  setBoardId: Dispatch<SetStateAction<string>>
}
