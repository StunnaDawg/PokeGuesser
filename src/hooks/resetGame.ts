import { useNavigate } from "react-router-dom";
import { useClassicModeLife, useUserNameGuess, useUserScore } from "../context";
import { usePokemon } from "../context/pokemonContext";

const useResetGame = () => {
const { setUserScore} = useUserScore();
    const { setPokemonNameGuess } = useUserNameGuess()
    const { setLives} = useClassicModeLife();
    const { setPokemonTitle, setPokemonSprite } =
    usePokemon()
    const navigate = useNavigate(); 
    return (goWhere: string, retryLives: number[]) => {
        try {
        setUserScore(0);
        setLives(retryLives);
        setPokemonNameGuess("");
        setPokemonTitle("");
        setPokemonSprite("");
        navigate(goWhere);
    } catch (error) {
        console.log(error); 
    }
      };
}

export default useResetGame;