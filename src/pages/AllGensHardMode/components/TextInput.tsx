import React, { useEffect, ChangeEvent } from "react"
import { useUserNameGuess } from "../../../context"
import OTPInput from "../../../componentLibrary/Segmented-Text"

const TextInput = () => {
  const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()

  const onInputChange = (userInput: ChangeEvent<HTMLInputElement>) => {
    const newTypedValue = userInput.target.value
    setPokemonNameGuess(newTypedValue)
  }

  useEffect(() => {
    console.log(pokemonNameGuess)
  }, [pokemonNameGuess])
  return (
    <OTPInput
      length={6}
      onComplete={(code) => {
        console.log("OTP code entered:", code)
      }}
    />
  )
}

export default TextInput
