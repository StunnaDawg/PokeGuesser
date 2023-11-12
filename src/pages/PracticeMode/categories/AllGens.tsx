 import { useEffect, useState } from "react"
import { usePokemon } from "../../../context/pokemonContext"
import usePokeFetcher from "../../../hooks/pokeFetcher"
import TextInput from "../components/TextInput"
import { useAnswerStatus} from "../../../context"
import { UserScore } from "../../../componentLibrary"
import GameModal from "../../AllGensHardMode/components/AnswerModal"
import { useNavigate } from "react-router-dom"
const AllGensPracticeMode = () => { 
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
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
      usePokeFetcher(setPokemonTitle, setPokemonSprite)
      console.log("fetching")
      setIsStarted(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

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

export default AllGensPracticeMode