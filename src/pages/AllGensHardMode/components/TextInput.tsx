import React, { useEffect, ChangeEvent } from "react"
import { useUserNameGuess } from "../../../context"
import OTPInput from "../../../componentLibrary/Segmented-Text"
import { usePokemon } from "../../../context/pokemonContext"

const TextInput = () => {
  const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()

  let lengthChange = pokemonTitle.length

  useEffect(() => {
    console.log(pokemonNameGuess)
  }, [pokemonNameGuess])

  useEffect(() => {
    console.log('lenghtChange', lengthChange)
  }, [pokemonTitle])

  return (
    <OTPInput
    />
  )
}

export default TextInput
