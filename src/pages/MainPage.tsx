import { Link } from "react-router-dom"
import PokeColumn from "../componentLibrary/PokemonCol"
const MainPage = () => {
  return (
    <>
      <div className="flex flex-row">
        <PokeColumn
          pokemon1="pikachu"
          pokemon2="pichu"
          pokemon3="luxray"
          pokemon4="tinkaton"
        />

        <PokeColumn
          pokemon1="raichu"
          pokemon2="diglett"
          pokemon3="garchomp"
          pokemon4="charizard"
        />

        <PokeColumn
          pokemon1="charmeleon"
          pokemon2="mewtwo"
          pokemon3="mew"
          pokemon4="phanpy"
        />

        <div className="flex-1 flex flex-col items-center justify-center h-screen">
          <h1 className="font-pokemon-solid underline text-4xl">PokeGuesser</h1>

          <Link to="/classic" className="my-2 font-pokemon-solid">
            Classic Mode
          </Link>
          <Link to="/practice-mode" className="my-2 font-pokemon-solid">
            Practice Mode
          </Link>
          <Link to="/leaderboard/all-gens" className="my-2 font-pokemon-solid">
            LeaderBoard
          </Link>
          <Link to="/create-username" className="my-2 font-pokemon-solid">
            Create Username
          </Link>
        </div>

        <PokeColumn
          pokemon1="pikachu"
          pokemon2="pichu"
          pokemon3="luxray"
          pokemon4="tinkaton"
        />

        <PokeColumn
          pokemon1="raichu"
          pokemon2="diglett"
          pokemon3="garchomp"
          pokemon4="charizard"
        />

        <PokeColumn
          pokemon1="charmeleon"
          pokemon2="mewtwo"
          pokemon3="mew"
          pokemon4="phanpy"
        />
      </div>
    </>
  )
}

export default MainPage
