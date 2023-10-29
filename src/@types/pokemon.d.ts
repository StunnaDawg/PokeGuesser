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
    answerStatus: boolean;
}

export type AnswerStatusAction = {
    setAnswerStatus: Dispatch<SetStateAction<boolean>>;
}