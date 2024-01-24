import { useEffect, useState } from "react"
import { useLeaderBoardId } from "../../context/leaderBoardContext"
import { LeaderBoardType, User, UserScores } from "../../@types/firebase"
import getLeaderboardUsersData from "../../hooks/getLeaderboardData"
import getUserScores from "../../hooks/getUserScores"

const LeaderBoard = () => {
  const { boardId } = useLeaderBoardId()
  const [leaderBoardUsers, setLeaderBoardUsers] = useState<User[]>([])

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
                  {user.scores?.map((score) => (
                    <div>
                      <div>{score.score}</div>
                      <div>{score.mode}</div>
                    </div>
                  ))}
                </div>
              )
            })
          : "No Leaderboard data!"}
      </div>
    </>
  )
}

export default LeaderBoard
