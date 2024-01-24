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
      <div className="flex flex-row justify-center">
        <div className="flex flex-row items-center">
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
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="font-pokemon-solid underline text-3xl xl:text-5xl 2xl:text-7xl">
            PokeGuesser
          </h1>

          <Link
            to="/classic"
            className="my-2 font-pokemon-solid text-2xl xl:text-4xl 2xl:text-5xl"
          >
            Classic Mode
          </Link>
          <Link
            to="/practice-mode"
            className="my-2 font-pokemon-solid text-2xl xl:text-3xl 2xl:text-4xl"
          >
            Practice Mode
          </Link>
          <Link
            to="/leaderboard"
            className="my-2 font-pokemon-solid text-2xl xl:text-3xl 2xl:text-4xl"
          >
            LeaderBoard
          </Link>
        </div>
        <div className="flex flex-row items-center">
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
      </div>
    </>
  )
}

export default MainPage
