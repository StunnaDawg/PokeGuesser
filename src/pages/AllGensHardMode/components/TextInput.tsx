import React, { useEffect, ChangeEvent } from "react"
import { useAnswerStatus, useUserNameGuess } from "../../../context"
import OTPInput from "../../../componentLibrary/Segmented-Text"
import { usePokemon } from "../../../context/pokemonContext"
import usePokeFetcher from "../../../hooks/pokeFetcher"

const TextInput = () => {
  const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const { answerStatus, setAnswerStatus } = useAnswerStatus()
  let lengthChange = pokemonTitle.length

  useEffect(() => {
    if (pokemonNameGuess === pokemonTitle) {
      console.log("winner")
      setAnswerStatus(true)
      usePokeFetcher(setPokemonTitle, setPokemonSprite)
    }
    
    console.log(pokemonNameGuess)
  }, [pokemonNameGuess])

  useEffect(() => {
    setAnswerStatus(false)
  }, [pokemonTitle])

  return <OTPInput />
}

export default TextInput
