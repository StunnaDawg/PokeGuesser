import React from "react"
import { useUserScore } from "../context"

const UserScore: React.FC = () => {
  const { userScore } = useUserScore()
  return <h1>Score: {userScore}</h1>
}

export default UserScore
