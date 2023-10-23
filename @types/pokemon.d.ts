import { Dispatch, SetStateAction } from "react";

export type PokemonState = {
    pokemonTitle: string;
    pokemonSprite: string;
}
export type PokemonActions = {
    setPokemonTitle: Dispatch<SetStateAction<string>>;
    setPokemonSprite: Dispatch<SetStateAction<string>>;
};