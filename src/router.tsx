
import { createBrowserRouter, useRouteError } from "react-router-dom"
import ClassicMode from "./pages/AllGensHardMode/StartPage"

import MainPage from "./pages/MainPage"
import SignUpPage from "./pages/SignUp"
import LoginPage from "./pages/Login"
import LeaderBoard from "./pages/LeaderBoard"
import GameOver from "./pages/GameOver"
import CreateUsername from "./pages/CreateUsername"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "classic",
    element: <ClassicMode />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard />,
  },
  {
    path: "gameover",
    element: <GameOver />,
  },
  {
    path: "create-username",
    element: <CreateUsername />,
  },
])

function ErrorPage() {
  const error = useRouteError()

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {/* {import.meta.env.MODE !== "production" && (
          <>
            <pre>{error.message}</pre>
            <pre>{error.stack}</pre>
          </>
        )} */}
    </>
  )
}
