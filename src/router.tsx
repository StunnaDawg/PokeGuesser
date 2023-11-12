
import { createBrowserRouter, useRouteError, Navigate } from "react-router-dom"
import ClassicMode from "./pages/AllGensHardMode/StartPage"

import MainPage from "./pages/MainPage"
import SignUpPage from "./pages/SignUp"
import LoginPage from "./pages/Login"
import LeaderBoard from "./pages/LeaderBoard"
import GameOver from "./pages/GameOver"
import CreateUsername from "./pages/CreateUsername"
import RootLayout from "./pages/RootLayout"
import ChoosePracticeMode from "./pages/PracticeMode/StartPage"
import AllGensPracticeMode from "./pages/PracticeMode/categories/AllGens"


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
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {index: true, element: <Navigate to='/main-menu'/>},
          { path: "main-menu",
    element: <MainPage />},
    { path: "classic",
    element: <ClassicMode />},
    {
      path: "gameover",
      element: <GameOver />,
    }, {
    path: "signup",
    element: <SignUpPage />,
  },{
    path: "login",
    element: <LoginPage />,
  },{
    path: "leaderboard",
    element: <LeaderBoard />,
  },{
    path: "create-username",
    element: <CreateUsername />,
  },{
    path: "practice-mode",
    element: <ChoosePracticeMode />,
    children: [
      { path: "all-gens", element: <AllGensPracticeMode /> },
      // ... potentially other child routes
    ],
  },
        ],
      },
    ],
  },
])
