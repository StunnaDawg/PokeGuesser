export type LeaderBoardType = {
  mode: GameMode
  users: User[]
}

export type User = {
  username: string
  userId: string
  scores: UserScore[]
}

export type UserScores = {
  score: number
  mode: GameMode
}

export type GameMode = {
  mode:
    | "classic-all"
    | "classic-1"
    | "classic-2"
    | "classic-3"
    | "classic-4"
    | "classic-5"
    | "classic-6"
    | "classic-7"
    | "classic-8"
    | "classic-9"
}
