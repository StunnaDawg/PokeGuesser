import { useEffect, useState } from "react"
import { FIREBASE_AUTH, db } from "../../firebase"
import { addDoc, collection } from "firebase/firestore"

const CreateUsername = () => {
  const [username, setUsername] = useState<string>("")
const userNameCollectionRef = collection(db, "usernames")
  const handleUsername = async () => {
    try {
      await addDoc(userNameCollectionRef, {
        username: username,
        userId: FIREBASE_AUTH.currentUser?.uid,
      })
    } catch (error) {
      console.log(error)
    }
  }
  
//   useEffect(() => {
//     if (isSignedIn) {
//       navigate("/")
//     }
//   }, [isSignedIn, navigate])
  return (
    <>
      <h1>Create a Username</h1>
      <input
        placeholder="Username"
        value={username}
        onChange={(text) => setUsername(text.target.value)}
      />
        <div></div>
      <button onClick={handleUsername}>Create Username</button>
    </>
  )
}

export default CreateUsername
