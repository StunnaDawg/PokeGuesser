import { useEffect } from "react"
import {
  useAnswerStatus,
  useClassicModeLife,
  useUserNameGuess,
  usePokemon,
  useCategoryContext,
} from "../../context"
import { OTPInput } from "../../componentLibrary"
import usePokeFetcher from "../../hooks/pokeFetcher"

const TextInput = () => {
  const { pokemonNameGuess } = useUserNameGuess()
  const { pokemonTitle, setPokemonTitle, setPokemonSprite } = usePokemon()
  const { setCorrectAnswerStatus, setWrongAnswerStatus } = useAnswerStatus()
  const { categoryStart, categoryEnd } = useCategoryContext()
  const { lives } = useClassicModeLife()

  useEffect(() => {
    if (
      pokemonNameGuess.toLowerCase() === pokemonTitle &&
      pokemonTitle !== ""
    ) {
      console.log("winner")
      setCorrectAnswerStatus(true)
      const timer = setTimeout(() => {
        usePokeFetcher(
          setPokemonTitle,
          setPokemonSprite,
          categoryStart,
          categoryEnd
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
          usePokeFetcher(
            setPokemonTitle,
            setPokemonSprite,
            categoryStart,
            categoryEnd
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
