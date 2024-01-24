import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"

type ScoreData = {
  id: string
}

const getLeaderboardData = async ({ id }: ScoreData) => {
  const leaderBoardCollection = doc(db, "leaderboards", id)

  try {
    const leaderBoardSnap = await getDoc(leaderBoardCollection)

    if (leaderBoardSnap.exists()) {
      const data = { ...leaderBoardSnap.data() }
      const leaderBoardScores = {
        data,
      }
      leaderBoardScores
    }
  } catch (err) {}
}

export default getLeaderboardData
