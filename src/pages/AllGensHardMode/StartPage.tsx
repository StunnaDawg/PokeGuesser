import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { useCategoryContext } from "../../context"
import GenChoose from "../../componentLibrary/GenChoose"

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
          <div className="flex flex-row justify-center items-center h-min-screen">
            <div className="flex flex-col items-center ">
              <h1 className=" text-3xl xl:text-5xl font-pokemon-solid underline mt-10">
                Welcome to Classic Mode
              </h1>
              <div className="flex flex-row justify-center">
                <div className="text-center items-center ">
                  <GenChoose
                    setCategoryEnd={setCategoryEnd}
                    setCategoryStart={setCategoryStart}
                    setClickedLink={setClickedLink}
                    categoryStart={1}
                    categoryEnd={1015}
                    imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                    imgAlt="Ditto"
                    title="All Gens"
                    linkToName="all-gens"
                    boardId="h220CJnGaLsWLbkeoQK5"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center m-5">
                <GenChoose
                  setCategoryEnd={setCategoryEnd}
                  setCategoryStart={setCategoryStart}
                  setClickedLink={setClickedLink}
                  categoryStart={1}
                  categoryEnd={151}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/raichu.png"
                  imgAlt="Raichu"
                  title="Gen 1"
                  linkToName="gen-1"
                  boardId="UCKoA68QcBPPLmHMQ8me"
                />
                <GenChoose
                  setCategoryEnd={setCategoryEnd}
                  setCategoryStart={setCategoryStart}
                  setClickedLink={setClickedLink}
                  categoryStart={152}
                  categoryEnd={251}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/donphan.png"
                  imgAlt="Donphan"
                  title="Gen 2"
                  linkToName="gen-2"
                  boardId="4PfRrkHjmGtxiD4MGjK3"
                />
                <GenChoose
                  setCategoryEnd={setCategoryEnd}
                  setCategoryStart={setCategoryStart}
                  setClickedLink={setClickedLink}
                  categoryStart={252}
                  categoryEnd={386}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/swampert.png"
                  imgAlt="swampert"
                  title="Gen 3"
                  linkToName="gen-3"
                  boardId="lkA8PPZkEonsBWMcnsND"
                />
              </div>
              <div className="flex flex-row justify-center p-5 bg-slate-400">
                <GenChoose
                  setCategoryEnd={setCategoryEnd}
                  setCategoryStart={setCategoryStart}
                  setClickedLink={setClickedLink}
                  categoryStart={387}
                  categoryEnd={493}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/shinx.png"
                  imgAlt="shinx"
                  title="Gen 4"
                  linkToName="gen-4"
                  boardId="gpLowhzzbO66sr8ErtTd"
                />

                <GenChoose
                  setCategoryEnd={setCategoryEnd}
                  setCategoryStart={setCategoryStart}
                  setClickedLink={setClickedLink}
                  categoryStart={494}
                  categoryEnd={649}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/axew.png"
                  imgAlt="Axew"
                  title="Gen 5"
                  linkToName="gen-5"
                  boardId="cpi9AWd20qN5EvEXWv6p"
                />

                <GenChoose
                  setCategoryEnd={setCategoryEnd}
                  setCategoryStart={setCategoryStart}
                  setClickedLink={setClickedLink}
                  categoryStart={650}
                  categoryEnd={721}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/greninja.png"
                  imgAlt="Greninja"
                  title="Gen 6"
                  linkToName="gen-6"
                  boardId="KF0xTGOGLtWthfRAthgP"
                />
              </div>

              <div className="flex flex-row justify-center p-5 bg-slate-400">
                <GenChoose
                  setCategoryEnd={setCategoryEnd}
                  setCategoryStart={setCategoryStart}
                  setClickedLink={setClickedLink}
                  categoryStart={722}
                  categoryEnd={809}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/rowlet.png"
                  imgAlt="Rowlet"
                  title="Gen 7"
                  linkToName="gen-7"
                  boardId="QWQNLVYUZN2vPsJRIzgi"
                />

                <GenChoose
                  setCategoryEnd={setCategoryEnd}
                  setCategoryStart={setCategoryStart}
                  setClickedLink={setClickedLink}
                  categoryStart={810}
                  categoryEnd={905}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/snom.png"
                  imgAlt="Snom"
                  title="Gen 8"
                  linkToName="gen-8"
                  boardId="X4YoDaXNLXHgzYEwCwaS"
                />
                <GenChoose
                  setCategoryEnd={setCategoryEnd}
                  setCategoryStart={setCategoryStart}
                  setClickedLink={setClickedLink}
                  categoryStart={906}
                  categoryEnd={1015}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/tinkaton.png"
                  imgAlt="Tinkaton"
                  title="Gen 9"
                  linkToName="gen-9"
                  boardId="fvGXMpX3uzsaM9ImubCb"
                />
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
