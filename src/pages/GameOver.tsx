import { useUserScore } from "../context"
import useResetGame from "../hooks/resetGame"
import { FIREBASE_AUTH } from "../../firebase"
import { Link } from "react-router-dom"

const GameOver = () => {
  const { userScore } = useUserScore()
  const resetGame = useResetGame()
  const displayName = FIREBASE_AUTH.currentUser?.displayName

  const restartGame = () => {
    resetGame("/classic", [1, 2, 3])
  }

  return (
    <div className="flex-1 flex flex-col items-center text-center justify-center h-screen font-pokemon-solid text-xl 2xl:text-5xl">
      <h1>Game Over</h1>
      <p className="my-5">
        {displayName ? displayName : "Guest"}'s Score: {userScore}{" "}
      </p>
      <button onClick={restartGame} className="hover:text-blue-800">
        Retry
      </button>

      {displayName ? null : (
        <Link to="/create-account" className="hover:text-blue-800">
          Login or Create an Account to save your score!
        </Link>
      )}
    </div>
  )
}

export default GameOver
