import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom"
import { useUserAuth } from "../context"
import { FIREBASE_AUTH } from "../../firebase"
import { useEffect } from "react"
import useResetGame from "../hooks/resetGame"
import pPic from "../public/regular/pikachu-alola-cap.png"
import { Footer } from "../componentLibrary"

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
      <div className="flex flex-col justify-center items-center text-xl xl:text-3xl bg-slate-300 text-center">
        <div>
          <div>
            {isSignedIn ? (
              <>
                <div>
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
                <div className="flex flex-col items-center">
                  <div>
                    <button onClick={() => navigate("profile-updates")}>
                      <div className="flex flex-row">
                        <Link
                          className="m-3 font-pokemon-solid underline"
                          to="/main-menu"
                        >
                          Click here to play as a Guest!
                        </Link>
                      </div>
                    </button>
                  </div>
                  <div className="my-3 mx-1">
                    <Link className="font-pokemon-solid" to="/create-account">
                      Create An Account or Login
                    </Link>
                  </div>
                </div>
              </>
            )}
            {isSignedIn ? (
              <div className="flex flex-row justify-center">
                <button
                  className="font-pokemon-solid underline"
                  onClick={handleResetGame}
                >
                  Main Menu
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div
        className={`${isLoading ? "loading" : ""} bg-slate-400 h-max-screen`}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
