import { Link } from "react-router-dom"
import PokeColumn from "../componentLibrary/PokemonCol"
import { useEffect, useState } from "react"
const MainPage = () => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(
    window.innerWidth >= 1024
  )

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024)
    }

    window.addEventListener("resize", handleResize)

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
              />

              <PokeColumn
                pokemon1="raichu"
                pokemon2="diglett"
                pokemon3="garchomp"
              />

              <PokeColumn
                pokemon1="charmeleon"
                pokemon2="mewtwo"
                pokemon3="mew"
              />
            </>
          ) : (
            <PokeColumn pokemon1="pikachu" pokemon2="pichu" pokemon3="luxray" />
          )}
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="font-pokemon-solid underline text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            PokeGuesser
          </h1>

          <Link
            to="/classic"
            className="my-2 font-pokemon-solid text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl hover:text-blue-800"
          >
            Classic Mode
          </Link>
          <Link
            to="/practice-mode"
            className="my-2 font-pokemon-solid text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl hover:text-blue-800"
          >
            Practice Mode
          </Link>
          <Link
            to="/leaderboard"
            className="my-2 font-pokemon-solid text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl hover:text-blue-800"
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
              />

              <PokeColumn
                pokemon1="raichu"
                pokemon2="diglett"
                pokemon3="garchomp"
              />

              <PokeColumn
                pokemon1="charmeleon"
                pokemon2="mewtwo"
                pokemon3="mew"
              />
            </>
          ) : (
            <PokeColumn pokemon1="pikachu" pokemon2="pichu" pokemon3="luxray" />
          )}
        </div>
      </div>
    </>
  )
}

export default MainPage
