import { useEffect, useState } from "react"
import { useLeaderBoardId } from "../../context/leaderBoardContext"
import { UserLeaderBoard } from "../../@types/firebase"
import getLeaderboardUsersData from "../../hooks/getLeaderboardData"
import LeaderboardHeader from "../../componentLibrary/LeaderboardHeader"

const LeaderBoard = () => {
  const { boardId } = useLeaderBoardId()
  const [leaderBoardUsers, setLeaderBoardUsers] = useState<UserLeaderBoard[]>(
    []
  )

  useEffect(() => {
    getLeaderboardUsersData(boardId, setLeaderBoardUsers)
  }, [])

  useEffect(() => {
    getLeaderboardUsersData(boardId, setLeaderBoardUsers)
  }, [boardId])

  return (
    <>
      <div className="min-h-screen pt-8 font-pokemon-solid">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl 2xl:text-6xl font-pokemon-solid">
              {" "}
              Classic Mode Leaderboards
            </h1>

            <LeaderboardHeader
              allGenId="h220CJnGaLsWLbkeoQK5"
              gen1Id="UCKoA68QcBPPLmHMQ8me"
              gen2Id="4PfRrkHjmGtxiD4MGjK3"
              gen6Id="KF0xTGOGLtWthfRAthgP"
              gen7Id="QWQNLVYUZN2vPsJRIzgi"
              gen8Id="X4YoDaXNLXHgzYEwCwaS"
              gen5Id="cpi9AWd20qN5EvEXWv6p"
              gen9Id="fvGXMpX3uzsaM9ImubCb"
              gen4Id="gpLowhzzbO66sr8ErtTd"
              gen3Id="lkA8PPZkEonsBWMcnsND"
            />

            <div className="bg-slate-200">
              <div className="flex flex-row justify-center">
                <div className="flex flex-row justify-start text-2xl w-96">
                  <div className="flex flex-row justify-start items-center flex-1">
                    <div className="flex flex-row justify-startr items-center flex-1">
                      <h2 className="ml-12 pr-12">Rank</h2>
                      <h2>Player</h2>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-end p-8 items-center text-2xl flex-1">
                  <div>
                    <h2>Scores</h2>
                  </div>
                </div>
              </div>
              {leaderBoardUsers
                ? leaderBoardUsers?.map((user, index) => {
                    return (
                      <div
                        className=" flex flex-row rounded border-b border-black text-xl 2xl:text-2xl text-center items-center bg-white"
                        key={index}
                      >
                        <div className="flex flex-row p-8 items-center flex-shrink-0 w-96">
                          <div className="mx-1 p-8">
                            <p>
                              {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                            </p>
                          </div>
                          <div className="mx-1 p-5">
                            <p>{user.username}</p>
                          </div>
                        </div>

                        <div className="p-8 border-l border-black items-center flex-1">
                          <div className="mx-1 p-5">
                            {" "}
                            <p>
                              {user.score < 10 ? `0${user.score}` : user.score}
                            </p>
                          </div>
                        </div>

                        <div className="p-8 flex-1">
                          <p className="mx-3">
                            Time:{" "}
                            {user.time != null && user.completeGame
                              ? user.time
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    )
                  })
                : "No Leaderboard data!"}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeaderBoard
