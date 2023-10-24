import React, { useEffect, ChangeEvent } from "react"
import { useUserNameGuess } from "../../../context"

const TextInput = () => {
    const {pokemonNameGuess, setPokemonNameGuess} = useUserNameGuess()

    const onInputChange = (userInput: ChangeEvent<HTMLInputElement>) => {
        const newTypedValue = userInput.target.value
        setPokemonNameGuess(newTypedValue)
    }

    useEffect(() => {
console.log(pokemonNameGuess)
    }, [pokemonNameGuess])
return (
    <input placeholder="hi" onChange={onInputChange}></input>
)
}

export default TextInput