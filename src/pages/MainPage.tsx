import { Link } from "react-router-dom"
import PokeColumn from "../componentLibrary/PokemonCol"
import { useEffect, useState } from "react"
const MainPage = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <>
      <div className="flex flex-row">
        {isWideScreen ? (
          <>
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
          </>
        ) : (
          <PokeColumn
            pokemon1="pikachu"
            pokemon2="pichu"
            pokemon3="luxray"
            pokemon4="tinkaton"
          />
        )}

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
        </div>

        {isWideScreen ? (
          <>
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
          </>
        ) : (
          <PokeColumn
            pokemon1="pikachu"
            pokemon2="pichu"
            pokemon3="luxray"
            pokemon4="tinkaton"
          />
        )}
      </div>
    </>
  )
}

export default MainPage
