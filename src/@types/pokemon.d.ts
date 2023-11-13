import { Dispatch, SetStateAction } from "react";

export type PokemonState = {
    pokemonTitle: string;
    pokemonSprite: string;
}
export type PokemonActions = {
    setPokemonTitle: Dispatch<SetStateAction<string>>;
    setPokemonSprite: Dispatch<SetStateAction<string>>;
};

export type UserGuess = {
    pokemonNameGuess: string;
}

export type UserGuessAction = {
    setPokemonNameGuess: Dispatch<SetStateAction<string>>;
}

export type AnswerStatus = {
    answerCorrectStatus: boolean;
    answerWrongStatus: boolean;
}

export type AnswerStatusAction = {
    setCorrectAnswerStatus: Dispatch<SetStateAction<boolean>>;
    setWrongAnswerStatus: Dispatch<SetStateAction<boolean>>;
}

export type UserScore = {
    userScore: number;
}

export type UserScoreAction = {
    setUserScore: Dispatch<SetStateAction<number>>
}

export type UserAuth = {
    isSignedIn: boolean;
}

export type UserAuthAction = { 
    setIsSignedIn: Dispatch<SetStateAction<boolean>>
}

export type ClassicModeLife = {
    lives: number[];
}

export type ClassicModeLifeAction = {
    setLives: Dispatch<SetStateAction<number[]>>
}

export type username = { 
    username: string;
}

export type CategoryType = { 
    category: string;
}

export type CategoryContextAction = { 
    setCategory: Dispatch<SetStateAction<string>>;
}