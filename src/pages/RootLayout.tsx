import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom"
import { useUserAuth } from "../context"
import { FIREBASE_AUTH } from "../../firebase"
import { useEffect } from "react"

const RootLayout = () => {
  const { state } = useNavigation()
  const isLoading = state === "loading"
  const { isSignedIn, setIsSignedIn } = useUserAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    try {
      FIREBASE_AUTH.signOut()
    } catch (error) {
      console.error(error)
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
      </div>{" "}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
