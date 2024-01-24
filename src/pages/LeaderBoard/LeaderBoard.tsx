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
        <p>board Id: {boardId}</p>
        {leaderBoardUsers
          ? leaderBoardUsers?.map((user, index) => {
              return (
                <div key={index}>
                  <p>Hey Boss {user.username}</p>
                  <p>{user.score}</p>
                  <p>{user.mode}</p>
                  <p>{user.userId}</p>
                </div>
              )
            })
          : "No Leaderboard data!"}
      </div>
    </>
  )
}

export default LeaderBoard
