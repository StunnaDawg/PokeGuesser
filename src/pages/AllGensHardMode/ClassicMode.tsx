import { useEffect, useState } from "react"
import TextInput from "./TextInput"
import { UserScore, ClassicModeLife } from "../../componentLibrary"
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
import usePokeFetcherClassic from "../../hooks/pokeFetcherClassic"

const ClassicMode = () => {
  const { categoryStart, categoryEnd } = useCategoryContext()
  const generatePokemonRandomizeArray = (
    categoryStart: number,
    categoryEnd: number
  ) => {
    return Array.from(
      { length: categoryEnd - categoryStart + 1 },
      (_, index) => categoryStart + index
    )
  }
  const shuffledPokemonArray = generatePokemonRandomizeArray(
    categoryStart,
    categoryEnd
  )
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  const [timeScore, setTime] = useState<number>(0)
  const [startTimer, setStartTimer] = useState<boolean>(false)
  const [pauseTimer, setPauseTimer] = useState<boolean>(false)
  const [pokemonArray, setPokemonArray] =
    useState<number[]>(shuffledPokemonArray)
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const [loading, setLoading] = useState<boolean>(false)
  const { boardId } = useLeaderBoardId()
  const { answerCorrectStatus, answerWrongStatus } = useAnswerStatus()
  const { userScore, setUserScore } = useUserScore()
  const { lives, setLives } = useClassicModeLife()
  const [completeGame, setCompleteGame] = useState<boolean>(false)

  const navigate = useNavigate()
  const displayName = FIREBASE_AUTH.currentUser?.displayName
  const userId = FIREBASE_AUTH.currentUser?.uid

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      usePokeFetcherClassic(
        setPokemonTitle,
        setPokemonSprite,
        pokemonArray,
        setPokemonArray
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
    if (userScore === categoryEnd) {
      setCompleteGame(true)
      setPauseTimer(true)
      const timer = setTimeout(() => {
        if (displayName && userId) {
          addToScoreLeaderboard(
            displayName,
            userId,
            "classic-all",
            userScore,
            boardId,
            timeScore,
            completeGame
          )
        }

        navigate("/gameover")
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [userScore])

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
              timeScore,
              completeGame
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
                <div>
                  <TextInput
                    pokemonArray={pokemonArray}
                    setPokemonArray={setPokemonArray}
                  />

                  <div className="flex flex-row justify-center font-semibold text-xl 2xl:text-3xl">
                    {answerCorrectStatus || answerWrongStatus ? (
                      answerCorrectStatus ? (
                        "Correct"
                      ) : (
                        `Wrong ${pokemonTitle}`
                      )
                    ) : (
                      <p>Hint: For spacing use a dash -</p>
                    )}
                  </div>

                  {/* <GameModal isOpen={answerCorrectStatus || answerWrongStatus}>
                  {answerCorrectStatus ? "Correct" : `Wrong ${pokemonTitle}`}{" "}
                </GameModal> */}
                </div>
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
