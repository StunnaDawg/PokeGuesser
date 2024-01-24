export type LeaderBoardType = {
  mode: GameMode
  users: User[]
}

export type UserLeaderBoard = {
  username: string
  userId: string
  score: number
  mode: string
}
