import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom"
import { useUserAuth } from "../context"
import { FIREBASE_AUTH } from "../../firebase"
import { useEffect, useState } from "react"
import useResetGame from "../hooks/resetGame"
import pPic from "../public/regular/pikachu-alola-cap.png"
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
      <div className="flex flex-row justify-center items-center text-xl xl:text-3xl bg-slate-300">
        <div>
          <div>
            {isSignedIn ? (
              <>
                <div className="flex flex-row">
                  <div className="m-3">
                    <button onClick={() => navigate("profile-updates")}>
                      <div className="flex flex-row">
                        <h1 className="font-pokemon-solid">
                          Welcome {displayName}
                        </h1>
                        <img src={pPic} />
                      </div>
                    </button>
                  </div>
                  <div className="my-3 mx-1">
                    <button
                      className="font-pokemon-solid"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link className="m-3 font-pokemon-solid" to="/signup">
                  Create New Account
                </Link>
                <Link className="m-1 font-pokemon-solid " to="/login">
                  Login
                </Link>
              </>
            )}
            <div className="flex flex-row justify-center">
              <button
                className="font-pokemon-solid underline"
                onClick={handleResetGame}
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isLoading ? "loading" : ""} bg-slate-400 h-max-screen`}
      >
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
