import { useEffect, useState } from "react"
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
import LoadingPikachu from "../../../componentLibrary/Loading"

const AllGensPracticeMode = () => {
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const { setUserScore } = useUserScore()
  const [loading, setLoading] = useState<boolean>(false)
  const { categoryStart, categoryEnd } = useCategoryContext()
  const { answerCorrectStatus, answerWrongStatus } = useAnswerStatus()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      usePokeFetcher(
        setPokemonTitle,
        setPokemonSprite,
        categoryStart,
        categoryEnd
      )
      setLoading(false)
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
      <div className="flex flex-row justify-center items-center h-screen">
        <div className="flex flex-col items-center ">
          <div className="flex-1 flex justify-center items-center font-pokemon-solid">
            <h1 className="underline font-bold xl:text-5xl">Practice Mode</h1>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="flex-col">
              <div className="flex flex-row justify-center">
                {loading ? (
                  <LoadingPikachu />
                ) : (
                  <img src={pokemonSprite} className="xl:w-64 xl:h-64" />
                )}
              </div>
              <div className="flex flex-row justify-center font-pokemon-solid xl:text-5xl">
                {/* <h3>{pokemonTitle != "" ? pokemonTitle : "loading..."}</h3> */}
                <UserScore />
              </div>
              <div className="flex flex-row justify-center">
                <TextInput
                  generationEnd={categoryEnd}
                  generationStart={categoryStart}
                />

                <GameModal isOpen={answerCorrectStatus || answerWrongStatus}>
                  {answerCorrectStatus ? "Correct" : `Wrong ${pokemonTitle}`}{" "}
                </GameModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllGensPracticeMode
