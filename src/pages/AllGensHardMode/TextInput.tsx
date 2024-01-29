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
      console.log("winner")

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
      console.log("loser")
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

        console.log("I fetced a new pokemon")
        return () => clearTimeout(timer)
      }
    }

    console.log(pokemonNameGuess)
  }, [pokemonNameGuess])

  useEffect(() => {
    setWrongAnswerStatus(false)
    setCorrectAnswerStatus(false)
  }, [pokemonTitle])

  return pokemonTitle != "" ? <OTPInput /> : null
}

export default TextInput
