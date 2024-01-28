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
      <div className="min-h-screen">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl 2xl:text-6xl">
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

            {leaderBoardUsers
              ? leaderBoardUsers?.map((user, index) => {
                  return (
                    <div
                      className=" flex flex-row border-b border-black text-2xl 2xl:text-4xl text-center items-center"
                      key={index}
                    >
                      <div className="flex flex-row p-8 items-center flex-1">
                        <p className="mx-3">{index + 1}.</p>
                        <p className="mx-3">{user.username}</p>
                      </div>

                      <div className="p-8 border-l border-black items-center flex-1">
                        <p className="mx-3">Score: {user.score}</p>
                      </div>

                      {/* <div className="p-8 flex-1">
                        <p className="mx-3">
                          Time: {user.time != null ? user.time : "N/A"}
                        </p>
                      </div> */}
                    </div>
                  )
                })
              : "No Leaderboard data!"}
          </div>
        </div>
      </div>
    </>
  )
}

export default LeaderBoard
