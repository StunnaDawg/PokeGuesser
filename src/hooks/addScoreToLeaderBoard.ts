import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase"

const addToScoreLeaderboard = async (
  userName: string,
  userId: string,
  gameMode: string,
  gameScore: number,
  boardId: string,
  gameTime: number,
  completeGame: boolean
) => {
  const leaderBoardCollection = collection(db, "leaderboards", boardId, "users")

  try {
    await addDoc(leaderBoardCollection, {
      mode: gameMode,
      score: gameScore,
      time: gameTime,
      username: userName,
      userid: userId,
      completeGame: completeGame,
    })
  } catch (err) {
    console.error(err)
  }
}

export default addToScoreLeaderboard
