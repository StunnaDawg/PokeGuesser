import { useEffect } from "react"
import { usePokemon } from "../../../context/pokemonContext"
import usePokeFetcher from "../../../hooks/pokeFetcher"
import TextInput from "../components/TextInput"
import {
  useAnswerStatus,
  useUserScore,
  useCategoryContext,
} from "../../../context"
import { UserScore } from "../../../componentLibrary"
import GameModal from "../../AllGensHardMode/components/AnswerModal"

const AllGensPracticeMode = () => {
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const { setUserScore } = useUserScore()
  const { categoryStart, categoryEnd } = useCategoryContext()
  const { answerCorrectStatus, answerWrongStatus } = useAnswerStatus()

  useEffect(() => {
    const timer = setTimeout(() => {
      usePokeFetcher(
        setPokemonTitle,
        setPokemonSprite,
        categoryStart,
        categoryEnd
      )
      console.log("fetching")
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (answerCorrectStatus === true) {
      setUserScore((prevScore) => prevScore + 1)
    }
  }, [answerCorrectStatus])

  return (
    <>
      <div className="flex-1 flex justify-center items-center font-pokemon-solid">
        <h1 className="underline font-bold">Practice Mode</h1>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex-col">
          <div className="flex flex-row justify-center">
            <img src={pokemonSprite} />
          </div>
          <div className="flex flex-row justify-center font-pokemon-solid">
            {/* <h3>{pokemonTitle != "" ? pokemonTitle : "loading..."}</h3> */}
            <UserScore />
          </div>
          <div className="flex flex-row justify-center">
            <TextInput generationStart={0} generationEnd={1015} />
            <GameModal isOpen={answerCorrectStatus || answerWrongStatus}>
              {answerCorrectStatus ? "Correct" : `Wrong ${pokemonTitle}`}{" "}
            </GameModal>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center"></div>
    </>
  )
}

export default AllGensPracticeMode
