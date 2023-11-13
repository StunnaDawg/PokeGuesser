 import { useEffect, useState } from "react"
import { usePokemon } from "../../../context/pokemonContext"
import usePokeFetcher from "../../../hooks/pokeFetcher"
import TextInput from "../components/TextInput"
import { useAnswerStatus, useUserScore, useCategoryContext} from "../../../context"
import { UserScore } from "../../../componentLibrary"
import GameModal from "../../AllGensHardMode/components/AnswerModal"
import { useNavigate } from "react-router-dom"

const AllGensPracticeMode = () => { 
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
    const {userScore, setUserScore} = useUserScore()
    const {categoryStart, categoryEnd} = useCategoryContext()
  const {
    answerCorrectStatus,
    setCorrectAnswerStatus,
    answerWrongStatus,
    setWrongAnswerStatus,
  } = useAnswerStatus()
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      usePokeFetcher(setPokemonTitle, setPokemonSprite, categoryStart, categoryEnd)
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


  return (
    <>
      <div className="flex-1 flex justify-center items-center">
        <h1 className="underline font-bold">PokeGuesser</h1>
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
            <TextInput generationStart={0} generationEnd={1015}/>
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