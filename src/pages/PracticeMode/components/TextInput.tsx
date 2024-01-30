import { useEffect } from "react"
import { useAnswerStatus, useUserNameGuess, usePokemon } from "../../../context"
import { OTPInput } from "../../../componentLibrary"
import usePokeFetcher from "../../../hooks/pokeFetcher"

type TextInputProps = {
  generationStart: number
  generationEnd: number
}

const TextInput: React.FC<TextInputProps> = ({
  generationStart,
  generationEnd,
}) => {
  const { pokemonNameGuess } = useUserNameGuess()
  const { pokemonTitle, setPokemonTitle, setPokemonSprite } = usePokemon()
  const { setCorrectAnswerStatus, setWrongAnswerStatus } = useAnswerStatus()

  useEffect(() => {
    if (
      pokemonNameGuess.toLowerCase() === pokemonTitle &&
      pokemonTitle !== ""
    ) {
      setCorrectAnswerStatus(true)
      const timer = setTimeout(() => {
        usePokeFetcher(
          setPokemonTitle,
          setPokemonSprite,
          generationStart,
          generationEnd
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
      const timer = setTimeout(() => {
        usePokeFetcher(
          setPokemonTitle,
          setPokemonSprite,
          generationStart,
          generationEnd
        )
      }, 1000)

      return () => clearTimeout(timer)
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
