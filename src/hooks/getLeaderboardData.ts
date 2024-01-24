import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Dispatch, SetStateAction } from "react"
import { LeaderBoardType, UserLeaderBoard } from "../@types/firebase"

const getLeaderboardUsersData = async (
  id: string,
  setLeaderBoardData: Dispatch<SetStateAction<UserLeaderBoard[]>>
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
          userId: doc.data().userid,
          score: doc.data().score,
          mode: doc.data().mode,
        } as UserLeaderBoard)
    )
    console.log(users)
    setLeaderBoardData(users)
  } catch (err) {
    console.error(err)
  }
}

export default getLeaderboardUsersData
