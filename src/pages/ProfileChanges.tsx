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
      <div className="flex-1 flex flex-col items-center justify-center h-screen text-xl font-pokemon-solid">
        <h1>Change Username</h1>
        <div className="flex flex-col items-center">
          <input
            className="border-2 border-black my-1 font-pokemon-solid"
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
        </div>
      </div>
    </>
  )
}

export default ProfileChanges
