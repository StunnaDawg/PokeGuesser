import { useEffect, useState } from "react"
import { useLeaderBoardId } from "../../context/leaderBoardContext"
import { UserLeaderBoard } from "../../@types/firebase"
import getLeaderboardUsersData from "../../hooks/getLeaderboardData"

const LeaderBoard = () => {
  const { boardId } = useLeaderBoardId()
  const [leaderBoardUsers, setLeaderBoardUsers] = useState<UserLeaderBoard[]>(
    []
  )

  useEffect(() => {
    getLeaderboardUsersData(boardId, setLeaderBoardUsers)
  }, [])

  return (
    <>
      <div className="h-screen">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl 2xl:text-6xl">
              {" "}
              Classic Mode Leaderboards
            </h1>
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
