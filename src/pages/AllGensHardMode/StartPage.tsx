import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { useCategoryContext } from "../../context"

const ChooseClassicMode = () => {
  const [clickedLink, setClickedLink] = useState<boolean>(false)
  const { setCategoryStart, setCategoryEnd } = useCategoryContext()

  useEffect(() => {
    setClickedLink(false)
  }, [])

  return (
    <>
      {!clickedLink ? (
        <>
          {/* <div className="flex flex-row justify-center"></div> */}
          <div className="flex flex-col items-center h-screen">
            <div className="flex flex-row justify-center">
              <div className=" text-center items-center">
                <h1 className="text-3xl font-pokemon-solid">Classic Mode</h1>
                <Link
                  className="text-2xl font-pokemon-solid"
                  to="all-gens"
                  onClick={() => {
                    setCategoryStart(0),
                      setCategoryEnd(1015),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                    alt="Ditto"
                    className="w-24 h-24 object-contain m-4"
                  />
                  {/* <img
                    src="https://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif"
                    alt="Ditto"
                  /> */}
                  All Gens
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-center m-5">
              <div className="mx-2 text-center">
                <Link
                  className="text-2xl font-pokemon-solid"
                  to="gen-1"
                  onClick={() => {
                    setCategoryStart(0),
                      setCategoryEnd(151),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/raichu.png"
                    alt="Raichu"
                    className="w-24 h-24 object-contain m-4"
                  />
                  {/* <img
                    src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
                    alt="Blastoise"
                  /> */}
                  Gen 1
                </Link>
              </div>
              <div className="mx-2 text-center">
                <Link
                  className="text-2xl font-pokemon-solid"
                  to="gen-2"
                  onClick={() => {
                    setCategoryStart(152),
                      setCategoryEnd(251),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/donphan.png"
                    alt="Donphan"
                    className="w-24 h-24 object-contain m-4"
                  />
                  {/* <img
                    src="https://img.pokemondb.net/sprites/black-white/anim/normal/donphan-f.gif"
                    alt="Donphan"
                  /> */}
                  Gen 2
                </Link>
              </div>
              <div className="mx-2 text-center">
                <Link
                  className="text-2xl font-pokemon-solid"
                  to="gen-3"
                  onClick={() => {
                    setCategoryStart(252),
                      setCategoryEnd(386),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/breloom.png"
                    alt="Breloom"
                    className="w-24 h-24 object-contain m-4"
                  />
                  {/* <img
                    src="https://img.pokemondb.net/sprites/black-white/anim/normal/jirachi.gif"
                    alt="Jirachi"
                  /> */}
                  Gen 3
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-center m-5">
              <div className="mx-2 text-center">
                <Link
                  className="text-2xl font-pokemon-solid"
                  to="gen-4"
                  onClick={() => {
                    setCategoryStart(387),
                      setCategoryEnd(493),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/luxray.png"
                    alt="Luxray"
                    className="w-24 h-24 object-contain m-4"
                  />
                  Gen 4
                </Link>
              </div>

              <div className="flex flex-row justify-center">
                <div className="mx-2 text-center font-pokemon-solid">
                  <Link
                    className="text-2xl"
                    to="gen-5"
                    onClick={() => {
                      setCategoryStart(494),
                        setCategoryEnd(649),
                        setClickedLink(true)
                    }}
                  >
                    <img
                      src="https://img.pokemondb.net/sprites/scarlet-violet/normal/axew.png"
                      alt="Axew"
                      className="w-24 h-24 object-contain m-4"
                    />
                    {/* <img
                    src="https://img.pokemondb.net/sprites/black-white-2/anim/normal/tepig.gif"
                    alt="Tepig"
                  /> */}
                    Gen 5
                  </Link>
                </div>
                <div className="mx-2 text-center">
                  <Link
                    className="text-2xl font-pokemon-solid"
                    to="gen-6"
                    onClick={() => {
                      setCategoryStart(650),
                        setCategoryEnd(721),
                        setClickedLink(true)
                    }}
                  >
                    <img
                      src="https://img.pokemondb.net/sprites/scarlet-violet/normal/greninja.png"
                      alt="Greninja"
                      className="w-24 h-24 object-contain m-4"
                    />
                    {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png" /> */}
                    Gen 6
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center m-5">
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  className="text-2xl"
                  to="gen-7"
                  onClick={() => {
                    setCategoryStart(722),
                      setCategoryEnd(809),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/rowlet.png"
                    alt="Rowlet"
                    className="w-24 h-24 object-contain m-4"
                  />
                  {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png" /> */}
                  Gen 7
                </Link>
              </div>

              <div className="mx-2 text-center">
                <Link
                  className="text-2xl font-pokemon-solid"
                  to="gen-8"
                  onClick={() => {
                    setCategoryStart(810),
                      setCategoryEnd(905),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/snom.png"
                    alt="Snom"
                    className="w-24 h-24 object-contain m-4"
                  />
                  {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png" /> */}
                  Gen 8
                </Link>
              </div>
              <div className="mx-2 text-center">
                <Link
                  className="text-2xl font-pokemon-solid"
                  to="gen-9"
                  onClick={() => {
                    setCategoryStart(906),
                      setCategoryEnd(1010),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/tinkaton.png"
                    alt="Tinkaton"
                    className="w-24 h-24 object-contain m-4"
                  />
                  {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png" /> */}
                  Gen 9
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  )
}

export default ChooseClassicMode
