import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom"
import { useUserAuth } from "../context"
import { FIREBASE_AUTH } from "../../firebase"
import { useEffect, useState } from "react"
import useResetGame from "../hooks/resetGame"
import Footer from "../componentLibrary/Footer"

const RootLayout = () => {
  const { state } = useNavigation()
  const isLoading = state === "loading"
  const { isSignedIn } = useUserAuth()
  const navigate = useNavigate()
  const resetGame = useResetGame()
  const displayName = FIREBASE_AUTH.currentUser?.displayName

  const handleSignOut = () => {
    try {
      FIREBASE_AUTH.signOut()
    } catch (error) {
      console.error(error)
    }
  }

  const handleResetGame = () => {
    resetGame("main-menu", [1, 2, 3])
  }

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/login")
    }
  }, [isSignedIn, navigate])

  return (
    <>
      <div className="flex flex-row justify-between">
        <button onClick={handleResetGame}>Main Menu</button>

        <div>
          {isSignedIn ? (
            <>
              <h1>Welcome {displayName}</h1>
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
