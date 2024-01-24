import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Dispatch, SetStateAction } from "react"
import { LeaderBoardType, User, UserScores } from "../@types/firebase"

const getLeaderboardUsersData = async (
  id: string,
  setLeaderBoardData: Dispatch<SetStateAction<User[]>>
) => {
  const leaderBoardCollection = doc(db, "leaderboards", id)
  const leaderBoardUsers = collection(leaderBoardCollection, "users")

  try {
    const leaderBoardSnap = await getDocs(leaderBoardUsers)

    const users = leaderBoardSnap.docs.map(
      (doc) =>
        ({
          ...doc.data,
          username: doc.data().username,
          userId: doc.data().id,
          scores: doc.data().scores,
        } as User)
    )
    console.log(users)
    setLeaderBoardData(users)
  } catch (err) {
    console.error(err)
  }
}

export default getLeaderboardUsersData
