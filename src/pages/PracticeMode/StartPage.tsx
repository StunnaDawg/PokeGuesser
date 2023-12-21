import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { useCategoryContext } from "../../context"

const ChoosePracticeMode = () => {
  const [clickedLink, setClickedLink] = useState<boolean>(false)
  const { setCategoryStart, setCategoryEnd } = useCategoryContext()
  return (
    <>
      {!clickedLink ? (
        <>
          <div className="flex flex-col items-center h-screen">
            <div className="flex flex-row justify-center">
              <div className="mx-2 text-center font-pokemon-solid">
                <h1 className="text-3xl font-pokemon-solid">Practice Mode</h1>

                <Link
                  to="all-gens"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(0),
                      setCategoryEnd(1015),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/mew.png"
                    alt="Mew"
                    className="w-24 h-24 object-contain m-4"
                  />
                  All Generations
                </Link>
              </div>
            </div>

            <div className="flex flex-row justify-center">
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  to="gen-1"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(0),
                      setCategoryEnd(151),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/flareon.png"
                    alt="Flareon"
                    className="w-24 h-24 object-contain m-4"
                  />
                  Gen 1
                </Link>
              </div>
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  to="gen-2"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(152),
                      setCategoryEnd(251),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/quagsire.png"
                    alt="Quagsire"
                    className="w-24 h-24 object-contain m-4"
                  />
                  Gen 2
                </Link>
              </div>
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  to="gen-3"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(252),
                      setCategoryEnd(386),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/medicham.png"
                    alt="Medicham"
                    className="w-24 h-24 object-contain m-4"
                  />
                  Gen 3
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  to="gen-4"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(387),
                      setCategoryEnd(493),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/mesprit.png"
                    alt="Mesprit"
                    className="w-24 h-24 object-contain m-4"
                  />
                  Gen 4
                </Link>
              </div>
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  to="gen-5"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(494),
                      setCategoryEnd(649),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/zoroark.png"
                    alt="Zoroark"
                    className="w-24 h-24 object-contain m-4"
                  />
                  Gen 5
                </Link>
              </div>
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  to="gen-6"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(650),
                      setCategoryEnd(721),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/goodra.png"
                    alt="Goodra"
                    className="w-24 h-24 object-contain m-4"
                  />
                  Gen 6
                </Link>
              </div>
            </div>

            <div className="flex flex-row justify-center">
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  to="gen-7"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(722),
                      setCategoryEnd(809),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/mudbray.png"
                    alt="Mudbray"
                    className="w-24 h-24 object-contain m-4"
                  />
                  Gen 7
                </Link>
              </div>
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  to="gen-8"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(810),
                      setCategoryEnd(905),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/toxtricity.png"
                    alt="Toxtricity"
                    className="w-24 h-24 object-contain m-4"
                  />
                  Gen 8
                </Link>
              </div>
              <div className="mx-2 text-center font-pokemon-solid">
                <Link
                  to="gen-9"
                  className="text-2xl"
                  onClick={() => {
                    setCategoryStart(906),
                      setCategoryEnd(1010),
                      setClickedLink(true)
                  }}
                >
                  <img
                    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/bellibolt.png"
                    alt="Bellibolt"
                    className="w-24 h-24 object-contain m-4"
                  />
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

export default ChoosePracticeMode
