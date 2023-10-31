import React, { useEffect, useState } from "react"
import { useAnswerStatus, useUserNameGuess } from "../../../context"
import OTPInput from "../../../componentLibrary/Segmented-Text"
import { usePokemon } from "../../../context/pokemonContext"
import usePokeFetcher from "../../../hooks/pokeFetcher"

const TextInput = () => {
  const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const {
    answerCorrectStatus,
    setCorrectAnswerStatus,
    answerWrongStatus,
    setWrongAnswerStatus,
  } = useAnswerStatus()

  useEffect(() => {
    if (pokemonNameGuess === pokemonTitle && pokemonTitle !== '') {
      console.log("winner")
      setCorrectAnswerStatus(true)
      const timer = setTimeout(() => {
        usePokeFetcher(setPokemonTitle, setPokemonSprite)
      }, 1000)
      return () => clearTimeout(timer)
    }

    if (
      pokemonNameGuess !== pokemonTitle &&
      pokemonNameGuess.length === pokemonTitle.length
    ) {
      console.log("loser")
      setWrongAnswerStatus(true)
      const timer = setTimeout(() => {
        usePokeFetcher(setPokemonTitle, setPokemonSprite)
      }, 1000)
      return () => clearTimeout(timer)
    }

    console.log(pokemonNameGuess)
  }, [pokemonNameGuess])

  useEffect(() => {
    setWrongAnswerStatus(false)
    setCorrectAnswerStatus(false)
  }, [pokemonTitle])

  return (
    pokemonTitle != '' ? <OTPInput /> : null
  )
}

export default TextInput
