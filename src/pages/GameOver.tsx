import { useUserNameGuess, useUserScore } from "../context";
import { useClassicModeLife } from "../context";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/pokemonContext";

const GameOver = () => {
    const {userScore, setUserScore} = useUserScore();
    const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
    const {lives, setLives} = useClassicModeLife();
    const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
    const navigate = useNavigate();

    const restartGame = async () => { 
        setUserScore(0);
        setLives([0,1,2,3]);
        setPokemonNameGuess("");
        setPokemonTitle("");
        setPokemonSprite("");
        navigate("/classic");
    }
    return (
        <div className="flex flex-1 flex-col items-center">
            <h1>Game Over</h1>
            <p>Score: {userScore} </p>
            <button onClick={async () => {await restartGame()}}>Retry</button>
        </div>
    );
}

export default GameOver;