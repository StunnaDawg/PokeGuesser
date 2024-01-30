import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Dispatch, SetStateAction } from "react"
import { UserLeaderBoard } from "../@types/firebase"

const getLeaderboardUsersData = async (
  id: string,
  setLeaderBoardData: Dispatch<SetStateAction<UserLeaderBoard[]>>,
  setLeaderBoardTitle: Dispatch<SetStateAction<string>>
) => {
  const leaderBoardCollection = doc(db, "leaderboards", id)
  const leaderBoardUsers = collection(leaderBoardCollection, "users")

  try {
    const leaderBoardTitle = await getDoc(leaderBoardCollection)
    const leaderBoardSnap = await getDocs(leaderBoardUsers)

    const title = {
      ...leaderBoardTitle.data(),
    }

    const users = leaderBoardSnap.docs.slice(0, 100).map(
      (doc) =>
        ({
          ...doc.data,
          username: doc.data().username,
          userId: doc.data().userid,
          score: doc.data().score,
          mode: doc.data().mode,
          time: doc.data().time,
          completeGame: doc.data().completeGame,
        } as UserLeaderBoard)
    )
    const sortedNumbers = users.sort((a, b) => b.score - a.score)
    setLeaderBoardData(sortedNumbers)
    setLeaderBoardTitle(title.title)
  } catch (err) {
    console.error(err)
  }
}

export default getLeaderboardUsersData
