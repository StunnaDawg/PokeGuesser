import { useEffect, useState } from "react"
import { usePokemon } from "../../context/pokemonContext"
import usePokeFetcher from "../../hooks/pokeFetcher"
import TextInput from "./TextInput"
import { useAnswerStatus } from "../../context"
import { UserScore, ClassicModeLife } from "../../componentLibrary"
import GameModal from "./components/AnswerModal"
import { useUserScore, useClassicModeLife } from "../../context"
import { Outlet, useNavigate } from "react-router-dom"

const ClassicMode = () => {
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
  const {
    answerCorrectStatus,
    setCorrectAnswerStatus,
    answerWrongStatus,
    setWrongAnswerStatus,
  } = useAnswerStatus()
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const {userScore, setUserScore} = useUserScore()
  const {lives, setLives} = useClassicModeLife()
  const navigate = useNavigate()


  useEffect(() => {
    const timer = setTimeout(() => {
      usePokeFetcher(setPokemonTitle, setPokemonSprite, 1015)
      console.log("fetching")
      setIsStarted(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if(answerCorrectStatus === true) {
      setUserScore(prevScore => prevScore + 1);
    }

  }, [answerCorrectStatus])

  useEffect(() => {
    if(answerWrongStatus === true) {
      if (lives.length > 0) {
      setLives([1,2,3].slice(0, lives.length - 1));
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
      <div className="flex-1 flex justify-center items-center">
        <h1 className="underline font-bold">PokeGuesser</h1>
      </div>
      <div className="flex flex-row justify-center">
<ClassicModeLife />
</div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex-col">
          <div className="flex flex-row justify-center">
            <img src={pokemonSprite} />
          </div>
          <div className="flex flex-row justify-center">
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

      <div className="flex-1 flex justify-center items-center"></div>
      
    </>
  )
}

export default ClassicMode

export const classicModeRoute = {
  element: <ClassicMode />,
}

