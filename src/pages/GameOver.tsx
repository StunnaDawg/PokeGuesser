import { useUserNameGuess, useUserScore } from "../context";
import { useClassicModeLife } from "../context";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/pokemonContext";
import { useEffect, useState } from "react";
import { getUsername } from "../hooks/getUsername";

const GameOver = () => {
    const {userScore, setUserScore} = useUserScore();
    const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
    const {lives, setLives} = useClassicModeLife();
    const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
    const [currentUser, setCurrentUser] = useState<string>("")
    const navigate = useNavigate();

    const restartGame = async () => { 
        setUserScore(0);
        setLives([0,1,2,3]);
        setPokemonNameGuess("");
        setPokemonTitle("");
        setPokemonSprite("");
        navigate("/classic");
    }

    useEffect(() => {
        const getUserName = async () => {
            await getUsername(setCurrentUser)
        }
        
        getUserName();
    }, [])

    useEffect(() => {
        console.log(currentUser)
    }, [currentUser])
        return (
        <div className="flex flex-1 flex-col items-center">
            <h1>Game Over</h1>
            <p>{currentUser ? currentUser : 'loading username'} Score: {userScore} </p>
            <button onClick={async () => {await restartGame()}}>Retry</button>
        </div>
    );
}

export default GameOver;