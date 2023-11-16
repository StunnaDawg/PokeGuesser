import { useEffect, useState } from "react"
import { FIREBASE_AUTH, db } from "../../firebase"
import { updateProfile } from "firebase/auth"
import { redirect } from "react-router-dom"

const CreateUsername = () => {
  const [username, setUsername] = useState<string>("")
const user = FIREBASE_AUTH.currentUser
const displayName = user?.displayName
  const handleUsername = async () => {
    try {
      if(user) {
      await updateProfile(user, { displayName: username }).catch(
        (err) => console.log(err)
      );
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { 
    if(displayName !== '' && displayName !== null) {
      redirect('/main-menu')
      }
  }, [])

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
