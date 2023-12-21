import { useEffect, useState } from "react"
import { FIREBASE_AUTH, db } from "../../firebase"
import { updateProfile } from "firebase/auth"
import { redirect, useNavigate } from "react-router-dom"

const ProfileChanges = () => {
  const [username, setUsername] = useState<string>("")
  const user = FIREBASE_AUTH.currentUser
  const displayName = user?.displayName
  const navigate = useNavigate()
  const handleUsername = async () => {
    try {
      if (user) {
        await updateProfile(user, { displayName: username }).catch((err) =>
          console.log(err)
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  // const handleDisplayName = () => {
  //   if(displayName !== '' && displayName !== null) {
  //     navigate('/main-menu')
  //     }
  // }

  return (
    <>
      <h1>Change Username</h1>
      <input
        placeholder="Username"
        value={username}
        onChange={(text) => setUsername(text.target.value)}
      />
      <button
        onClick={async () => {
          await handleUsername()
          navigate("/main-menu")
        }}
      >
        Confirm
      </button>
    </>
  )
}

export default ProfileChanges
