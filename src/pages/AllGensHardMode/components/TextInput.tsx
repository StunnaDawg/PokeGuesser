import React, { useEffect, ChangeEvent } from "react"
import { useUserNameGuess } from "../../../context"
import OTPInput from "../../../componentLibrary/Segmented-Text"
import { usePokemon } from "../../../context/pokemonContext"

const TextInput = () => {
  const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()

  const onInputChange = (userInput: ChangeEvent<HTMLInputElement>) => {
    const newTypedValue = userInput.target.value
    setPokemonNameGuess(newTypedValue)
  }

  useEffect(() => {
    console.log(pokemonNameGuess)
  }, [pokemonNameGuess])

  useEffect(() => {
  }, [pokemonTitle])

  return (
    <OTPInput
      length={pokemonTitle.length}
      onComplete={(code) => {
        if (code === pokemonTitle) {
          console.log("winner")
        }
      }}
    />
  )
}

export default TextInput
