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
import { FIREBASE_AUTH } from "../../../firebase"
import addToScoreLeaderboard from "../../hooks/addScoreToLeaderBoard"
import TimerComponent from "../../componentLibrary/TimerComponent"
import { useLeaderBoardId } from "../../context/leaderBoardContext"

const ClassicMode = () => {
  const [timeScore, setTime] = useState<number>(0)
  const [startTimer, setStartTimer] = useState<boolean>(false)
  const [pauseTimer, setPauseTimer] = useState<boolean>(false)
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const [loading, setLoading] = useState<boolean>(false)
  const { boardId } = useLeaderBoardId()
  const { answerCorrectStatus, answerWrongStatus } = useAnswerStatus()
  const { userScore, setUserScore } = useUserScore()
  const { lives, setLives } = useClassicModeLife()
  const { categoryStart, categoryEnd } = useCategoryContext()
  const navigate = useNavigate()
  const displayName = FIREBASE_AUTH.currentUser?.displayName
  const userId = FIREBASE_AUTH.currentUser?.uid

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      usePokeFetcher(
        setPokemonTitle,
        setPokemonSprite,
        categoryStart,
        categoryEnd
      )
      setStartTimer(true)
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
        setPauseTimer(true)
        const timer = setTimeout(() => {
          if (displayName && userId) {
            addToScoreLeaderboard(
              displayName,
              userId,
              "classic-all",
              userScore,
              boardId,
              timeScore
            )
          }

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
          <div className="flex-1 flex flex-col justify-center items-center font-pokemon-solid">
            <h1 className="underline font-bold text-2xl xl:text-5xl">
              Classic Mode
            </h1>
            <TimerComponent
              setTime={setTime}
              startTimer={startTimer}
              stopTimer={pauseTimer}
            />
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
