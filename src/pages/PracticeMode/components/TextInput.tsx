import { useEffect} from "react"
import { useAnswerStatus, useUserNameGuess, usePokemon} from "../../../context"
import { OTPInput } from "../../../componentLibrary"
import usePokeFetcher from "../../../hooks/pokeFetcher"

type TextInputProps = {
  generationStart: number;
  generationEnd: number;
};

const TextInput: React.FC<TextInputProps> = ({generationStart, generationEnd}) => {
  const { pokemonNameGuess } = useUserNameGuess()
  const { pokemonTitle, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const {
    setCorrectAnswerStatus,
    setWrongAnswerStatus,
  } = useAnswerStatus()

  useEffect(() => {
    if (pokemonNameGuess === pokemonTitle && pokemonTitle !== '') {
      console.log("winner")
      setCorrectAnswerStatus(true)
      const timer = setTimeout(() => {
        usePokeFetcher(setPokemonTitle, setPokemonSprite, generationStart, generationEnd)
      }, 1000)
      return () => clearTimeout(timer)
    }

    if (
      pokemonNameGuess !== pokemonTitle &&
      pokemonNameGuess.length === pokemonTitle.length
      && pokemonTitle !== ''
    ) {
      console.log("loser")
      setWrongAnswerStatus(true)
      const timer = setTimeout(() => {
        usePokeFetcher(setPokemonTitle, setPokemonSprite, generationStart, generationEnd)
      }, 1000)
    
      console.log('I fetced a new pokemon')
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
