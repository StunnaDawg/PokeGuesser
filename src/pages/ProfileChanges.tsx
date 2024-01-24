import { useState } from "react"
import { FIREBASE_AUTH } from "../../firebase"
import { updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const ProfileChanges = () => {
  const [username, setUsername] = useState<string>("")
  const user = FIREBASE_AUTH.currentUser
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

  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center h-screen text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-pokemon-solid">
        <h1>Change Username</h1>
        <div className="flex flex-col items-center m-5">
          <input
            className="border-2 border-black my-1 font-pokemon-solid p-1"
            placeholder="Username"
            value={username}
            onChange={(text) => setUsername(text.target.value)}
          />
        </div>
        <button
          onClick={async () => {
            await handleUsername()
            navigate("/main-menu")
          }}
        >
          Confirm
        </button>
      </div>
    </>
  )
}

export default ProfileChanges
