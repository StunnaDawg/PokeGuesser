import { useEffect, useState } from "react"
import usePokeFetcher from "../../hooks/pokeFetcher"
import TextInput from "./TextInput"
import { UserScore, ClassicModeLife } from "../../componentLibrary"
import GameModal from "./components/AnswerModal"
import {
  useUserScore,
  useClassicModeLife,
  usePokemon,
  useAnswerStatus,
  useCategoryContext,
} from "../../context"
import { useNavigate } from "react-router-dom"
import LoadingPikachu from "../../componentLibrary/Loading"

const ClassicMode = () => {
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const [loading, setLoading] = useState<boolean>(false)
  const { answerCorrectStatus, answerWrongStatus } = useAnswerStatus()
  const { setUserScore } = useUserScore()
  const { lives, setLives } = useClassicModeLife()
  const { categoryStart, categoryEnd } = useCategoryContext()
  const navigate = useNavigate()

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
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (answerCorrectStatus === true) {
      setUserScore((prevScore) => prevScore + 1)
    }
  }, [answerCorrectStatus])

  useEffect(() => {
    if (answerWrongStatus === true) {
      if (lives.length > 0) {
        setLives((prevLives) => prevLives.slice(0, -1))
      }

      if (lives.length === 0) {
        const timer = setTimeout(() => {
          navigate("/gameover")
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [answerWrongStatus])

  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen">
        <div className="flex flex-col items-center ">
          <div className="flex-1 flex justify-center items-center font-pokemon-solid">
            <h1 className="underline font-bold xl:text-5xl">Classic Mode</h1>
          </div>
          <div className="flex flex-row justify-center font-pokemon-solid">
            <ClassicModeLife />
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
                <TextInput />

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

export default ClassicMode

export const classicModeRoute = {
  element: <ClassicMode />,
}
