// import { collection, getDocs } from "firebase/firestore"
// import { db } from "../../firebase"
// import { Dispatch, SetStateAction } from "react"

// const getUserScores = async (
//   userId: string,
//   boardId: string,
//   setUserScores: Dispatch<SetStateAction<UserScore[]>>
// ) => {
//   const userScoresCollection = collection(
//     db,
//     "leaderboards",
//     boardId,
//     "users",
//     userId,
//     "scores"
//   )
//   try {
//     const userScoresData = await getDocs(userScoresCollection)

//     const userScoresArray = userScoresData.docs.map((doc) => ({
//       ...doc.data(),
//       score: doc.data().score,
//       mode: doc.data().mode,
//     }))

//     setUserScores(userScoresArray)
//   } catch (err) {
//     console.error(err)
//   }
// }

// export default getUserScores
