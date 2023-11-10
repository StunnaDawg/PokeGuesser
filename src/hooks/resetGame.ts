import { useNavigate } from "react-router-dom";
import { useClassicModeLife, useUserNameGuess, useUserScore } from "../context";
import { usePokemon } from "../context/pokemonContext";

const useResetGame = () => {
const {userScore, setUserScore} = useUserScore();
    const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
    const {lives, setLives} = useClassicModeLife();
    const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
    usePokemon()
    const navigate = useNavigate(); 
    return (goWhere: string) => {
        try {
        setUserScore(0);
        setLives([1, 2, 3]);
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