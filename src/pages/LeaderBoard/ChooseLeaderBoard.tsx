import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import LeaderBoardChoose from "../../componentLibrary/LeaderBoardChoose"

const ChooseLeaderBoard = () => {
  const [clickedLink, setClickedLink] = useState<boolean>(false)

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
                  <LeaderBoardChoose
                    setClickedLink={setClickedLink}
                    imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                    imgAlt="Ditto"
                    title="All Gens"
                    boardLink="all-gens"
                    boardId="h220CJnGaLsWLbkeoQK5"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center m-5">
                <LeaderBoardChoose
                  setClickedLink={setClickedLink}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                  imgAlt="Ditto"
                  title="All Gens"
                  boardLink="all-gens"
                  boardId=""
                />
                <LeaderBoardChoose
                  setClickedLink={setClickedLink}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                  imgAlt="Ditto"
                  title="All Gens"
                  boardLink="all-gens"
                  boardId=""
                />
                <LeaderBoardChoose
                  setClickedLink={setClickedLink}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                  imgAlt="Ditto"
                  title="All Gens"
                  boardLink="all-gens"
                  boardId=""
                />
              </div>
              <div className="flex flex-row justify-center p-5 bg-slate-400">
                <LeaderBoardChoose
                  setClickedLink={setClickedLink}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                  imgAlt="Ditto"
                  title="All Gens"
                  boardLink="all-gens"
                  boardId=""
                />

                <LeaderBoardChoose
                  setClickedLink={setClickedLink}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                  imgAlt="Ditto"
                  title="All Gens"
                  boardLink="all-gens"
                  boardId=""
                />

                <LeaderBoardChoose
                  setClickedLink={setClickedLink}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                  imgAlt="Ditto"
                  title="All Gens"
                  boardLink="all-gens"
                  boardId=""
                />
              </div>

              <div className="flex flex-row justify-center p-5 bg-slate-400">
                <LeaderBoardChoose
                  setClickedLink={setClickedLink}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                  imgAlt="Ditto"
                  title="All Gens"
                  boardLink="all-gens"
                  boardId=""
                />

                <LeaderBoardChoose
                  setClickedLink={setClickedLink}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                  imgAlt="Ditto"
                  title="All Gens"
                  boardLink="all-gens"
                  boardId=""
                />
                <LeaderBoardChoose
                  setClickedLink={setClickedLink}
                  imgLink="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png"
                  imgAlt="Ditto"
                  title="All Gens"
                  boardLink="all-gens"
                  boardId=""
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

export default ChooseLeaderBoard
