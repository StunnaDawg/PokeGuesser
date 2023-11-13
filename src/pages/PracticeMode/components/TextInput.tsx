import { useEffect} from "react"
import { useAnswerStatus, useClassicModeLife, useUserNameGuess} from "../../../context"
import { OTPInput } from "../../../componentLibrary"
import { usePokemon } from "../../../context/pokemonContext"
import usePokeFetcher from "../../../hooks/pokeFetcher"

type TextInputProps = {
  generation: number;
};

const TextInput: React.FC<TextInputProps> = ({generation}) => {
  const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const {
    answerCorrectStatus,
    setCorrectAnswerStatus,
    answerWrongStatus,
    setWrongAnswerStatus,
  } = useAnswerStatus()
  const {lives} = useClassicModeLife()

  useEffect(() => {
    if (pokemonNameGuess === pokemonTitle && pokemonTitle !== '') {
      console.log("winner")
      setCorrectAnswerStatus(true)
      const timer = setTimeout(() => {
        usePokeFetcher(setPokemonTitle, setPokemonSprite, generation)
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
        usePokeFetcher(setPokemonTitle, setPokemonSprite, generation)
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
