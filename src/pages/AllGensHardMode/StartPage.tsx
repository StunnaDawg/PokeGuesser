import { useEffect, useState} from "react"
import { usePokemon } from "../../context/pokemonContext"
import React from "react"
import usePokeFetcher from "../../hooks/pokeFetcher"
import TextInput from "./components/TextInput"
import { useAnswerStatus } from "../../context"
import GameModal from "./components/AnswerModal"

const AllGenHardStart = () => {
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
    const { answerCorrectStatus, setCorrectAnswerStatus, answerWrongStatus, setWrongAnswerStatus } = useAnswerStatus()
    const [isStarted, setIsStarted] = useState<boolean>(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      usePokeFetcher(setPokemonTitle, setPokemonSprite);
    setIsStarted(true)
    }, 1000); 
    return () => clearTimeout(timer);
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
          <GameModal isOpen={answerCorrectStatus || answerWrongStatus}>{answerCorrectStatus ? 'Correct' : 'Wrong'} </GameModal>
          <div className="flex flex-row justify-center">
            <h3>{pokemonTitle != "" ? pokemonTitle : "loading..."}</h3>
          </div>
          <div className="flex flex-row justify-center">
             <TextInput />
            
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
      </div>
    </>
  )
}

export default AllGenHardStart
