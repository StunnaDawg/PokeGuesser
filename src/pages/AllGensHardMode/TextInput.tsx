import { Dispatch, SetStateAction, useEffect } from "react"
import {
  useAnswerStatus,
  useClassicModeLife,
  useUserNameGuess,
  usePokemon,
} from "../../context"
import { OTPInput } from "../../componentLibrary"
import usePokeFetcherClassic from "../../hooks/pokeFetcherClassic"

type TextInputProps = {
  pokemonArray: number[]
  setPokemonArray: Dispatch<SetStateAction<number[]>>
}

const TextInput = ({ pokemonArray, setPokemonArray }: TextInputProps) => {
  const { pokemonNameGuess } = useUserNameGuess()
  const { pokemonTitle, setPokemonTitle, setPokemonSprite } = usePokemon()
  const { setCorrectAnswerStatus, setWrongAnswerStatus } = useAnswerStatus()
  const { lives } = useClassicModeLife()

  useEffect(() => {
    if (
      pokemonNameGuess.toLowerCase() === pokemonTitle &&
      pokemonTitle !== ""
    ) {
      setCorrectAnswerStatus(true)
      const timer = setTimeout(() => {
        usePokeFetcherClassic(
          setPokemonTitle,
          setPokemonSprite,
          pokemonArray,
          setPokemonArray
        )
      }, 1000)

      return () => clearTimeout(timer)
    }

    if (
      pokemonNameGuess.toLowerCase() !== pokemonTitle &&
      pokemonNameGuess.length === pokemonTitle.length &&
      pokemonTitle !== ""
    ) {
      setWrongAnswerStatus(true)
      if (lives.length > 0) {
        const timer = setTimeout(() => {
          usePokeFetcherClassic(
            setPokemonTitle,
            setPokemonSprite,
            pokemonArray,
            setPokemonArray
          )
        }, 1000)

        return () => clearTimeout(timer)
      }
    }
  }, [pokemonNameGuess])

  useEffect(() => {
    setWrongAnswerStatus(false)
    setCorrectAnswerStatus(false)
  }, [pokemonTitle])

  return pokemonTitle != "" ? <OTPInput /> : null
}

export default TextInput
