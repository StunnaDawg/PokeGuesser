import { useEffect } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context"
import { FIREBASE_AUTH } from "../../firebase"
const MainPage = () => {
  const { isSignedIn, setIsSignedIn } = useUserAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    try {
      FIREBASE_AUTH.signOut()
    } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/login")
    }
  }, [isSignedIn, navigate])
  return (
    <>
      <div className="flex flex-row-reverse">
        <div>
          {isSignedIn ? (
            <>
            <h1>Welcome {FIREBASE_AUTH.currentUser?.email}</h1>
            <button onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <>
              <Link className="m-3" to="/signup">
                Create New Account
              </Link>
              <Link className="m-1" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="underline font-bold">Welcome to PokeGuesser!</h1>
        <Link to="/classic" className="my-2">
          Classic Mode
        </Link>
        <button className="my-2">Practice Mode</button>
        <Link to="/leaderboard" className="my-2">
          LeaderBoard
        </Link>
        <Outlet />
      </div>
    </>
  )
}

export default MainPage
