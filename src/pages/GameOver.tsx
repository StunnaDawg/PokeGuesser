import { useUserScore } from "../context";
import { useEffect, useState } from "react";
import useResetGame from "../hooks/resetGame";

const GameOver = () => {
    const {userScore} = useUserScore();
    const [currentUser, setCurrentUser] = useState<string>("")
    const resetGame = useResetGame()

    const restartGame = () => { 
        resetGame('/classic', [1,2,3])
    }

    useEffect(() => {
        console.log(currentUser)
    }, [currentUser])
        return (
        <div className="flex flex-1 flex-col items-center">
            <h1>Game Over</h1>
            <p>{currentUser ? currentUser : 'loading username'} Score: {userScore} </p>
            <button onClick={restartGame}>Retry</button>
        </div>
    );
}

export default GameOver;