import { useUserScore } from "../context"
import { useEffect, useState } from "react"
import useResetGame from "../hooks/resetGame"
import { FIREBASE_AUTH } from "../../firebase"

const GameOver = () => {
  const { userScore } = useUserScore()
  const [currentUser, setCurrentUser] = useState<string>("")
  const resetGame = useResetGame()
  const displayName = FIREBASE_AUTH.currentUser?.displayName

  const restartGame = () => {
    resetGame("/classic", [1, 2, 3])
  }

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-screen font-pokemon-solid xl:text-5xl">
      <h1>Game Over</h1>
      <p className="my-5">
        {displayName ? displayName : "Guest"}'s Score: {userScore}{" "}
      </p>
      <button onClick={restartGame}>Retry</button>
    </div>
  )
}

export default GameOver
