import { useLeaderBoardId } from "../../context/leaderBoardContext"

const LeaderBoard = () => {
  const { boardId } = useLeaderBoardId()
  return (
    <>
      <div className="h-screen">
        <p>board Id: {boardId}</p>
      </div>
    </>
  )
}

export default LeaderBoard
